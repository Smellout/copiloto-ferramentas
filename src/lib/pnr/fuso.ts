/**
 * Conversão de hora local de aeroporto para instante absoluto.
 *
 * Sem `server-only` de propósito, ao contrário de `fpcc/airlines.ts`: aqui
 * nada é segredo, e rodar no navegador é o ponto — o itinerário colado tem
 * nome de passageiro e localizador, e o que não sai da máquina do agente não
 * precisa ser protegido no nosso servidor.
 *
 * O GDS dá hora **local dos dois lados**. Subtrair uma da outra dá a duração
 * errada sempre que os fusos diferem: BRI 08:50 → IST 11:55 parece 3h05 e são
 * 2h05. Por isso a base de aeroportos carrega o fuso IANA, e não um offset
 * fixo — offset fixo erra metade do ano por causa do horário de verão.
 *
 * Usa só `Intl`, que já sabe as regras de horário de verão de cada zona. Sem
 * biblioteca de data: uma a mais no bundle do cliente por algo que a
 * plataforma faz nativamente não se paga.
 */

/** Quantos minutos a zona está à frente do UTC no instante dado. */
export function offsetMinutos(zona: string, instante: number): number {
  const f = new Intl.DateTimeFormat("en-US", {
    timeZone: zona,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const p: Record<string, string> = {};
  for (const parte of f.formatToParts(new Date(instante))) p[parte.type] = parte.value;

  // `hour` volta como "24" à meia-noite em algumas engines; normaliza.
  const hora = Number(p.hour) % 24;
  const comoSeUtc = Date.UTC(
    Number(p.year),
    Number(p.month) - 1,
    Number(p.day),
    hora,
    Number(p.minute),
    Number(p.second),
  );
  return (comoSeUtc - instante) / 60000;
}

/**
 * Hora local de um aeroporto → instante absoluto (epoch ms).
 *
 * O problema é circular: para saber o offset é preciso o instante, e para
 * saber o instante é preciso o offset. Resolve com um palpite e uma
 * reconferência — o segundo passo só muda algo nas poucas horas ao redor da
 * virada do horário de verão, que é justamente quando o palpite erra.
 */
export function localParaInstante(
  ano: number,
  mes: number, // 0-11
  dia: number,
  hora: number,
  minuto: number,
  zona: string,
): number {
  const palpite = Date.UTC(ano, mes, dia, hora, minuto);
  const off1 = offsetMinutos(zona, palpite);
  const instante = palpite - off1 * 60000;

  const off2 = offsetMinutos(zona, instante);
  return off2 === off1 ? instante : palpite - off2 * 60000;
}
