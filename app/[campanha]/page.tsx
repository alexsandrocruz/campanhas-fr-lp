import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCampanha, slugs } from '@/campanhas'

import { Cabecalho } from '@/components/secoes/Cabecalho'
import { Heroi } from '@/components/secoes/Heroi'
import { Estatisticas } from '@/components/secoes/Estatisticas'
import { Dores } from '@/components/secoes/Dores'
import { Direitos } from '@/components/secoes/Direitos'
import { ComoFunciona } from '@/components/secoes/ComoFunciona'
import { Documentos } from '@/components/secoes/Documentos'
import { Autoridade } from '@/components/secoes/Autoridade'
import { VideoInstitucional } from '@/components/secoes/VideoInstitucional'
import { Unidades } from '@/components/secoes/Unidades'
import { ConteudosRelacionados } from '@/components/secoes/ConteudosRelacionados'
import { Faq } from '@/components/secoes/Faq'
import { AvisoAtendimento } from '@/components/secoes/AvisoAtendimento'
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
        {campanha.documentos && <Documentos dados={campanha.documentos} />}
        <Autoridade />
        {campanha.videoInstitucional && <VideoInstitucional dados={campanha.videoInstitucional} />}
        <Unidades />
        {campanha.conteudosRelacionados && <ConteudosRelacionados dados={campanha.conteudosRelacionados} />}
        <Faq campanha={campanha} />
        {campanha.avisoAtendimento && <AvisoAtendimento dados={campanha.avisoAtendimento} />}
        <Formulario campanha={campanha} />
      </main>
      <Rodape />
      <BotaoWhatsApp mensagem={mensagem} campanha={id} />
    </>
  )
}
