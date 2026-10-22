import { publicAirlines } from "@/lib/fpcc/airlines";
import { PassaporteForm } from "./passaporte-form";

export const metadata = {
  title: "Comando de passaporte (SRDOCS)",
  description:
    "Monte o comando SRDOCS com os dados do passaporte do passageiro, pronto para colar no GDS.",
};

/**
 * Página **estática**: a moldura e o formulário vêm do CDN, e o comando é
 * montado no navegador (`@/lib/srdocs`). `publicAirlines()` é a projeção pública
 * das companhias (sem o código de financiamento), usada só para escolher a cia.
 */
export default function PassaportePage() {
  return (
    <main>
      <div className="cg-page">
        <header className="cg-page-head">
          <div className="cg-page-intro">
            <nav className="cg-breadcrumb" aria-label="Você está em">
              <ol>
                <li>Ferramentas</li>
                <li aria-current="page">Passaporte</li>
              </ol>
            </nav>
            <h1>Comando de passaporte</h1>
            <p>
              Gera a entrada <b>SRDOCS</b> com os dados do passaporte — exigida por algumas
              companhias para emitir. Preencha os campos e copie o comando pronto.
            </p>
          </div>
        </header>

        <PassaporteForm airlines={publicAirlines()} />
      </div>
    </main>
  );
}
