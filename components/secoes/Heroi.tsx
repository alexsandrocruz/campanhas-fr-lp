import Image from 'next/image'
import type { Campanha } from '@/campanhas/tipos'
import { LinkWhatsApp } from '@/components/ui/LinkWhatsApp'
import { IconeWhatsApp } from '@/components/ui/IconeWhatsApp'
import { escritorio, anosDeAtuacao } from '@/lib/escritorio'

export function Heroi({ campanha }: { campanha: Campanha }) {
  const { heroi } = campanha

  return (
    <section className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
        <div>
          <p className="rotulo">{heroi.tagline}</p>

          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl leading-[1.1] md:text-5xl">
            {heroi.titulo}
            <span className="mt-1 block text-dourado">{heroi.destaque}</span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70">
            {heroi.subtitulo}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkWhatsApp
              mensagem={campanha.whatsapp.mensagem}
              campanha={campanha.tracking.conteudo}
              origem="heroi"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-verde px-6 py-3.5 font-medium text-white transition hover:bg-verde-escuro"
            >
              <IconeWhatsApp />
              {heroi.ctaPrimario}
            </LinkWhatsApp>

            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3.5 font-medium text-white transition hover:border-white/60"
            >
              {heroi.ctaSecundario}
            </a>
          </div>

          <p className="mt-6 text-xs text-white/40">
            {escritorio.oab} · Desde {escritorio.fundacao} · {escritorio.unidades.length} unidades
          </p>
        </div>

        {/* Retrato do advogado + selo de anos de atuação sobreposto. */}
        <div className="relative hidden aspect-[4/5] overflow-hidden rounded-lg bg-navy-claro md:block">
          <Image
            src={escritorio.fotos.advogado}
            alt={`${escritorio.advogado}, advogado previdenciarista`}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover object-top"
            /* É a maior imagem da dobra: carrega primeiro pra não penalizar o LCP. */
            priority
          />

          <div className="absolute bottom-4 left-4 rounded-md bg-navy/85 px-4 py-3 backdrop-blur-sm">
            <p className="font-[family-name:var(--font-display)] text-3xl leading-none text-dourado">
              {anosDeAtuacao}
            </p>
            <p className="mt-1 text-[0.6rem] tracking-[0.2em] text-white/60">ANOS DE ATUAÇÃO</p>
          </div>
        </div>
      </div>
    </section>
  )
}
