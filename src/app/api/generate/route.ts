import { auth, currentUser } from "@clerk/nextjs/server";
import { ensureAccount, getEntitlement, recordGeneration } from "@/lib/account";
import { generateFpCc } from "@/lib/fpcc/generate";
import type { GenerateInput } from "@/lib/fpcc/types";
import { SEM_TENANT, tenantAtual } from "@/lib/tenant";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * O calculo roda aqui, no servidor, e nao no navegador — os codigos de
 * financiamento sao o produto. Se a tabela fosse para o cliente, bastava abrir
 * o DevTools para levar a base inteira embora.
 *
 * White-label: sem credito e sem teste anonimo. A ordem e
 * cliente -> conta do cliente -> acesso pela equipe -> calcula. As tres
 * portas ficam aqui, e nao so na pagina: e esta rota que devolve o codigo de
 * financiamento, entao e ela que precisa recusar quem nao foi convidado.
 */
export async function POST(req: Request) {
  const tenant = await tenantAtual();
  if (!tenant) return SEM_TENANT();

  const { userId } = await auth();
  if (!userId) {
    return Response.json({ ok: false, errors: ["Entre com a sua conta para gerar o comando."] }, { status: 401 });
  }

  let body: GenerateInput;
  try {
    body = (await req.json()) as GenerateInput;
  } catch {
    return Response.json({ ok: false, errors: ["Requisição inválida."] }, { status: 400 });
  }

  const user = await currentUser();
  const conta = await ensureAccount(tenant.id, userId, user?.primaryEmailAddress?.emailAddress ?? null, null);
  if (!conta) {
    return Response.json(
      { ok: false, errors: ["Esta conta pertence a outra empresa."], reason: "outro_cliente" },
      { status: 403 },
    );
  }

  const ent = await getEntitlement(tenant.id, userId);
  if (!ent.unlimited) {
    return Response.json(
      {
        ok: false,
        errors: ["Sua conta ainda não tem acesso. Peça o convite ao gestor da sua equipe."],
        reason: "sem_acesso",
      },
      { status: 403 },
    );
  }

  const entrada = {
    airlineId: String(body.airlineId ?? ""),
    brand: String(body.brand ?? ""),
    installments: Number(body.installments ?? 0),
    fare: String(body.fare ?? ""),
    taxes: String(body.taxes ?? ""),
    // 0 quando ausente: generateFpCc recusa sem cobrar, o mesmo portão do
    // campo obrigatório no cliente.
    passengers: Number(body.passengers ?? 0),
  };

  const result = generateFpCc(entrada);
  if (!result.ok) return Response.json(result, { status: 422 });

  await recordGeneration({
    tenantId: tenant.id,
    userId,
    guestId: null,
    airlineId: entrada.airlineId,
    brand: entrada.brand,
    installments: result.installments,
    fareCents: result.fareCents,
    taxesCents: result.taxesCents,
    command: result.command,
    charged: false,
  });

  return Response.json(result);
}
