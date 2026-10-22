"use client";

import { useState } from "react";
import type { PublicAirline } from "@/lib/fpcc/types";
import { montarNascimento, type Genero } from "@/lib/srdocs";
import { Campo, CampoData, CiaCampo, ComandoSaida, GeneroCampo } from "@/components/srdocs-ui";

/**
 * Ferramenta: comando SRDOCS só com a data de nascimento e o nome do
 * passageiro — o mesmo SRDOCS do passaporte, com os campos do documento
 * vazios. Ex.: `SRDOCS LA HK1-----18JUN03-M--SOBRENOME-NOME/P1`.
 *
 * Roda no navegador, grátis e instantâneo (ver `@/lib/srdocs`).
 */
export function NascimentoForm({ airlines }: { airlines: PublicAirline[] }) {
  const [cia, setCia] = useState("");
  const [multi, setMulti] = useState(false);
  const [nascimento, setNascimento] = useState("");
  const [genero, setGenero] = useState<Genero>("");
  const [sobrenome, setSobrenome] = useState("");
  const [nome, setNome] = useState("");
  const [passageiro, setPassageiro] = useState("1");
  const [tentou, setTentou] = useState(false);

  const { comando, faltando } = montarNascimento({
    cia: multi ? "YY" : cia,
    nascimento,
    genero,
    sobrenome,
    nome,
    passageiro,
  });

  const erro = (vazio: boolean) => (tentou && vazio ? true : false);

  return (
    <div className="cg-calc">
      <div className="cg-col">
        <form className="cg-card cg-form" noValidate onSubmit={(e) => e.preventDefault()}>
          <div className="cg-card-head">
            <div>
              <h2>Nascimento e nome</h2>
              <p className="cg-card-sub">
                Preencha a data de nascimento, o nome e o passageiro. O comando SRDOCS sai pronto
                ao lado.
              </p>
            </div>
          </div>

          <fieldset className="cg-fieldset">
            <legend>
              <span className="cg-step" aria-hidden="true">1</span>
              Companhia
            </legend>
            <CiaCampo airlines={airlines} cia={cia} setCia={setCia} multi={multi} setMulti={setMulti} mostrarErro={tentou} />
          </fieldset>

          <fieldset className="cg-fieldset">
            <legend>
              <span className="cg-step" aria-hidden="true">2</span>
              Passageiro
            </legend>

            <div className="cg-field-row">
              <Campo id="sobrenome" rotulo="Sobrenome" erro={erro(!sobrenome) ? "Informe o sobrenome." : undefined}>
                <input id="sobrenome" className="cg-input" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} autoComplete="off" />
              </Campo>
              <Campo id="nome" rotulo="Nome" erro={erro(!nome) ? "Informe o nome." : undefined}>
                <input id="nome" className="cg-input" value={nome} onChange={(e) => setNome(e.target.value)} autoComplete="off" />
              </Campo>
            </div>

            <div className="cg-field-row">
              <CampoData id="nascimento" rotulo="Data de nascimento" value={nascimento} setValue={setNascimento} mostrarErro={tentou} />
              <GeneroCampo genero={genero} setGenero={setGenero} mostrarErro={tentou} />
            </div>

            <Campo id="passageiro" rotulo="Nº do passageiro" dica="A posição no PNR: P1, P2…" erro={erro(!passageiro) ? "Informe o número do passageiro." : undefined}>
              <input
                id="passageiro"
                className="cg-input"
                inputMode="numeric"
                value={passageiro}
                onChange={(e) => setPassageiro(e.target.value.replace(/\D/g, ""))}
                placeholder="1"
                autoComplete="off"
              />
            </Campo>
          </fieldset>

          <div className="cg-form-foot">
            <span>O comando se monta sozinho ao lado — sem custo, não consome teste.</span>
            {!tentou ? (
              <button type="button" className="cg-link-btn" onClick={() => setTentou(true)}>
                Conferir o que falta
              </button>
            ) : null}
          </div>
        </form>
      </div>

      <div className="cg-col">
        <ComandoSaida
          comando={comando}
          faltando={faltando}
          ajuda={
            <>
              <b>SRDOCS</b> com só o nascimento e o nome — sem os dados do passaporte. Com mais de
              uma companhia no PNR, marque a opção para usar <b>YY</b>.
            </>
          }
        />
      </div>
    </div>
  );
}
