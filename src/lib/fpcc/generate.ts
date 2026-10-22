import "server-only";

import { findAirline, resolveCode, allowedInstallments } from "./airlines";
import { brl, money, pad2, parcelaFmt, parseMoney } from "./money";
import {
  BRAND_NAMES,
  type Brand,
  type CalcStep,
  type CommandOption,
  type GenerateInput,
  type GenerateResult,
} from "./types";

const BRANDS: Brand[] = ["AX", "VI", "CA"];

/** Limites de passageiros de mesmo valor numa emissao (um PNR comporta ate 9). */
const MIN_PAX = 1;
const MAX_PAX = 9;

/**
 * O valor da parcela, em centavos inteiros.
 *
 * A regra é mista de propósito, e cada ramo tem um motivo:
 *
 *   - **Divisão exata** (4046,60 / 10): usa o valor, sem tocar.
 *   - **Uma única casa decimal sobrando** (3710,71 / 10 = 371,07·1):
 *     arredondamento comercial — 1 a 4 desce, 5 a 9 sobe. É o caso em que dá
 *     para ver exatamente o quanto sobrou, e cobrar um centavo a mais por
 *     0,001 era o que incomodava na regra antiga.
 *   - **Duas casas ou mais, incluindo as dízimas** (4046,60 / 6 = 674,43·33):
 *     sobe. Aqui não dá para representar o valor exato em centavos, e subir é
 *     o que garante que a soma das parcelas cubra a tarifa. É também o que
 *     preserva a emissão validada no fp_cc.md, que sai com 674,44.
 *
 * Tudo em inteiros: `resto * 10 % parcelas === 0` responde "termina em uma
 * casa?" sem nenhum float entrar na conta.
 */
function valorParcela(fare: number, installments: number): number {
  const inteiro = Math.floor(fare / installments);
  const resto = fare % installments;
  if (resto === 0) return inteiro;

  if ((resto * 10) % installments === 0) {
    const digito = (resto * 10) / installments; // 1..9
    return digito >= 5 ? inteiro + 1 : inteiro;
  }

  return inteiro + 1;
}

function isBrand(v: string): v is Brand {
  return (BRANDS as string[]).includes(v);
}

/**
 * Monta a entrada FP CC. Funcao pura: nao toca em banco, nao cobra credito.
 * Quem cobra e a rota — e so depois desta funcao devolver ok:true, para que
 * dado incompleto nunca consuma credito do agente.
 *
 * Formulas (fp_cc.md):
 *   valor_parcela          = ver valorParcela() abaixo    <- regra mista
 *   valor_primeira_parcela = valor_parcela + total_taxas
 *   saldo_restante         = tarifa - valor_parcela
 */
