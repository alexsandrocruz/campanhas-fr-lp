import type { Campanha } from './tipos'

/**
 * Campanha: BPC/LOAS
 * URL: campanhas.fabioribeiroadvogados.com.br/bpc-loas
 *
 * Publico: pessoa idosa (65+) ou com deficiencia, de baixa renda,
 * que teve o beneficio negado ou nem sabe que tem direito.
 * Linguagem deliberadamente simples — muita gente desse publico
 * le a pagina no celular, com pouca familiaridade com termos juridicos.
 */
export const bpcLoas: Campanha = {
  slug: 'bpc-loas',

  meta: {
    titulo: 'BPC/LOAS negado? Você ainda pode ter direito | Fábio Ribeiro Advogados',
    descricao:
      'Teve o BPC/LOAS negado pelo INSS? Há 23 anos ajudamos idosos e pessoas com deficiência a conseguir o benefício de um salário mínimo. Análise do seu caso pelo WhatsApp.',
  },

  heroi: {
    tagline: 'Advocacia previdenciária · desde 2003',
    titulo: 'Seu BPC/LOAS foi negado?',
    destaque: 'Você ainda pode ter direito.',
    subtitulo:
      'O INSS nega muitos pedidos por documento faltando, cadastro desatualizado ou erro na perícia. Nada disso significa que você não tem direito. A gente analisa seu caso e explica o que dá para fazer.',
    ctaPrimario: 'Analisar meu caso no WhatsApp',
    ctaSecundario: 'Ver como funciona',
  },

  dores: {
    titulo: 'Você está passando por isso?',
    subtitulo:
      'São as situações que mais chegam ao escritório. Se alguma delas parece a sua, vale conversar.',
    itens: [
      {
        titulo: 'Meu pedido foi negado',
        texto: 'A carta do INSS chegou com "indeferido" e você não entendeu o motivo.',
      },
      {
        titulo: 'A perícia disse que não tenho deficiência',
        texto: 'O perito avaliou por poucos minutos e ignorou seus laudos e o seu dia a dia.',
      },
      {
        titulo: 'Disseram que minha renda é alta demais',
        texto: 'A conta do INSS nem sempre considera gastos com remédio e tratamento.',
      },
      {
        titulo: 'Estou há meses esperando resposta',
        texto: 'O pedido foi feito, o prazo passou e ninguém explica o que está acontecendo.',
      },
      {
        titulo: 'Meu benefício foi cortado',
        texto: 'Você recebia normalmente e, de repente, o pagamento parou sem aviso claro.',
      },
      {
        titulo: 'Não sei se tenho direito',
        texto: 'Nunca pediu porque alguém disse que não ia conseguir. Vale confirmar.',
      },
    ],
  },

  direitos: {
    titulo: 'O que a gente resolve no BPC/LOAS',
    subtitulo:
      'Do pedido inicial à Justiça Federal, o mesmo time acompanha o caso do começo ao fim.',
    itens: [
      {
        titulo: 'Pedido negado',
        texto: 'Recurso administrativo ou ação judicial, dependendo do motivo da negativa.',
      },
      {
        titulo: 'BPC para pessoa com deficiência',
        texto: 'Reunimos os laudos e preparamos você para a perícia médica e a avaliação social.',
      },
      {
        titulo: 'BPC para pessoa idosa',
        texto: 'A partir dos 65 anos, sem exigir nenhuma contribuição ao INSS.',
      },
      {
        titulo: 'Renda familiar contestada',
        texto: 'Demonstramos os gastos que reduzem a renda considerada pelo INSS.',
      },
      {
        titulo: 'Benefício cessado ou suspenso',
        texto: 'Defesa em revisão administrativa e pedido de restabelecimento.',
      },
      {
        titulo: 'Atrasados',
        texto: 'Quando cabível, cobramos as parcelas desde a data do pedido negado.',
      },
    ],
  },

  comoFunciona: {
    titulo: 'Simples do começo ao fim',
    passos: [
      {
        titulo: 'Você conta seu caso',
        texto: 'Pelo WhatsApp, com suas palavras. Não precisa saber nenhum termo jurídico.',
      },
      {
        titulo: 'Analisamos seus documentos',
        texto: 'Carta do INSS, laudos médicos e CadÚnico. Você manda foto pelo celular.',
      },
      {
        titulo: 'Explicamos suas opções',
        texto: 'O que dá para fazer, quanto tempo leva e qual a chance real. Sem promessa vazia.',
      },
      {
        titulo: 'Cuidamos de tudo',
        texto: 'Do recurso no INSS à Justiça Federal. Você acompanha sem sair de casa.',
      },
    ],
  },

  faq: {
    titulo: 'Perguntas que quase todo mundo faz',
    itens: [
      {
        pergunta: 'O que é o BPC/LOAS?',
        resposta:
          'É um benefício assistencial de um salário mínimo por mês, pago a pessoas idosas (a partir de 65 anos) ou a pessoas com deficiência de qualquer idade, desde que a família seja de baixa renda. Diferente da aposentadoria, ele não exige nenhuma contribuição ao INSS.',
      },
      {
        pergunta: 'Preciso ter contribuído para o INSS?',
        resposta:
          'Não. Essa é a maior confusão sobre o BPC. Ele é assistencial, não previdenciário — quem nunca contribuiu pode receber normalmente, desde que preencha os requisitos de idade ou deficiência e de renda.',
      },
      {
        pergunta: 'Minha renda é um pouco acima do limite. Perdi o direito?',
        resposta:
          'Não necessariamente. Existem situações em que gastos comprovados com tratamento, medicamentos e cuidados podem ser descontados da conta da renda familiar, e há previsão legal de flexibilização do limite em determinados casos. Vale mandar seus números para uma análise antes de desistir.',
      },
      {
        pergunta: 'Meu pedido foi negado. Ainda dá tempo de recorrer?',
        resposta:
          'Em regra o recurso administrativo tem prazo de 30 dias contados da ciência da negativa. Mesmo perdido esse prazo, ainda costuma ser possível entrar com ação judicial ou fazer um novo pedido. O caminho certo depende do motivo da negativa — por isso pedimos a carta do INSS logo na primeira conversa.',
      },
      {
        pergunta: 'Preciso ir até o escritório?',
        resposta:
          'Não. Todo o atendimento pode ser feito pelo WhatsApp, com envio de documentos por foto. Se preferir presencial, temos cinco unidades em Sergipe, Distrito Federal e Goiás.',
      },
      {
        pergunta: 'Vocês atendem quem mora fora de Sergipe?',
        resposta:
          'Sim. Atendemos em todo o Brasil. Boa parte dos processos previdenciários tramita de forma eletrônica na Justiça Federal, o que permite acompanhar o caso a distância.',
      },
      {
        pergunta: 'Quanto tempo demora?',
        resposta:
          'Depende do caminho. O recurso administrativo costuma ser mais rápido que o processo judicial, e cada caso tem particularidades que afetam o prazo. Na análise inicial explicamos a expectativa realista para a sua situação, sem prometer data.',
      },
      {
        pergunta: 'Como funcionam os honorários?',
        resposta:
          'Explicamos os valores e a forma de cobrança de forma clara antes de qualquer contratação, por escrito. Você só decide depois de entender exatamente o que está contratando.',
      },
    ],
  },

  formulario: {
    titulo: 'Conte seu caso',
    subtitulo: 'A gente explica o que dá para fazer.',
    formId: '3a22e92b-6c6d-6ca1-f403-37a33c692b40',
  },

  whatsapp: {
    mensagem: 'Olá! Vim pela página sobre BPC/LOAS e queria uma análise do meu caso.',
  },

  tracking: {
    conteudo: 'BPC_LOAS',
  },
}
