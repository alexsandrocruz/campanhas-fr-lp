import type { Campanha } from '@/campanhas/tipos'

export function Dores({ campanha }: { campanha: Campanha }) {
  const { dores } = campanha

  return (
    <section className="bg-creme-claro">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="rotulo">Motivos mais comuns</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl md:text-4xl">
            {dores.titulo}
          </h2>
          <p className="mt-4 text-navy/60">{dores.subtitulo}</p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {dores.itens.map((dor) => (
            <div
              key={dor.titulo}
              className="rounded-lg border border-navy/10 bg-white p-6 transition hover:border-dourado/50"
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
