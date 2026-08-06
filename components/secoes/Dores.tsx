import type { Campanha } from '@/campanhas/tipos'

export function Dores({ campanha }: { campanha: Campanha }) {
  const { dores } = campanha

  return (
    <section className="bg-creme-claro">
      <div className="mx-auto max-w-7xl px-5 py-16 md:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="rotulo">Motivos mais comuns</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.03em] md:text-4xl">
            {dores.titulo}
          </h2>
          <p className="mt-4 text-navy/60">{dores.subtitulo}</p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {dores.itens.map((dor) => (
            <div
              key={dor.titulo}
              className="rounded-xl border border-navy/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-dourado/50 hover:shadow-lg hover:shadow-navy/5"
            >
              <span className="block h-1 w-8 rounded-full bg-dourado" />
              <h3 className="mt-4 font-medium">&ldquo;{dor.titulo}&rdquo;</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/60">{dor.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
