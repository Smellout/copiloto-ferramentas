/**
 * Montagem dos comandos **SRDOCS** (APIS/dados do passageiro) para o GDS.
 *
 * Diferente da calculadora FP CC, aqui não há segredo de produto: o SRDOCS é só
 * formatação de dados que o agente já tem. Por isso esta lógica é pura e roda no
 * **cliente** — sem rede, sem custo, sem consumir teste.
 *
 * Duas ferramentas usam este módulo:
 *   - passaporte (SRDOCS com o documento completo);
 *   - data de nascimento (o mesmo SRDOCS, só com nascimento + nome).
 *
 * A única fonte da verdade do formato mora aqui: as telas passam o que o agente
 * digitou, este módulo limpa, valida e devolve o comando pronto.
 */

export type Genero = "M" | "F" | "";

const MESES = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

/**
 * Converte a data do `<input type="date">` (`yyyy-mm-dd`) para o formato do GDS
 * `DDMMMYY` com o mês em inglês e o ano em dois dígitos — ex.: `18JUN03`.
 * Devolve `null` quando a data é inválida ou ainda não foi preenchida.
 */
export function dataGds(iso: string): string | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso.trim());
  if (!m) return null;
  const ano = Number(m[1]);
  const mes = Number(m[2]);
  const dia = Number(m[3]);
  if (mes < 1 || mes > 12 || dia < 1 || dia > 31) return null;
  return `${String(dia).padStart(2, "0")}${MESES[mes - 1]}${String(ano % 100).padStart(2, "0")}`;
}

/**
 * Nome no padrão do GDS: maiúsculas, sem acento e só letras e espaço. O hífen é
 * o separador de campos do SRDOCS, então é removido de propósito — nunca pode
 * entrar no meio de um nome.
 */
export function nomeGds(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toUpperCase()
    .replace(/[^A-Z ]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Alfanumérico em maiúsculas (nº do passaporte). */
export function alfaNum(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");
}

/** Código de país em letras, no máximo 3 (BRA, USA, FRA). */
export function paisGds(s: string): string {
  return s.toUpperCase().replace(/[^A-Z]/g, "").slice(0, 3);
}

/** Código IATA da companhia, 2 caracteres (LA, AA, G3). */
export function ciaGds(s: string): string {
  return s.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 2);
}

/** Número do passageiro: inteiro ≥ 1, ou `null` se inválido. */
function passageiroNum(s: string): number | null {
  const n = Math.floor(Number(String(s).replace(/\D/g, "")));
  return Number.isFinite(n) && n >= 1 ? n : null;
}

export type Montagem = {
  /** O comando pronto, ou `null` enquanto algo obrigatório falta. */
  comando: string | null;
  /** Rótulos dos campos que ainda faltam, para a tela avisar. */
  faltando: string[];
};

export type EntradaPassaporte = {
  /** IATA da cia, ou "YY" quando há mais de uma cia no PNR. */
  cia: string;
  paisEmissor: string;
  numero: string;
  nacionalidade: string;
  /** data no formato do `<input type="date">` (yyyy-mm-dd) */
  nascimento: string;
  genero: Genero;
  /** data no formato do `<input type="date">` (yyyy-mm-dd) */
  validade: string;
  sobrenome: string;
  nome: string;
  passageiro: string;
};

/**
 * SRDOCS completo, com o documento:
 *
 *   SRDOCS <CIA> HK1-P-<país>-<nº>-<nacionalidade>-<nasc>-<gênero>-<validade>-<SOBRENOME>-<NOME>/P<n>
 *
 * `YY` entra no lugar da cia quando o PNR tem mais de uma companhia.
 */
export function montarPassaporte(e: EntradaPassaporte): Montagem {
  const cia = e.cia === "YY" ? "YY" : ciaGds(e.cia);
  const pais = paisGds(e.paisEmissor);
  const numero = alfaNum(e.numero);
  const nac = paisGds(e.nacionalidade);
  const nasc = dataGds(e.nascimento);
  const val = dataGds(e.validade);
  const sobrenome = nomeGds(e.sobrenome);
  const nome = nomeGds(e.nome);
  const pax = passageiroNum(e.passageiro);

  const faltando: string[] = [];
  if (!cia) faltando.push("companhia aérea");
  if (!pais) faltando.push("país emissor");
  if (!numero) faltando.push("número do passaporte");
  if (!nac) faltando.push("nacionalidade");
  if (!nasc) faltando.push("data de nascimento");
  if (!e.genero) faltando.push("gênero");
  if (!val) faltando.push("validade do passaporte");
  if (!sobrenome) faltando.push("sobrenome");
  if (!nome) faltando.push("nome");
  if (pax === null) faltando.push("número do passageiro");

  if (faltando.length) return { comando: null, faltando };

  const comando = `SRDOCS ${cia} HK1-P-${pais}-${numero}-${nac}-${nasc}-${e.genero}-${val}-${sobrenome}-${nome}/P${pax}`;
  return { comando, faltando: [] };
}

export type EntradaNascimento = {
  cia: string;
  nascimento: string;
  genero: Genero;
  sobrenome: string;
  nome: string;
  passageiro: string;
};

/**
 * SRDOCS só com nascimento e nome — os campos de documento ficam vazios:
 *
 *   SRDOCS <CIA> HK1-----<nasc>-<gênero>--<SOBRENOME>-<NOME>/P<n>
 *
 * Ex.: `SRDOCS LA HK1-----18JUN03-M--SOBRENOME-NOME/P1`.
 */
export function montarNascimento(e: EntradaNascimento): Montagem {
  const cia = e.cia === "YY" ? "YY" : ciaGds(e.cia);
  const nasc = dataGds(e.nascimento);
  const sobrenome = nomeGds(e.sobrenome);
  const nome = nomeGds(e.nome);
  const pax = passageiroNum(e.passageiro);

  const faltando: string[] = [];
  if (!cia) faltando.push("companhia aérea");
  if (!nasc) faltando.push("data de nascimento");
  if (!e.genero) faltando.push("gênero");
  if (!sobrenome) faltando.push("sobrenome");
  if (!nome) faltando.push("nome");
  if (pax === null) faltando.push("número do passageiro");

  if (faltando.length) return { comando: null, faltando };

  const comando = `SRDOCS ${cia} HK1-----${nasc}-${e.genero}--${sobrenome}-${nome}/P${pax}`;
  return { comando, faltando: [] };
}
