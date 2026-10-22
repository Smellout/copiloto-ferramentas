import { Fragment } from "react";
import { esperaTexto } from "@/lib/pnr/formato";
import type { Voo } from "@/lib/pnr/tipos";
import { TrechoVoo } from "./trecho-voo";
import { IconeAlerta, IconeAviao, IconeDecolagem, IconePouso, IconeRelogio } from "./icones";

/**
 * O itinerário em tabela: cabeçalho azul-marinho e um cartão por trecho, na
 * ordem em que o GDS listou. Serve para um voo, ida e volta ou vários trechos,
 * de uma ou de várias companhias — cada trecho se identifica sozinho.
 *
 * O cabeçalho e as linhas usam a mesma grade (ver `.cg-voos` no app.css):
 * é isso que mantém "Horário de partida" exatamente em cima das horas.
 */
export function TabelaVoos({ voos }: { voos: Voo[] }) {
  return (
    <div className="cg-voos">
      {/* Os rótulos das colunas para quem vê; cada célula também traz o seu,
          visível no celular e lido pelo leitor de tela. */}
      <div className="cg-voos-cab" aria-hidden="true">
        <span>
          <IconeAviao size={18} rotacao={90} /> Voo
        </span>
        <span>
          <IconeDecolagem size={19} />{" "}
          <Rotulo longo="Aeroporto de partida" curto="Origem" />
        </span>
        <span />
        <span>
          <IconePouso size={19} />{" "}
          <Rotulo longo="Aeroporto de chegada" curto="Destino" />
        </span>
        <span>
          <IconeRelogio size={18} />{" "}
          <Rotulo longo="Horário de partida" curto="Partida" />
        </span>
        <span>
          <IconeRelogio size={18} />{" "}
          <Rotulo longo="Horário de chegada" curto="Chegada" />
        </span>
        <span />
      </div>

      <ol className="cg-voos-lista">
        {voos.map((v, i) => (
          <Fragment key={i}>
            {i > 0 ? <Conexao anterior={voos[i - 1]} voo={v} /> : null}
            <TrechoVoo voo={v} />
          </Fragment>
        ))}
      </ol>
    </div>
  );
}

/**
 * Rótulo de coluna em duas versões: a do modelo, por extenso, e uma curta para
 * quando a tabela é estreita demais para ela caber numa linha (ver app.css).
 */
function Rotulo({ longo, curto }: { longo: string; curto: string }) {
  return (
    <>
      <span className="cg-vc-longo">{longo}</span>
      <span className="cg-vc-curto">{curto}</span>
    </>
  );
}

/**
 * O que acontece entre dois trechos — uma conexão nunca vira "voo direto".
 *
 * O tempo só aparece com os **dois fusos conhecidos**: sem eles o instante foi
 * montado como se fosse UTC, e um número desses seria inventado. Aí a linha diz
 * onde é a conexão, sem dizer quanto dura.
 */
function Conexao({ anterior, voo }: { anterior: Voo; voo: Voo }) {
  const chegada = anterior.chegada;
  const fusos = Boolean(chegada.aeroporto && voo.partida.aeroporto);
  const espera = fusos ? voo.esperaMin : null;
  const cidade = chegada.aeroporto?.cidade ?? chegada.codigo;

  // Um dia ou mais em solo é a viagem, não conexão: o passageiro ficou lá.
  const estadia = espera !== null && espera >= 1440;
  // Menos de 2h é onde passageiro perde voo — a mesma régua de antes.
  const curta = espera !== null && espera >= 0 && espera < 120;
  const incoerente = espera !== null && espera < 0;
  const alerta = curta || incoerente || voo.trocaAeroporto;

  let texto: string;
  if (incoerente) texto = `Conexão em ${cidade}: o próximo voo parte antes desta chegada — confira os horários`;
  else if (estadia) texto = `${esperaTexto(espera)} em ${cidade}`;
  else if (espera !== null) texto = `${curta ? "Conexão curta" : "Conexão"} de ${esperaTexto(espera)} em ${cidade}`;
  else texto = `Conexão em ${cidade}`;

  return (
    <li className={"cg-conexao" + (alerta ? " is-alerta" : "") + (estadia ? " is-estadia" : "")}>
      {alerta ? <IconeAlerta size={15} /> : <IconeRelogio size={15} />}
      <span>
        {texto}
        {voo.trocaAeroporto
          ? ` — troca de aeroporto: chega em ${chegada.codigo} e parte de ${voo.partida.codigo}`
          : ""}
      </span>
    </li>
  );
}
