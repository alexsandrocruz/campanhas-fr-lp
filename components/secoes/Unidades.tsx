import { escritorio } from '@/lib/escritorio'
import { IconeLinha } from '@/components/ui/IconeLinha'
import { Revelar } from '@/components/ui/Revelar'

export function Unidades() {
  return (
    <section className="bg-creme">
      <div className="mx-auto max-w-7xl px-5 py-16 md:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="rotulo">Onde estamos</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.03em] md:text-4xl">
            {escritorio.unidades.length} unidades, três estados
          </h2>
          <p className="mt-4 text-navy/60">
            Presença em Sergipe, Distrito Federal e Goiás — com atendimento em todo o Brasil.
          </p>
        </div>

        <div className="mt-11 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {escritorio.unidades.map((unidade, indice) => (
            <Revelar key={`${unidade.cidade}-${unidade.rotulo}`} atraso={(indice % 4) * 80} className="h-full">
              <article
              key={`${unidade.cidade}-${unidade.rotulo}`}
                className="flex h-full min-h-54 flex-col rounded-lg border border-[#e8e0d3] bg-white p-6"
            >
                <IconeLinha tipo="localizacao" className="h-5 w-5 text-dourado" />
                <p className="mt-5 text-lg font-bold leading-tight tracking-[-0.025em]">
                  {unidade.cidade}/{unidade.uf}
                  <span className="block pt-1 text-base font-medium text-navy/50">{unidade.rotulo}</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-navy/60">{unidade.endereco}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${unidade.cidade}, ${unidade.uf}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto pt-5 text-sm font-semibold text-dourado transition hover:text-navy"
                >
                  Ver no mapa →
                </a>
              </article>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  )
}
