import Image from 'next/image'
import { escritorio, anosDeAtuacao } from '@/lib/escritorio'

export function Autoridade() {
  return (
    <section className="bg-creme-claro">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24 lg:px-8">
        <div className="revelar relative aspect-[4/3] overflow-hidden rounded-xl bg-navy/5 shadow-xl shadow-navy/10">
          <Image
            src={escritorio.fotos.escritorio}
            alt={`${escritorio.advogado} no escritório`}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="revelar revelar-atraso-1">
          <p className="rotulo">O escritório</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight tracking-[-0.03em] md:text-4xl">
            Advocacia que escuta,
            <span className="block text-dourado">há {anosDeAtuacao} anos</span>
          </h2>

          <p className="mt-2 text-sm text-navy/50">
            {escritorio.advogado} · {escritorio.oab}
          </p>

          <p className="mt-5 leading-relaxed text-navy/70">
            {escritorio.advogado} iniciou a advocacia em {escritorio.fundacao} e dedica sua
            atuação ao Direito Previdenciário. Do atendimento no INSS à Justiça Federal,
            construiu um escritório com {escritorio.unidades.length} unidades em três estados.
          </p>

          <blockquote className="mt-7 border-l-2 border-dourado pl-5 text-navy/70 italic">
            &ldquo;Nem toda causa previdenciária vira processo. Parte do trabalho é explicar,
            com honestidade, o que realmente dá para fazer.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  )
}
