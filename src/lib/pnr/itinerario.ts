import { acharAeroporto } from "./aeroportos";
import { nomeCompanhia } from "./companhias";
import { localParaInstante } from "./fuso";
import { lerStatus } from "./status";
import type { Itinerario, Ponta, SegmentoBruto, Voo } from "./tipos";

const MESES: Record<string, number> = {
  JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5,
  JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11,
};

/** "08OCT" -> { dia: 8, mes: 9 } */
function partesData(ddmmm: string): { dia: number; mes: number } | null {
  const dia = Number(ddmmm.slice(0, 2));
  const mes = MESES[ddmmm.slice(2).toUpperCase()];
  if (!Number.isInteger(dia) || mes === undefined) return null;
  return { dia, mes };
}

function minutos(hhmm: string): { hora: number; minuto: number } {
  return { hora: Number(hhmm.slice(0, 2)), minuto: Number(hhmm.slice(2)) };
}

/** 1 = segunda … 7 = domingo, que é a convenção do GDS. */
function diaDaSemana(ano: number, mes: number, dia: number): number {
  const d = new Date(Date.UTC(ano, mes, dia)).getUTCDay();
  return d === 0 ? 7 : d;
}

/**
 * Descobre o ano de uma data sem ano.
 *
 * O GDS manda "08OCT" e mais nada. A regra é a mesma que o agente usa de
 * cabeça: é a **próxima ocorrência** a partir de um piso. Para o primeiro
 * segmento o piso é hoje; para os seguintes é o segmento anterior, e é isso
 * que faz um itinerário de dezembro para janeiro virar o ano sozinho.
 */
function anoDaData(mes: number, dia: number, piso: Date): number {
  const anoPiso = piso.getUTCFullYear();
  const pisoDia = Date.UTC(anoPiso, piso.getUTCMonth(), piso.getUTCDate());
  return Date.UTC(anoPiso, mes, dia) >= pisoDia ? anoPiso : anoPiso + 1;
}

function montarPonta(
  codigo: string,
  ano: number,
  mes: number,
  dia: number,
  hhmm: string,
): Ponta {
  const aeroporto = acharAeroporto(codigo);
  const { hora, minuto } = minutos(hhmm);
  const instante = aeroporto
    ? localParaInstante(ano, mes, dia, hora, minuto, aeroporto.zona)
    : Date.UTC(ano, mes, dia, hora, minuto); // sem fuso, trata como se fosse UTC
  return { codigo, aeroporto, instante, ano, mes, dia, hora, minuto };
}

/**
 * Transforma segmentos crus num itinerário pronto para a tela: ano resolvido,
 * fuso aplicado, duração calculada e avisos do que não deu para saber.
 *
 * `hoje` é injetável porque teste com data real vira teste que quebra sozinho
 * daqui a um ano.
 */
