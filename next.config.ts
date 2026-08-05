import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // A raiz do subdominio nao tem conteudo proprio: manda pro site institucional.
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://fabioribeiroadvogados.com.br',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
