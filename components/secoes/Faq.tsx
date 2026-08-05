'use client'

import { useState } from 'react'
import type { Campanha } from '@/campanhas/tipos'

export function Faq({ campanha }: { campanha: Campanha }) {
  const [aberta, setAberta] = useState<number | null>(0)

  return (
    <section className="bg-creme-claro">
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <div className="text-center">
          <p className="rotulo">Dúvidas frequentes</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl md:text-4xl">
            {campanha.faq.titulo}
          </h2>
        </div>

        <div className="mt-10 divide-y divide-navy/10 border-y border-navy/10">
          {campanha.faq.itens.map((item, i) => {
            const estaAberta = aberta === i
            return (
              <div key={item.pergunta}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setAberta(estaAberta ? null : i)}
                    aria-expanded={estaAberta}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left font-medium"
                  >
                    {item.pergunta}
                    <span
                      aria-hidden="true"
                      className={`shrink-0 text-dourado transition-transform ${estaAberta ? 'rotate-45' : ''}`}
                    >
                      +
                    </span>
                  </button>
                </h3>
                {estaAberta && (
                  <p className="pb-5 text-sm leading-relaxed text-navy/65">{item.resposta}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
