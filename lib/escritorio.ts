/**
 * Dados fixos do escritorio, compartilhados por TODAS as campanhas.
 * Mudou o telefone ou abriu unidade nova? Muda aqui e vale pra todas as landings.
 *
 * TODO: confirmar OAB, enderecos completos e link do YouTube antes de publicar.
 */
export const escritorio = {
  nome: 'Fábio Ribeiro Advogados',
  advogado: 'Fábio Corrêa Ribeiro',
  oab: 'OAB/SE 3554',
  fundacao: 2003,
  email: 'contato@fabioribeiroadvogados.com.br',
  siteInstitucional: 'https://fabioribeiroadvogados.com.br',
  youtube: 'https://www.youtube.com/@fabioribeiroadvogados',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? '5579999999999',

  /**
   * Fotos. Coloque os arquivos em public/ com exatamente estes nomes.
   * Retrato: vertical, proporção 4:5, rosto na metade superior (o corte é object-top).
   * Escritório: horizontal, proporção 4:3.
   */
  fotos: {
    advogado: '/dr-fabio-ribeiro.webp',
    escritorio: '/dr-fabio-ribeiro-escritorio.webp',
    logo: '/logo-fabio-ribeiro.png',
  },

  unidades: [
    { cidade: 'Aracaju', uf: 'SE', rotulo: 'Sede', endereco: 'R. Duque de Caxias, 188 - São José, Aracaju - SE, 49015-320' },
    { cidade: 'Aracaju', uf: 'SE', rotulo: 'Santa Maria', endereco: 'Av. Alexandre Alcino, 2695 - Santa Maria, Aracaju - SE, 49044-440' },
    { cidade: 'Estância', uf: 'SE', rotulo: 'Centro', endereco: 'R. Raimundo Costa Carvalho, 125 - Centro, Estância - SE, 49200-000' },
    { cidade: 'Taguatinga', uf: 'DF', rotulo: 'Brasília', endereco: 'St. A Norte QNA 3 Sl 01 - Taguatinga, Brasília - DF, 72110-030' },
    { cidade: 'Águas Lindas', uf: 'GO', rotulo: 'Águas Lindas de Goiás', endereco: 'Rua 9, QD 42, LT 1A, CJ. A, SALA 03 Setor 02, Águas Lindas de Goiás - GO, 72910-000' },
  ],
} as const

/** Anos de atuação, calculado — não precisa atualizar a cada virada de ano. */
export const anosDeAtuacao = new Date().getFullYear() - escritorio.fundacao
