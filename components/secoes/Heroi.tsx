import Image from 'next/image'
import type { Campanha } from '@/campanhas/tipos'
import { LinkWhatsApp } from '@/components/ui/LinkWhatsApp'
import { IconeWhatsApp } from '@/components/ui/IconeWhatsApp'
import { escritorio, anosDeAtuacao } from '@/lib/escritorio'

export function Heroi({ campanha }: { campanha: Campanha }) {
  const { heroi } = campanha

  return (
    <section className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 md:grid-cols-2 md:py-20 lg:px-8 lg:py-24">
        <div className="revelar">
          <p className="rotulo">{heroi.tagline}</p>

          <h1 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] md:text-5xl lg:text-[3.45rem]">
            {heroi.titulo}
            <span className="mt-1 block text-dourado">{heroi.destaque}</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-[1.05rem]">
            {heroi.subtitulo}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkWhatsApp
              mensagem={campanha.whatsapp.mensagem}
              campanha={campanha.tracking.conteudo}
              origem="heroi"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-verde px-6 py-3.5 font-semibold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-verde-escuro"
            >
              <IconeWhatsApp />
              {heroi.ctaPrimario}
            </LinkWhatsApp>

            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center rounded-lg border border-white/25 px-6 py-3.5 font-semibold text-white transition hover:border-dourado hover:text-dourado"
            >
              {heroi.ctaSecundario}
            </a>
          </div>

          <p className="mt-6 text-xs text-white/40">
            {escritorio.oab} · Desde {escritorio.fundacao} · {escritorio.unidades.length} unidades
          </p>
        </div>

        {/* Retrato do advogado + selo de anos de atuação sobreposto. */}
        <div className="revelar revelar-atraso-1 relative hidden w-full max-w-[440px] justify-self-center overflow-visible md:block">
          <div className="absolute -inset-5 -z-0 rounded-[2rem] border border-dourado/20" />
          <div className="relative z-10 aspect-[2/3] w-full overflow-hidden rounded-xl border border-dourado/25 bg-navy-claro shadow-2xl shadow-black/35">
            <Image
              src={escritorio.fotos.advogado}
              alt={`${escritorio.advogado}, advogado previdenciarista`}
              fill
              sizes="(min-width: 768px) 440px, 100vw"
              className="object-cover object-top"
              /* É a maior imagem da dobra: carrega primeiro pra não penalizar o LCP. */
              priority
            />

            <div className="absolute bottom-4 left-4 rounded-md border border-dourado/25 bg-navy/90 px-4 py-3 backdrop-blur-sm">
              <p className="font-[family-name:var(--font-display)] text-3xl leading-none text-dourado">
                {anosDeAtuacao}
              </p>
              <p className="mt-1 text-[0.6rem] tracking-[0.2em] text-white/60">ANOS DE ATUAÇÃO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
