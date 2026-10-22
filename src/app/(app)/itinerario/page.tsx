import { Decodificador } from "@/components/decodificador";
import { IconeTerminal } from "@/components/icones";
import { tenantAtual } from "@/lib/tenant";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Decodificador de itinerário",
  description:
    "Cole o itinerário do GDS e receba o plano de voos legível: nome do aeroporto, " +
    "duração real de cada trecho e tempo de conexão. Nada sai do seu navegador.",
};

/**
 * Não exige conta e não consome crédito.
 *
 * É ferramenta de uso diário — o agente monta cotação várias vezes por dia —
 * enquanto o FP CC é por emissão. Cobrar aqui afastaria o uso que traz a
 * pessoa ao site todo dia, que é justamente o que faz ela criar conta e
 * comprar crédito para o que de fato vende.
 */
export default async function ItinerarioPage() {
  // White-label: o PDF sai com o nome e o logo do cliente, automaticamente.
  const tenant = await tenantAtual();
  const marca = tenant
    ? { nome: tenant.nome, temLogo: tenant.marca.temLogo, versao: tenant.marca.versao }
    : undefined;

  return (
    <main>
      <div className="cg-page cg-itin">
        <header className="cg-page-head">
          <div className="cg-page-intro">
            <nav className="cg-breadcrumb" aria-label="Você está em">
              <ol>
                <li>Ferramentas</li>
                <li aria-current="page">Itinerário</li>
              </ol>
            </nav>
            <h1>Decodificador de itinerário</h1>
            <p>
              Cole as linhas do GDS e receba o plano de voos com nome de aeroporto, duração real de
              cada trecho e o tempo de cada conexão — no fuso certo de cada ponta.
            </p>
          </div>

          <div className="cg-page-meta">
            <span className="cg-gds-badge">
              <IconeTerminal size={16} />
              Formato GDS
            </span>
            <span className="cg-gds-badge">Grátis, sem conta</span>
          </div>
        </header>

        <Decodificador marca={marca} />
      </div>
    </main>
  );
}
