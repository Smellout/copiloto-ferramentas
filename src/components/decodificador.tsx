"use client";

import { useEffect, useMemo, useState } from "react";
import { lerGds } from "@/lib/pnr/gds";
import { lerPassageiros } from "@/lib/pnr/passageiros";
import { montarItinerario } from "@/lib/pnr/itinerario";
import { duracaoLonga, periodoTexto } from "@/lib/pnr/formato";
import { TabelaVoos } from "./tabela-voos";
import { IconeAlerta, IconeErro, IconeImprimir, IconeRota, IconeTerminal } from "./icones";

/**
 * Decodificador de itinerário.
 *
 * Roda **inteiro no navegador**. O texto colado tem nome de passageiro e
 * localizador; nada disso chega ao nosso servidor, e é por isso que a página
 * pode dizer que não chega.
 */

const EXEMPLO = `TP 072 D 20SEP 7*GIGLIS DK1  2010 0955  21SEP
TP1324 D 21SEP 1*LISDUB DK1  1515 1805  21SEP`;

/** A agência é digitada uma vez e fica; ninguém quer redigitar a cada PNR. */
const CHAVE_AGENCIA = "copiloto:agencia";

/**
 * `marca` só vem no white-label: quando vem, o PDF sai com o nome e o logo do
 * cliente automaticamente e o campo de digitar o nome da agência some — a
 * plataforma já é daquela agência. Sem `marca` (produto), o agente digita o
 * nome, que fica salvo no navegador.
 */
