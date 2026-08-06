import type { Campanha } from '@/campanhas/tipos'
import { IconeLinha } from '@/components/ui/IconeLinha'
import { Revelar } from '@/components/ui/Revelar'

type Dados = NonNullable<Campanha['documentos']>

export function Documentos({ dados }: { dados: Dados }) {
  return (
    <section className="bg-creme-claro">
      <div className="mx-auto max-w-7xl px-5 py-16 md:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="rotulo">Para se preparar</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.03em] md:text-4xl">
            {dados.titulo}
          </h2>
          <p className="mt-4 text-navy/60">{dados.subtitulo}</p>
        </div>

        <Revelar className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dados.itens.map((item) => (
            <article key={item.titulo} className="rounded-xl border border-navy/10 bg-white p-6 shadow-sm">
              <IconeLinha tipo="documento" className="h-6 w-6 text-dourado" />
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-bold tracking-[-0.02em]">
                {item.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/60">{item.descricao}</p>
            </article>
          ))}
        </Revelar>
      </div>
    </section>
  )
}
