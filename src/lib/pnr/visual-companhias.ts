/**
 * Identidade visual das companhias no itinerário.
 *
 * Uma tabela só, por código IATA — o mesmo `cia.codigo` que o leitor do GDS já
 * tira da linha do segmento. É o identificador estruturado e confiável que o
 * dado tem; nome livre ("LATAM AIRLINES BRASIL" numa linha solta) nunca decide
 * a companhia.
 *
 * O que a tabela muda é **pouco, de propósito**: o selo da companhia, o nome de
 * exibição e o logotipo, quando houver. Cabeçalho, colunas, tamanhos e cores da
 * tabela são do Copiloto e não variam — o itinerário de uma GOL e o de uma
 * Emirates têm de ser o mesmo documento, só com outra assinatura.
 *
 * **Logotipos:** o arquivo oficial mora em `public/companhias/<IATA>.svg` (SVG
 * de preferência; Copa veio em PNG porque não há SVG oficial) e entra aqui como
 * `logo: "/companhias/<IATA>.<ext>"`. A fonte são os press kits / Wikimedia
 * Commons — artwork oficial baixado e servido por nós. Logotipo é marca de
 * terceiro; desenhar um "parecido" é inventar, e puxar de um site externo faz o
 * itinerário depender de um servidor que não é nosso. Sem `logo`, o selo mostra
 * a sigla na cor da companhia — é a reserva se o arquivo não carregar, e o caso
 * de quem fica fora desta tabela (selo genérico).
 *
 * **Cores:** aproximações das cores institucionais, usadas só no selo. Ajuste
 * aqui se a companhia publicar outra. A cor do texto sobre o selo não é
 * escolhida à mão: sai do contraste calculado (`corDoTexto`).
 */

export type VisualCompanhia = {
  codigo: string;
  /** nome para a tela: a marca por extenso, ou o nome da tabela, ou a sigla */
  nome: string;
  /** cor principal da companhia, o fundo do selo */
  cor: string;
  /** segunda cor da marca, quando há — vira a faixa de baixo do selo */
  corSecundaria: string | null;
  /** branco ou azul-marinho, o que tiver contraste sobre `cor` */
  corTexto: string;
  /** caminho de um logotipo oficial em /public, quando houver arquivo */
  logo: string | null;
  /** companhia fora da tabela: selo neutro, mesmo tamanho e mesmo lugar */
  generica: boolean;
};

type Identidade = {
  /** só quando o nome de `companhias.ts` é curto demais para a marca */
  nome?: string;
  /** cor institucional do selo; opcional quando há `logo` (o selo fica branco
   *  com o logotipo, e a cor só serviria de reserva). */
  cor?: string;
  corSecundaria?: string;
  logo?: string;
};

