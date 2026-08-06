import type { Campanha } from '@/campanhas/tipos'
import { Revelar } from '@/components/ui/Revelar'

export function ComoFunciona({ campanha }: { campanha: Campanha }) {
  const { comoFunciona } = campanha

  return (
    <section id="como-funciona" className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="rotulo">Como funciona</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.03em] md:text-4xl">
            {comoFunciona.titulo}
          </h2>
        </div>

        <Revelar className="mt-12">
          <ol className="grid gap-10 md:grid-cols-4 md:gap-8">
            {comoFunciona.passos.map((passo, i) => (
              <li key={passo.titulo}>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-dourado/60 text-sm font-semibold text-dourado">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-[1.05rem] font-bold leading-snug tracking-[-0.02em]">{passo.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{passo.texto}</p>
              </li>
            ))}
          </ol>
        </Revelar>
      </div>
    </section>
  )
}
