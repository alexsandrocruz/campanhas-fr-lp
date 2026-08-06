/**
 * O contrato de uma campanha.
 *
 * Toda landing page do subdominio /campanhas obedece a esta forma.
 * Criar uma campanha nova = criar um objeto Campanha. Nenhum componente muda.
 */

export type Dor = {
  titulo: string
  texto: string
}

export type Direito = {
  titulo: string
  texto: string
}

export type Passo = {
  titulo: string
  texto: string
}

export type Faq = {
  pergunta: string
  resposta: string
}

export type Campanha = {
  /** Vira a URL: campanhas.fabioribeiroadvogados.com.br/{slug} */
  slug: string

  meta: {
    titulo: string
    descricao: string
  }

  heroi: {
    tagline: string
    titulo: string
    /** Segunda linha do título, destacada em dourado. */
    destaque: string
    subtitulo: string
    ctaPrimario: string
    ctaSecundario: string
  }

  /** "Você está passando por isso?" — espelha a dor antes de oferecer solução. */
  dores: {
    titulo: string
    subtitulo: string
    itens: Dor[]
  }

  /** O que o escritório resolve dentro do tema desta campanha. */
  direitos: {
    titulo: string
    subtitulo: string
    itens: Direito[]
  }

  comoFunciona: {
    titulo: string
    passos: Passo[]
  }

  faq: {
    titulo: string
    itens: Faq[]
  }

  formulario: {
    titulo: string
    subtitulo: string
    /** Identificador do formulário publicado no Dominus Leads. */
    formId: string
  }

  whatsapp: {
    /** Mensagem já preenchida no app. Identifica a origem do contato. */
    mensagem: string
  }

  tracking: {
    /** Identificador da campanha nos eventos de Meta e GA4. */
    conteudo: string
  }
}
