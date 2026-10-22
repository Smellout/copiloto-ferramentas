import "server-only";

import type { Brand, PublicAirline } from "./types";
import { pad2 } from "./money";

/**
 * Base de companhias — fonte: referencia interna da agencia (fp_cc.md).
 *
 * Este arquivo NUNCA pode ser importado por um componente de cliente:
 * os codigos de financiamento sao o produto. Eles so saem daqui dentro de um
 * comando ja cobrado, em `generate.ts`.
 *
 * Regra herdada da skill: se a base nao tem o codigo, nao inventamos um
 * "parecido" — a companhia fica marcada como nao mapeada e o comando nao sai.
 */

type CodeRule =
  /** codigo fixo, igual para qualquer numero de parcelas */
  | { k: "fixed"; v: string }
  /** prefixo + parcelas em 2 digitos: AR02..AR06, JJ02..JJ12, AT02..AT10 */
  | { k: "nn"; p: string }
  /** prefixo + parcelas duplicado: BA0202..BA1010 */
  | { k: "nnnn"; p: string }
  /** codigo por bandeira do cartao: TK05VI, AMMAST */
  | { k: "brand"; m: Partial<Record<Brand, string>> }
  /** codigo por numero de parcelas, lista fechada: EK0003/EK0005/EK0009 */
  | { k: "map"; m: Record<number, string> };

export type Airline = {
  id: string;
  iata: string;
  name: string;
  /** teto de parcelas (2..max). Ausente quando `only` ou `noInstallments` */
  max?: number;
  /** lista fechada de parcelas permitidas */
  only?: number[];
  cards: Brand[];
  code: CodeRule | null;
  minInstallment: string;
  note: string;
  /** companhia nao parcela nesta base */
  noInstallments?: boolean;
  /** codigo existe mas precisa ser confirmado com a companhia */
  confirm?: boolean;
};

const ALL_CARDS: Brand[] = ["AX", "VI", "CA"];

