'use client'

import type { ReactNode } from 'react'
import { linkWhatsApp } from '@/lib/whatsapp'
import { eventoWhatsApp } from '@/lib/tracking'

type Props = {
  mensagem: string
  campanha: string
  /** De onde partiu o clique: 'heroi', 'flutuante', 'rodape'... */
  origem: string
  className?: string
  children: ReactNode
}

/**
 * Todo caminho pro WhatsApp passa por aqui — assim nenhum clique
 * escapa do rastreamento por descuido.
 */
export function LinkWhatsApp({ mensagem, campanha, origem, className, children }: Props) {
  return (
    <a
      href={linkWhatsApp(mensagem)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => eventoWhatsApp(campanha, origem)}
      className={className}
    >
      {children}
    </a>
  )
}
