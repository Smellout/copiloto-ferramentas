/**
 * Toda a aritmetica monetaria roda em centavos inteiros.
 * Nenhum float entra na conta — o erro de arredondamento de ponto flutuante
 * viraria centavo errado no comando, e centavo errado e bilhete recusado.
 */

export function pad2(n: number): string {
  return (n < 10 ? "0" : "") + n;
}

/**
 * Le um valor digitado pelo agente e devolve centavos inteiros.
 * Aceita "4046,60", "4.046,60", "4046.60", "R$ 4046,60", "4046".
 * Devolve null quando nao da para ler com seguranca.
 */
export function parseMoney(raw: string | number | null | undefined): number | null {
  if (raw === null || raw === undefined) return null;
  let s = String(raw).trim().replace(/^(r\$|brl)\s*/i, "").replace(/\s/g, "");
  if (!s) return null;

  if (s.includes(",")) {
    // virgula decimal: pontos sao separador de milhar
    s = s.replace(/\./g, "").replace(",", ".");
  } else {
    // sem virgula: um ponto seguido de exatamente 3 digitos e milhar, nao decimal
    const parts = s.split(".");
    if (parts.length > 1 && parts[parts.length - 1].length === 3) s = parts.join("");
  }

  if (!/^\d+(\.\d+)?$/.test(s)) return null;
  const v = Number.parseFloat(s);
  if (!Number.isFinite(v)) return null;
  return Math.round(v * 100);
}

/** 105817 -> "1058.17" */
export function money(cents: number): string {
  return Math.floor(cents / 100) + "." + pad2(cents % 100);
}

/** 105817 -> "BRL1058.17" — formato de {valor_primeira_parcela} e {saldo_restante} */
export function brl(cents: number): string {
  return "BRL" + money(cents);
}

/**
 * Formato de {valor_parcela}: sem moeda e sem separador.
 * Valor fechado vira inteiro puro (50000 -> "500").
 * Valor com centavos vira digitos colados (67444 -> "67444").
 */
export function parcelaFmt(cents: number): string {
  return cents % 100 === 0 ? String(cents / 100) : String(cents);
}