export const AIRLINES: Airline[] = [
  { id: "AR", iata: "AR", name: "Aerolíneas Argentinas", max: 6, cards: ALL_CARDS, code: { k: "nn", p: "AR" }, minInstallment: "USD 30,00", note: "Duas formas de pagamento apenas no Sabre E-Ticket." },
  { id: "AM", iata: "AM", name: "Aeroméxico", max: 12, cards: ALL_CARDS, code: { k: "brand", m: { AX: "AMAMEX", CA: "AMMAST", VI: "AMVISA" } }, minInstallment: "R$ 80,00", note: "O código muda por bandeira. Diners tem código próprio, ainda fora desta base. Não vale para passes internos." },
  { id: "AC", iata: "AC", name: "Air Canada", max: 6, cards: ALL_CARDS, code: { k: "fixed", v: "AC14" }, minInstallment: "USD 30,00", note: "Não parcela diferença de tarifa." },
  { id: "CA", iata: "CA", name: "Air China", max: 5, cards: ALL_CARDS, code: { k: "fixed", v: "CA05" }, minInstallment: "—", note: "Somente Brasil↔Europa/Ásia. Não vale para corporativo." },
  { id: "UX", iata: "UX", name: "Air Europa", max: 10, cards: ALL_CARDS, code: { k: "fixed", v: "UX10" }, minInstallment: "—", note: "Não parcela se a taxa for maior que a tarifa. Taxas na 1ª parcela." },
  { id: "AF", iata: "AF", name: "Air France", max: 4, cards: ALL_CARDS, code: { k: "fixed", v: "AF04" }, minInstallment: "nenhuma", note: "Acréscimo de 2,45% no cartão desde 15/jun/2021." },
  { id: "NZ", iata: "NZ", name: "Air New Zealand", max: 6, cards: ALL_CARDS, code: { k: "fixed", v: "NZ1" }, minInstallment: "USD 900,00", note: "Taxas na 1ª parcela." },
  { id: "AA", iata: "AA", name: "American Airlines", max: 6, cards: ALL_CARDS, code: { k: "fixed", v: "AA05" }, minInstallment: "nenhuma", note: "Somente cartão brasileiro de pessoa física." },
  { id: "NH", iata: "NH", name: "ANA", max: 5, cards: ALL_CARDS, code: { k: "fixed", v: "NH200" }, minInstallment: "USD 50,00", note: "" },
  { id: "AV", iata: "AV", name: "Avianca Internacional", max: 10, cards: ALL_CARDS, code: { k: "fixed", v: "AV10" }, minInstallment: "R$ 100,00", note: "" },
  { id: "AD", iata: "AD", name: "Azul", max: 12, cards: ALL_CARDS, code: null, minInstallment: "R$ 12,00 a R$ 120,00", note: "Código de financiamento não mapeado na base. Nacional 6x sem juros, internacional 10x; até 12x com juros (2% a.m.). Taxa de embarque na 1ª parcela." },
  { id: "OB", iata: "OB", name: "Boliviana de Aviación", max: 6, cards: ["VI", "CA"], code: { k: "fixed", v: "OB0930" }, confirm: true, minInstallment: "R$ 150,00", note: "A base registra o código com um espaço no meio. Confirme a grafia antes de emitir." },
  { id: "BA", iata: "BA", name: "British Airways", max: 10, cards: ALL_CARDS, code: { k: "nnnn", p: "BA" }, minInstallment: "—", note: "Cartão emitido no Brasil: até 10x. Fora do Brasil: até 5x." },
  { id: "CX", iata: "CX", name: "Cathay Pacific", cards: ALL_CARDS, code: null, noInstallments: true, minInstallment: "—", note: "Não parcela — apenas faturado." },
  { id: "DE", iata: "DE", name: "Condor", max: 6, cards: ["VI", "CA"], code: { k: "fixed", v: "DE1" }, minInstallment: "R$ 200,00", note: "" },
  { id: "CM", iata: "CM", name: "Copa Airlines", max: 6, cards: ALL_CARDS, code: { k: "fixed", v: "CM6" }, minInstallment: "R$ 50,00", note: "Emissão mínima de USD 100." },
  { id: "DL", iata: "DL", name: "Delta Air Lines", max: 6, cards: ALL_CARDS, code: { k: "fixed", v: "DL0006" }, minInstallment: "USD 50,00", note: "Tarifa mínima de USD 300 por passageiro." },
  { id: "LY", iata: "LY", name: "El Al", max: 3, cards: ALL_CARDS, code: { k: "fixed", v: "LY03" }, minInstallment: "—", note: "Diners somente à vista." },
  { id: "EK", iata: "EK", name: "Emirates", only: [3, 5, 9], cards: ALL_CARDS, code: { k: "map", m: { 3: "EK0003", 5: "EK0005", 9: "EK0009" } }, confirm: true, minInstallment: "R$ 200,00", note: "A tabela de origem citava validade até 31/12/2023 — confirme com a companhia." },
  { id: "ET", iata: "ET", name: "Ethiopian Airlines", max: 6, cards: ALL_CARDS, code: { k: "fixed", v: "ET6" }, minInstallment: "R$ 200,00", note: "Elo apenas via GDS." },
  { id: "G3", iata: "G3", name: "GOL", max: 12, cards: ALL_CARDS, code: null, minInstallment: "R$ 100,00", note: "Código de financiamento não mapeado na base. 4x sem juros; 5 a 12x com juros de 1,99% a.m." },
  { id: "HR", iata: "HR", name: "Hahnair", cards: ALL_CARDS, code: null, noInstallments: true, minInstallment: "—", note: "Apenas 1x, com cartão emitido no Brasil. Pode gerar IOF." },
  { id: "IB", iata: "IB", name: "Iberia", max: 10, cards: ALL_CARDS, code: { k: "fixed", v: "IB0000" }, minInstallment: "nenhuma", note: "10x no geral; 5x em trechos BR/internos; NDC somente à vista." },
  { id: "AZ", iata: "AZ", name: "ITA Airways", max: 6, cards: ALL_CARDS, code: { k: "nn", p: "AZ" }, minInstallment: "R$ 100,00", note: "Somente cartão brasileiro de pessoa física." },
  { id: "JL", iata: "JL", name: "Japan Airlines", cards: ALL_CARDS, code: null, noInstallments: true, minInstallment: "—", note: "Somente à vista." },
  { id: "JA", iata: "JA", name: "JetSMART", max: 6, cards: ["VI", "CA"], code: { k: "fixed", v: "JA01" }, minInstallment: "—", note: "Apenas no GDS." },
  { id: "KL", iata: "KL", name: "KLM", max: 4, cards: ALL_CARDS, code: { k: "fixed", v: "KL04" }, minInstallment: "nenhuma", note: "Acréscimo de 2,45% no cartão (mesma regra da Air France)." },
  { id: "KE", iata: "KE", name: "Korean Air", cards: ALL_CARDS, code: null, noInstallments: true, minInstallment: "—", note: "1x apenas, em ponto a ponto online." },
  { id: "JJ", iata: "JJ", name: "LATAM", max: 12, cards: ALL_CARDS, code: { k: "nn", p: "JJ" }, minInstallment: "nenhuma", note: "2 a 4x sem juros. 5 a 12x com juros de 1,99% a.m." },
  { id: "JJ1T", iata: "JJ", name: "LATAM · Itaucard Fidelidade", max: 10, cards: ["VI", "CA"], code: { k: "fixed", v: "JJ1T" }, minInstallment: "nenhuma", note: "Exige cartão co-branded Itaucard Fidelidade LATAM PASS. Até 10x sem juros." },
  { id: "LH", iata: "LH", name: "Lufthansa", max: 5, cards: ALL_CARDS, code: { k: "fixed", v: "LH100" }, minInstallment: "USD 500,00", note: "GDS até 5x (NDC 10x). Taxa OPC de 1,40% a 2,55% (máx. EUR 25) no NDC." },
  { id: "M1", iata: "M1", name: "MAP Linhas Aéreas", max: 6, cards: ["VI", "CA"], code: null, minInstallment: "—", note: "Código de financiamento não mapeado na base." },
  { id: "DY", iata: "DY", name: "Norwegian", cards: ALL_CARDS, code: null, noInstallments: true, minInstallment: "—", note: "Somente à vista." },
  { id: "ZP", iata: "ZP", name: "Paranair", cards: ALL_CARDS, code: null, noInstallments: true, minInstallment: "—", note: "Não parcela." },
  { id: "QF", iata: "QF", name: "Qantas", max: 5, cards: ALL_CARDS, code: { k: "fixed", v: "QF05" }, minInstallment: "USD 900,00 por bilhete", note: "Rotas Brasil → Oceania." },
  { id: "QR", iata: "QR", name: "Qatar Airways", max: 5, cards: ALL_CARDS, code: { k: "fixed", v: "QR05" }, minInstallment: "—", note: "GDS até 5x; NDC somente à vista. A 1ª parcela deve ser maior ou igual à taxa de embarque." },
  { id: "AT", iata: "AT", name: "Royal Air Maroc", max: 10, cards: ALL_CARDS, code: { k: "nn", p: "AT" }, minInstallment: "—", note: "" },
  { id: "SQ", iata: "SQ", name: "Singapore Airlines", max: 5, cards: ALL_CARDS, code: { k: "fixed", v: "SQ005" }, minInstallment: "R$ 100,00", note: "Bandeiras aceitas não especificadas na base — confirme com a companhia." },
  { id: "H2", iata: "H2", name: "Sky Airline", only: [2, 3], cards: ALL_CARDS, code: { k: "map", m: { 2: "H202", 3: "H203" } }, minInstallment: "R$ 60,00", note: "Apenas no GDS." },
  { id: "SA", iata: "SA", name: "South African Airways", max: 10, cards: ALL_CARDS, code: { k: "fixed", v: "SA1" }, minInstallment: "nenhum", note: "" },
  { id: "LX", iata: "LX", name: "Swiss / Edelweiss", max: 5, cards: ALL_CARDS, code: { k: "fixed", v: "LH100" }, minInstallment: "USD 400,00", note: "Mesma lógica de taxa OPC da Lufthansa." },
  { id: "DT", iata: "DT", name: "TAAG Angola", max: 4, cards: ALL_CARDS, code: { k: "nn", p: "DT" }, minInstallment: "—", note: "Somente rotas com início e emissão no Brasil." },
  { id: "TP", iata: "TP", name: "TAP Air Portugal", max: 10, cards: ALL_CARDS, code: { k: "fixed", v: "TP10" }, minInstallment: "—", note: "Taxa YR de 2,7% cobrada sempre. Cartões emitidos no Brasil." },
  { id: "TK", iata: "TK", name: "Turkish Airlines", only: [5], cards: ALL_CARDS, code: { k: "brand", m: { VI: "TK05VI", AX: "TK05AX", CA: "TK05MC" } }, minInstallment: "R$ 500,00 por passageiro", note: "Somente voos TK015/TK016. Diners não é aceito. Demais rotas apenas à vista." },
  { id: "UA", iata: "UA", name: "United Airlines", max: 5, cards: ALL_CARDS, code: { k: "fixed", v: "UA1" }, minInstallment: "USD 50,00", note: "" },
];