export function Decodificador({
  marca,
}: {
  marca?: { nome: string; temLogo: boolean; versao: number };
}) {
  const [texto, setTexto] = useState("");
  const [agencia, setAgencia] = useState("");

  useEffect(() => {
    try {
      setAgencia(window.localStorage.getItem(CHAVE_AGENCIA) ?? "");
    } catch {
      /* navegador com armazenamento bloqueado: segue sem o nome */
    }
  }, []);

  function guardarAgencia(valor: string) {
    setAgencia(valor);
    try {
      window.localStorage.setItem(CHAVE_AGENCIA, valor);
    } catch {
      /* idem */
    }
  }

  const itin = useMemo(() => {
    if (!texto.trim()) return null;
    const { segmentos, ignoradas, suspeitas } = lerGds(texto);
    const passageiros = lerPassageiros(texto);
    if (!segmentos.length) {
      return { vazio: true, suspeitas, passageiros, ...montarItinerario([], ignoradas) };
    }
    return { vazio: false, suspeitas, passageiros, ...montarItinerario(segmentos, ignoradas) };
  }, [texto]);

  // Uma espera de um dia ou mais quer dizer que o passageiro ficou no
  // destino: não é conexão, é a viagem. Isso muda o que os totais significam.
  const jornadaUnica = useMemo(
    () => Boolean(itin?.voos.every((v) => v.esperaMin === null || v.esperaMin < 1440)),
    [itin],
  );

  return (
    <>
      {/* ---------------- entrada ---------------- */}
      <section className="cg-card cg-itin-entrada" aria-labelledby="itin-entrada-titulo">
        <div className="cg-card-head">
          <div className="cg-card-title">
            <span className="cg-card-icon">
              <IconeTerminal size={18} />
            </span>
            <div>
              <h2 id="itin-entrada-titulo">Cole o itinerário</h2>
              <p className="cg-card-sub">As linhas de voo do GDS — pode ser a tela inteira.</p>
            </div>
          </div>
          <button
            type="button"
            className="cg-btn cg-btn-secondary cg-btn-sm"
            onClick={() => setTexto(EXEMPLO)}
          >
            Usar exemplo
          </button>
        </div>

        <div className="cg-itin-entrada-grade">
          <textarea
            className="cg-textarea"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            spellCheck={false}
            placeholder={"AR1269 Q 08OCT 4 GIGAEP HK1  2115 0040  09OCT\nAR1246 Q 12OCT 1 AEPGRU HK1  1155 1440  12OCT"}
            aria-label="Itinerário do GDS"
            aria-describedby="itin-privacidade"
          />

          <div className="cg-itin-lado">
            {!marca ? (
              <div className="cg-field">
                <label htmlFor="agencia">Nome da agência (sai no PDF)</label>
                <input
                  id="agencia"
                  className="cg-input"
                  type="text"
                  value={agencia}
                  onChange={(e) => guardarAgencia(e.target.value)}
                  // Genérico de propósito: o exemplo aparece para toda agência que
                  // usar a ferramenta, e nome de uma agência real na tela de outra é
                  // constrangedor.
                  placeholder="Sua agência de viagens"
                  autoComplete="organization"
                />
              </div>
            ) : null}

            <p className="cg-hint" id="itin-privacidade">
              Pode colar a tela inteira, com nome do passageiro e localizador — o que não for voo
              é ignorado. <b>Nada disso sai do seu navegador:</b> a leitura acontece aqui, sem
              enviar o texto para lugar nenhum.
            </p>

            {texto.trim() && itin ? (
              <p className="cg-itin-contagem" role="status">
                {itin.voos.length} {itin.voos.length === 1 ? "voo lido" : "voos lidos"}
                {itin.ignoradas.length ? ` · ${itin.ignoradas.length} linha(s) ignorada(s)` : ""}
              </p>
            ) : null}
          </div>
        </div>
      </section>

      {/* ---------------- saída ---------------- */}
      <section className="cg-itin-saida" aria-label="Itinerário decodificado">
        {!texto.trim() ? (
          <div className="cg-itin-vazio">
            <span className="cg-card-icon">
              <IconeRota size={20} />
            </span>
            <p>
              O itinerário aparece aqui, com nome de aeroporto, duração real de cada voo e o tempo
              de conexão.
            </p>
          </div>
        ) : itin?.vazio ? (
          <div className="cg-alert cg-alert-warn">
            <IconeAlerta size={18} />
            <span>
              Nenhum segmento de voo reconhecido. Confira se você copiou as linhas do itinerário —
              por enquanto a leitura é do formato <b>GDS</b>.
            </span>
          </div>
        ) : itin ? (
          <article className="cg-itin-doc">
            {/* Cabeçalho do documento. Some da tela e aparece na impressão:
                quem lê o PDF é o passageiro, e ele precisa saber de quem veio
                e de quem é a viagem. */}
            <div className="cg-itin-cabecalho">
              {marca ? (
                <span className="cg-itin-marca">
                  {marca.temLogo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img className="cg-itin-logo" src={`/marca/logo?v=${marca.versao}`} alt={marca.nome} />
                  ) : null}
                  <b>{marca.nome}</b>
                </span>
              ) : (
                <b>{agencia || "Itinerário de viagem"}</b>
              )}
              {itin.passageiros.length ? (
                <span>
                  {itin.passageiros
                    .map((p) => (p.tratamento ? `${p.nome} (${p.tratamento})` : p.nome))
                    .join(" · ")}
                </span>
              ) : null}
            </div>

            {/* Linha com cara de voo que não deu para ler precisa aparecer em
                voz alta. O modo de falha silencioso é o pior possível: o agente
                cola quatro trechos, aparecem três, e nada diz que faltou um. */}
            {itin.suspeitas.length ? (
              <div className="cg-alert cg-alert-danger cg-itin-suspeita" role="alert">
                <IconeErro size={18} />
                <div>
                  <b>
                    {itin.suspeitas.length === 1
                      ? "Uma linha parece um voo e eu não consegui ler:"
                      : `${itin.suspeitas.length} linhas parecem voos e eu não consegui ler:`}
                  </b>
                  {itin.suspeitas.map((l) => (
                    <code key={l}>{l}</code>
                  ))}
                  <p className="cg-alert-note">
                    Confira se falta algum trecho abaixo. Se faltar, me mande esta linha — o
                    leitor aprende com ela.
                  </p>
                </div>
              </div>
            ) : null}

            <div className="cg-itin-resumo">

              {/* "Duração total" só faz sentido quando o itinerário é uma
                  jornada só — origem, conexões, destino. Numa viagem com dias
                  de estadia, o tempo entre a primeira partida e a última
                  chegada dá coisas como "200h10", que é verdade e não quer
                  dizer nada. Aí o rótulo vira "período". */}
              <dl className="cg-itin-totais">
                <div>
                  <dt>{jornadaUnica ? "Duração total" : "Período"}</dt>
                  <dd>
                    {jornadaUnica
                      ? (duracaoLonga(itin.totalMin) ?? "—")
                      : periodoTexto(itin.totalMin)}
                  </dd>
                </div>
                <div>
                  <dt>No ar</dt>
                  <dd>{duracaoLonga(itin.voandoMin) ?? "—"}</dd>
                </div>
                <div>
                  <dt>Voos</dt>
                  <dd>{itin.voos.length}</dd>
                </div>
              </dl>

              <button
                type="button"
                className="cg-btn cg-btn-primary cg-itin-pdf"
                onClick={() => window.print()}
              >
                <IconeImprimir size={18} />
                Salvar em PDF
              </button>
            </div>


            <TabelaVoos voos={itin.voos} />
          </article>
        ) : null}
      </section>
    </>
  );
}
