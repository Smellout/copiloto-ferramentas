/**
 * Nome comercial por código IATA de companhia.
 *
 * **Não confundir com `fpcc/airlines.ts`.** Aquela tabela é o produto: guarda
 * códigos de financiamento, é `server-only` e nunca pode ir para o bundle.
 * Esta aqui é só tradução de sigla para nome, é pública, e roda no navegador.
 * Se um dia alguém tentar unificar as duas, é isto que precisa ser lembrado.
 *
 * Sigla desconhecida devolve `null`, e o itinerário mostra a sigla crua. Não
 * inventar nome é a mesma regra do código de financiamento — só que aqui o
 * custo de errar é vergonha, não bilhete recusado.
 */
export const COMPANHIAS: Record<string, string> = {
  // Brasil
  LA: "LATAM", JJ: "LATAM Brasil", G3: "GOL", AD: "Azul", O6: "Avianca Brasil",
  // Américas
  AR: "Aerolíneas Argentinas", AV: "Avianca", CM: "Copa Airlines", H2: "Sky Airline",
  AA: "American Airlines", UA: "United Airlines", DL: "Delta Air Lines",
  AC: "Air Canada", AM: "Aeroméxico", B6: "JetBlue", WN: "Southwest",
  // Europa
  TP: "TAP Air Portugal", IB: "Iberia", UX: "Air Europa", VY: "Vueling",
  AF: "Air France", KL: "KLM", BA: "British Airways", VS: "Virgin Atlantic",
  LH: "Lufthansa", LX: "Swiss", OS: "Austrian Airlines", SN: "Brussels Airlines",
  AZ: "ITA Airways", TK: "Turkish Airlines", A3: "Aegean Airlines",
  SK: "SAS", AY: "Finnair", LO: "LOT", FR: "Ryanair", U2: "easyJet",
  // África, Oriente Médio e Ásia
  SA: "South African Airways", ET: "Ethiopian Airlines", MS: "EgyptAir",
  EK: "Emirates", QR: "Qatar Airways", EY: "Etihad Airways",
  LY: "El Al", SV: "Saudia", MH: "Malaysia Airlines", SQ: "Singapore Airlines",
  CX: "Cathay Pacific", JL: "Japan Airlines", NH: "ANA", QF: "Qantas",
  CA: "Air China",
};

export function nomeCompanhia(codigo: string): string | null {
  return COMPANHIAS[codigo.toUpperCase()] ?? null;
}