export function findAirline(id: string): Airline | undefined {
  return AIRLINES.find((a) => a.id === id);
}

/** Parcelas oferecidas no formulario para uma companhia. */
export function allowedInstallments(a: Airline): number[] {
  if (a.noInstallments) return [];
  if (a.only) return a.only.slice();
  const out: number[] = [];
  for (let n = 2; n <= (a.max ?? 0); n++) out.push(n);
  return out;
}

/**
 * Resolve o codigo de financiamento. Devolve `{ error }` — nunca um palpite —
 * quando a base nao cobre a combinacao pedida.
 */
export function resolveCode(
  a: Airline,
  installments: number,
  brand: Brand,
): { code: string } | { error: string } {
  if (!a.code) {
    return {
      error:
        `A base não tem o código de financiamento da ${a.name}. ` +
        `Não geramos um código "parecido" — confirme com a companhia ou com a consolidadora.`,
    };
  }
  switch (a.code.k) {
    case "fixed":
      return { code: a.code.v };
    case "nn":
      return { code: a.code.p + pad2(installments) };
    case "nnnn":
      return { code: a.code.p + pad2(installments) + pad2(installments) };
    case "map": {
      const c = a.code.m[installments];
      return c
        ? { code: c }
        : { error: `A ${a.name} só tem código mapeado para ${Object.keys(a.code.m).join("x, ")}x.` };
    }
    case "brand": {
      const c = a.code.m[brand];
      return c
        ? { code: c }
        : { error: `A ${a.name} usa um código por bandeira e a base não tem o código para essa bandeira.` };
    }
  }
}

/**
 * Projecao segura para o cliente: metadados sim, codigo de financiamento nao.
 *
 * `name` e `note` descem inteiros, entao **nao podem citar codigo**. Ja citavam:
 * a nota da LATAM entregava JJ02–JJ12 de graca, para qualquer um que abrisse a
 * calculadora. `npm test` agora reprova qualquer codigo que apareca aqui.
 */
export function toPublic(a: Airline): PublicAirline {
  return {
    id: a.id,
    iata: a.iata,
    name: a.name,
    installments: allowedInstallments(a),
    cards: a.cards,
    minInstallment: a.minInstallment,
    note: a.note,
    allowsInstallments: !a.noInstallments,
    mapped: a.code !== null,
    needsConfirmation: a.confirm === true,
  };
}

export function publicAirlines(): PublicAirline[] {
  return AIRLINES.map(toPublic).sort((x, y) => x.name.localeCompare(y.name, "pt-BR"));
}