const IDENTIDADES: Record<string, Identidade> = {
  LA: { nome: "LATAM Airlines", cor: "#1b0088", corSecundaria: "#e8114b", logo: "/companhias/LA.svg" },
  JJ: { nome: "LATAM Airlines Brasil", cor: "#1b0088", corSecundaria: "#e8114b", logo: "/companhias/JJ.svg" },
  G3: { nome: "GOL Linhas Aéreas", cor: "#ff6a13", logo: "/companhias/G3.svg" },
  AD: { nome: "Azul Linhas Aéreas", cor: "#0b3d91", corSecundaria: "#00a3e0", logo: "/companhias/AD.svg" },
  AV: { cor: "#da291c", logo: "/companhias/AV.svg" },
  TP: { cor: "#e2001a", corSecundaria: "#00a651", logo: "/companhias/TP.svg" },
  LH: { cor: "#05164d", corSecundaria: "#f9b000", logo: "/companhias/LH.svg" },
  AF: { cor: "#002157", corSecundaria: "#e4002b", logo: "/companhias/AF.svg" },
  // AA: wordmark "American" de 2013 (PD-textlogo).
  AA: { cor: "#0078d2", corSecundaria: "#c30019", logo: "/companhias/AA.svg" },
  UA: { cor: "#005daa", logo: "/companhias/UA.svg" },
  IB: { cor: "#d7192d", corSecundaria: "#ffc72c", logo: "/companhias/IB.svg" },
  CM: { cor: "#0032a0", logo: "/companhias/CM.png" },
  EK: { cor: "#d71921", logo: "/companhias/EK.svg" },
  QR: { cor: "#5c0632", logo: "/companhias/QR.svg" },
  // --- logotipos oficiais (Wikimedia Commons), em public/companhias/<IATA>.svg ---
  O6: { logo: "/companhias/O6.svg" },
  H2: { logo: "/companhias/H2.svg" },
  DL: { logo: "/companhias/DL.svg" },
  AC: { logo: "/companhias/AC.svg" },
  AM: { logo: "/companhias/AM.svg" },
  B6: { logo: "/companhias/B6.svg" },
  WN: { logo: "/companhias/WN.svg" },
  UX: { logo: "/companhias/UX.svg" },
  VY: { logo: "/companhias/VY.svg" },
  KL: { logo: "/companhias/KL.svg" },
  BA: { logo: "/companhias/BA.svg" },
  VS: { logo: "/companhias/VS.svg" },
  LX: { logo: "/companhias/LX.svg" },
  OS: { logo: "/companhias/OS.svg" },
  SN: { logo: "/companhias/SN.svg" },
  AZ: { logo: "/companhias/AZ.svg" },
  TK: { logo: "/companhias/TK.svg" },
  A3: { logo: "/companhias/A3.svg" },
  SK: { logo: "/companhias/SK.svg" },
  AY: { logo: "/companhias/AY.svg" },
  LO: { logo: "/companhias/LO.svg" },
  FR: { logo: "/companhias/FR.svg" },
  U2: { logo: "/companhias/U2.svg" },
  SA: { logo: "/companhias/SA.svg" },
  ET: { logo: "/companhias/ET.svg" },
  MS: { logo: "/companhias/MS.svg" },
  EY: { logo: "/companhias/EY.svg" },
  LY: { logo: "/companhias/LY.svg" },
  SV: { logo: "/companhias/SV.svg" },
  SQ: { logo: "/companhias/SQ.svg" },
  CX: { logo: "/companhias/CX.svg" },
  JL: { logo: "/companhias/JL.svg" },
  NH: { logo: "/companhias/NH.svg" },
  QF: { logo: "/companhias/QF.svg" },
  CA: { logo: "/companhias/CA.svg" },
  // Lacunas preenchidas em 18/10/2026. Fonte varia por companhia: Wikimedia
  // Commons (AT, DE, DY, JA, KE, NZ, OB), site oficial da cia (DT, HR) e
  // Wikipedia en em fair-use (M1, ZP). M1 é PNG: não há SVG oficial.
  AT: { logo: "/companhias/AT.svg" },
  DE: { logo: "/companhias/DE.svg" },
  DT: { logo: "/companhias/DT.svg" },
  DY: { logo: "/companhias/DY.svg" },
  HR: { logo: "/companhias/HR.svg" },
  JA: { logo: "/companhias/JA.svg" },
  KE: { logo: "/companhias/KE.svg" },
  M1: { logo: "/companhias/M1.png" },
  NZ: { logo: "/companhias/NZ.svg" },
  OB: { logo: "/companhias/OB.svg" },
  ZP: { logo: "/companhias/ZP.svg" },
  // Cor institucional + logo oficial (Wikipedia en, fair-use).
  AR: { cor: "#0081c6", logo: "/companhias/AR.svg" },
  MH: { cor: "#0d4689", logo: "/companhias/MH.svg" },
};

/** Selo de quem não está na tabela: o azul claro do Copiloto, sigla em marinho. */
const GENERICA = { cor: "#eaf2fc", corTexto: "#0b2b59" };

const BRANCO = "#ffffff";
const MARINHO = "#071a38";

/** Luminância relativa (WCAG 2), de um "#rrggbb". */
function luminancia(hex: string): number {
  const n = Number.parseInt(hex.slice(1), 16);
  const canal = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * canal((n >> 16) & 255) + 0.7152 * canal((n >> 8) & 255) + 0.0722 * canal(n & 255);
}

function contraste(a: string, b: string): number {
  const [claro, escuro] = [luminancia(a), luminancia(b)].sort((x, y) => y - x);
  return (claro + 0.05) / (escuro + 0.05);
}

/**
 * Branco quando dá 4,5:1 sobre a cor; senão, azul-marinho. O laranja da GOL,
 * por exemplo, não segura texto branco pequeno — e a sigla do selo é pequena.
 */
export function corDoTexto(fundo: string): string {
  return contraste(BRANCO, fundo) >= 4.5 ? BRANCO : MARINHO;
}

/**
 * A identidade de um trecho, a partir do código IATA da companhia e do nome
 * que `companhias.ts` já conhece. Nunca falha: companhia desconhecida recebe o
 * selo genérico e o nome que houver (ou a própria sigla).
 */
export function visualDaCompanhia(codigo: string, nomeConhecido: string | null): VisualCompanhia {
  const sigla = codigo.toUpperCase();
  const id = IDENTIDADES[sigla];
  const nome = id?.nome ?? nomeConhecido ?? `Companhia ${sigla}`;

  if (!id) {
    return { codigo: sigla, nome, corSecundaria: null, logo: null, generica: true, ...GENERICA };
  }
  // Com logo e sem cor, o selo fica branco com o logotipo; a cor base só entra
  // como reserva (ex.: logo que não carrega).
  const corBase = id.cor ?? GENERICA.cor;
  return {
    codigo: sigla,
    nome,
    cor: corBase,
    corSecundaria: id.corSecundaria ?? null,
    corTexto: corDoTexto(corBase),
    logo: id.logo ?? null,
    generica: false,
  };
}
