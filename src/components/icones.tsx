/**
 * Ícones de traço (outline) da moldura do app e da calculadora.
 *
 * Todos saem da mesma base — grade 24, traço 1.75, pontas arredondadas e cor
 * por `currentColor` — para que nenhum pareça de outra família. São decorativos:
 * quem dá nome à ação é o texto ao lado, então ficam fora da árvore de
 * acessibilidade.
 */

type Props = { size?: number; className?: string };

function Svg({ size = 20, className, children }: Props & { children: React.ReactNode }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export const IconeCalculadora = (p: Props) => (
  <Svg {...p}>
    <rect x="4" y="2.5" width="16" height="19" rx="2.5" />
    <path d="M8 7h8M8 11.5h.01M12 11.5h.01M16 11.5h.01M8 15h.01M12 15h.01M16 15h.01M8 18.5h.01M12 18.5h.01M16 18.5h.01" />
  </Svg>
);

export const IconeRota = (p: Props) => (
  <Svg {...p}>
    <circle cx="6" cy="19" r="2.5" />
    <circle cx="18" cy="5" r="2.5" />
    <path d="M8.5 19h8a3.5 3.5 0 0 0 0-7h-9a3.5 3.5 0 0 1 0-7h8" />
  </Svg>
);

export const IconeMenu = (p: Props) => (
  <Svg {...p}>
    <path d="M4 6.5h16M4 12h16M4 17.5h16" />
  </Svg>
);

export const IconeFechar = (p: Props) => (
  <Svg {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </Svg>
);

export const IconeTerminal = (p: Props) => (
  <Svg {...p}>
    <rect x="2.5" y="4" width="19" height="16" rx="2.5" />
    <path d="m7 9.5 3 2.5-3 2.5M12.5 15h4.5" />
  </Svg>
);

export const IconeCopiar = (p: Props) => (
  <Svg {...p}>
    <rect x="8.5" y="8.5" width="12.5" height="12.5" rx="2" />
    <path d="M15.5 8.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h3.5" />
  </Svg>
);

export const IconeCheck = (p: Props) => (
  <Svg {...p}>
    <path d="M20 6 9 17l-5-5" />
  </Svg>
);

export const IconeInfo = (p: Props) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 16.5v-5M12 8h.01" />
  </Svg>
);

export const IconeAlerta = (p: Props) => (
  <Svg {...p}>
    <path d="M10.3 3.9 2.4 17.6A2 2 0 0 0 4.1 20.6h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
    <path d="M12 9v4.5M12 17h.01" />
  </Svg>
);

export const IconeErro = (p: Props) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 7.5v5M12 16h.01" />
  </Svg>
);

export const IconeMensagem = (p: Props) => (
  <Svg {...p}>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2.5 21.5z" />
  </Svg>
);

export const IconeSino = (p: Props) => (
  <Svg {...p}>
    <path d="M6 8.5a6 6 0 0 1 12 0c0 6.5 2.5 8.5 2.5 8.5h-17S6 15 6 8.5" />
    <path d="M10.3 20.5a1.94 1.94 0 0 0 3.4 0" />
  </Svg>
);

export const IconeEntrar = (p: Props) => (
  <Svg {...p}>
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3" />
  </Svg>
);

export const IconeNovaConta = (p: Props) => (
  <Svg {...p}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M19 8v6M22 11h-6" />
  </Svg>
);

export const IconeSeta = (p: Props) => (
  <Svg {...p}>
    <path d="m9 18 6-6-6-6" />
  </Svg>
);

export const IconeLimpar = (p: Props) => (
  <Svg {...p}>
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </Svg>
);

/**
 * O avião da marca, de bico para cima numa caixa de 24 — o mesmo desenho do
 * bilhete do logotipo, para que a trajetória do itinerário fale a mesma língua.
 */
export const AVIAO_PATH =
  "M12 1.8C13 1.8 13.6 2.8 13.6 3.9V9.3L21.6 14.2V16.2L13.6 13.8V18.6L16.4 20.6V21.9" +
  "L12 20.9L7.6 21.9V20.6L10.4 18.6V13.8L2.4 16.2V14.2L10.4 9.3V3.9C10.4 2.8 11 1.8 12 1.8Z";

/** Avião cheio (não é traço): `rotacao` em graus, 90 aponta para a direita. */
export const IconeAviao = ({ size = 20, className, rotacao = 0 }: Props & { rotacao?: number }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d={AVIAO_PATH} transform={rotacao ? `rotate(${rotacao} 12 12)` : undefined} />
  </svg>
);

export const IconeDecolagem = (p: Props) => (
  <Svg {...p}>
    <path d="M3 21h18" />
    <path d="M4.2 15.6 6 17.2l12.7-6.6a1.9 1.9 0 0 0-1.6-3.4l-4.4 2-5.3-4.4-1.8.8 3.3 5.1-3.4 1.6-2-1.1-1.3.6z" />
  </Svg>
);

