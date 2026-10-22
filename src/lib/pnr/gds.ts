import type { SegmentoBruto } from "./tipos";

/**
 * Leitor das linhas de segmento aéreo do GDS.
 *
 * Uma linha real:
 *
 *     AR1269 Q 08OCT 4 GIGAEP HK1  2115 0040  09OCT
 *     │    │ │ │     │ │  │   │ │  │    │     └ data de chegada (nem sempre vem)
 *     │    │ │ │     │ │  │   │ │  │    └ hora de chegada, local do destino
 *     │    │ │ │     │ │  │   │ │  └ hora de partida, local da origem
 *     │    │ │ │     │ │  │   │ └ assentos
 *     │    │ │ │     │ │  │   └ status (HK = confirmado, DK = só selecionado)
 *     │    │ │ │     │ └──┴ origem e destino, colados em 6 letras
 *     │    │ │ │     └ dia da semana (1 = segunda … 7 = domingo)
 *     │    │ │ └ data de partida
 *     │    │ └ classe de reserva
 *     │    └ número do voo
 *     └ companhia
 *
 * **O casamento é deliberadamente frouxo nas pontas.** A primeira versão exigia
 * que a linha terminasse na data de chegada, e por isso não lia nada que
 * viesse depois — indicador de e-ticket, tipo de aeronave, localizador da
 * companhia — que é o que um display de verdade costuma trazer. O núcleo
 * (cia, voo, classe, data, trecho, status, horas) é específico o bastante para
 * não gerar falso positivo; o resto da linha é lido e descartado.
 *
 * **Só o essencial é obrigatório.** O agente nem sempre copia a linha inteira
 * — às vezes vem só `TP072 20SEP GIGLIS 2010 0955 21SEP`, sem classe, sem dia
 * da semana e sem o status/assentos. Exigir esses campos deixava um display
 * assim de fora. Agora o núcleo cobrado é o que de fato identifica o voo:
 * **cia + número, data, trecho (6 letras) e as duas horas**. Classe, dia da
 * semana e status/assentos entram quando vêm, e são opcionais.
 *
 * Tolera também: número do segmento presente ou não; `TP 072`, com espaço e
 * zero à esquerda; o `*` de code-share colado no dia da semana; classe colada
 * na data (`Y15SEP`); e `+1` / `#1` no lugar da data de chegada.
 */
const LINHA = new RegExp(
  "^\\s*" +
    "(?:(\\d{1,2})\\s+)?" + // número do segmento (opcional)
    "([A-Z0-9]{2})\\s?(\\d{1,4})" + // companhia + voo
    "\\s+" +
    "(?:([A-Z])\\s*)?" + // classe (opcional; pode vir colada à data, `Y15SEP`)
    "(\\d{2}[A-Z]{3})" + // data de partida
    "\\s*" +
    "(?:([1-7])(\\*?)\\s*)?" + // dia da semana + marcador de code-share (opcional)
    "([A-Z]{3})([A-Z]{3})" + // origem + destino (colados em 6 letras)
    "\\s+" +
    "(?:([A-Z]{2})(\\d+)\\s+)?" + // status + assentos (opcional)
    "(\\d{4})" + // hora de partida
    "\\s+" +
    "(\\d{4})([+#-]\\d)?" + // hora de chegada + deslocamento de dia (`0040+1`)
    "(?:\\s+(\\d{2}[A-Z]{3}))?" + // data de chegada (opcional)
    "(.*)$", // sobra: e-ticket, aeronave, localizador — lido e descartado
);

/**
 * Parece voo mas não casou? Precisa de trecho colado (6 letras) **e** duas
 * horas de quatro dígitos. É o que separa um segmento que o leitor falhou em
 * ler de uma linha de nome, telefone ou time limit.
 */
const PARECE_VOO = /\b[A-Z]{3}[A-Z]{3}\b/;
const PARECE_HORARIO = /\b\d{4}\s+\d{4}\b/;

/**
 * Pedido de poltrona: `SSR RQST AA HK1 DCALGA/04AN,P1/RS/RS/S2`.
 *
 * O `/S2` do fim aponta para o **número do segmento** — o mesmo número que
 * abre a linha do voo. É o que permite grudar a poltrona no trecho certo em
 * vez de mostrá-la solta, e por isso só funciona quando o agente copiou a
 * coluna do número.
 *
 * Note que esta linha contém `DCALGA` e `AA HK1`, quase idênticos a um
 * segmento aéreo. Ela não vira voo nem suspeita porque lhe faltam as duas
 * horas de quatro dígitos — é o par de horários que separa um do outro.
 */
