import { publicAirlines } from "@/lib/fpcc/airlines";
import { NascimentoForm } from "./nascimento-form";

export const metadata = {
  title: "Comando de data de nascimento (SRDOCS)",
  description:
    "Monte o comando SRDOCS com a data de nascimento e o nome do passageiro, pronto para colar no GDS.",
};

/**
 * Página **estática**: a moldura e o formulário vêm do CDN; o comando é montado
 * no navegador (`@/lib/srdocs`). `publicAirlines()` serve só para escolher a cia.
 */
export default function NascimentoPage() {
  return (
    <main>
      <div className="cg-page">
        <header className="cg-page-head">
          <div className="cg-page-intro">
            <nav className="cg-breadcrumb" aria-label="Você está em">
              <ol>
                <li>Ferramentas</li>
                <li aria-current="page">Data de nascimento</li>
              </ol>
            </nav>
            <h1>Comando de data de nascimento</h1>
            <p>
              Gera a entrada <b>SRDOCS</b> com a data de nascimento e o nome do passageiro — exigida
              por algumas companhias. Preencha os campos e copie o comando pronto.
            </p>
          </div>
        </header>

        <NascimentoForm airlines={publicAirlines()} />
      </div>
    </main>
  );
}
