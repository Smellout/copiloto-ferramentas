/**
 * Status do segmento — o `HK1` / `DK1` que vem depois do trecho.
 *
 * A sigla é a primeira coisa que separa uma **cotação** de um **bilhete
 * emitido**, e quem recebe o itinerário não sabe ler sigla de GDS. Por isso
 * cada uma vira frase em português.
 *
 * Vocabulário, porque as traduções que circulam por aí confundem: "Hold" virou
 * "Retenção" em tabela traduzida à máquina, e `HK` é *Holding Confirmed*, não
 * "retenção confirmada". Na mesma tabela o código de aconselhamento `US`
 * (*Unable to accept sale*) aparece como "EUA" — é artefato de tradução, não
 * existe código `EUA`.
 *
 * **Códigos de status** (aparecem na linha do segmento) são os daqui.
 * **Códigos de aconselhamento** — `KK`, `KL`, `TK`, `US`, `UU`, `TL`, `TN`,
 * `HX` — são a resposta da companhia e viram um destes: `KK`/`KL`/`TK` → `HK`,
 * `US`/`UU`/`TL` → `HL`, `TN` → `HN`, `HX` → `NO`.
 */

export type Status = {
  /** frase para o documento que o passageiro lê */
  descricao: string;
  /** o assento está garantido? */
  confirmado: boolean;
};

export const STATUS: Record<string, Status> = {
  HK: { descricao: "confirmado", confirmado: true },
  RR: { descricao: "reserva reconfirmada", confirmado: true },

  // Selecionado pelo agente e ainda não confirmado pela companhia. É o estado
  // normal de quem está montando cotação — e, por isso, o mais comum aqui.
  DK: { descricao: "assento selecionado, ainda não confirmado", confirmado: false },

  HL: { descricao: "em lista de espera", confirmado: false },
  HN: { descricao: "pendente de confirmação da companhia", confirmado: false },
  NO: { descricao: "sem ação da companhia", confirmado: false },
};

/**
 * Sigla desconhecida **não vira confirmada**. A assimetria é deliberada: dizer
 * "não confirmado" para um voo confirmado custa uma conferência do agente;
 * dizer "confirmado" para um que não está custa passageiro no aeroporto sem
 * assento. Na dúvida, erramos para o lado barato.
 */
export function lerStatus(sigla: string): Status {
  const s = sigla.toUpperCase();
  return STATUS[s] ?? { descricao: `status ${s} não reconhecido`, confirmado: false };
}
