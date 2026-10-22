import { auth, currentUser } from "@clerk/nextjs/server";
import { ensureAccount, listGenerations } from "@/lib/account";
import { generateFpCc } from "@/lib/fpcc/generate";
import { money } from "@/lib/fpcc/money";
import type { GenerateOk } from "@/lib/fpcc/types";
import { SEM_TENANT, tenantAtual } from "@/lib/tenant";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Histórico de emissões desta pessoa, já no formato que o resumo da calculadora
 * sabe desenhar (`GenerateOk`) — reabrir uma emissão antiga vira `setResultado`
 * no cliente, sem UI nova.
 *
 * Nenhum valor financeiro é lido do banco: cada resumo é **reconstruído** aqui
 * com `generateFpCc` — a mesma função pura da emissão — a partir de companhia,
 * bandeira, parcelas, tarifa e taxas gravados. É o que mantém o cálculo (e o
 * código de financiamento) só no servidor: `generate.ts` importa `airlines.ts`,
 * que é `server-only`, e esta rota roda em Node.
 *
 * `money(cents)` ("405017" → "4050.17") faz o caminho de volta exato de
 * `parseMoney`, então o resumo reconstruído é idêntico ao da emissão original.
 *
 * `passengers` ainda não é gravado, então reconstruímos como individual (1) —
 * o que corresponde a todas as emissões de hoje. Guardar o número de
 * passageiros (para a forma multiplicada aparecer no histórico) é um passo
 * futuro, dependente de confirmar a coluna `passengers` no banco de produção.
 */
export async function GET() {
  const tenant = await tenantAtual();
  if (!tenant) return SEM_TENANT();

  const { userId } = await auth();
  if (!userId) return Response.json({ items: [] });

  const user = await currentUser();
  const conta = await ensureAccount(
    tenant.id,
    userId,
    user?.primaryEmailAddress?.emailAddress ?? null,
    null,
  );
  // Conta de outra agência (ou sem conta): sem histórico para mostrar aqui.
  if (!conta) return Response.json({ items: [] });

  const rows = await listGenerations(tenant.id, userId, 50);

  const items = rows.flatMap((row) => {
    const result = generateFpCc({
      airlineId: row.airlineId,
      brand: row.brand,
      installments: row.installments,
      fare: money(row.fareCents),
      taxes: money(row.taxesCents),
      passengers: 1,
    });
    // Emissão cuja companhia saiu da base, ou cujo código mudou, não
    // reconstrói: fica de fora da lista em vez de derrubá-la.
    if (!result.ok) return [];
    return [{ id: row.id, createdAt: row.createdAt, result: result as GenerateOk }];
  });

  return Response.json({ items });
}
