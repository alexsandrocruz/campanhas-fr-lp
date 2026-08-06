import type { Campanha } from '@/campanhas/tipos'
import { Revelar } from '@/components/ui/Revelar'

type Dados = NonNullable<Campanha['videoInstitucional']>

export function VideoInstitucional({ dados }: { dados: Dados }) {
  return (
    <section className="bg-navy text-white">
      <Revelar className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-16 md:grid-cols-[1fr_auto] md:py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="rotulo">{dados.rotulo}</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight tracking-[-0.03em] md:text-4xl">
            {dados.titulo}
          </h2>
          <p className="mt-4 leading-relaxed text-white/65">{dados.descricao}</p>
        </div>
        <a
          href={dados.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-3 rounded-lg bg-dourado px-6 py-4 font-semibold text-navy transition-transform duration-300 hover:-translate-y-0.5"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-xs text-white">▶</span>
          {dados.cta}
        </a>
      </Revelar>
    </section>
  )
}
