import type { Campanha } from '@/campanhas/tipos'
import { Revelar } from '@/components/ui/Revelar'

type Dados = NonNullable<Campanha['avisoAtendimento']>

export function AvisoAtendimento({ dados }: { dados: Dados }) {
  return (
    <section className="bg-creme-claro pb-2">
      <Revelar className="mx-auto max-w-4xl px-5 pt-16 md:pt-24">
        <div className="rounded-xl border border-dourado/35 bg-white p-6 md:p-8">
          <p className="rotulo">Próximo passo</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.025em] md:text-3xl">
            {dados.titulo}
          </h2>
          <p className="mt-3 leading-relaxed text-navy/65">{dados.texto}</p>
          <ul className="mt-5 grid gap-3 text-sm text-navy/75 md:grid-cols-3">
            {dados.itens.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true" className="text-dourado">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Revelar>
    </section>
  )
}
