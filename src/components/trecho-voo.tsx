"use client";

import { useId, useState, type CSSProperties } from "react";
import { visualDaCompanhia, type VisualCompanhia } from "@/lib/pnr/visual-companhias";
import { dataCurta, diasDepois, duracaoLonga, horaTexto } from "@/lib/pnr/formato";
import type { Ponta, Voo } from "@/lib/pnr/tipos";
import {
  IconeAlerta,
  IconeAviao,
  IconeCalendario,
  IconePino,
  IconeSeta,
} from "./icones";

/**
 * Mostrar ou não a faixa amarela de avisos abaixo de cada voo (code-share, dia
 * da semana, troca de aeroporto etc.).
 *
 * Desligada por decisão do dono: no dia a dia do agente os avisos poluíam a
 * tela. A **lógica continua intacta** — `montarItinerario` em
 * `lib/pnr/itinerario.ts` segue calculando `voo.avisos` (e o teste cobra), só
 * não é desenhada. Para reativar, volte para `true`; nada mais precisa mudar.
 */
const MOSTRAR_AVISOS_VOO = false;

/**
 * Um trecho do itinerário: uma linha da `TabelaVoos`.
 *
 * O layout é o mesmo para qualquer companhia. O que vem de `visualDaCompanhia`
 * — selo, cor, nome de exibição — mora só na primeira coluna; o resto é o
 * desenho do Copiloto. Nenhum dado do voo é alterado aqui: só lido e escrito.
 */
