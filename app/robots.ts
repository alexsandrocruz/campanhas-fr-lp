import type { MetadataRoute } from 'next'

/**
 * O subdominio inteiro fica fora do indice do Google.
 * Landing de trafego pago indexada canibaliza o SEO do site institucional.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', disallow: '/' },
  }
}
