'use client'

import { useEffect } from 'react'
import type { Campanha } from '@/campanhas/tipos'
import { eventoLead } from '@/lib/tracking'
import { LinkWhatsApp } from '@/components/ui/LinkWhatsApp'
import { IconeWhatsApp } from '@/components/ui/IconeWhatsApp'

/**
 * A conversao e contabilizada AQUI, no carregamento da pagina —
 * nao no clique do botao de envio.
 *
 * Motivo: so chega nesta URL quem teve o formulario aceito pela API.
 * Isso mantem o Meta Ads otimizando por lead real, e nao por clique.
 */
export function ConfirmacaoLead({ campanha }: { campanha: Campanha }) {
  useEffect(() => {
    eventoLead(campanha.tracking.conteudo)
  }, [campanha.tracking.conteudo])

  return (
    <main className="flex min-h-[75vh] items-center bg-navy text-white">
      <div className="mx-auto max-w-xl px-5 py-20 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-dourado text-2xl text-dourado">
          ✓
        </span>

        <h1 className="mt-6 font-[family-name:var(--font-display)] text-3xl md:text-4xl">
          Recebemos o seu caso.
        </h1>

        <p className="mt-4 leading-relaxed text-white/65">
          Nossa equipe vai analisar as informações e entrar em contato pelo WhatsApp que você
          informou. Se preferir adiantar, é só chamar agora — costuma ser mais rápido.
        </p>

        <LinkWhatsApp
          mensagem={campanha.whatsapp.mensagem}
          campanha={campanha.tracking.conteudo}
          origem="obrigado"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-verde px-6 py-3.5 font-medium text-white transition hover:bg-verde-escuro"
        >
          <IconeWhatsApp />
          Falar agora no WhatsApp
        </LinkWhatsApp>
      </div>
    </main>
  )
}
