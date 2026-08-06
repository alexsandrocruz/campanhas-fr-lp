import { LinkWhatsApp } from '@/components/ui/LinkWhatsApp'
import { IconeWhatsApp } from '@/components/ui/IconeWhatsApp'

/** Botao verde flutuante, presente em toda a pagina. */
export function BotaoWhatsApp({ mensagem, campanha }: { mensagem: string; campanha: string }) {
  return (
    <LinkWhatsApp
      mensagem={mensagem}
      campanha={campanha}
      origem="flutuante"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-verde text-white shadow-lg shadow-black/25 transition hover:bg-verde-escuro hover:scale-105"
    >
      <span className="sr-only">Falar no WhatsApp</span>
      <IconeWhatsApp className="h-7 w-7" />
    </LinkWhatsApp>
  )
}