export function montarItinerario(
  segmentos: SegmentoBruto[],
  ignoradas: string[] = [],
  hoje: Date = new Date(),
): Itinerario {
  const voos: Voo[] = [];
  const avisos: string[] = [];
  let piso = hoje;

  for (const s of segmentos) {
    const dp = partesData(s.dataPartida);
    if (!dp) {
      avisos.push(`Data não reconhecida em "${s.linha}".`);
      continue;
    }

    const ano = anoDaData(dp.mes, dp.dia, piso);
    const partida = montarPonta(s.origem, ano, dp.mes, dp.dia, s.horaPartida);

    // Chegada: a data explícita quando vem; senão o "+1" do GDS; senão o
    // mesmo dia. Se a data informada cair "antes" da partida no calendário,
    // virou o ano.
    const dc = s.dataChegada
      ? partesData(s.dataChegada)
      : s.deslocamentoDia
        ? (() => {
            const d = new Date(Date.UTC(ano, dp.mes, dp.dia + s.deslocamentoDia));
            return { dia: d.getUTCDate(), mes: d.getUTCMonth() };
          })()
        : dp;
    let anoChegada = ano;
    if (dc) {
      const mesmoAno = Date.UTC(ano, dc.mes, dc.dia);
      if (mesmoAno < Date.UTC(ano, dp.mes, dp.dia)) anoChegada = ano + 1;
    }
    const chegada = dc
      ? montarPonta(s.destino, anoChegada, dc.mes, dc.dia, s.horaChegada)
      : montarPonta(s.destino, ano, dp.mes, dp.dia, s.horaChegada);

    const avisosVoo: string[] = [];

    // O dígito do dia da semana é redundante para exibir — mas serve de
    // conferidor do ano que acabamos de inferir. Se não bater, o ano é que
    // está errado, e é melhor avisar do que mostrar data errada com confiança.
    // Só confere quando o agente copiou a coluna (pode não vir).
    if (s.diaSemana !== null && diaDaSemana(ano, dp.mes, dp.dia) !== s.diaSemana) {
      avisosVoo.push(
        "o dia da semana informado pelo GDS não bate com a data — confira o ano",
      );
    }

    for (const p of [partida, chegada]) {
      if (!p.aeroporto) avisosVoo.push(`aeroporto ${p.codigo} não está na base`);
    }

    // Duração só sai quando os dois fusos são conhecidos. Sem isso seria um
    // palpite, e palpite com cara de número é pior que campo vazio.
    const temFuso = Boolean(partida.aeroporto && chegada.aeroporto);
    const bruta = Math.round((chegada.instante - partida.instante) / 60000);
    let duracaoMin: number | null = temFuso ? bruta : null;

    if (duracaoMin !== null && duracaoMin <= 0) {
      avisosVoo.push("a chegada não é depois da partida — confira as datas");
      duracaoMin = null;
    }

    // O status é campo próprio do voo (`status`/`confirmado`) e a tela o mostra
    // ali. Repetir na lista de avisos fazia o mesmo fato aparecer duas vezes
    // em cada trecho — e aviso repetido é aviso que ninguém lê.
    const st = lerStatus(s.status);

    const anterior = voos[voos.length - 1];
    const esperaMin = anterior
      ? Math.round((partida.instante - anterior.chegada.instante) / 60000)
      : null;
    const trocaAeroporto = Boolean(anterior && anterior.chegada.codigo !== partida.codigo);

    // Chegar num aeroporto e sair de outro é conexão com traslado, e o
    // passageiro que não sabe disso perde o voo. Em Londres, Nova York, Paris
    // e São Paulo acontece o tempo todo.
    if (trocaAeroporto && anterior) {
      avisosVoo.push(
        `troca de aeroporto: o voo anterior chega em ${anterior.chegada.codigo} e este parte de ${partida.codigo}`,
      );
    }

    voos.push({
      bruto: s,
      cia: { codigo: s.cia, nome: nomeCompanhia(s.cia) },
      numero: s.voo,
      partida,
      chegada,
      duracaoMin,
      confirmado: st.confirmado,
      status: st,
      esperaMin,
      trocaAeroporto,
      avisos: avisosVoo,
    });

    piso = new Date(Date.UTC(ano, dp.mes, dp.dia));
  }

  const primeiro = voos[0];
  const ultimo = voos[voos.length - 1];
  const completo = voos.every((v) => v.duracaoMin !== null);

  return {
    voos,
    ignoradas,
    avisos,
    totalMin:
      primeiro && ultimo && completo
        ? Math.round((ultimo.chegada.instante - primeiro.partida.instante) / 60000)
        : null,
    voandoMin: completo ? voos.reduce((soma, v) => soma + (v.duracaoMin ?? 0), 0) : null,
    todosConfirmados: voos.length > 0 && voos.every((v) => v.confirmado),
  };
}

/** 145 -> "2h25". */
export function duracaoTexto(min: number | null): string {
  if (min === null) return "—";
  return `${Math.floor(min / 60)}h${String(min % 60).padStart(2, "0")}`;
}
