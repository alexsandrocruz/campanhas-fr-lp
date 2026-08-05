import { escritorio } from '@/lib/escritorio'

export function Unidades() {
  return (
    <section className="bg-creme">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="rotulo">Onde estamos</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl md:text-4xl">
            {escritorio.unidades.length} unidades, três estados
          </h2>
          <p className="mt-4 text-navy/60">
            Presença em Sergipe, Distrito Federal e Goiás — com atendimento em todo o Brasil.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {escritorio.unidades.map((unidade) => (
            <div
              key={`${unidade.cidade}-${unidade.rotulo}`}
              className="rounded-lg border border-navy/10 bg-white p-5"
            >
              <p className="text-sm font-medium">
                {unidade.cidade}/{unidade.uf}
                <span className="text-navy/40"> — {unidade.rotulo}</span>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-navy/55">{unidade.endereco}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
