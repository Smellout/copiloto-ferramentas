import { BASE, ZONAS } from "./aeroportos-base";

/**
 * Aeroportos: nome, cidade, país e **fuso IANA**.
 *
 * O fuso é o campo que justifica esta tabela existir. Nome e cidade são
 * enfeite bonito; sem o fuso, a duração do voo sai errada — e errada de um
 * jeito que o passageiro percebe.
 *
 * São duas camadas:
 *
 *   1. `CURADOS`, escrita à mão, com os nomes **em português** das cidades que
 *      agente brasileiro mais emite — Gotemburgo e não Göteborg, Istambul e
 *      não Istanbul, Munique e não München. Também encurta nomes de aeroporto
 *      que num itinerário só competem por espaço com o que importa.
 *   2. `aeroportos-base.ts`, gerada da OurAirports: 5.459 aeroportos com voo
 *      regular, cobrindo o mundo. É a rede de segurança.
 *
 * A curada ganha da base. Antes de ela existir, cada tela real que o usuário
 * mandava achava um aeroporto faltando — DUB, depois DCA e LGA, depois GOT.
 * Adicionar de dez em dez não ia terminar nunca.
 */
export type Aeroporto = {
  /** nome do aeroporto */
  nome: string;
  cidade: string;
  pais: string;
  /** zona IANA, com as regras de horário de verão */
  zona: string;
};

