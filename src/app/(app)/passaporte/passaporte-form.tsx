"use client";

import { useState } from "react";
import type { PublicAirline } from "@/lib/fpcc/types";
import { montarPassaporte, type Genero } from "@/lib/srdocs";
import { Campo, CampoData, CiaCampo, ComandoSaida, GeneroCampo } from "@/components/srdocs-ui";

/**
 * Ferramenta: comando SRDOCS com o passaporte do passageiro.
 *
 * Mesma ideia da calculadora: o agente preenche os campos + a companhia e o
 * sistema devolve o comando pronto para colar no GDS. Tudo roda aqui no
 * navegador (é só formatação, não há código de produto), então é grátis e
 * instantâneo — ver `@/lib/srdocs`.
 */
export function PassaporteForm({ airlines }: { airlines: PublicAirline[] }) {
  const [cia, setCia] = useState("");
  const [multi, setMulti] = useState(false);
  const [paisEmissor, setPaisEmissor] = useState("");
  const [numero, setNumero] = useState("");
  const [nacionalidade, setNacionalidade] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [genero, setGenero] = useState<Genero>("");
  const [validade, setValidade] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [nome, setNome] = useState("");
  const [passageiro, setPassageiro] = useState("1");
  const [tentou, setTentou] = useState(false);

  const { comando, faltando } = montarPassaporte({
    cia: multi ? "YY" : cia,
    paisEmissor,
    numero,
    nacionalidade,
    nascimento,
    genero,
    validade,
    sobrenome,
    nome,
    passageiro,
  });

  // Marca "tentou" ao focar fora / mexer: assim os erros por campo só aparecem
  // depois de interagir, não na tela recém-aberta.
  const erro = (vazio: boolean) => (tentou && vazio ? true : false);

  return (
    <div className="cg-calc">
      <div className="cg-col">
        <form className="cg-card cg-form" noValidate onSubmit={(e) => e.preventDefault()}>
          <div className="cg-card-head">
            <div>
              <h2>Dados do passaporte</h2>
              <p className="cg-card-sub">
                Preencha os dados do documento e o passageiro. O comando SRDOCS sai pronto ao lado.
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
              Documento
            </legend>

            <div className="cg-field-row">
              <Campo id="pais" rotulo="País emissor" dica="Código de 3 letras (ex.: BRA)." erro={erro(!paisEmissor) ? "Informe o país emissor." : undefined}>
                <input id="pais" className="cg-input" value={paisEmissor} onChange={(e) => setPaisEmissor(e.target.value)} placeholder="BRA" autoComplete="off" />
              </Campo>
              <Campo id="nacionalidade" rotulo="Nacionalidade" dica="Código de 3 letras (ex.: BRA)." erro={erro(!nacionalidade) ? "Informe a nacionalidade." : undefined}>
                <input id="nacionalidade" className="cg-input" value={nacionalidade} onChange={(e) => setNacionalidade(e.target.value)} placeholder="BRA" autoComplete="off" />
              </Campo>
            </div>

            <Campo id="numero" rotulo="Número do passaporte" erro={erro(!numero) ? "Informe o número do passaporte." : undefined}>
              <input id="numero" className="cg-input" value={numero} onChange={(e) => setNumero(e.target.value)} placeholder="FH123456" autoComplete="off" />
            </Campo>

            <CampoData id="validade" rotulo="Validade do passaporte" value={validade} setValue={setValidade} mostrarErro={tentou} />
          </fieldset>

          <fieldset className="cg-fieldset">
            <legend>
              <span className="cg-step" aria-hidden="true">3</span>
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
              <b>SRDOCS</b> entrega os dados do passaporte à companhia. Confira tudo e cole no GDS.
              Com mais de uma companhia no PNR, marque a opção para usar <b>YY</b>.
            </>
          }
        />
      </div>
    </div>
  );
}
