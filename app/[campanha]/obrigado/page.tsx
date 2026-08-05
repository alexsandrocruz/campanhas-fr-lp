import { notFound } from 'next/navigation'
import { getCampanha, slugs } from '@/campanhas'
import { Rodape } from '@/components/secoes/Rodape'
import { ConfirmacaoLead } from './ConfirmacaoLead'

type Props = { params: Promise<{ campanha: string }> }

export function generateStaticParams() {
  return slugs.map((campanha) => ({ campanha }))
}

export const dynamicParams = false

export default async function PaginaObrigado({ params }: Props) {
  const { campanha: slug } = await params
  const campanha = getCampanha(slug)
  if (!campanha) notFound()

  return (
    <>
      <ConfirmacaoLead campanha={campanha} />
      <Rodape />
    </>
  )
}