const CURADOS: Record<string, Aeroporto> = {
  // ---- Brasil ----
  GRU: { nome: "Guarulhos", cidade: "São Paulo", pais: "Brasil", zona: "America/Sao_Paulo" },
  CGH: { nome: "Congonhas", cidade: "São Paulo", pais: "Brasil", zona: "America/Sao_Paulo" },
  VCP: { nome: "Viracopos", cidade: "Campinas", pais: "Brasil", zona: "America/Sao_Paulo" },
  GIG: { nome: "Galeão", cidade: "Rio de Janeiro", pais: "Brasil", zona: "America/Sao_Paulo" },
  SDU: { nome: "Santos Dumont", cidade: "Rio de Janeiro", pais: "Brasil", zona: "America/Sao_Paulo" },
  BSB: { nome: "Presidente Juscelino Kubitschek", cidade: "Brasília", pais: "Brasil", zona: "America/Sao_Paulo" },
  CNF: { nome: "Confins", cidade: "Belo Horizonte", pais: "Brasil", zona: "America/Sao_Paulo" },
  POA: { nome: "Salgado Filho", cidade: "Porto Alegre", pais: "Brasil", zona: "America/Sao_Paulo" },
  CWB: { nome: "Afonso Pena", cidade: "Curitiba", pais: "Brasil", zona: "America/Sao_Paulo" },
  FLN: { nome: "Hercílio Luz", cidade: "Florianópolis", pais: "Brasil", zona: "America/Sao_Paulo" },
  SSA: { nome: "Deputado Luís Eduardo Magalhães", cidade: "Salvador", pais: "Brasil", zona: "America/Bahia" },
  REC: { nome: "Guararapes", cidade: "Recife", pais: "Brasil", zona: "America/Recife" },
  FOR: { nome: "Pinto Martins", cidade: "Fortaleza", pais: "Brasil", zona: "America/Fortaleza" },
  NAT: { nome: "Aluízio Alves", cidade: "Natal", pais: "Brasil", zona: "America/Fortaleza" },
  MCZ: { nome: "Zumbi dos Palmares", cidade: "Maceió", pais: "Brasil", zona: "America/Maceio" },
  BEL: { nome: "Val de Cans", cidade: "Belém", pais: "Brasil", zona: "America/Belem" },
  MAO: { nome: "Eduardo Gomes", cidade: "Manaus", pais: "Brasil", zona: "America/Manaus" },
  CGB: { nome: "Marechal Rondon", cidade: "Cuiabá", pais: "Brasil", zona: "America/Cuiaba" },
  CGR: { nome: "Campo Grande", cidade: "Campo Grande", pais: "Brasil", zona: "America/Campo_Grande" },
  IGU: { nome: "Cataratas", cidade: "Foz do Iguaçu", pais: "Brasil", zona: "America/Sao_Paulo" },
  VIX: { nome: "Eurico de Aguiar Salles", cidade: "Vitória", pais: "Brasil", zona: "America/Sao_Paulo" },
  GYN: { nome: "Santa Genoveva", cidade: "Goiânia", pais: "Brasil", zona: "America/Sao_Paulo" },
  SLZ: { nome: "Marechal Cunha Machado", cidade: "São Luís", pais: "Brasil", zona: "America/Fortaleza" },
  THE: { nome: "Senador Petrônio Portella", cidade: "Teresina", pais: "Brasil", zona: "America/Fortaleza" },
  JPA: { nome: "Castro Pinto", cidade: "João Pessoa", pais: "Brasil", zona: "America/Fortaleza" },
  AJU: { nome: "Santa Maria", cidade: "Aracaju", pais: "Brasil", zona: "America/Maceio" },
  PMW: { nome: "Palmas", cidade: "Palmas", pais: "Brasil", zona: "America/Araguaina" },

  // ---- América do Sul ----
  AEP: { nome: "Jorge Newbery", cidade: "Buenos Aires", pais: "Argentina", zona: "America/Argentina/Buenos_Aires" },
  EZE: { nome: "Ministro Pistarini", cidade: "Buenos Aires", pais: "Argentina", zona: "America/Argentina/Buenos_Aires" },
  COR: { nome: "Ingeniero Taravella", cidade: "Córdoba", pais: "Argentina", zona: "America/Argentina/Cordoba" },
  MDZ: { nome: "El Plumerillo", cidade: "Mendoza", pais: "Argentina", zona: "America/Argentina/Mendoza" },
  SCL: { nome: "Arturo Merino Benítez", cidade: "Santiago", pais: "Chile", zona: "America/Santiago" },
  LIM: { nome: "Jorge Chávez", cidade: "Lima", pais: "Peru", zona: "America/Lima" },
  BOG: { nome: "El Dorado", cidade: "Bogotá", pais: "Colômbia", zona: "America/Bogota" },
  MDE: { nome: "José María Córdova", cidade: "Medellín", pais: "Colômbia", zona: "America/Bogota" },
  CTG: { nome: "Rafael Núñez", cidade: "Cartagena", pais: "Colômbia", zona: "America/Bogota" },
  UIO: { nome: "Mariscal Sucre", cidade: "Quito", pais: "Equador", zona: "America/Guayaquil" },
  MVD: { nome: "Carrasco", cidade: "Montevidéu", pais: "Uruguai", zona: "America/Montevideo" },
  ASU: { nome: "Silvio Pettirossi", cidade: "Assunção", pais: "Paraguai", zona: "America/Asuncion" },
  VVI: { nome: "Viru Viru", cidade: "Santa Cruz de la Sierra", pais: "Bolívia", zona: "America/La_Paz" },
  CCS: { nome: "Simón Bolívar", cidade: "Caracas", pais: "Venezuela", zona: "America/Caracas" },
  // A base derivada de coordenada põe Ushuaia em America/Punta_Arenas, que é
  // Chile: a fronteira na Terra do Fogo confunde o mapa de zonas. Mesmo
  // offset, país errado.
  USH: { nome: "Malvinas Argentinas", cidade: "Ushuaia", pais: "Argentina", zona: "America/Argentina/Ushuaia" },
  PTY: { nome: "Tocumen", cidade: "Cidade do Panamá", pais: "Panamá", zona: "America/Panama" },

  // ---- América do Norte e Central ----
  MIA: { nome: "Miami International", cidade: "Miami", pais: "Estados Unidos", zona: "America/New_York" },
  MCO: { nome: "Orlando International", cidade: "Orlando", pais: "Estados Unidos", zona: "America/New_York" },
  JFK: { nome: "John F. Kennedy", cidade: "Nova York", pais: "Estados Unidos", zona: "America/New_York" },
  EWR: { nome: "Newark Liberty", cidade: "Nova York", pais: "Estados Unidos", zona: "America/New_York" },
  LAX: { nome: "Los Angeles International", cidade: "Los Angeles", pais: "Estados Unidos", zona: "America/Los_Angeles" },
  IAH: { nome: "George Bush", cidade: "Houston", pais: "Estados Unidos", zona: "America/Chicago" },
  DFW: { nome: "Dallas/Fort Worth", cidade: "Dallas", pais: "Estados Unidos", zona: "America/Chicago" },
  ATL: { nome: "Hartsfield-Jackson", cidade: "Atlanta", pais: "Estados Unidos", zona: "America/New_York" },
  ORD: { nome: "O'Hare", cidade: "Chicago", pais: "Estados Unidos", zona: "America/Chicago" },
  LGA: { nome: "LaGuardia", cidade: "Nova York", pais: "Estados Unidos", zona: "America/New_York" },
  DCA: { nome: "Ronald Reagan National", cidade: "Washington", pais: "Estados Unidos", zona: "America/New_York" },
  IAD: { nome: "Dulles", cidade: "Washington", pais: "Estados Unidos", zona: "America/New_York" },
  BWI: { nome: "Baltimore/Washington", cidade: "Baltimore", pais: "Estados Unidos", zona: "America/New_York" },
  BOS: { nome: "Logan", cidade: "Boston", pais: "Estados Unidos", zona: "America/New_York" },
  PHL: { nome: "Philadelphia International", cidade: "Filadélfia", pais: "Estados Unidos", zona: "America/New_York" },
  CLT: { nome: "Charlotte Douglas", cidade: "Charlotte", pais: "Estados Unidos", zona: "America/New_York" },
  DTW: { nome: "Detroit Metropolitan", cidade: "Detroit", pais: "Estados Unidos", zona: "America/Detroit" },
  MSP: { nome: "Minneapolis-Saint Paul", cidade: "Mineápolis", pais: "Estados Unidos", zona: "America/Chicago" },
  FLL: { nome: "Fort Lauderdale-Hollywood", cidade: "Fort Lauderdale", pais: "Estados Unidos", zona: "America/New_York" },
  TPA: { nome: "Tampa International", cidade: "Tampa", pais: "Estados Unidos", zona: "America/New_York" },
  SFO: { nome: "San Francisco International", cidade: "São Francisco", pais: "Estados Unidos", zona: "America/Los_Angeles" },
  SEA: { nome: "Seattle-Tacoma", cidade: "Seattle", pais: "Estados Unidos", zona: "America/Los_Angeles" },
  LAS: { nome: "Harry Reid", cidade: "Las Vegas", pais: "Estados Unidos", zona: "America/Los_Angeles" },
  DEN: { nome: "Denver International", cidade: "Denver", pais: "Estados Unidos", zona: "America/Denver" },
  PHX: { nome: "Sky Harbor", cidade: "Phoenix", pais: "Estados Unidos", zona: "America/Phoenix" },
  YUL: { nome: "Trudeau", cidade: "Montreal", pais: "Canadá", zona: "America/Toronto" },
  YVR: { nome: "Vancouver International", cidade: "Vancouver", pais: "Canadá", zona: "America/Vancouver" },
  YYZ: { nome: "Pearson", cidade: "Toronto", pais: "Canadá", zona: "America/Toronto" },
  MEX: { nome: "Benito Juárez", cidade: "Cidade do México", pais: "México", zona: "America/Mexico_City" },
  CUN: { nome: "Cancún", cidade: "Cancún", pais: "México", zona: "America/Cancun" },
  PUJ: { nome: "Punta Cana", cidade: "Punta Cana", pais: "República Dominicana", zona: "America/Santo_Domingo" },

  // ---- Europa ----
  LIS: { nome: "Humberto Delgado", cidade: "Lisboa", pais: "Portugal", zona: "Europe/Lisbon" },
  OPO: { nome: "Francisco Sá Carneiro", cidade: "Porto", pais: "Portugal", zona: "Europe/Lisbon" },
  MAD: { nome: "Barajas", cidade: "Madri", pais: "Espanha", zona: "Europe/Madrid" },
  BCN: { nome: "El Prat", cidade: "Barcelona", pais: "Espanha", zona: "Europe/Madrid" },
  CDG: { nome: "Charles de Gaulle", cidade: "Paris", pais: "França", zona: "Europe/Paris" },
  ORY: { nome: "Orly", cidade: "Paris", pais: "França", zona: "Europe/Paris" },
  LHR: { nome: "Heathrow", cidade: "Londres", pais: "Reino Unido", zona: "Europe/London" },
  LGW: { nome: "Gatwick", cidade: "Londres", pais: "Reino Unido", zona: "Europe/London" },
  FRA: { nome: "Frankfurt am Main", cidade: "Frankfurt", pais: "Alemanha", zona: "Europe/Berlin" },
  MUC: { nome: "Franz Josef Strauss", cidade: "Munique", pais: "Alemanha", zona: "Europe/Berlin" },
  AMS: { nome: "Schiphol", cidade: "Amsterdã", pais: "Holanda", zona: "Europe/Amsterdam" },
  FCO: { nome: "Fiumicino", cidade: "Roma", pais: "Itália", zona: "Europe/Rome" },
  MXP: { nome: "Malpensa", cidade: "Milão", pais: "Itália", zona: "Europe/Rome" },
  BRI: { nome: "Karol Wojtyła", cidade: "Bari", pais: "Itália", zona: "Europe/Rome" },
  ZRH: { nome: "Zurique", cidade: "Zurique", pais: "Suíça", zona: "Europe/Zurich" },
  IST: { nome: "Istanbul Airport", cidade: "Istambul", pais: "Turquia", zona: "Europe/Istanbul" },
  SAW: { nome: "Sabiha Gökçen", cidade: "Istambul", pais: "Turquia", zona: "Europe/Istanbul" },
  BJV: { nome: "Milas-Bodrum", cidade: "Bodrum", pais: "Turquia", zona: "Europe/Istanbul" },
  ATH: { nome: "Eleftherios Venizelos", cidade: "Atenas", pais: "Grécia", zona: "Europe/Athens" },
  GOT: { nome: "Landvetter", cidade: "Gotemburgo", pais: "Suécia", zona: "Europe/Stockholm" },
  BLL: { nome: "Billund", cidade: "Billund", pais: "Dinamarca", zona: "Europe/Copenhagen" },
  EDI: { nome: "Edimburgo", cidade: "Edimburgo", pais: "Reino Unido", zona: "Europe/London" },
  MAN: { nome: "Manchester", cidade: "Manchester", pais: "Reino Unido", zona: "Europe/London" },
  DUS: { nome: "Düsseldorf", cidade: "Düsseldorf", pais: "Alemanha", zona: "Europe/Berlin" },
  HAM: { nome: "Hamburgo", cidade: "Hamburgo", pais: "Alemanha", zona: "Europe/Berlin" },
  BER: { nome: "Brandenburgo", cidade: "Berlim", pais: "Alemanha", zona: "Europe/Berlin" },
  GVA: { nome: "Genebra", cidade: "Genebra", pais: "Suíça", zona: "Europe/Zurich" },
  LYS: { nome: "Saint-Exupéry", cidade: "Lyon", pais: "França", zona: "Europe/Paris" },
  NCE: { nome: "Côte d'Azur", cidade: "Nice", pais: "França", zona: "Europe/Paris" },
  TLS: { nome: "Blagnac", cidade: "Toulouse", pais: "França", zona: "Europe/Paris" },
  BIO: { nome: "Bilbao", cidade: "Bilbao", pais: "Espanha", zona: "Europe/Madrid" },
  VLC: { nome: "Valência", cidade: "Valência", pais: "Espanha", zona: "Europe/Madrid" },
  PMI: { nome: "Son Sant Joan", cidade: "Palma de Maiorca", pais: "Espanha", zona: "Europe/Madrid" },
  TFS: { nome: "Tenerife Sul", cidade: "Tenerife", pais: "Espanha", zona: "Atlantic/Canary" },
  LPA: { nome: "Gran Canaria", cidade: "Las Palmas", pais: "Espanha", zona: "Atlantic/Canary" },
  BLQ: { nome: "Guglielmo Marconi", cidade: "Bolonha", pais: "Itália", zona: "Europe/Rome" },
  FLR: { nome: "Peretola", cidade: "Florença", pais: "Itália", zona: "Europe/Rome" },
  PSA: { nome: "Galileo Galilei", cidade: "Pisa", pais: "Itália", zona: "Europe/Rome" },
  CTA: { nome: "Fontanarossa", cidade: "Catânia", pais: "Itália", zona: "Europe/Rome" },
  DBV: { nome: "Dubrovnik", cidade: "Dubrovnik", pais: "Croácia", zona: "Europe/Zagreb" },
  ZAG: { nome: "Franjo Tuđman", cidade: "Zagreb", pais: "Croácia", zona: "Europe/Zagreb" },
  OTP: { nome: "Henri Coandă", cidade: "Bucareste", pais: "Romênia", zona: "Europe/Bucharest" },
  SOF: { nome: "Sófia", cidade: "Sófia", pais: "Bulgária", zona: "Europe/Sofia" },
  KEF: { nome: "Keflavík", cidade: "Reykjavík", pais: "Islândia", zona: "Atlantic/Reykjavik" },
  SVO: { nome: "Sheremetyevo", cidade: "Moscou", pais: "Rússia", zona: "Europe/Moscow" },
  DUB: { nome: "Dublin Airport", cidade: "Dublin", pais: "Irlanda", zona: "Europe/Dublin" },
  BRU: { nome: "Zaventem", cidade: "Bruxelas", pais: "Bélgica", zona: "Europe/Brussels" },
  VIE: { nome: "Viena International", cidade: "Viena", pais: "Áustria", zona: "Europe/Vienna" },
  CPH: { nome: "Kastrup", cidade: "Copenhague", pais: "Dinamarca", zona: "Europe/Copenhagen" },
  ARN: { nome: "Arlanda", cidade: "Estocolmo", pais: "Suécia", zona: "Europe/Stockholm" },
  OSL: { nome: "Gardermoen", cidade: "Oslo", pais: "Noruega", zona: "Europe/Oslo" },
  HEL: { nome: "Vantaa", cidade: "Helsinque", pais: "Finlândia", zona: "Europe/Helsinki" },
  WAW: { nome: "Chopin", cidade: "Varsóvia", pais: "Polônia", zona: "Europe/Warsaw" },
  PRG: { nome: "Václav Havel", cidade: "Praga", pais: "Tchéquia", zona: "Europe/Prague" },
  BUD: { nome: "Ferenc Liszt", cidade: "Budapeste", pais: "Hungria", zona: "Europe/Budapest" },
  VCE: { nome: "Marco Polo", cidade: "Veneza", pais: "Itália", zona: "Europe/Rome" },
  NAP: { nome: "Capodichino", cidade: "Nápoles", pais: "Itália", zona: "Europe/Rome" },
  AGP: { nome: "Costa del Sol", cidade: "Málaga", pais: "Espanha", zona: "Europe/Madrid" },
  SVQ: { nome: "San Pablo", cidade: "Sevilha", pais: "Espanha", zona: "Europe/Madrid" },
  FNC: { nome: "Cristiano Ronaldo", cidade: "Funchal", pais: "Portugal", zona: "Atlantic/Madeira" },
  PDL: { nome: "João Paulo II", cidade: "Ponta Delgada", pais: "Portugal", zona: "Atlantic/Azores" },

  // ---- África, Oriente Médio e Ásia ----
  JNB: { nome: "O. R. Tambo", cidade: "Joanesburgo", pais: "África do Sul", zona: "Africa/Johannesburg" },
  CPT: { nome: "Cidade do Cabo", cidade: "Cidade do Cabo", pais: "África do Sul", zona: "Africa/Johannesburg" },
  CAI: { nome: "Cairo International", cidade: "Cairo", pais: "Egito", zona: "Africa/Cairo" },
  DXB: { nome: "Dubai International", cidade: "Dubai", pais: "Emirados Árabes", zona: "Asia/Dubai" },
  DOH: { nome: "Hamad", cidade: "Doha", pais: "Catar", zona: "Asia/Qatar" },
  TLV: { nome: "Ben Gurion", cidade: "Tel Aviv", pais: "Israel", zona: "Asia/Jerusalem" },
  NRT: { nome: "Narita", cidade: "Tóquio", pais: "Japão", zona: "Asia/Tokyo" },
  HND: { nome: "Haneda", cidade: "Tóquio", pais: "Japão", zona: "Asia/Tokyo" },
  HKG: { nome: "Hong Kong International", cidade: "Hong Kong", pais: "China", zona: "Asia/Hong_Kong" },
  SIN: { nome: "Changi", cidade: "Singapura", pais: "Singapura", zona: "Asia/Singapore" },
  SYD: { nome: "Kingsford Smith", cidade: "Sydney", pais: "Austrália", zona: "Australia/Sydney" },
  MEL: { nome: "Tullamarine", cidade: "Melbourne", pais: "Austrália", zona: "Australia/Melbourne" },
  AKL: { nome: "Auckland", cidade: "Auckland", pais: "Nova Zelândia", zona: "Pacific/Auckland" },
  ICN: { nome: "Incheon", cidade: "Seul", pais: "Coreia do Sul", zona: "Asia/Seoul" },
  PEK: { nome: "Capital", cidade: "Pequim", pais: "China", zona: "Asia/Shanghai" },
  PVG: { nome: "Pudong", cidade: "Xangai", pais: "China", zona: "Asia/Shanghai" },
  BKK: { nome: "Suvarnabhumi", cidade: "Bangkok", pais: "Tailândia", zona: "Asia/Bangkok" },
  DEL: { nome: "Indira Gandhi", cidade: "Nova Délhi", pais: "Índia", zona: "Asia/Kolkata" },
  BOM: { nome: "Chhatrapati Shivaji", cidade: "Mumbai", pais: "Índia", zona: "Asia/Kolkata" },
  AUH: { nome: "Zayed", cidade: "Abu Dhabi", pais: "Emirados Árabes", zona: "Asia/Dubai" },
  ADD: { nome: "Bole", cidade: "Adis Abeba", pais: "Etiópia", zona: "Africa/Addis_Ababa" },
  NBO: { nome: "Jomo Kenyatta", cidade: "Nairóbi", pais: "Quênia", zona: "Africa/Nairobi" },
  CMN: { nome: "Mohammed V", cidade: "Casablanca", pais: "Marrocos", zona: "Africa/Casablanca" },
  LAD: { nome: "Quatro de Fevereiro", cidade: "Luanda", pais: "Angola", zona: "Africa/Luanda" },
  MPM: { nome: "Maputo", cidade: "Maputo", pais: "Moçambique", zona: "Africa/Maputo" },
  SID: { nome: "Amílcar Cabral", cidade: "Ilha do Sal", pais: "Cabo Verde", zona: "Atlantic/Cape_Verde" },
};

