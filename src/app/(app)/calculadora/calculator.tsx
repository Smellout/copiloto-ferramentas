"use client";

import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { whatsappUrl } from "@/lib/whatsapp";
import { parseMoney } from "@/lib/fpcc/money";
import { NbSelect } from "@/components/nb-select";
import {
  IconeAlerta,
  IconeCalculadora,
  IconeCheck,
  IconeCopiar,
  IconeErro,
  IconeFechar,
  IconeInfo,
  IconeLimpar,
  IconeMensagem,
  IconeRecibo,
  IconeRelogio,
  IconeSeta,
  IconeSino,
  IconeTerminal,
} from "@/components/icones";
import {
  BRAND_NAMES,
  type Brand,
  type CalcStep,
  type GenerateOk,
  type PublicAirline,
} from "@/lib/fpcc/types";

/** O que `/api/generate` devolve num cálculo válido: o resultado do motor. */
type Resultado = GenerateOk;

/**
 * Uma emissão do histórico. `result` já é o resumo pronto (reconstruído pelo
 * servidor em `/api/historico`), então reabri-la é só `setResultado(result)`.
 */
type HistItem = { id: string; createdAt: string; result: Resultado };

/** "19/10 14:32" — data curta para a lista de emissões recentes. */
function quando(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/** "20/10/2026 às 21h15" — data por extenso para a tarja da emissão reaberta. */
function quandoLongo(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  const data = d.toLocaleDateString("pt-BR");
  const h = String(d.getHours()).padStart(2, "0");
  const m = String(d.getMinutes()).padStart(2, "0");
  return `${data} às ${h}h${m}`;
}

/** Itens por página na lista de emissões recentes. */
const HIST_POR_PAGINA = 5;

/** Teto de emissões guardadas por sessão (acompanha o limite de listGenerations). */
const HIST_MAX = 50;

/** Os seletores obrigatórios — os mesmos que `pendencias` cobra. */
type Campo = "airline" | "parcelas" | "bandeira" | "passageiros";

function fmtInstallments(n: number) {
  return (n < 10 ? "0" : "") + n + "x";
}

/** Passageiros disponíveis no seletor: 1 (individual) a 9 (teto de um PNR). */
const PAX_OPTS = Array.from({ length: 9 }, (_, i) => String(i + 1));

/** 404660 -> "4.046,60". Inteiros do começo ao fim: centavo não passa por float. */
function valorBR(cents: number): string {
  const reais = Math.floor(cents / 100);
  const resto = cents % 100;
  return reais.toLocaleString("pt-BR") + "," + (resto < 10 ? "0" : "") + resto;
}

function reais(cents: number): string {
  return "R$ " + valorBR(cents);
}

/**
 * "BRL 674.44" -> "R$ 674,44".
 *
 * O resumo mostra o número que o servidor calculou, lido da memória de
 * cálculo — não refaz a conta aqui. Se o formato do passo mudar um dia, o valor
 * aparece cru em vez de sumir.
 */
function valorDoPasso(steps: CalcStep[], label: string): string {
  const passo = steps.find((s) => s.label === label);
  if (!passo) return "—";
  const m = /^BRL (\d+)\.(\d{2})$/.exec(passo.result);
  return m ? reais(Number(m[1]) * 100 + Number(m[2])) : passo.result;
}

/**
 * Reescreve o valor digitado no padrão brasileiro quando o campo perde o foco.
 *
 * Usa o mesmo `parseMoney` da rota, então a reescrita nunca muda o que o
 * servidor lê: "4046.60" vira "4.046,60" e continua sendo 404660 centavos lá.
 * O ganho é ver a interpretação antes de calcular — "4.046" vira "4.046,00", e
 * quem quis dizer quatro reais percebe na hora. Valor que não dá para ler fica
 * como está: quem recusa, com a mensagem certa, continua sendo o servidor.
 */
function noPadraoBR(bruto: string): { valor: string; ilegivel: boolean } {
  if (!bruto.trim()) return { valor: bruto, ilegivel: false };
  const cents = parseMoney(bruto);
  return cents === null ? { valor: bruto, ilegivel: true } : { valor: valorBR(cents), ilegivel: false };
}

/**
 * Os comandos na tela, com ponto de quebra depois de cada "/" e "+".
 *
 * Numa coluna estreita a linha se parte entre os campos, não no meio de um
 * valor — "BRL3|372.16" é exatamente o tipo de leitura que faz alguém digitar
 * errado. `<wbr>` não vira caractere, nem na seleção manual, e o botão copia a
 * string original de qualquer forma.
 */
function comQuebras(comandos: string[]) {
  return comandos.map((cmd, i) => (
    <Fragment key={i}>
      {i > 0 ? "\n" : null}
      {cmd.split(/(?<=[/+])/).map((parte, j) => (
        <Fragment key={j}>
          {j > 0 ? <wbr /> : null}
          {parte}
        </Fragment>
      ))}
    </Fragment>
  ));
}

/** Ids que o leitor de tela lê junto com o rótulo: a dica e, se houver, o erro. */
function descrito(id: string, dica: boolean, erro: boolean): string | undefined {
  const ids = [dica ? `${id}-dica` : "", erro ? `${id}-erro` : ""].filter(Boolean);
  return ids.length ? ids.join(" ") : undefined;
}

const ROTULO_COPIADO: Record<string, string> = {
  command: "Comando copiado!",
  porPassageiro: "Opção A copiada!",
  unica: "Opção B copiada!",
};

export function Calculator({ airlines }: { airlines: PublicAirline[] }) {
  /**
   * A tela abre com os três campos por escolher.
   *
   * Antes vinham preenchidos — LATAM Itaucard, 6x, Mastercard. O problema não
   * é estético: um campo já respondido não é lido, e quem abre a calculadora
   * para emitir GOL em 10x no Visa vê três respostas prontas que não são as
   * dele. Vazio obriga a olhar, e olhar é o que evita comando errado.
   *
   * `null` em `installments`, não `0`: zero é um número de parcelas, e cairia
   * no corpo da requisição sem ninguém notar.
   */
  const [airlineId, setAirlineId] = useState("");
  const [brand, setBrand] = useState<string>("");
  const [installments, setInstallments] = useState<number | null>(null);
  // Obrigatorio, sem valor inicial (igual companhia/parcelas): o agente escolhe
  // para quantas pessoas de mesmo valor a entrada serve, toda vez. `null`, nunca
  // 0 — zero cairia no corpo da requisicao sem ninguem notar.
  const [passengers, setPassengers] = useState<number | null>(null);
  const [fare, setFare] = useState("");
  const [taxes, setTaxes] = useState("");
  const [fareIlegivel, setFareIlegivel] = useState(false);
  const [taxesIlegivel, setTaxesIlegivel] = useState(false);

  /** O último cálculo válido, como o servidor devolveu. */
  const [resultado, setResultado] = useState<Resultado | null>(null);
  /** Por que o último pedido não gerou comando (nenhum crédito consumido). */
  const [erros, setErros] = useState<string[] | null>(null);
  /** Já houve tentativa de calcular: só então os campos vazios ficam vermelhos. */
  const [tentou, setTentou] = useState(false);
  const [loading, setLoading] = useState(false);
  /** Qual botão de cópia acabou de funcionar ("command", "porPassageiro", "unica"). */
  const [copiado, setCopiado] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  /**
   * Emissões anteriores desta pessoa. `null` enquanto carrega; `[]` quando não
   * há nenhuma. Resolvido no navegador, como o saldo da navbar — a página é
   * estática, então nada vem pronto do servidor.
   */
  const [historico, setHistorico] = useState<HistItem[] | null>(null);
  /**
   * Quando o resumo na tela é uma emissão REABERTA do histórico: guarda a
   * data/hora dela. `null` = cálculo recém-feito (ou nada). É o que pinta o
   * painel de cinza e mostra a tarja "Comando gerado — …".
   */
  const [verDe, setVerDe] = useState<string | null>(null);
  /** Página atual da lista de emissões recentes (0-indexada). */
  const [pagina, setPagina] = useState(0);
  const resumoRef = useRef<HTMLElement>(null);

  const command = resultado?.command ?? "";
  const options = resultado?.options ?? [];

  const airline = useMemo(
    () => airlines.find((a) => a.id === airlineId),
    [airlines, airlineId],
  );

  /**
   * O que ainda falta escolher, dito por campo.
   *
   * A rota já recusaria o formulário vazio — ela coage o que falta e devolve
   * 422 sem consumir crédito, que é a ordem documentada. Isto aqui só evita a
   * ida ao servidor e troca "requisição inválida" por qual campo abrir.
   *
   * Não repete regra de domínio: se a companhia não parcela, quem diz isso
   * continua sendo o servidor, que é onde a tabela mora.
   */
  const pendencias = useMemo(() => {
    const faltam: { campo: Campo; msg: string }[] = [];
    if (!airlineId) faltam.push({ campo: "airline", msg: "Selecione a companhia aérea." });
    if (airline?.allowsInstallments && installments === null) {
      faltam.push({ campo: "parcelas", msg: "Escolha o número de parcelas." });
    }
    if (!brand) faltam.push({ campo: "bandeira", msg: "Selecione a bandeira do cartão." });
    if (passengers === null) {
      faltam.push({ campo: "passageiros", msg: "Escolha a quantidade de passageiros." });
    }
    return faltam;
  }, [airlineId, airline, installments, brand, passengers]);

  /** A mensagem do campo, mas só depois da primeira tentativa de calcular. */
  function falta(campo: Campo): string | undefined {
    return tentou ? pendencias.find((p) => p.campo === campo)?.msg : undefined;
  }

  useEffect(() => {
    if (!toast) return;
    const id = window.setTimeout(() => setToast(null), 3200);
    return () => window.clearTimeout(id);
  }, [toast]);

  useEffect(() => {
    if (!copiado) return;
    const id = window.setTimeout(() => setCopiado(null), 2200);
    return () => window.clearTimeout(id);
  }, [copiado]);

  // Emissões anteriores, buscadas uma vez ao abrir a tela. Falha de rede ou de
  // sessão vira lista vazia — o histórico é conveniência, nunca bloqueia emitir.
  useEffect(() => {
    let vivo = true;
    fetch("/api/historico")
      .then((res) => (res.ok ? res.json() : { items: [] }))
      .then((data) => {
        if (vivo) setHistorico(Array.isArray(data.items) ? (data.items as HistItem[]) : []);
      })
      .catch(() => {
        if (vivo) setHistorico([]);
      });
    return () => {
      vivo = false;
    };
  }, []);

  /**
   * Ao trocar de companhia, reencaixa as parcelas no que aquela cia aceita.
   *
   * O `installments === null` na guarda é o que mantém a tela vazia ao abrir:
   * sem ele, escolher a companhia preencheria as parcelas sozinho no mesmo
   * instante — e o campo voltaria a nascer respondido, só que um passo depois.
   * Quem já escolheu continua sendo reencaixado, que é o comportamento certo:
   * 10x numa cia que só vai até 6x não pode ficar de pé.
   */
  useEffect(() => {
    if (!airline || installments === null) return;
    if (airline.installments.length && !airline.installments.includes(installments)) {
      setInstallments(airline.installments[airline.installments.length - 1]);
    }
  }, [airline, installments]);

  function fail(errors: string[]) {
    setErros(errors);
    setResultado(null);
  }

  /**
   * No celular o resumo fica abaixo do formulário: sem isto, a resposta chegaria
   * fora da tela de quem acabou de tocar no botão. No desktop ele já está ao
   * lado, à vista, e nada se mexe.
   */
  function mostrarResumo() {
    window.requestAnimationFrame(() => {
      const el = resumoRef.current;
      if (!el) return;
      const topo = el.getBoundingClientRect().top;
      if (topo >= 0 && topo < window.innerHeight * 0.5) return;
      const calmo = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: calmo ? "auto" : "smooth", block: "start" });
    });
  }

  async function generate() {
    setTentou(true);
    // Antes de qualquer rede: nenhum crédito é consumido aqui, e nem no
    // servidor seria, mas o agente merece saber qual campo abrir.
    if (pendencias.length) {
      fail(pendencias.map((p) => p.msg));
      document.getElementById(pendencias[0].campo)?.focus();
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ airlineId, brand, installments, passengers, fare, taxes }),
      });
      const data = await res.json();

      if (!data.ok) {
        fail(data.errors ?? ["Não foi possível gerar o comando."]);
        mostrarResumo();
        return;
      }

      setErros(null);
      setCopiado(null);
      setResultado(data as Resultado);
      setVerDe(null); // cálculo recém-feito: painel normal, sem tarja.
      // Aparece no histórico na hora — o servidor já gravou; não espera o
      // próximo carregamento da tela. Id sintético: a lista é só visual.
      setHistorico((h) => [
        { id: `novo-${Date.now()}`, createdAt: new Date().toISOString(), result: data as Resultado },
        ...(h ?? []),
      ].slice(0, HIST_MAX));
      setPagina(0); // a emissão nova é a primeira da lista.
      mostrarResumo();
    } catch {
      fail(["Falha de rede ao falar com o servidor."]);
      mostrarResumo();
    } finally {
      setLoading(false);
    }
  }

  async function copyText(text: string, chave: string) {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopiado(chave);
    } catch {
      setToast("Não foi possível copiar. Selecione o comando e copie manualmente.");
    }
  }

  function clear() {
    setFare("");
    setTaxes("");
    setFareIlegivel(false);
    setTaxesIlegivel(false);
    setResultado(null);
    setErros(null);
    setCopiado(null);
    setTentou(false);
    setVerDe(null);
  }

  /**
   * Reabre uma emissão do histórico: joga o resultado guardado no mesmo estado
   * que a emissão ao vivo usa, então o resumo financeiro e o comando aparecem
   * idênticos — é para isto que `/api/historico` devolve no formato do motor.
   */
  function abrirHistorico(item: HistItem) {
    setErros(null);
    setCopiado(null);
    setResultado(item.result);
    setVerDe(item.createdAt); // pinta o painel de cinza e liga a tarja datada.
    mostrarResumo();
  }

  function botaoCopiar(chave: string, texto: string, rotulo: string) {
    const feito = copiado === chave;
    return (
      <button
        type="button"
        className={"cg-btn cg-btn-copy" + (feito ? " is-done" : "")}
        onClick={() => copyText(texto, chave)}
        disabled={!texto}
      >
        {feito ? <IconeCheck size={18} /> : <IconeCopiar size={18} />}
        {feito ? ROTULO_COPIADO[chave] : rotulo}
      </button>
    );
  }

  const r = resultado;
  const porPassageiro = r ? r.fareCents + r.taxesCents : 0;

  // Paginação da lista de emissões recentes: 5 por página, para a tela não
  // esticar. A página é fixada dentro do intervalo válido aqui (em vez de num
  // efeito), assim encolher a lista nunca deixa a página fora do alcance.
  const totalItens = historico?.length ?? 0;
  const totalPaginas = Math.max(1, Math.ceil(totalItens / HIST_POR_PAGINA));
  const paginaAtual = Math.min(pagina, totalPaginas - 1);
  const historicoVisivel = historico
    ? historico.slice(paginaAtual * HIST_POR_PAGINA, paginaAtual * HIST_POR_PAGINA + HIST_POR_PAGINA)
    : [];

  const status = loading
    ? { texto: "Calculando…", classe: "is-busy" }
    : erros
      ? { texto: "Não gerado", classe: "is-error" }
      : r
        ? verDe
          ? { texto: "Emissão anterior", classe: "is-anterior" }
          : { texto: "Calculado", classe: "is-ok" }
        : { texto: "Aguardando dados", classe: "" };

  return (
    <div className="cg-page">
      <header className="cg-page-head">
        <div className="cg-page-intro">
          <nav className="cg-breadcrumb" aria-label="Você está em">
            <ol>
              <li>Ferramentas</li>
              <li aria-current="page">Calculadora de emissão</li>
            </ol>
          </nav>
          <h1>Calculadora de emissão</h1>
          <p>Simule parcelas e gere comandos para o GDS em segundos.</p>
        </div>

        <div className="cg-page-meta">
          {/* Só o formato do comando: o sistema não se conecta ao GDS. */}
          <span
            className="cg-gds-badge"
            title="O comando sai pronto para colar no GDS. O sistema não se conecta ao GDS: você copia e cola."
          >
            <IconeTerminal size={16} />
            Formato GDS
          </span>
        </div>
      </header>

      <div className="cg-calc">
        <div className="cg-col">
          {/* ---------------- formulário ---------------- */}
          <form
            className="cg-card cg-form"
            noValidate
            aria-labelledby="form-titulo"
            onSubmit={(e) => {
              e.preventDefault();
              if (!loading) void generate();
            }}
          >
            <div className="cg-card-head">
              <div>
                <h2 id="form-titulo">Dados da emissão</h2>
                <p className="cg-card-sub">
                  Preencha com os números do fare calc. O comando sai com a memória de cálculo
                  aberta para conferência.
                </p>
              </div>
            </div>

            <fieldset className="cg-fieldset">
              <legend>
                <span className="cg-step" aria-hidden="true">1</span>
                Companhia e pagamento
              </legend>

              <Campo id="airline" rotulo="Companhia aérea" erro={falta("airline")}>
                <NbSelect
                  id="airline"
                  value={airlineId}
                  placeholder="Selecione a companhia aérea"
                  onChange={setAirlineId}
                  invalid={Boolean(falta("airline"))}
                  describedBy={descrito("airline", false, Boolean(falta("airline")))}
                  options={airlines.map((a) => ({
                    value: a.id,
                    label: `${a.iata} · ${a.name}${a.allowsInstallments ? "" : "  (não parcela)"}`,
                  }))}
                />
              </Campo>

              {airline ? <AirlineInfo airline={airline} /> : null}

              <div className="cg-field-row">
                <Campo id="parcelas" rotulo="Parcelas" erro={falta("parcelas")}>
                  <NbSelect
                    id="parcelas"
                    value={installments === null ? "" : String(installments)}
                    // Quantas parcelas cabem depende da companhia, então o
                    // campo diz o que falta em vez de ficar mudo e desligado.
                    placeholder={
                      !airline
                        ? "Escolha a companhia"
                        : airline.allowsInstallments
                          ? "Escolha as parcelas"
                          : "não parcela"
                    }
                    disabled={!airline?.allowsInstallments}
                    onChange={(v) => setInstallments(Number(v))}
                    invalid={Boolean(falta("parcelas"))}
                    describedBy={descrito("parcelas", false, Boolean(falta("parcelas")))}
                    options={
                      airline?.allowsInstallments
                        ? airline.installments.map((n) => ({
                            value: String(n),
                            label: fmtInstallments(n),
                          }))
                        : []
                    }
                  />
                </Campo>

                <Campo id="bandeira" rotulo="Bandeira do cartão" erro={falta("bandeira")}>
                  <NbSelect
                    id="bandeira"
                    value={brand}
                    placeholder="Selecione a bandeira"
                    onChange={setBrand}
                    invalid={Boolean(falta("bandeira"))}
                    describedBy={descrito("bandeira", false, Boolean(falta("bandeira")))}
                    options={[
                      ...(["CA", "VI", "AX"] as Brand[]).map((b) => ({
                        value: b,
                        label: `${b} · ${BRAND_NAMES[b]}`,
                      })),
                      { value: "XX", label: "Outra (Elo, Diners, Hipercard…)" },
                    ]}
                  />
                </Campo>
              </div>
            </fieldset>

            <fieldset className="cg-fieldset">
              <legend>
                <span className="cg-step" aria-hidden="true">2</span>
                Passageiros e valores
              </legend>

              <Campo
                id="passageiros"
                rotulo="Passageiros (mesmo valor)"
                erro={falta("passageiros")}
                dica="Quantas pessoas da reserva têm exatamente o mesmo valor. Com 2 ou mais, a saída traz as duas formas de emitir."
              >
                <NbSelect
                  id="passageiros"
                  value={passengers === null ? "" : String(passengers)}
                  placeholder="Para quantas pessoas?"
                  onChange={(v) => setPassengers(Number(v))}
                  invalid={Boolean(falta("passageiros"))}
                  describedBy={descrito("passageiros", true, Boolean(falta("passageiros")))}
                  options={PAX_OPTS.map((n) => ({
                    value: n,
                    label: n === "1" ? "1 passageiro (individual)" : `${n} passageiros`,
                  }))}
                />
              </Campo>

              <Campo
                id="tarifa"
                rotulo="Tarifa (sem taxas)"
                erro={fareIlegivel ? "Valor não reconhecido. Use o formato 4.046,60." : undefined}
                dica="Valor da tarifa em BRL, exatamente como aparece no fare calc."
              >
                <div className="cg-money">
                  <span className="cg-money-prefix" aria-hidden="true">
                    R$
                  </span>
                  <input
                    id="tarifa"
                    className="cg-input"
                    type="text"
                    inputMode="decimal"
                    autoComplete="off"
                    placeholder="0,00"
                    value={fare}
                    aria-invalid={fareIlegivel || undefined}
                    aria-describedby={descrito("tarifa", true, fareIlegivel)}
                    onChange={(e) => {
                      setFare(e.target.value);
                      setFareIlegivel(false);
                    }}
                    onBlur={() => {
                      const n = noPadraoBR(fare);
                      setFare(n.valor);
                      setFareIlegivel(n.ilegivel);
                    }}
                  />
                </div>
              </Campo>

              {/* Um campo só, de propósito: o emissor já vê a soma das taxas no
                  fare calc, e digitar oito linhas aqui só cria onde errar. */}
              <Campo
                id="taxas"
                rotulo="Total das taxas"
                erro={taxesIlegivel ? "Valor não reconhecido. Use o formato 383,73." : undefined}
                dica="Some todas as linhas de taxa do fare calc (DU, BR, YR e as demais) e informe o total aqui."
              >
                <div className="cg-money">
                  <span className="cg-money-prefix" aria-hidden="true">
                    R$
                  </span>
                  <input
                    id="taxas"
                    className="cg-input"
                    type="text"
                    inputMode="decimal"
                    autoComplete="off"
                    placeholder="0,00"
                    value={taxes}
                    aria-invalid={taxesIlegivel || undefined}
                    aria-describedby={descrito("taxas", true, taxesIlegivel)}
                    onChange={(e) => {
                      setTaxes(e.target.value);
                      setTaxesIlegivel(false);
                    }}
                    onBlur={() => {
                      const n = noPadraoBR(taxes);
                      setTaxes(n.valor);
                      setTaxesIlegivel(n.ilegivel);
                    }}
                  />
                </div>
              </Campo>
            </fieldset>

            <div className="cg-form-actions">
              <button type="submit" className="cg-btn cg-btn-primary" disabled={loading}>
                {loading ? (
                  <span className="cg-spinner" aria-hidden="true" />
                ) : (
                  <IconeCalculadora size={18} />
                )}
                {loading ? "Calculando…" : "Calcular emissão"}
              </button>
              <button type="button" className="cg-btn cg-btn-secondary cg-btn-perigo" onClick={clear}>
                <IconeLimpar size={17} />
                Limpar
              </button>
            </div>

          </form>

          {/* Lembretes fixos da mesa de emissão — sem saldo e sem plano: no
              white-label a pessoa já é da equipe e emite sem limite. */}
          <section className="cg-card cg-avisos" aria-labelledby="avisos-titulo">
            <div className="cg-card-title">
              <span className="cg-card-icon">
                <IconeSino size={18} />
              </span>
              <h2 id="avisos-titulo">Lembretes</h2>
            </div>
            <ul className="cg-lembretes">
              <li>O campo de taxas é o total já somado — não uma linha por taxa do bilhete.</li>
              <li>NUMERODOCARTAO e MMAA saem sempre literais: troque na mão no GDS.</li>
              <li>Confira o comando em homologação antes da emissão real.</li>
            </ul>
          </section>
        </div>

        <div className="cg-col">
          {/* ---------------- resumo financeiro ---------------- */}
          <section
            ref={resumoRef}
            className={
              "cg-card cg-summary" +
              (loading ? " is-loading" : "") +
              (verDe && r ? " is-historico" : "")
            }
            aria-labelledby="resumo-titulo"
            aria-busy={loading}
          >
            <div className="cg-card-head">
              <div className="cg-card-title">
                <span className="cg-card-icon">
                  <IconeRecibo size={18} />
                </span>
                <h2 id="resumo-titulo">Resumo financeiro</h2>
              </div>
              <span className={"cg-status " + status.classe}>{status.texto}</span>
            </div>

            {/* Tarja da emissão reaberta: diz que este resumo é de antes, e
                quando foi gerado — o painel cinza faz o resto da diferença. */}
            {verDe && r ? (
              <div className="cg-tarja-historico">
                <IconeRelogio size={15} />
                <span>Comando gerado — {quandoLongo(verDe)}</span>
              </div>
            ) : null}

            {erros ? (
              <div className="cg-alert cg-alert-danger" role="alert">
                <IconeErro size={18} />
                <div>
                  <b>Comando não gerado</b>
                  <ul>
                    {erros.map((e) => (
                      <li key={e}>{e}</li>
                    ))}
                  </ul>
                  <p className="cg-alert-note">Nenhuma emissão de teste foi consumida.</p>
                </div>
              </div>
            ) : null}

            <div className="cg-total">
              <span className="cg-total-label">Valor total da emissão</span>
              <strong className={"cg-total-value" + (r ? "" : " is-empty")}>
                {r ? reais(porPassageiro * r.passengers) : "R$ —"}
              </strong>
              <span className="cg-total-note">
                {r
                  ? r.passengers > 1
                    ? `${reais(porPassageiro)} por passageiro × ${r.passengers} passageiros`
                    : "Tarifa + total das taxas"
                  : "Preencha os dados da emissão e clique em Calcular emissão."}
              </span>
            </div>

            <div className="cg-highlights">
              <div className="cg-highlight">
                <span>Parcelas</span>
                <strong>{r ? `${r.installments}x` : "—"}</strong>
              </div>
              <div className="cg-highlight">
                <span>Valor de cada parcela</span>
                <strong>{r ? valorDoPasso(r.steps, "valor_parcela") : "—"}</strong>
                {r ? <small>a 1ª parcela soma as taxas</small> : null}
              </div>
            </div>

            <dl className="cg-rows">
              <div>
                <dt>Tarifa</dt>
                <dd>{r ? reais(r.fareCents) : "—"}</dd>
              </div>
              <div>
                <dt>Total das taxas</dt>
                <dd>{r ? reais(r.taxesCents) : "—"}</dd>
              </div>
              <div>
                <dt>
                  1ª parcela <small>parcela + taxas</small>
                </dt>
                <dd>{r ? valorDoPasso(r.steps, "primeira_parcela") : "—"}</dd>
              </div>
              <div>
                <dt>Saldo restante</dt>
                <dd>{r ? valorDoPasso(r.steps, "saldo_restante") : "—"}</dd>
              </div>
              {r && r.passengers > 1 ? (
                <div>
                  <dt>
                    Parcela total <small>Opção B</small>
                  </dt>
                  <dd>{valorDoPasso(r.steps, "parcela_total")}</dd>
                </div>
              ) : null}
            </dl>
            {r && r.passengers > 1 ? (
              <p className="cg-rows-note">Tarifa, taxas e parcelas acima são por passageiro.</p>
            ) : null}

            {r ? (
              <dl className="cg-meta">
                <div>
                  <dt>Companhia</dt>
                  <dd>{r.airline}</dd>
                </div>
                <div>
                  <dt>Bandeira</dt>
                  <dd>{r.brandName}</dd>
                </div>
                <div>
                  <dt>Plano</dt>
                  <dd>{r.plan}</dd>
                </div>
                <div>
                  <dt>Passageiros</dt>
                  <dd>
                    {r.passengers} {r.passengers > 1 ? "(mesmo valor)" : "(individual)"}
                  </dd>
                </div>
              </dl>
            ) : null}

          </section>

          {/* ---------------- comando ---------------- */}
          <section className="cg-command" aria-labelledby="comando-titulo">
            <div className="cg-command-head">
              <div className="cg-card-title">
                <span className="cg-card-icon">
                  <IconeTerminal size={18} />
                </span>
                <h2 id="comando-titulo">Comando para o GDS</h2>
              </div>
              <span className="cg-command-tag">FP CC</span>
            </div>

            {r && options.length > 1 ? (
              // Duas formas, cada uma com o comentario que diz por que existe — é o
              // que impede emitir individual achando que emitiu para todos.
              options.map((opt) => (
                <div className="cg-option" key={opt.key}>
                  <h3>{opt.titulo}</h3>
                  {opt.nota ? <p className="cg-option-note">{opt.nota}</p> : null}
                  <pre className="cg-code">
                    <code>{comQuebras(opt.commands)}</code>
                  </pre>
                  {botaoCopiar(
                    opt.key,
                    opt.commands.join("\n"),
                    "Copiar " + (opt.key === "porPassageiro" ? "Opção A" : "Opção B"),
                  )}
                </div>
              ))
            ) : (
              <>
                {command ? (
                  <pre className="cg-code">
                    <code>{comQuebras([command])}</code>
                  </pre>
                ) : (
                  <div className="cg-code is-empty">
                    <span>&gt; {erros ? "comando não gerado" : "aguardando dados…"}</span>
                  </div>
                )}
                {botaoCopiar("command", command, "Copiar comando")}
              </>
            )}

            {r ? (
              <div className="cg-memoria">
                <h3>Memória de cálculo</h3>
                <ol>
                  {r.steps.map((s) => (
                    <li key={s.label}>
                      <span className="cg-memoria-label">{s.label}</span>
                      <span className="cg-memoria-formula">= {s.formula}</span>
                      <span className="cg-memoria-result">= {s.result}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ) : null}

            {r && r.warnings.length ? (
              <ul className="cg-warnings">
                {r.warnings.map((w) => (
                  <li key={w}>
                    <IconeAlerta size={16} />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="cg-command-help">
              <IconeInfo size={18} />
              <p>
                <b>Antes de emitir:</b> substitua <code>NUMERODOCARTAO</code> e <code>MMAA</code>{" "}
                manualmente no GDS — esta ferramenta nunca pede, guarda ou gera dados reais de
                cartão. Confira o comando em ambiente de teste/homologação antes da emissão real,
                e valide o código de financiamento com a companhia se a tabela parecer
                desatualizada.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* ---------------- emissões recentes ---------------- */}
      {historico && historico.length > 0 ? (
        <section className="cg-card cg-historico" aria-labelledby="historico-titulo">
          <div className="cg-card-head">
            <div className="cg-card-title">
              <span className="cg-card-icon">
                <IconeRelogio size={18} />
              </span>
              <h2 id="historico-titulo">Emissões recentes</h2>
            </div>
            <span className="cg-status">{historico.length}</span>
          </div>

          <p className="cg-historico-dica">
            Toque numa emissão para reabrir o resumo financeiro e o comando — eles
            continuam aqui mesmo depois de você sair da tela.
          </p>

          <ul className="cg-historico-lista">
            {historicoVisivel.map((item) => (
              <li className="cg-historico-item" key={item.id}>
                <button
                  type="button"
                  className="cg-historico-abrir"
                  onClick={() => abrirHistorico(item)}
                >
                  <span className="cg-historico-quando">{quando(item.createdAt)}</span>
                  <span className="cg-historico-cia">{item.result.airline}</span>
                  <span className="cg-historico-meta">
                    {item.result.brandName} · {item.result.installments}x
                  </span>
                  <span className="cg-historico-total">
                    {reais((item.result.fareCents + item.result.taxesCents) * item.result.passengers)}
                  </span>
                </button>
                <button
                  type="button"
                  className="cg-historico-copiar"
                  onClick={() => copyText(item.result.command, `hist-${item.id}`)}
                  aria-label="Copiar comando desta emissão"
                  title="Copiar comando"
                >
                  {copiado === `hist-${item.id}` ? (
                    <IconeCheck size={16} />
                  ) : (
                    <IconeCopiar size={16} />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {totalPaginas > 1 ? (
            <nav className="cg-historico-paginacao" aria-label="Páginas do histórico">
              <button
                type="button"
                className="cg-historico-pag is-prev"
                onClick={() => setPagina((p) => Math.max(0, p - 1))}
                disabled={paginaAtual === 0}
                aria-label="Página anterior"
              >
                <IconeSeta size={16} />
              </button>
              <span className="cg-historico-pag-info" aria-live="polite">
                Página {paginaAtual + 1} de {totalPaginas}
              </span>
              <button
                type="button"
                className="cg-historico-pag"
                onClick={() => setPagina((p) => Math.min(totalPaginas - 1, p + 1))}
                disabled={paginaAtual >= totalPaginas - 1}
                aria-label="Próxima página"
              >
                <IconeSeta size={16} />
              </button>
            </nav>
          ) : null}
        </section>
      ) : null}

      {/* O botão muda para "copiado"; isto diz o mesmo a quem usa leitor de tela. */}
      <p className="cg-sr-only" aria-live="polite">
        {copiado ? (ROTULO_COPIADO[copiado] ?? "Comando copiado!") : ""}
      </p>

      {toast ? (
        <div className="cg-toast" role="status">
          {toast}
        </div>
      ) : null}
    </div>
  );
}

/** Rótulo, controle, dica e erro de um campo, sempre na mesma ordem. */
function Campo({
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
    <div className={"cg-field" + (erro ? " is-invalid" : "")}>
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

function AirlineInfo({ airline }: { airline: PublicAirline }) {
  if (!airline.allowsInstallments) {
    return (
      <div className="cg-alert cg-alert-danger">
        <IconeErro size={18} />
        <span>
          {airline.name} não aceita parcelamento nesta base
          {airline.note ? ` — ${airline.note}` : ""}
        </span>
      </div>
    );
  }

  return (
    <>
      <div className="cg-params">
        <span className="cg-params-title">Parâmetros da companhia</span>
        <dl>
          <div>
            <dt>Máximo</dt>
            <dd>
              {airline.installments.length > 4
                ? `até ${fmtInstallments(airline.installments[airline.installments.length - 1])}`
                : airline.installments.map(fmtInstallments).join(", ")}
            </dd>
          </div>
          <div>
            <dt>Bandeiras</dt>
            <dd>{airline.cards.map((b) => `${b} ${BRAND_NAMES[b]}`).join(" · ")}</dd>
          </div>
          <div>
            <dt>Parcela mín.</dt>
            <dd>{airline.minInstallment || "—"}</dd>
          </div>
          {airline.note ? (
            <div>
              <dt>Observação</dt>
              <dd>{airline.note}</dd>
            </div>
          ) : null}
        </dl>
      </div>

      {!airline.mapped ? (
        <div className="cg-alert cg-alert-warn">
          <IconeAlerta size={18} />
          <span>
            Código de financiamento não mapeado — o comando não será gerado para esta companhia.
          </span>
        </div>
      ) : airline.needsConfirmation ? (
        <div className="cg-alert cg-alert-warn">
          <IconeAlerta size={18} />
          <span>Código sujeito a confirmação com a companhia antes da emissão.</span>
        </div>
      ) : null}
    </>
  );
}
