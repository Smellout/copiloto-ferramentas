/**
 * Tipos compartilhados entre servidor e cliente.
 * Nada aqui carrega codigo de financiamento — esses ficam apenas no servidor,
 * em `airlines.ts`, e so aparecem dentro de um comando ja pago.
 */

export type Brand = "AX" | "VI" | "CA";

export const BRAND_NAMES: Record<Brand, string> = {
  AX: "American Express",
  VI: "Visa",
  CA: "Mastercard",
};

/** Projecao publica de uma companhia: o que o formulario precisa mostrar. */
export type PublicAirline = {
  id: string;
  iata: string;
  name: string;
  /** Parcelas disponiveis. Vazio quando a companhia nao parcela. */
  installments: number[];
  cards: Brand[];
  minInstallment: string;
  note: string;
  /** false = companhia nao parcela nesta base */
  allowsInstallments: boolean;
  /** false = a base nao tem o codigo de financiamento; nao geramos comando */
  mapped: boolean;
  /** true = codigo existe mas precisa ser confirmado com a cia antes de emitir */
  needsConfirmation: boolean;
};

export type CalcStep = {
  label: string;
  formula: string;
  result: string;
};

export type GenerateInput = {
  airlineId: string;
  brand: string;
  installments: number;
  fare: string;
  /** Total das taxas do fare calc, ja somado pelo emissor. */
  taxes: string;
  /**
   * Quantos passageiros de **mesmo valor** entram nesta emissao. 1 = individual
   * (comportamento historico). 2+ liga as duas opcoes de entrada (ver `options`).
   */
  passengers: number;
};

/**
 * Uma forma de emitir a mesma reserva. Com 1 passageiro ha uma so; com 2+,
 * duas: a entrada por passageiro (`/P1`, `/P2`…) e a entrada unica com a parcela
 * multiplicada. `nota` e o comentario que explica, na tela, o porque de cada uma
 * — e o que evita o agente emitir individual pensando que emitiu para todos.
 */
export type CommandOption = {
  key: "porPassageiro" | "unica";
  titulo: string;
  nota: string;
  /** Um comando por linha. Opcao por passageiro traz N comandos; a unica, um. */
  commands: string[];
};

export type GenerateOk = {
  ok: true;
  command: string;
  plan: string;
  airline: string;
  brandName: string;
  installments: number;
  /** Numero de passageiros de mesmo valor desta emissao. */
  passengers: number;
  fare: string;
  taxes: string;
  fareCents: number;
  taxesCents: number;
  steps: CalcStep[];
  /** As formas de emitir. 1 item para 1 passageiro; 2 para 2+ (por passageiro + unica). */
  options: CommandOption[];
  warnings: string[];
};

export type GenerateFail = {
  ok: false;
  errors: string[];
};

export type GenerateResult = GenerateOk | GenerateFail;
