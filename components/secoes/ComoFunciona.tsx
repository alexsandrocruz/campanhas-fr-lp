import type { Campanha } from '@/campanhas/tipos'

export function ComoFunciona({ campanha }: { campanha: Campanha }) {
  const { comoFunciona } = campanha

  return (
    <section id="como-funciona" className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="rotulo">Como funciona</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl md:text-4xl">
            {comoFunciona.titulo}
          </h2>
        </div>

        <ol className="mt-12 grid gap-8 md:grid-cols-4">
          {comoFunciona.passos.map((passo, i) => (
            <li key={passo.titulo}>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-dourado/60 text-sm text-dourado">
                {i + 1}
              </span>
              <h3 className="mt-4 font-medium">{passo.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{passo.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
