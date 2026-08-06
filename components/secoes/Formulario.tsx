'use client'

import { useState, useEffect, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import type { Campanha } from '@/campanhas/tipos'
import { LinkWhatsApp } from '@/components/ui/LinkWhatsApp'
import { IconeWhatsApp } from '@/components/ui/IconeWhatsApp'
import { capturarUtm, lerUtm } from '@/lib/utm'

export function Formulario({ campanha }: { campanha: Campanha }) {
  const router = useRouter()
  const [enviando, setEnviando] = useState(false)
  const [erro, setErro] = useState<string | null>(null)

  // Guarda a origem do trafego assim que a pagina carrega.
  useEffect(() => capturarUtm(), [])

  async function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErro(null)
    setEnviando(true)

    const dados = Object.fromEntries(new FormData(e.currentTarget))

    try {
      const resposta = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...dados, campanha: campanha.slug, utm: lerUtm() }),
      })

      if (!resposta.ok) throw new Error('falha no envio')

      // A conversao e disparada na pagina /obrigado, nao aqui.
      router.push(`/${campanha.slug}/obrigado`)
    } catch {
      setErro('Não conseguimos enviar agora. Tente pelo WhatsApp, é mais rápido.')
      setEnviando(false)
    }
  }

  const campo =
    'w-full rounded-md border border-navy/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-dourado'

  return (
    <section id="formulario" className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24 lg:px-8">
        <div>
          <p className="rotulo">Análise do seu caso</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.03em] md:text-4xl">
            {campanha.formulario.titulo}
            <span className="block text-dourado">{campanha.formulario.subtitulo}</span>
          </h2>

          <ul className="mt-8 space-y-3 text-sm text-white/65">
            <li>✓ Resposta pelo WhatsApp, no seu tempo</li>
            <li>✓ Atendimento em todo o Brasil</li>
            <li>✓ Linguagem simples, sem juridiquês</li>
          </ul>
        </div>

        <form onSubmit={enviar} className="rounded-xl bg-creme-claro p-6 text-navy shadow-2xl shadow-black/20 md:p-8">
          <div className="space-y-3">
            <input name="nome" required placeholder="Seu nome completo" className={campo} />
            <input
              name="whatsapp"
              required
              type="tel"
              inputMode="tel"
              placeholder="(00) 00000-0000"
              className={campo}
            />
            <input name="email" type="email" placeholder="E-mail (opcional)" className={campo} />

            <select name="assunto" required defaultValue="" className={campo}>
              <option value="" disabled>
                Sobre o que você quer falar?
              </option>
              {campanha.formulario.assuntos.map((assunto) => (
                <option key={assunto} value={assunto}>
                  {assunto}
                </option>
              ))}
            </select>
          </div>

          <label className="mt-4 flex items-start gap-3 text-xs leading-relaxed text-navy/60">
            <input type="checkbox" name="consentimento" required className="mt-0.5" />
            <span>
              Concordo em ser contatado sobre o meu caso e autorizo o uso dos meus dados para
              esse fim, conforme a Lei Geral de Proteção de Dados.
            </span>
          </label>

          {erro && <p className="mt-4 text-sm text-red-600">{erro}</p>}

          <button
            type="submit"
            disabled={enviando}
            className="mt-5 w-full rounded-md bg-dourado py-3.5 font-semibold text-navy transition hover:brightness-105 disabled:opacity-60"
          >
            {enviando ? 'Enviando...' : 'Quero uma análise do meu caso'}
          </button>

          <LinkWhatsApp
            mensagem={campanha.whatsapp.mensagem}
            campanha={campanha.tracking.conteudo}
            origem="formulario"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-md border border-verde py-3 text-sm font-semibold text-verde-escuro transition hover:bg-verde/5"
          >
            <IconeWhatsApp className="h-4 w-4" />
            Falar agora no WhatsApp
          </LinkWhatsApp>
        </form>
      </div>
    </section>
  )
}