export function generateFpCc(input: GenerateInput): GenerateResult {
  const errors: string[] = [];

  const airline = findAirline(input.airlineId);
  if (!airline) return { ok: false, errors: ["Companhia aérea não encontrada na base."] };

  const brand = String(input.brand ?? "");
  if (!isBrand(brand)) {
    errors.push(
      "Bandeira não mapeada. A base cobre apenas AX (Amex), VI (Visa) e CA (Mastercard) — " +
        "Elo, Diners e Hipercard ainda não têm código de bandeira documentado.",
    );
  }

  if (airline.noInstallments) {
    errors.push(`${airline.name} não parcela nesta base. ${airline.note}`.trim());
  }

  const installments = Number(input.installments);
  const allowed = allowedInstallments(airline);
  if (!airline.noInstallments && !allowed.includes(installments)) {
    errors.push(
      `Número de parcelas inválido para ${airline.name}. Disponível: ` +
        allowed.map((n) => pad2(n) + "x").join(", ") + ".",
    );
  }

  // Ausente conta como 1 (individual) — assim chamadas diretas sem o campo
  // seguem valendo. A obrigatoriedade mora no cliente (pendencia) e na rota, que
  // manda 0 quando o campo nao veio, caindo na recusa abaixo sem cobrar.
  const passengers = input.passengers == null ? 1 : Number(input.passengers);
  if (!Number.isInteger(passengers) || passengers < MIN_PAX || passengers > MAX_PAX) {
    errors.push(
      `Número de passageiros inválido. Informe de ${MIN_PAX} a ${MAX_PAX} passageiros de mesmo valor.`,
    );
  }

  const fare = parseMoney(input.fare);
  if (fare === null || fare <= 0) {
    errors.push("Informe a tarifa (sem taxas), como aparece no fare calc.");
  }

  // Um valor so: o emissor soma as taxas na propria tela do fare calc.
  // Campo por campo, com bilhete de oito taxas, e onde o erro entra.
  const rawTaxes = String(input.taxes ?? "").trim();
  let taxes = 0;
  if (rawTaxes) {
    const cents = parseMoney(rawTaxes);
    if (cents === null) {
      errors.push("Total das taxas inválido. Informe a soma de todas as taxas do fare calc.");
    } else {
      taxes = cents;
    }
  }

  let code: string | null = null;
  if (!airline.noInstallments && isBrand(brand) && allowed.includes(installments)) {
    const resolved = resolveCode(airline, installments, brand);
    if ("error" in resolved) errors.push(resolved.error);
    else code = resolved.code;
  }

  if (errors.length || fare === null || code === null || !isBrand(brand)) {
    return { ok: false, errors: errors.length ? errors : ["Não foi possível montar o comando."] };
  }

  // --- as tres contas (sempre individuais, por passageiro) ---
  const parcela = valorParcela(fare, installments);
  const primeira = parcela + taxes;
  const saldo = fare - parcela;

  // O comando so difere entre as opcoes no campo da parcela (o "valor dois", sem
  // pontuacao, logo apos o codigo). Primeira parcela e saldo seguem individuais.
  const prefixo =
    "FPCC" + brand + "NUMERODOCARTAO/MMAA/" + brl(primeira) +
    "+MSPL" + pad2(installments) + "X" + code + "X";
  const sufixo = "/" + brl(saldo);

  const comandoIndividual = prefixo + parcelaFmt(parcela) + sufixo;
  const comandoUnica = prefixo + parcelaFmt(parcela * passengers) + sufixo;

  // `command` e o primario — o que a rota registra e o que o copiar usa com 1
  // passageiro. Com 2+, o primario e a entrada unica (Opcao B), o incremento.
  let command: string;
  let options: CommandOption[];
  if (passengers === 1) {
    command = comandoIndividual;
    options = [{ key: "unica", titulo: "Entrada GDS", nota: "", commands: [comandoIndividual] }];
  } else {
    const porPassageiro = Array.from(
      { length: passengers },
      (_, i) => comandoIndividual + "/P" + (i + 1),
    );
    command = comandoUnica;
    options = [
      {
        key: "porPassageiro",
        titulo: `Opção A · uma entrada por passageiro (${passengers}×)`,
        nota:
          "valor único por passageiro — é preciso lançar uma entrada para cada um " +
          "(/P1, /P2, …); todos os valores ficam individuais.",
        commands: porPassageiro,
      },
      {
        key: "unica",
        titulo: "Opção B · entrada única (parcela multiplicada)",
        nota:
          `uma só entrada para os ${passengers}: a parcela já está multiplicada por ` +
          `${passengers}; a 1ª parcela e o saldo seguem individuais.`,
        commands: [comandoUnica],
      },
    ];
  }

  const steps: CalcStep[] = [
    {
      label: "valor_parcela",
      formula: `${money(fare)} / ${installments}`,
      result: `BRL ${money(parcela)}`,
    },
    {
      label: "primeira_parcela",
      formula: `${money(parcela)} + ${money(taxes)}`,
      result: `BRL ${money(primeira)}`,
    },
    {
      label: "saldo_restante",
      formula: `${money(fare)} - ${money(parcela)}`,
      result: `BRL ${money(saldo)}`,
    },
  ];
  if (passengers >= 2) {
    // O passo que torna a multiplicacao visivel: sem ele, o agente nao veria de
    // onde saiu o valor dobrado no campo da parcela da Opcao B.
    steps.push({
      label: "parcela_total",
      formula: `${money(parcela)} × ${passengers}  (Opção B)`,
      result: `BRL ${money(parcela * passengers)}`,
    });
  }

  const warnings: string[] = [];
  if (passengers >= 2) {
    warnings.push(
      `a Opção B só vale se os ${passengers} passageiros tiverem exatamente o mesmo valor — ` +
        "se os valores diferem, emita separado (Opção A) ou um comando por valor",
    );
  }
  if (!airline.cards.includes(brand)) {
    warnings.push(
      `a base indica que ${airline.name} não aceita ${BRAND_NAMES[brand]} — confirme antes de emitir`,
    );
  }
  const min = airline.minInstallment;
  if (min && min !== "—" && min !== "nenhuma" && min !== "nenhum") {
    warnings.push(`parcela mínima da companhia: ${min} (parcela calculada: BRL ${money(parcela)})`);
  }
  if (airline.confirm) {
    warnings.push(`código ${code} está marcado para confirmação com a companhia`);
  }
  if (airline.id === "QR") {
    warnings.push("a 1ª parcela precisa ser maior ou igual à taxa de embarque");
  }

  return {
    ok: true,
    command,
    plan: code,
    airline: `${airline.iata} ${airline.name}`,
    brandName: `${brand} ${BRAND_NAMES[brand]}`,
    installments,
    passengers,
    fare: money(fare),
    taxes: money(taxes),
    fareCents: fare,
    taxesCents: taxes,
    steps,
    options,
    warnings,
  };
}
