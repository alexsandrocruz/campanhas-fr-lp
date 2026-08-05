'use client'

/**
 * Camada fina sobre Meta Pixel e GA4.
 *
 * Regra do projeto: TODO evento carrega o identificador da campanha.
 * Sem isso nao da pra saber qual anuncio gerou o lead — e sem saber isso
 * nao da pra otimizar verba.
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    gtag?: (...args: unknown[]) => void
  }
}

type Dados = Record<string, unknown>

function meta(evento: string, dados: Dados) {
  if (typeof window === 'undefined' || !window.fbq) return
  window.fbq('track', evento, dados)
}

function ga(evento: string, dados: Dados) {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', evento, dados)
}

/** Clique em qualquer botao de WhatsApp. Sinal de intencao, nao de conversao. */
export function eventoWhatsApp(campanha: string, origem: string) {
  meta('Contact', { content_name: campanha, content_category: origem })
  ga('clique_whatsapp', { campanha, origem })
}

/** Envio do formulario. Dispara no /obrigado, nao no clique do botao. */
export function eventoLead(campanha: string) {
  meta('Lead', { content_name: campanha })
  ga('generate_lead', { campanha })
}

/** Rolagem profunda — util pra medir qualidade do trafego pago. */
export function eventoLeituraProfunda(campanha: string) {
  ga('leitura_profunda', { campanha })
}
