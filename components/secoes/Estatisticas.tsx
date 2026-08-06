import { escritorio, anosDeAtuacao } from '@/lib/escritorio'

export function Estatisticas() {
  const itens = [
    { valor: String(escritorio.fundacao), rotulo: 'Fundação' },
    { valor: String(anosDeAtuacao), rotulo: 'Anos de atuação' },
    { valor: String(escritorio.unidades.length), rotulo: 'Unidades' },
    { valor: 'Todo o Brasil', rotulo: 'Atendimento' },
  ]

  return (
    <section className="border-y border-navy-borda bg-navy-claro">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-9 md:grid-cols-4 lg:px-8">
        {itens.map((item) => (
          <div key={item.rotulo} className="text-center">
            <p className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.03em] text-dourado md:text-3xl">
              {item.valor}
            </p>
            <p className="mt-1 text-[0.65rem] tracking-[0.15em] text-white/50 uppercase">
              {item.rotulo}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
