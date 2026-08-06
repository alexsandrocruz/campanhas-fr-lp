import type { Campanha } from '@/campanhas/tipos'
import { LinkWhatsApp } from '@/components/ui/LinkWhatsApp'
import { IconeLinha } from '@/components/ui/IconeLinha'
import { Revelar } from '@/components/ui/Revelar'

const icones = ['documento', 'relogio', 'grafico', 'escudo', 'calendario', 'pulso'] as const

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

        <div className="mt-11 grid gap-4 md:grid-cols-3">
          {dores.itens.map((dor, indice) => (
            <Revelar key={dor.titulo} atraso={(indice % 3) * 90} className="h-full">
              <article
                key={dor.titulo}
                className="flex h-full min-h-60 flex-col rounded-lg border border-[#e8e0d3] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-dourado/80 hover:shadow-xl hover:shadow-navy/5"
              >
                <IconeLinha tipo={icones[indice % icones.length]} className="h-6 w-6 text-dourado" />
                <h3 className="mt-6 text-xl font-bold leading-[1.23] tracking-[-0.025em]">&ldquo;{dor.titulo}&rdquo;</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/60">{dor.texto}</p>
                <LinkWhatsApp
                  mensagem={campanha.whatsapp.mensagem}
                  campanha={campanha.tracking.conteudo}
                  origem={`dor_${indice + 1}`}
                  className="mt-auto pt-5 text-sm font-semibold text-dourado transition hover:text-navy"
                >
                  Falar sobre isso →
                </LinkWhatsApp>
              </article>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  )
}
