import type { Aeroporto } from "./aeroportos";
import type { Status } from "./status";

/** Um segmento como saiu do GDS, ainda sem ano nem fuso resolvidos. */
export type SegmentoBruto = {
  /** a linha original, para o agente conferir contra a tela dele */
  linha: string;
  /** número do segmento, quando o agente copiou a coluna */
  ordem: number | null;
  cia: string;
  voo: string;
  classe: string;
  /** "08OCT" — sem ano, que o GDS não informa */
  dataPartida: string;
  /** 1 = segunda … 7 = domingo; null quando o agente não copiou essa coluna */
  diaSemana: number | null;
  /** o `*` de code-share / informação operacional adicional */
  codeshare: boolean;
  origem: string;
  destino: string;
  /** "HK" = confirmado */
  status: string;
  assentos: number;
  /** `+1` quando a chegada é no dia seguinte; alternativa à data de chegada */
  deslocamentoDia: number;
  /** "2115", hora local da origem */
  horaPartida: string;
  /** "0040", hora local do destino */
  horaChegada: string;
  /** "09OCT" quando o voo vira o dia; null quando chega no mesmo */
  dataChegada: string | null;
  /**
   * Poltronas vindas de uma linha `SSR RQST` que aponta para este segmento.
   *
   * É lista porque um segmento com `HK2` tem dois passageiros, e o SSR traz
   * `04AN,P1/04CN,P2` — duas poltronas diferentes. Mostrar só a primeira
   * daria ao segundo passageiro o assento do primeiro.
   */
  poltronas: { lugar: string; passageiro: number | null }[];
};

/** Uma ponta do voo, já com data e fuso resolvidos. */
export type Ponta = {
  codigo: string;
  aeroporto: Aeroporto | null;
  /** instante absoluto, em ms */
  instante: number;
  /** ano/mês/dia/hora locais já resolvidos, para exibir sem reconverter */
  ano: number;
  mes: number;
  dia: number;
  hora: number;
  minuto: number;
};

/** Um voo pronto para a tela. */
export type Voo = {
  bruto: SegmentoBruto;
  cia: { codigo: string; nome: string | null };
  numero: string;
  partida: Ponta;
  chegada: Ponta;
  /** null quando falta o fuso de alguma ponta — nunca um palpite */
  duracaoMin: number | null;
  /**
   * Só `HK` conta como confirmado. Qualquer outro status — `DK`, `HN`, `HL` —
   * é tratado como não confirmado, mesmo os que não conhecemos.
   *
   * A assimetria é deliberada: dizer "não confirmado" para um voo confirmado
   * gera uma conferência a mais; dizer "confirmado" para um que não está gera
   * passageiro no aeroporto sem assento. Na dúvida, erramos para o lado que
   * custa menos.
   */
  confirmado: boolean;
  /** a sigla traduzida para frase, para o documento que o passageiro lê */
  status: Status;
  /** tempo em solo desde a chegada do voo anterior; null no primeiro */
  esperaMin: number | null;
  /** true quando o voo anterior chegou num aeroporto diferente deste */
  trocaAeroporto: boolean;
  avisos: string[];
};

export type Itinerario = {
  voos: Voo[];
  /**
   * Da primeira partida à última chegada — **é este o número que a companhia
   * informa** como duração da viagem, e ele inclui as esperas. A soma dos voos
   * (`voandoMin`) é sempre menor. Mostrar só ela faria o agente achar que a
   * ferramenta está errada quando comparasse com a cia.
   */
  totalMin: number | null;
  /** só o tempo no ar */
  voandoMin: number | null;
  /**
   * false quando qualquer segmento não está `HK`. É o que separa uma
   * **cotação** de um itinerário emitido — e o documento precisa dizer qual
   * dos dois é, porque quem recebe não sabe ler status de GDS.
   */
  todosConfirmados: boolean;
  /** linhas coladas que não eram segmento aéreo */
  ignoradas: string[];
  /** problemas do itinerário como um todo */
  avisos: string[];
};