export const IconePouso = (p: Props) => (
  <Svg {...p}>
    <path d="M3 21h18" />
    <path d="M3.4 9.6 3.6 12l13.9 3.3a1.9 1.9 0 0 0 1-3.6l-4.6-1.4-2.2-6.5-1.9-.5.8 6-3.7-.8-1-2.1-1.4-.3z" />
  </Svg>
);

export const IconeRelogio = (p: Props) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 6.5V12l3.5 2" />
  </Svg>
);

export const IconeCalendario = (p: Props) => (
  <Svg {...p}>
    <rect x="3" y="4.5" width="18" height="16.5" rx="2.5" />
    <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
    <path d="M7.5 13.5h.01M12 13.5h.01M16.5 13.5h.01M7.5 17h.01M12 17h.01" />
  </Svg>
);

export const IconePino = (p: Props) => (
  <Svg {...p}>
    <path d="M12 21.5s-7-6.1-7-11.6a7 7 0 0 1 14 0c0 5.5-7 11.6-7 11.6z" />
    <circle cx="12" cy="9.8" r="2.6" />
  </Svg>
);

export const IconeImprimir = (p: Props) => (
  <Svg {...p}>
    <path d="M6.5 9V3h11v6" />
    <rect x="3" y="9" width="18" height="8.5" rx="2" />
    <path d="M6.5 14.5h11V21h-11z" />
  </Svg>
);

export const IconeRecibo = (p: Props) => (
  <Svg {...p}>
    <path d="M4.5 2.5v19l2.5-1.5 2.5 1.5 2.5-1.5 2.5 1.5 2.5-1.5 2.5 1.5v-19L17 4l-2.5-1.5L12 4 9.5 2.5 7 4z" />
    <path d="M8.5 8.5h7M8.5 12h7M8.5 15.5h4" />
  </Svg>
);

/* --- tela de login --- */

export const IconeEmail = (p: Props) => (
  <Svg {...p}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <path d="m3 7 9 6 9-6" />
  </Svg>
);

export const IconeCadeado = (p: Props) => (
  <Svg {...p}>
    <rect x="4" y="10.5" width="16" height="11" rx="2.5" />
    <path d="M7.5 10.5V7a4.5 4.5 0 0 1 9 0v3.5M12 15v2.5" />
  </Svg>
);

export const IconeOlho = (p: Props) => (
  <Svg {...p}>
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="3" />
  </Svg>
);

export const IconeOlhoFechado = (p: Props) => (
  <Svg {...p}>
    <path d="M10.7 5.1A10 10 0 0 1 12 5c6.4 0 10 7 10 7a17 17 0 0 1-2.2 3.2M6.6 6.6A17 17 0 0 0 2 12s3.6 7 10 7a9.7 9.7 0 0 0 5.4-1.6" />
    <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2M3 3l18 18" />
  </Svg>
);

export const IconeEscudo = (p: Props) => (
  <Svg {...p}>
    <path d="M12 21.5s7.5-3.5 7.5-9.5V5.5L12 2.5l-7.5 3V12c0 6 7.5 9.5 7.5 9.5z" />
    <path d="m9 12 2 2 4-4" />
  </Svg>
);

export const IconeRaio = (p: Props) => (
  <Svg {...p}>
    <path d="M13 2.5 4.5 13.5H12l-1 8 8.5-11H12z" />
  </Svg>
);

export const IconeGrafico = (p: Props) => (
  <Svg {...p}>
    <path d="M3 21h18M7 17v-5M12 17V7M17 17v-8" />
  </Svg>
);

export const IconePassaporte = (p: Props) => (
  <Svg {...p}>
    <rect x="4.5" y="2.5" width="15" height="19" rx="2" />
    <circle cx="12" cy="10" r="3.2" />
    <path d="M9 17.5h6" />
  </Svg>
);

export const IconeEstrela = (p: Props) => (
  <Svg {...p}>
    <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9z" />
  </Svg>
);

/**
 * O "G" do Google, nas cores da marca — é o que a diretriz deles pede para o
 * botão de entrar, e o que a pessoa procura com o olho.
 */
export const IconeGoogle = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.2-2.1 3.5-5.1 3.5-8.8z" />
    <path fill="#34A853" d="M12 24c3.2 0 6-1.1 7.9-2.9l-3.9-3a7.2 7.2 0 0 1-10.7-3.8h-4v3.1A12 12 0 0 0 12 24z" />
    <path fill="#FBBC05" d="M5.3 14.3a7.2 7.2 0 0 1 0-4.6V6.6h-4a12 12 0 0 0 0 10.8z" />
    <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.3 6.6l4 3.1A7.2 7.2 0 0 1 12 4.8z" />
  </svg>
);