/**
 * Nome do país em português a partir do ISO de duas letras.
 *
 * A base guarda só "BR", "SE", "IE" — traduzir aqui evita mandar 250 nomes de
 * país no bundle, e ainda sai na língua de quem estiver lendo.
 */
const PAISES = (() => {
  try {
    return new Intl.DisplayNames(["pt-BR"], { type: "region" });
  } catch {
    return null;
  }
})();

/**
 * A base é uma string só, e vira Map na primeira consulta.
 *
 * São 5.459 linhas: montar o Map no carregamento do módulo custaria esse
 * trabalho em toda visita, inclusive nas que nunca abrem o decodificador.
 */
let base: Map<string, Aeroporto> | null = null;

function lerBase(): Map<string, Aeroporto> {
  if (base) return base;
  base = new Map();
  for (const linha of BASE.split("\n")) {
    const [iata, nome, cidade, pais, zona] = linha.split("|");
    if (!iata) continue;
    base.set(iata, {
      nome,
      cidade,
      pais: (PAISES?.of(pais) ?? pais) || pais,
      zona: ZONAS[Number(zona)],
    });
  }
  return base;
}

export function acharAeroporto(codigo: string): Aeroporto | null {
  const c = codigo.toUpperCase();
  return CURADOS[c] ?? lerBase().get(c) ?? null;
}

/** Só para os testes conferirem a curada contra a base. */
export const CURADOS_PARA_TESTE = CURADOS;
