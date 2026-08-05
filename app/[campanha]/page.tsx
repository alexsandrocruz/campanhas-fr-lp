import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCampanha, slugs } from '@/campanhas'

import { Cabecalho } from '@/components/secoes/Cabecalho'
import { Heroi } from '@/components/secoes/Heroi'
import { Estatisticas } from '@/components/secoes/Estatisticas'
import { Dores } from '@/components/secoes/Dores'
import { Direitos } from '@/components/secoes/Direitos'
import { ComoFunciona } from '@/components/secoes/ComoFunciona'
import { Autoridade } from '@/components/secoes/Autoridade'
import { Unidades } from '@/components/secoes/Unidades'
import { Faq } from '@/components/secoes/Faq'
import { Formulario } from '@/components/secoes/Formulario'
import { Rodape } from '@/components/secoes/Rodape'
import { BotaoWhatsApp } from '@/components/BotaoWhatsApp'

type Props = { params: Promise<{ campanha: string }> }

/** Gera uma pagina estatica por campanha no build. */
export function generateStaticParams() {
  return slugs.map((campanha) => ({ campanha }))
}

/** Slug fora do registro = 404. */
export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { campanha: slug } = await params
  const campanha = getCampanha(slug)
  if (!campanha) return {}

  return {
    title: campanha.meta.titulo,
    description: campanha.meta.descricao,
    openGraph: {
      title: campanha.meta.titulo,
      description: campanha.meta.descricao,
      type: 'website',
    },
  }
}

export default async function PaginaCampanha({ params }: Props) {
  const { campanha: slug } = await params
  const campanha = getCampanha(slug)
  if (!campanha) notFound()

  const { mensagem } = campanha.whatsapp
  const id = campanha.tracking.conteudo

  return (
    <>
      <Cabecalho mensagem={mensagem} campanha={id} />
      <main>
        <Heroi campanha={campanha} />
        <Estatisticas />
        <Dores campanha={campanha} />
        <Direitos campanha={campanha} />
        <ComoFunciona campanha={campanha} />
        <Autoridade />
        <Unidades />
        <Faq campanha={campanha} />
        <Formulario campanha={campanha} />
      </main>
      <Rodape />
      <BotaoWhatsApp mensagem={mensagem} campanha={id} />
    </>
  )
}
