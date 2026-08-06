import Image from 'next/image'
import { LinkWhatsApp } from '@/components/ui/LinkWhatsApp'
import { IconeWhatsApp } from '@/components/ui/IconeWhatsApp'
import { escritorio } from '@/lib/escritorio'

export function Cabecalho({ mensagem, campanha }: { mensagem: string; campanha: string }) {
  return (
    <header className="border-b border-white/10 bg-navy text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <a href={escritorio.siteInstitucional} aria-label="Ir para o site institucional" className="shrink-0">
          <Image src={escritorio.fotos.logo} alt="Fábio Ribeiro Advogados" width={321} height={66} className="h-auto w-[172px]" priority />
        </a>

        <LinkWhatsApp
          mensagem={mensagem}
          campanha={campanha}
          origem="cabecalho"
          className="flex items-center gap-2 rounded-md bg-verde px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-verde-escuro"
        >
          <IconeWhatsApp className="h-4 w-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </LinkWhatsApp>
      </div>
    </header>
  )
}
