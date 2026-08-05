import { LinkWhatsApp } from '@/components/ui/LinkWhatsApp'
import { IconeWhatsApp } from '@/components/ui/IconeWhatsApp'
import { escritorio } from '@/lib/escritorio'

export function Cabecalho({ mensagem, campanha }: { mensagem: string; campanha: string }) {
  return (
    <header className="bg-navy">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href={escritorio.siteInstitucional} className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-dourado text-xs font-semibold tracking-tight text-dourado">
            FR
          </span>
          <span className="leading-tight text-white">
            <span className="block text-sm font-semibold tracking-wide">FÁBIO RIBEIRO</span>
            <span className="block text-[0.65rem] tracking-[0.2em] text-white/60">ADVOGADOS</span>
          </span>
        </a>

        <LinkWhatsApp
          mensagem={mensagem}
          campanha={campanha}
          origem="cabecalho"
          className="flex items-center gap-2 rounded-full bg-verde px-4 py-2 text-sm font-medium text-white transition hover:bg-verde-escuro"
        >
          <IconeWhatsApp className="h-4 w-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </LinkWhatsApp>
      </div>
    </header>
  )
}