export function TrechoVoo({ voo }: { voo: Voo }) {
  const [aberto, setAberto] = useState(false);
  const idDetalhes = useId();
  const cia = visualDaCompanhia(voo.cia.codigo, voo.cia.nome);
  const duracao = duracaoLonga(voo.duracaoMin);
  const poltronas = voo.bruto.poltronas.map((p) => p.lugar);

  return (
    <li className={"cg-trecho" + (aberto ? " is-aberto" : "")}>
      <div className="cg-trecho-linha">
        {/* ---- voo ---- */}
        <div className="cg-tc cg-tc-voo">
          <SeloCompanhia cia={cia} />
          <div className="cg-tc-voo-texto">
            <b className="cg-tc-cia">{cia.nome}</b>
            <span className="cg-tc-numero">
              {voo.cia.codigo} {voo.numero}
            </span>
            {poltronas.length ? (
              <span className="cg-tc-etiquetas">
                <span className="cg-tc-extra">
                  {poltronas.length === 1 ? "Poltrona " : "Poltronas "}
                  {poltronas.join(" · ")}
                </span>
              </span>
            ) : null}
          </div>
        </div>

        <PontaVoo classe="cg-tc-origem" rotulo="Partida" p={voo.partida} />

        {/* ---- trajetória ---- */}
        <div className="cg-tc cg-tc-trajeto">
          <div className="cg-trajeto" aria-hidden="true">
            <span className="cg-trajeto-ponto" />
            <span className="cg-trajeto-traco" />
            <IconeAviao size={22} rotacao={90} className="cg-trajeto-aviao" />
            <span className="cg-trajeto-traco" />
            <span className="cg-trajeto-ponto" />
          </div>
          {/* Sem os dois fusos, duração seria palpite — e palpite com cara de
              número é pior que campo vazio (ver `montarItinerario`). */}
          {duracao ? (
            <span className="cg-trajeto-duracao">
              <span className="cg-sr-only">Duração </span>
              {duracao}
            </span>
          ) : (
            <span className="cg-trajeto-duracao is-vazio">duração indisponível</span>
          )}
        </div>

        <PontaVoo classe="cg-tc-destino" rotulo="Chegada" p={voo.chegada} />

        <HorarioVoo classe="cg-tc-hpart" rotulo="Partida" p={voo.partida} />
        <HorarioVoo
          classe="cg-tc-hcheg"
          rotulo="Chegada"
          p={voo.chegada}
          diasDepois={diasDepois(voo.partida, voo.chegada)}
        />

        <div className="cg-tc cg-tc-mais">
          <button
            type="button"
            className="cg-trecho-expandir"
            aria-expanded={aberto}
            aria-controls={idDetalhes}
            onClick={() => setAberto((a) => !a)}
          >
            <span className="cg-sr-only">
              {aberto ? "Ocultar detalhes" : "Ver detalhes"} do voo {voo.cia.codigo} {voo.numero}
            </span>
            <IconeSeta size={20} />
          </button>
        </div>
      </div>

      {/* Faixa amarela de avisos (troca de aeroporto, data que não bate,
          aeroporto fora da base). Oculta por `MOSTRAR_AVISOS_VOO` — ver a nota
          no topo do arquivo. Os dados seguem em `voo.avisos`, só não desenham. */}
      {MOSTRAR_AVISOS_VOO && voo.avisos.length ? (
        <ul className="cg-trecho-avisos">
          {voo.avisos.map((a) => (
            <li key={a}>
              <IconeAlerta size={15} />
              <span>{a}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <div id={idDetalhes} className="cg-trecho-detalhes" hidden={!aberto}>
        <dl>
          <div>
            <dt>Classe de reserva</dt>
            <dd>{voo.bruto.classe || "—"}</dd>
          </div>
          <div>
            <dt>Lugares no trecho</dt>
            <dd>{voo.bruto.assentos || "—"}</dd>
          </div>
          <div className="is-largo">
            <dt>Linha do GDS</dt>
            <dd>
              <code>{voo.bruto.linha}</code>
            </dd>
          </div>
        </dl>
      </div>
    </li>
  );
}

/**
 * O selo da companhia: o logotipo oficial quando houver arquivo, senão a sigla
 * na cor da companhia. Mesmo tamanho nos dois casos — logotipo não estica a
 * coluna nem empurra o resto da linha.
 */
function SeloCompanhia({ cia }: { cia: VisualCompanhia }) {
  if (cia.logo) {
    return (
      <span className="cg-selo is-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={cia.logo} alt="" width={44} height={44} />
      </span>
    );
  }
  const estilo = {
    background: cia.cor,
    color: cia.corTexto,
    "--cg-selo-faixa": cia.corSecundaria ?? "transparent",
  } as CSSProperties;
  return (
    <span className={"cg-selo" + (cia.generica ? " is-generico" : "")} style={estilo} aria-hidden="true">
      {cia.codigo}
    </span>
  );
}

function PontaVoo({ classe, rotulo, p }: { classe: string; rotulo: string; p: Ponta }) {
  return (
    <div className={`cg-tc cg-tc-ponta ${classe}`}>
      <span className="cg-tc-rotulo">{rotulo}</span>
      <b className="cg-tc-iata">{p.codigo}</b>
      {p.aeroporto ? (
        <>
          <span className="cg-tc-aero">{p.aeroporto.nome}</span>
          <span className="cg-tc-cidade">
            <IconePino size={14} />
            {p.aeroporto.cidade}, {p.aeroporto.pais}
          </span>
        </>
      ) : (
        // Sem nome inventado: só o código, e o motivo.
        <span className="cg-tc-aero is-vazio">aeroporto fora da base</span>
      )}
    </div>
  );
}

function HorarioVoo({
  classe,
  rotulo,
  p,
  diasDepois = 0,
}: {
  classe: string;
  rotulo: string;
  p: Ponta;
  diasDepois?: number;
}) {
  return (
    <div className={`cg-tc cg-tc-hora ${classe}`}>
      <span className="cg-tc-rotulo">{rotulo}</span>
      <span className="cg-tc-data">
        <IconeCalendario size={16} />
        {dataCurta(p)}
      </span>
      <b className="cg-tc-hhmm">
        {horaTexto(p)}
        {diasDepois > 0 ? (
          <sup className="cg-tc-mais-dia" title="Chega em outro dia, no horário local do destino">
            +{diasDepois}
          </sup>
        ) : null}
      </b>
    </div>
  );
}