const SSR_RQST = /\bSSR\s+RQST\b.*?\/S(\d+)\b/;

/**
 * Cada par poltrona/passageiro dentro da linha: `04AN,P1` e depois `04CN,P2`.
 *
 * É lista porque um segmento `HK2` leva dois passageiros com assentos
 * diferentes. Capturar só o primeiro daria ao segundo o lugar do primeiro —
 * erro silencioso e do tipo que o passageiro descobre no embarque.
 */
const SSR_PAR = /(\d{1,3}[A-Z])[A-Z]?,P(\d+)/g;

export type Leitura = {
  segmentos: SegmentoBruto[];
  /** linhas que claramente não são voo — nome, localizador, remarks */
  ignoradas: string[];
  /**
   * Linhas com cara de segmento aéreo que o leitor **não** conseguiu ler.
   *
   * Existe porque o modo de falha silencioso é o pior possível aqui: o agente
   * cola quatro trechos, aparecem três, e nada na tela diz que faltou um. Toda
   * suspeita precisa chegar à tela em voz alta.
   */
  suspeitas: string[];
};

/**
 * Lê o texto colado e devolve o que é segmento aéreo.
 *
 * Linha que claramente não é voo é ignorada em silêncio, não é erro: o agente
 * cola o display inteiro, com nome de passageiro, localizador e observações.
 * Exigir que ele limpe antes seria transferir trabalho para quem a ferramenta
 * existe para poupar.
 */
export function lerGds(texto: string): Leitura {
  const segmentos: SegmentoBruto[] = [];
  const ignoradas: string[] = [];
  const suspeitas: string[] = [];
  const poltronas = new Map<number, { lugar: string; passageiro: number | null }[]>();

  for (const cru of texto.split(/\r?\n/)) {
    // Caixa alta: o display do GDS é todo em maiúsculo, e o casamento abaixo só
    // aceita `[A-Z]`. Normalizar aqui faz o leitor aceitar código digitado em
    // minúsculo (`tp 072` → `TP 072`) sem pedir que o agente capitalize à mão —
    // e nada no segmento é sensível à caixa (sigla, trecho, classe e status são
    // todos códigos), então subir a linha inteira é seguro.
    const linha = cru.trim().toUpperCase();
    if (!linha) continue;

    const m = LINHA.exec(linha);
    if (!m) {
      const ssr = SSR_RQST.exec(linha);
      if (ssr) {
        const lista: { lugar: string; passageiro: number | null }[] = [];
        for (const par of linha.matchAll(SSR_PAR)) {
          lista.push({ lugar: par[1], passageiro: Number(par[2]) });
        }
        if (lista.length) poltronas.set(Number(ssr[1]), lista);
      }
      if (PARECE_VOO.test(linha) && PARECE_HORARIO.test(linha)) suspeitas.push(linha);
      else ignoradas.push(linha);
      continue;
    }

    const [
      ,
      ordem, cia, voo, classe, dataPartida, diaSemana, marcador,
      origem, destino, status, assentos, horaPartida, horaChegada, deslocamento,
      dataChegada,
    ] = m;

    segmentos.push({
      linha,
      ordem: ordem ? Number(ordem) : null,
      cia,
      voo,
      // Opcionais: vêm vazios/nulos quando o agente não copiou a coluna.
      classe: classe ?? "",
      dataPartida,
      diaSemana: diaSemana ? Number(diaSemana) : null,
      codeshare: marcador === "*",
      origem,
      destino,
      status: status ?? "",
      assentos: assentos ? Number(assentos) : 0,
      horaPartida,
      horaChegada,
      // "+1" quer dizer que a chegada é no dia seguinte, e é uma alternativa à
      // data de chegada explícita — nunca vêm as duas.
      deslocamentoDia: deslocamento ? Number(deslocamento.replace("#", "+")) : 0,
      dataChegada: dataChegada ?? null,
      poltronas: [],
    });
  }

  // Segunda passada: o SSR pode vir antes ou depois da linha do voo.
  for (const s of segmentos) {
    if (s.ordem !== null) s.poltronas = poltronas.get(s.ordem) ?? [];
  }

  return { segmentos, ignoradas, suspeitas };
}
