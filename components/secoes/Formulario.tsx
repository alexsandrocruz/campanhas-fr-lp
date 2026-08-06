'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Script from 'next/script'
import type { Campanha } from '@/campanhas/tipos'
import { LinkWhatsApp } from '@/components/ui/LinkWhatsApp'
import { IconeWhatsApp } from '@/components/ui/IconeWhatsApp'
import { obterScriptDoFormulario } from '@/lib/leads-embed'
import { eventoLead } from '@/lib/tracking'

export function Formulario({ campanha }: { campanha: Campanha }) {
  const router = useRouter()
  const enviou = useRef(false)
  const mountId = `dominus-leads-form-${campanha.slug}`
  const scriptUrl = obterScriptDoFormulario(campanha.formulario.formId)

  useEffect(() => {
    function aoEnviarFormulario() {
      // O widget só emite o evento após a API do Dominus confirmar a criação do lead.
      if (enviou.current) return
      enviou.current = true
      eventoLead(campanha.tracking.conteudo)
      router.push(`/${campanha.slug}/obrigado`)
    }

    window.addEventListener('dominus:form:submitted', aoEnviarFormulario)
    return () => window.removeEventListener('dominus:form:submitted', aoEnviarFormulario)
  }, [campanha.slug, campanha.tracking.conteudo, router])

  return (
    <section id="formulario" className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24 lg:px-8">
        <div>
          <p className="rotulo">Análise do seu caso</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.03em] md:text-4xl">
            {campanha.formulario.titulo}
            <span className="block text-dourado">{campanha.formulario.subtitulo}</span>
          </h2>

          <ul className="mt-8 space-y-3 text-sm text-white/65">
            <li>✓ Resposta pelo WhatsApp, no seu tempo</li>
            <li>✓ Atendimento em todo o Brasil</li>
            <li>✓ Linguagem simples, sem juridiquês</li>
          </ul>
        </div>

        <div className="rounded-xl bg-creme-claro p-6 text-navy shadow-2xl shadow-black/20 md:p-8">
          {scriptUrl ? (
            <>
              <div id={mountId} className="dominus-leads-embed" />
              <Script
                id={`dominus-leads-script-${campanha.slug}`}
                src={scriptUrl}
                data-mount-id={mountId}
                strategy="afterInteractive"
              />
            </>
          ) : (
            <p className="text-sm leading-relaxed text-navy/70">
              O formulário está temporariamente indisponível. Fale com a nossa equipe pelo WhatsApp.
            </p>
          )}

          <LinkWhatsApp
            mensagem={campanha.whatsapp.mensagem}
            campanha={campanha.tracking.conteudo}
            origem="formulario"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-md border border-verde py-3 text-sm font-semibold text-verde-escuro transition hover:bg-verde/5"
          >
            <IconeWhatsApp className="h-4 w-4" />
            Falar agora no WhatsApp
          </LinkWhatsApp>
        </div>
      </div>
    </section>
  )
}
