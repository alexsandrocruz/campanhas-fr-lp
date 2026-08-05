import { NextResponse } from 'next/server'
import { slugs } from '@/campanhas'

/**
 * Recebe o formulario e repassa ao destino configurado em LEAD_WEBHOOK_URL
 * (Make, n8n, Zapier, CRM...).
 *
 * Sem webhook configurado, o lead e apenas registrado no log da Vercel —
 * o que permite testar a pagina antes de a integracao existir.
 */

type Lead = {
  nome?: string
  whatsapp?: string
  email?: string
  assunto?: string
  campanha?: string
  utm?: Record<string, string>
}

/** Mantem apenas digitos e valida o tamanho de um celular brasileiro. */
function normalizarTelefone(valor: string): string | null {
  const digitos = valor.replace(/\D/g, '')
  return digitos.length >= 10 && digitos.length <= 13 ? digitos : null
}

export async function POST(request: Request) {
  let corpo: Lead

  try {
    corpo = await request.json()
  } catch {
    return NextResponse.json({ erro: 'corpo inválido' }, { status: 400 })
  }

  const nome = corpo.nome?.trim()
  const telefone = corpo.whatsapp ? normalizarTelefone(corpo.whatsapp) : null

  if (!nome || nome.length < 2) {
    return NextResponse.json({ erro: 'nome inválido' }, { status: 422 })
  }

  if (!telefone) {
    return NextResponse.json({ erro: 'whatsapp inválido' }, { status: 422 })
  }

  if (!corpo.campanha || !slugs.includes(corpo.campanha)) {
    return NextResponse.json({ erro: 'campanha desconhecida' }, { status: 422 })
  }

  const lead = {
    nome,
    whatsapp: telefone,
    email: corpo.email?.trim() || null,
    assunto: corpo.assunto ?? null,
    campanha: corpo.campanha,
    utm: corpo.utm ?? {},
    recebidoEm: new Date().toISOString(),
  }

  const webhook = process.env.LEAD_WEBHOOK_URL

  if (!webhook) {
    console.info('[lead] sem LEAD_WEBHOOK_URL configurado:', lead)
    return NextResponse.json({ ok: true, entregue: false })
  }

  try {
    const resposta = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
    })

    if (!resposta.ok) throw new Error(`webhook respondeu ${resposta.status}`)
  } catch (erro) {
    // O lead nao pode se perder por falha de integracao: registra e segue.
    console.error('[lead] falha ao entregar no webhook:', erro, lead)
    return NextResponse.json({ ok: true, entregue: false })
  }

  return NextResponse.json({ ok: true, entregue: true })
}
