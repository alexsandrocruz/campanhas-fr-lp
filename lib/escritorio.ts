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

  unidades: [
    { cidade: 'Aracaju', uf: 'SE', rotulo: 'Sede', endereco: 'TODO: endereço completo' },
    { cidade: 'Aracaju', uf: 'SE', rotulo: 'Santa Maria', endereco: 'TODO: endereço completo' },
    { cidade: 'Estância', uf: 'SE', rotulo: 'Centro', endereco: 'TODO: endereço completo' },
    { cidade: 'Taguatinga', uf: 'DF', rotulo: 'Brasília', endereco: 'TODO: endereço completo' },
    { cidade: 'Águas Lindas', uf: 'GO', rotulo: 'Águas Lindas de Goiás', endereco: 'TODO: endereço completo' },
  ],
} as const

/** Anos de atuação, calculado — não precisa atualizar a cada virada de ano. */
export const anosDeAtuacao = new Date().getFullYear() - escritorio.fundacao
