# Copiloto — Ferramentas do GDS

Código isolado das quatro ferramentas do Copiloto, extraído do app completo para
poder ser entregue sozinho, sem o resto do SaaS (autenticação, billing, painel,
multi-tenant etc.).

> **São apenas os arquivos de código**, mantendo a estrutura `src/` original. **Este
> pacote não compila nem roda sozinho**: ele depende de um projeto Next.js (App
> Router) hospedeiro e de duas "costuras" de infraestrutura descritas em
> [`INTEGRACAO.md`](./INTEGRACAO.md). Serve para quem vai **integrar** estas
> ferramentas no próprio projeto.

## As quatro ferramentas

| Ferramenta | Rota | O que faz | Tem segredo? |
|---|---|---|---|
| **Calculadora FP CC** | `src/app/(app)/calculadora/` | Monta o comando FP CC (parcelamento no cartão) do GDS, com memória de cálculo | **Sim** — ver abaixo |
| **Itinerário** | `src/app/(app)/itinerario/` | Decodifica um PNR colado e monta a tabela de voos | Não |
| **Passaporte** | `src/app/(app)/passaporte/` | Monta o comando SRDOCS com o documento completo | Não |
| **Data de nascimento** | `src/app/(app)/nascimento/` | Monta o SRDOCS só com nascimento + nome | Não |

## ⚠️ Arquivo sensível — `src/lib/fpcc/airlines.ts`

Este arquivo contém a **tabela de códigos de financiamento das 44 companhias** — o
ativo central do produto. Ele é `server-only`: **nunca** pode ser importado por um
componente `"use client"`, senão a base inteira vai para o bundle do navegador.

- O cliente recebe apenas `publicAirlines` / `toPublic()`: nome, teto de parcelas,
  bandeiras, parcela mínima e avisos — **sem** o código de financiamento.
- O código real só aparece dentro de um comando já autorizado, devolvido por
  `POST /api/generate` (servidor).
- Por isso este repositório é **privado**. Quem tiver acesso ao repositório tem a
  base de códigos. Controle os convites como controla o ativo.

## Mapa de arquivos

```
src/
  lib/
    fpcc/            motor da calculadora FP CC
      airlines.ts    ⚠️ tabela de códigos (server-only) — O PRODUTO
      generate.ts    cálculo puro do comando (server-only)
      money.ts       aritmética em centavos inteiros
      types.ts       tipos + PublicAirline (projeção sem segredo)
    pnr/             decodificador de PNR do itinerário (tudo puro)
      aeroportos-base.ts   base gerada (5.459 aeroportos, domínio público)
      aeroportos.ts, companhias.ts, formato.ts, fuso.ts,
      gds.ts, itinerario.ts, passageiros.ts, status.ts,
      tipos.ts, visual-companhias.ts
    srdocs.ts        montagem dos comandos SRDOCS (passaporte/nascimento), puro
    whatsapp.ts      link do WhatsApp de suporte (usa NEXT_PUBLIC_WHATSAPP)
  components/
    decodificador.tsx, tabela-voos.tsx, trecho-voo.tsx   (itinerário)
    srdocs-ui.tsx                                         (passaporte/nascimento)
    nb-select.tsx, icones.tsx                             (compartilhados)
  app/
    (app)/calculadora/   page.tsx + calculator.tsx
    (app)/itinerario/    page.tsx
    (app)/passaporte/    page.tsx + passaporte-form.tsx
    (app)/nascimento/    page.tsx + nascimento-form.tsx
    api/generate/        route.ts   ← costura de infra (ver INTEGRACAO.md)
    api/historico/       route.ts   ← costura de infra (ver INTEGRACAO.md)
public/
  companhias/        62 logotipos oficiais de companhias (60 .svg + 2 .png),
                     servidos em /companhias/<IATA>.<ext>. São os logos que o
                     itinerário exibe no selo de cada voo (ver visual-companhias.ts).
```

## O que o integrador precisa prover

1. **Projeto Next.js (App Router)** com o alias `@/*` → `./src/*`
   (ver `tsconfig.reference.json`).
2. **Dependências npm** (versões do projeto de origem):
   - runtime: `next@^16`, `react@^19`, `react-dom@^19`, `server-only@^0.0.1`
   - só nas rotas de API: `@clerk/nextjs@^7` (auth) — substituível pela auth do host
3. **As duas costuras de infra** — `@/lib/tenant` e `@/lib/account` — que as rotas
   de API importam e **não** estão neste pacote. As assinaturas esperadas estão em
   [`INTEGRACAO.md`](./INTEGRACAO.md). O itinerário também usa `tenantAtual` só para
   descobrir de qual agência é a tela; dá para substituir por uma constante.
4. **CSS**: as telas usam classes `.cg-*` escopadas em `.cg-app` (o visual do app
   original). Este pacote **não inclui** o CSS; replique as classes ou estilize por
   conta própria.
5. **Assets estáticos**: a pasta `public/companhias/` precisa ser servida na raiz
   (`/companhias/...`). Em Next.js, basta mantê-la em `public/`. Companhia sem
   arquivo de logo cai no selo genérico — não quebra.

## Regras de domínio que não podem quebrar

- **Nunca inventar código de financiamento.** Companhia sem código na base (Azul,
  GOL, MAP) devolve erro — nada de sintaxe "parecida".
- **Nunca gerar número de cartão ou validade reais** — a saída traz sempre os
  literais `NUMERODOCARTAO` e `MMAA`.
- **Toda aritmética em centavos inteiros.** Float vira centavo errado.
- **Ordem em `/api/generate`: validar → autorizar → calcular.** `generateFpCc()` é
  puro; a rota só calcula depois de confirmar o acesso.

A UI, os comentários e as mensagens são em **pt-BR** de propósito — mantenha assim.
