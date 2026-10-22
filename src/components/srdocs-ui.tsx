"use client";

import { useEffect, useState } from "react";
import type { PublicAirline } from "@/lib/fpcc/types";
import { dataGds, type Genero } from "@/lib/srdocs";
import { NbSelect } from "./nb-select";
import { IconeCopiar, IconeErro, IconeInfo, IconeTerminal } from "./icones";

/**
 * Peças compartilhadas pelas duas ferramentas SRDOCS (passaporte e
 * nascimento): o campo de companhia com a opção YY, o campo genérico, o de
 * gênero e o cartão do comando com o botão de copiar. Mesma linguagem visual da
 * calculadora, por isso reaproveitam as classes `cg-*`.
 */

/** Rótulo + dica + erro em volta de um campo (igual ao da calculadora). */
export function Campo({
  id,
  rotulo,
  dica,
  erro,
  children,
}: {
  id: string;
  rotulo: string;
  dica?: string;
  erro?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="cg-field">
      <label htmlFor={id}>{rotulo}</label>
      {children}
      {dica ? (
        <span className="cg-hint" id={`${id}-dica`}>
          {dica}
        </span>
      ) : null}
      {erro ? (
        <span className="cg-field-error" id={`${id}-erro`}>
          <IconeErro size={14} />
          {erro}
        </span>
      ) : null}
    </div>
  );
}

/**
 * Companhia aérea + opção "mais de uma cia no PNR". Marcada a opção, a cia some
 * do comando e entra `YY` (o padrão do GDS para PNR multi-companhia) — por isso
 * o select fica desabilitado.
 */
export function CiaCampo({
  airlines,
  cia,
  setCia,
  multi,
  setMulti,
  mostrarErro,
}: {
  airlines: PublicAirline[];
  cia: string;
  setCia: (v: string) => void;
  multi: boolean;
  setMulti: (v: boolean) => void;
  mostrarErro: boolean;
}) {
  const faltaCia = mostrarErro && !multi && !cia;
  return (
    <>
      <Campo
        id="cia"
        rotulo="Companhia aérea"
        dica={multi ? "YY entra no lugar da companhia." : "A companhia em que você vai emitir."}
        erro={faltaCia ? "Escolha a companhia (ou marque mais de uma cia)." : undefined}
      >
        <NbSelect
          id="cia"
          value={multi ? "" : cia}
          placeholder={multi ? "YY — várias companhias" : "Selecione a companhia aérea"}
          onChange={setCia}
          disabled={multi}
          invalid={faltaCia}
          options={airlines.map((a) => ({ value: a.iata, label: `${a.iata} · ${a.name}` }))}
        />
      </Campo>
      <label className="cg-check">
        <input type="checkbox" checked={multi} onChange={(e) => setMulti(e.target.checked)} />
        <span>
          Mais de uma companhia no PNR — usar <b>YY</b>
        </span>
      </label>
    </>
  );
}

/**
 * Campo de data (`<input type="date">`) que mostra, na dica, o formato já
 * convertido para o GDS (`DDMMMYY`) — ex.: `→ 18JUN03`. Assim o agente vê
 * exatamente o que vai para o comando.
 */
export function CampoData({
  id,
  rotulo,
  value,
  setValue,
  mostrarErro,
}: {
  id: string;
  rotulo: string;
  value: string;
  setValue: (v: string) => void;
  mostrarErro: boolean;
}) {
  const gds = value ? dataGds(value) : null;
  const falta = mostrarErro && !gds;
  return (
    <Campo
      id={id}
      rotulo={rotulo}
      dica={gds ? `→ ${gds}` : "Dia, mês e ano."}
      erro={falta ? "Informe uma data válida." : undefined}
    >
      <input
        id={id}
        type="date"
        className="cg-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-invalid={falta || undefined}
        aria-describedby={`${id}-dica`}
      />
    </Campo>
  );
}

/** Seleção de gênero: M (masculino) ou F (feminino). */
export function GeneroCampo({
  genero,
  setGenero,
  mostrarErro,
}: {
  genero: Genero;
  setGenero: (v: Genero) => void;
  mostrarErro: boolean;
}) {
  const falta = mostrarErro && !genero;
  return (
    <Campo id="genero" rotulo="Gênero" erro={falta ? "Escolha o gênero." : undefined}>
      <NbSelect
        id="genero"
        value={genero}
        placeholder="Selecione o gênero"
        onChange={(v) => setGenero(v as Genero)}
        invalid={falta}
        options={[
          { value: "M", label: "Masculino (M)" },
          { value: "F", label: "Feminino (F)" },
        ]}
      />
    </Campo>
  );
}

/**
 * Cartão azul-marinho com o comando pronto e o botão de copiar — o mesmo visual
 * do comando da calculadora. Enquanto falta campo, mostra o que falta em vez de
 * um comando pela metade.
 */
export function ComandoSaida({
  comando,
  faltando,
  ajuda,
}: {
  comando: string | null;
  faltando: string[];
  ajuda: React.ReactNode;
}) {
  const [copiado, setCopiado] = useState(false);
  const [erroCopia, setErroCopia] = useState(false);

  // Zera o "copiado!" quando o comando muda.
  useEffect(() => {
    setCopiado(false);
    setErroCopia(false);
  }, [comando]);

  async function copiar() {
    if (!comando) return;
    try {
      await navigator.clipboard.writeText(comando);
      setCopiado(true);
      window.setTimeout(() => setCopiado(false), 2200);
    } catch {
      setErroCopia(true);
    }
  }

  return (
    <section className="cg-command" aria-labelledby="cmd-srdocs-titulo">
      <div className="cg-command-head">
        <div className="cg-card-title">
          <span className="cg-card-icon">
            <IconeTerminal size={18} />
          </span>
          <h2 id="cmd-srdocs-titulo">Comando SRDOCS</h2>
        </div>
        <span className="cg-command-tag">GDS</span>
      </div>

      <pre className={"cg-code" + (comando ? "" : " is-empty")}>
        <code>{comando ?? "Preencha os campos ao lado para gerar o comando."}</code>
      </pre>

      <button
        type="button"
        className={"cg-btn cg-btn-copy" + (copiado ? " is-done" : "")}
        onClick={copiar}
        disabled={!comando}
      >
        <IconeCopiar size={17} />
        {copiado ? "Copiado!" : "Copiar comando"}
      </button>

      {!comando && faltando.length ? (
        <p className="cg-command-faltando">Falta preencher: {faltando.join(", ")}.</p>
      ) : null}

      {erroCopia ? (
        <p className="cg-command-faltando">
          Não foi possível copiar automaticamente — selecione o comando e copie na mão.
        </p>
      ) : null}

      <div className="cg-command-help">
        <IconeInfo size={16} />
        <span>{ajuda}</span>
      </div>
    </section>
  );
}
