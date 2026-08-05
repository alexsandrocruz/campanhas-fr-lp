'use client'

/**
 * Le os UTMs da URL e guarda na sessao, pra que o lead enviado pelo
 * formulario carregue a origem mesmo depois de o usuario navegar.
 */
const CHAVE = 'frv_utm'
const CAMPOS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const

export function capturarUtm(): void {
  if (typeof window === 'undefined') return
  const busca = new URLSearchParams(window.location.search)
  const encontrados: Record<string, string> = {}

  for (const campo of CAMPOS) {
    const valor = busca.get(campo)
    if (valor) encontrados[campo] = valor
  }

  if (Object.keys(encontrados).length > 0) {
    sessionStorage.setItem(CHAVE, JSON.stringify(encontrados))
  }
}

export function lerUtm(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  try {
    return JSON.parse(sessionStorage.getItem(CHAVE) ?? '{}')
  } catch {
    return {}
  }
}
