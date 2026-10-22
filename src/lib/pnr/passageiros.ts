/**
 * Nomes de passageiro no display do GDS.
 *
 * O itinerário decodificado vai para o **passageiro**, não para o agente — e
 * documento de viagem sem o nome de quem viaja não serve para nada. O nome
 * está no PNR, então não há motivo para pedir que alguém digite de novo.
 *
 * Duas formas aparecem no dado real:
 *
 *     1.PEREIRA LIMA/RICARDO MR      numerada, dentro do display
 *     TANAKA/HENRIQUE YOSHIO          solta, quando o agente recorta
 *
 * O GDS escreve `SOBRENOME/NOME TRATAMENTO`, tudo em maiúsculas. Num documento
 * que o cliente lê, "RICARDO PEREIRA LIMA" grita; a ordem natural e a
 * caixa de título é que fazem parecer documento em vez de terminal.
 */

export type Passageiro = {
  /** como o cliente lê: "Ricardo Pereira Lima" */
  nome: string;
  /** "Sr.", "Sra.", "criança"… quando o GDS informa */
  tratamento: string | null;
};

const TRATAMENTOS: Record<string, string> = {
  MR: "Sr.",
  MRS: "Sra.",
  MS: "Sra.",
  MISS: "Srta.",
  MSTR: "menor",
  CHD: "criança",
  INF: "bebê de colo",
  DR: "Dr.",
};

/** Linha numerada do display: `  1.SOBRENOME/NOME MR`. */
const NUMERADA = /^\s*\d{1,2}\.\s*([A-ZÀ-Ü][A-ZÀ-Ü' -]*)\/\s*([A-ZÀ-Ü][A-ZÀ-Ü' -]*)$/;

/**
 * Linha solta, sem número — o agente recortou só o nome.
 *
 * **Exige coluna zero.** Sem isso, o rabo de uma linha que quebrou vira
 * passageiro: o `SSR DOCS` do display real termina em
 *
 *     6 SSR DOCS AA HK1 P/BRA/.../PEREIRA
 *          LIMA ALVES/RICARDO
 *
 * e "LIMA ALVES/RICARDO" tem exatamente a cara de um nome. Continuação no
 * GDS é sempre indentada; nome solto começa na margem.
 */
const SOLTA = /^([A-ZÀ-Ü][A-ZÀ-Ü' -]{1,40})\/\s*([A-ZÀ-Ü][A-ZÀ-Ü' -]{1,40})$/;

/**
 * "RICARDO PEREIRA LIMA" -> "Ricardo Pereira Lima".
 *
 * Roda no nome **inteiro e já na ordem final**, nunca em pedaço. Aplicada por
 * parte, "DE SOUZA" viraria "De Souza": o "de" está na posição zero do
 * sobrenome, mas no meio do nome completo.
 */
function caixaDeTitulo(bruto: string): string {
  const minusculas = new Set(["de", "da", "do", "das", "dos", "e", "van", "von", "del", "la"]);
  return bruto
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .map((p, i) => (i > 0 && minusculas.has(p) ? p : p.charAt(0).toUpperCase() + p.slice(1)))
    .join(" ");
}

/**
 * Separa o tratamento do fim do primeiro nome.
 *
 * O GDS cola os dois: "RICARDO MR". Sem separar, o documento sairia com
 * "Ricardo Mr" — que parece nome do meio e denuncia a ferramenta.
 */
function partirTratamento(primeiro: string): { nome: string; tratamento: string | null } {
  const partes = primeiro.trim().split(/\s+/);
  const ultimo = partes[partes.length - 1]?.toUpperCase();
  if (partes.length > 1 && ultimo && TRATAMENTOS[ultimo]) {
    return { nome: partes.slice(0, -1).join(" "), tratamento: TRATAMENTOS[ultimo] };
  }
  return { nome: primeiro.trim(), tratamento: null };
}

export function lerPassageiros(texto: string): Passageiro[] {
  const achados: Passageiro[] = [];
  const vistos = new Set<string>();

  for (const cru of texto.split(/\r?\n/)) {
    const linha = cru.trim();
    if (!linha) continue;

    // A numerada pode vir indentada; a solta, **não**. Por isso a segunda é
    // testada contra a linha crua: `trim()` apagaria justamente a indentação
    // que distingue um nome de uma continuação de SSR.
    const m = NUMERADA.exec(linha) ?? SOLTA.exec(cru.replace(/\s+$/, ""));
    if (!m) continue;

    const { nome: primeiro, tratamento } = partirTratamento(m[2]);
    // Junta primeiro e ordena antes de acertar a caixa: a regra da partícula
    // depende da posição no nome completo, não dentro de cada metade.
    const nome = caixaDeTitulo(`${primeiro} ${m[1]}`);
    if (!nome || vistos.has(nome)) continue;
    vistos.add(nome);
    achados.push({ nome, tratamento });
  }

  return achados;
}
