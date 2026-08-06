import type { Campanha } from '@/campanhas/tipos'
import { Revelar } from '@/components/ui/Revelar'

type Dados = NonNullable<Campanha['conteudosRelacionados']>

export function ConteudosRelacionados({ dados }: { dados: Dados }) {
  return (
    <section className="bg-creme-claro">
      <div className="mx-auto max-w-7xl px-5 py-16 md:py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="rotulo">Conteúdos para consultar</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.03em] md:text-4xl">
            {dados.titulo}
          </h2>
          <p className="mt-4 text-navy/60">{dados.subtitulo}</p>
        </div>

        <Revelar className="mt-10 grid gap-5 md:grid-cols-3">
          {dados.itens.map((item) => (
            <a
              key={item.titulo}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl border border-navy/10 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-dourado">{item.tipo}</p>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-bold leading-tight tracking-[-0.025em]">
                {item.titulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/60">{item.descricao}</p>
              <span className="mt-6 inline-block text-sm font-semibold text-dourado">Abrir conteúdo →</span>
            </a>
          ))}
        </Revelar>
      </div>
    </section>
  )
}
