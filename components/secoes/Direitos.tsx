import type { Campanha } from '@/campanhas/tipos'

export function Direitos({ campanha }: { campanha: Campanha }) {
  const { direitos } = campanha

  return (
    <section className="bg-creme">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="rotulo">Áreas de atuação</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl md:text-4xl">
            {direitos.titulo}
          </h2>
          <p className="mt-4 text-navy/60">{direitos.subtitulo}</p>
        </div>

        <div className="mt-10 grid gap-x-10 gap-y-6 md:grid-cols-2">
          {direitos.itens.map((item) => (
            <div key={item.titulo} className="flex gap-4 border-b border-navy/10 pb-6">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mt-0.5 h-5 w-5 shrink-0 text-dourado"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h3 className="font-medium">{item.titulo}</h3>
                <p className="mt-1 text-sm leading-relaxed text-navy/60">{item.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
