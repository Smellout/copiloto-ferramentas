import { publicAirlines } from "@/lib/fpcc/airlines";
import { Calculator } from "./calculator";

export const metadata = {
  title: "Calculadora de emissão",
};

/**
 * Página **estática**: a moldura e o formulário vêm prontos do CDN, sem
 * ida-e-volta ao servidor a cada visita — é o que faz a troca de menu ser
 * instantânea. Antes a página chamava `auth()` para trazer o saldo pronto, e
 * isso a tornava dinâmica (render no servidor por requisição).
 *
 * O saldo é por pessoa, então some do HTML e o `Calculator` o resolve no
 * navegador via `/api/me` — o mesmo caminho do chip de saldo da navbar, que já
 * espera resolver antes de mostrar qualquer número. Assim nenhum saldo errado
 * pisca no balão de avisos.
 *
 * `publicAirlines()` é a projeção pública (sem o código de financiamento), então
 * pode ser embutida no estático sem vazar a base.
 */
export default function CalculadoraPage() {
  return (
    <main>
      <Calculator airlines={publicAirlines()} />
    </main>
  );
}
