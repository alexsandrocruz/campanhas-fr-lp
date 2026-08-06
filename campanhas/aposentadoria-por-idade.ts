import type { Campanha } from './tipos'

/**
 * Campanha: aposentadoria por idade.
 * A página usa todos os blocos opcionais como referência para novas campanhas.
 */
export const aposentadoriaPorIdade: Campanha = {
  slug: 'aposentadoria-por-idade',

  meta: {
    titulo: 'Aposentadoria por idade: entenda suas opções | Fábio Ribeiro Advogados',
    descricao:
      'Está perto da aposentadoria por idade ou teve o pedido negado? Entenda suas opções com uma análise do seu caso.',
  },

  heroi: {
    tagline: 'Advocacia previdenciária · desde 2003',
    titulo: 'Está na hora de pedir sua aposentadoria?',
    destaque: 'Vamos analisar o seu caso.',
    subtitulo:
      'Idade, contribuições, períodos sem registro e regras de transição podem mudar o caminho. A gente confere seus documentos e explica as possibilidades com clareza.',
    ctaPrimario: 'Analisar minha aposentadoria no WhatsApp',
    ctaSecundario: 'Entender como funciona',
  },

  dores: {
    titulo: 'Alguma dessas dúvidas parece a sua?',
    subtitulo:
      'São situações comuns para quem está se preparando para pedir a aposentadoria ou recebeu uma resposta negativa.',
    itens: [
      {
        titulo: 'Não sei se já tenho idade e tempo suficientes',
        texto: 'Você contribuiu por anos, mas não sabe qual regra vale para a sua história.',
      },
      {
        titulo: 'Tenho períodos sem registro no CNIS',
        texto: 'Empregos, carnês ou atividades antigas não aparecem corretamente no cadastro.',
      },
      {
        titulo: 'O simulador mostrou um resultado diferente do esperado',
        texto: 'A simulação é um ponto de partida e pode não considerar toda a documentação.',
      },
      {
        titulo: 'Meu pedido foi negado pelo INSS',
        texto: 'A carta de indeferimento trouxe um motivo que você não entendeu ou com o qual não concorda.',
      },
      {
        titulo: 'Trabalhei no campo ou em atividade especial',
        texto: 'Esses períodos podem exigir documentos próprios e uma análise mais cuidadosa.',
      },
      {
        titulo: 'Quero saber se existe uma regra mais vantajosa',
        texto: 'Quem já contribuía antes da reforma pode ter regras de transição para avaliar.',
      },
    ],
  },

  direitos: {
    titulo: 'Como podemos ajudar na aposentadoria',
    subtitulo:
      'A análise considera seu histórico de contribuições e os documentos que ajudam a demonstrar cada período trabalhado.',
    itens: [
      {
        titulo: 'Planejamento previdenciário',
        texto: 'Conferimos as regras aplicáveis e os próximos passos antes de protocolar o pedido.',
      },
      {
        titulo: 'Correção de vínculos e contribuições',
        texto: 'Identificamos períodos ausentes ou divergentes no CNIS e orientamos a documentação.',
      },
      {
        titulo: 'Pedido administrativo no INSS',
        texto: 'Preparamos o requerimento e acompanhamos eventuais exigências.',
      },
      {
        titulo: 'Recurso ou ação judicial',
        texto: 'Quando há negativa, avaliamos o caminho adequado conforme o motivo informado.',
      },
      {
        titulo: 'Tempo rural ou especial',
        texto: 'Analisamos a documentação específica para verificar se esses períodos podem ser reconhecidos.',
      },
      {
        titulo: 'Revisão do benefício',
        texto: 'Depois da concessão, avaliamos se há alguma inconsistência que mereça ser revisada.',
      },
    ],
  },

  comoFunciona: {
    titulo: 'Simples do começo ao fim',
    passos: [
      {
        titulo: 'Você conta sua história',
        texto: 'Pelo WhatsApp, com suas palavras e no seu tempo.',
      },
      {
        titulo: 'Conferimos os documentos',
        texto: 'CNIS, carteira de trabalho e outros comprovantes ajudam na análise.',
      },
      {
        titulo: 'Explicamos suas opções',
        texto: 'Você entende as regras possíveis e o que precisa ser feito em cada uma delas.',
      },
      {
        titulo: 'Acompanhamos o caminho escolhido',
        texto: 'Do pedido no INSS ao recurso ou processo, quando necessário.',
      },
    ],
  },

  documentos: {
    titulo: 'O que pode ajudar na primeira análise',
    subtitulo:
      'Se tiver algum desses documentos, envie uma foto pelo WhatsApp. Se não tiver, tudo bem: vamos orientar você.',
    itens: [
      {
        titulo: 'Documento com foto e CPF',
        descricao: 'Para confirmar corretamente os dados do seu cadastro.',
      },
      {
        titulo: 'Extrato do CNIS',
        descricao: 'Mostra vínculos e contribuições registrados no INSS.',
      },
      {
        titulo: 'Carteira de trabalho',
        descricao: 'Ajuda a comprovar empregos que não aparecem ou aparecem incompletos.',
      },
      {
        titulo: 'Carta do INSS',
        descricao: 'Se houve negativa ou exigência, ela mostra o motivo informado.',
      },
    ],
  },

  videoInstitucional: {
    rotulo: 'Conteúdo em vídeo',
    titulo: 'Informação previdenciária em linguagem simples',
    descricao:
      'Acompanhe o canal do escritório para conhecer temas previdenciários explicados de forma direta.',
    cta: 'Conhecer o canal',
    url: 'https://www.youtube.com/@fabioribeiroadvogados',
  },

  conteudosRelacionados: {
    titulo: 'Quer conferir as regras oficiais?',
    subtitulo:
      'Estes materiais do INSS ajudam a entender o tema. Eles não substituem a análise do seu histórico de contribuições.',
    itens: [
      {
        tipo: 'INSS',
        titulo: 'Aposentadoria programada',
        descricao: 'Requisitos gerais e documentos que podem ser solicitados no pedido.',
        url: 'https://www.gov.br/inss/pt-br/direitos-e-deveres/aposentadorias/aposentadoria-programada',
      },
      {
        tipo: 'INSS',
        titulo: 'Regras de aposentadorias',
        descricao: 'Visão geral das regras permanentes e das regras de transição.',
        url: 'https://www.gov.br/inss/pt-br/direitos-e-deveres/aposentadorias/regras-de-aposentadorias',
      },
      {
        tipo: 'Meu INSS',
        titulo: 'Simular aposentadoria',
        descricao: 'Acesse o simulador oficial como referência para o seu planejamento.',
        url: 'https://meu.inss.gov.br/',
      },
    ],
  },

  faq: {
    titulo: 'Perguntas frequentes sobre aposentadoria por idade',
    itens: [
      {
        pergunta: 'Qual é a idade mínima para se aposentar?',
        resposta:
          'Na regra geral, a idade é de 62 anos para mulheres e 65 anos para homens. Além da idade, o tempo de contribuição exigido pode variar conforme a data em que a pessoa começou a contribuir. Por isso, é importante olhar o histórico individual.',
      },
      {
        pergunta: 'Quantos anos de contribuição são necessários?',
        resposta:
          'Para quem ingressou no RGPS a partir de 13 de novembro de 2019, a regra geral exige 15 anos de contribuição para mulheres e 20 anos para homens. Homens que já contribuíam antes dessa data podem estar sujeitos à regra de 15 anos. Há ainda regras de transição que precisam ser avaliadas caso a caso.',
      },
      {
        pergunta: 'O simulador do Meu INSS garante minha aposentadoria?',
        resposta:
          'Não. O próprio INSS informa que a simulação é apenas uma referência. Ela depende dos dados existentes no cadastro e não substitui a conferência dos documentos.',
      },
      {
        pergunta: 'Posso corrigir um vínculo que não aparece no CNIS?',
        resposta:
          'Em muitos casos, sim. A carteira de trabalho, carnês, contracheques e outros documentos podem ajudar a comprovar o período. A estratégia depende do tipo de divergência.',
      },
      {
        pergunta: 'Preciso ir até o escritório?',
        resposta:
          'Não. A primeira conversa e o envio de documentos podem ser feitos pelo WhatsApp. Se preferir atendimento presencial, temos unidades em Sergipe, Distrito Federal e Goiás.',
      },
      {
        pergunta: 'Meu pedido foi negado. Ainda posso fazer algo?',
        resposta:
          'A carta de indeferimento aponta o motivo da decisão. A partir dela, avaliamos se é melhor cumprir uma exigência, apresentar recurso, fazer um novo pedido ou discutir o caso judicialmente.',
      },
    ],
  },

  avisoAtendimento: {
    titulo: 'Você não precisa descobrir tudo sozinho antes de falar com a gente',
    texto:
      'Envie o que já tiver. A primeira análise serve para entender seu histórico e indicar os documentos que realmente fazem diferença no seu caso.',
    itens: [
      'Atendimento inicial pelo WhatsApp',
      'Orientação em linguagem simples',
      'Sem promessa de resultado',
    ],
  },

  formulario: {
    titulo: 'Conte um pouco sobre sua aposentadoria',
    subtitulo: 'Retornamos pelo WhatsApp para entender seu caso.',
    // Temporário: substituir por um formulário do Dominus dedicado a esta campanha antes da veiculação.
    formId: '3a22e92b-6c6d-6ca1-f403-37a33c692b40',
  },

  whatsapp: {
    mensagem: 'Olá! Vim pela página de aposentadoria por idade e queria uma análise do meu caso.',
  },

  tracking: {
    conteudo: 'APOSENTADORIA_POR_IDADE',
  },
}
