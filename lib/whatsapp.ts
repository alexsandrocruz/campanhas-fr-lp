import { escritorio } from './escritorio'

/**
 * Monta o link do WhatsApp com a mensagem ja preenchida.
 * A mensagem muda por campanha — e assim o escritorio sabe de onde veio
 * o contato ja na primeira linha da conversa.
 */
export function linkWhatsApp(mensagem: string): string {
  const params = new URLSearchParams({ text: mensagem })
  return `https://wa.me/${escritorio.whatsapp}?${params.toString()}`
}
