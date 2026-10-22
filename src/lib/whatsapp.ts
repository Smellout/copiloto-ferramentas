/**
 * WhatsApp do suporte. O número vem de NEXT_PUBLIC_WHATSAPP (DDI+DDD+número,
 * só dígitos). O padrão abaixo é um placeholder proposital — não existe.
 */
const NUMERO = process.env.NEXT_PUBLIC_WHATSAPP ?? "5500000000000";

export function whatsappUrl(
  texto = "Olá! Vim pelo Copiloto GDS e queria falar com o suporte.",
): string {
  return `https://wa.me/${NUMERO}?text=${encodeURIComponent(texto)}`;
}
