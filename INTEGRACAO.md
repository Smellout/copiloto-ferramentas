# Integração — as costuras de infraestrutura

As **páginas** e as **libs de domínio** (`fpcc`, `pnr`, `srdocs`) são portáteis. O
que as prende ao app original são **duas rotas de API** e um uso pontual no
itinerário. Abaixo está tudo o que falta implementar para plugar o pacote.

## 1. `@/lib/tenant` (multi-tenant / white-label)

Usado por `api/generate`, `api/historico` e `itinerario/page.tsx`. No app original,
descobre de qual agência (tenant) é a requisição, pelo domínio.

```ts
// Tenant: o mínimo que as rotas leem é { id }.
export const tenantAtual: () => Promise<{ id: string; /* ...nome, logo, etc. */ } | null>;

// Resposta 404 padrão para domínio desconhecido.
export const SEM_TENANT: () => Response;
```

**Se você não precisa de multi-tenant:** faça `tenantAtual()` devolver um tenant
fixo (ex.: `{ id: "default" }`) e `SEM_TENANT` nunca será chamado.

## 2. `@/lib/account` (conta, acesso e histórico)

Usado por `api/generate` e `api/historico`. No app original, resolve a conta do
usuário, decide se ele pode emitir e grava/lê o histórico.

```ts
// Garante a linha da conta do usuário no tenant; devolve null se a conta
// pertence a outra empresa (bloqueio de cross-tenant).
export function ensureAccount(
  tenantId: string, userId: string, email: string | null, guestId: string | null,
): Promise<{ /* conta */ } | null>;

// Pode emitir sem crédito? `unlimited: true` libera. No white-label vem da
// assinatura da própria conta OU da equipe.
export function getEntitlement(
  tenantId: string, userId: string,
): Promise<{ unlimited: boolean; /* ... */ }>;

// Grava uma emissão (só os campos de entrada — nada calculado).
export function recordGeneration(args: {
  tenantId: string; userId: string; guestId: string | null;
  airlineId: string; brand: string; installments: number;
  fareCents: number; taxesCents: number; command: string; /* ... */
}): Promise<void>;

// Últimas emissões do usuário (para a tela "Emissões recentes" da calculadora).
export function listGenerations(
  tenantId: string, userId: string, limit: number,
): Promise<Array<{ /* campos de entrada da emissão */ }>>;
```

Note que **nada de valor calculado** é gravado: `api/historico` **reconstrói** cada
resumo chamando `generateFpCc` de novo (função pura). O código de financiamento
nunca sai do servidor.

## 3. Autenticação — `@clerk/nextjs/server`

`api/generate` usa `auth()` (pega o `userId` da sessão) e `currentUser()` (pega o
e-mail). Troque pelos equivalentes do seu provedor de auth. O essencial é obter um
`userId` estável e o e-mail primário verificado.

## A fronteira de segurança da calculadora (não inverta)

O motivo de o cálculo rodar no servidor é que **os códigos de financiamento são o
produto**. A ordem em `POST /api/generate` é deliberada:

```
validar tenant → autenticar usuário → resolver conta → checar acesso → calcular
```

`generateFpCc()` (em `src/lib/fpcc/generate.ts`) é **puro** e não toca banco nenhum;
quem autoriza é a rota, e só depois disso o código aparece — sempre dentro de um
comando já cobrado/autorizado. Se você mover o cálculo para o cliente, a base
inteira vaza no DevTools. Mantenha `airlines.ts` e `generate.ts` como `server-only`.

## Itinerário, passaporte e nascimento: sem costura

Essas três ferramentas são **cálculo puro no cliente**:
- itinerário: `src/lib/pnr/*` decodifica o PNR colado, sem rede.
- passaporte/nascimento: `src/lib/srdocs.ts` monta o SRDOCS, sem rede.

A única dependência externa delas é o `tenantAtual` do itinerário (cosmético) e a
lista `publicAirlines` (a projeção pública, sem segredo) que o seletor de companhia
exibe. Nenhuma consome API nem banco.
