import type { Ponta } from "./tipos";

/**
 * Como o itinerário escreve datas, horas e durações na tela — no padrão
 * brasileiro, e sem reconverter fuso: a `Ponta` já traz o dia e a hora locais
 * de lá, que é o que o passageiro vê no cartão de embarque.
 */

const SEMANA = new Intl.DateTimeFormat("pt-BR", { weekday: "short", timeZone: "UTC" });
const MES = new Intl.DateTimeFormat("pt-BR", { month: "short", timeZone: "UTC" });

function diaUtc(p: Ponta): Date {
  return new Date(Date.UTC(p.ano, p.mes, p.dia));
}

/** "qua. 13/out." */
export function dataCurta(p: Ponta): string {
  const d = diaUtc(p);
  return `${SEMANA.format(d)} ${String(p.dia).padStart(2, "0")}/${MES.format(d)}`;
}

/** "18:45" */
export function horaTexto(p: Ponta): string {
  return `${String(p.hora).padStart(2, "0")}:${String(p.minuto).padStart(2, "0")}`;
}

/** Quantos dias de calendário a chegada está depois da partida (o "+1" do GDS). */
export function diasDepois(partida: Ponta, chegada: Ponta): number {
  return Math.round((diaUtc(chegada).getTime() - diaUtc(partida).getTime()) / 86_400_000);
}

/** 65 -> "1h 05min"; 45 -> "45min"; sem dado, sem texto. */
export function duracaoLonga(min: number | null): string | null {
  if (min === null) return null;
  const h = Math.floor(min / 60);
  const m = String(min % 60).padStart(2, "0");
  return h ? `${h}h ${m}min` : `${Number(m)}min`;
}

/** Da primeira partida à última chegada, quando isso são dias e não horas. */
export function periodoTexto(min: number | null): string {
  if (min === null) return "—";
  const d = Math.max(1, Math.round(min / 1440));
  return `${d} ${d === 1 ? "dia" : "dias"}`;
}

/** Espera longa vira "3 dias"; curta vira "1h 40min". */
export function esperaTexto(min: number): string {
  if (min >= 1440) {
    const d = Math.round(min / 1440);
    return `${d} ${d === 1 ? "dia" : "dias"}`;
  }
  return duracaoLonga(min) ?? "—";
}
