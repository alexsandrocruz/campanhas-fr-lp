# Landing pages de campanha — Fábio Ribeiro Advogados

Projeto único que serve **todas** as landing pages de tráfego pago do escritório em
`campanhas.fabioribeiroadvogados.com.br`.

```
campanhas.fabioribeiroadvogados.com.br/bpc-loas
campanhas.fabioribeiroadvogados.com.br/aposentadoria-por-idade
campanhas.fabioribeiroadvogados.com.br/auxilio-doenca
```

O site institucional continua onde está, intocado. Deploy de campanha não derruba o
site principal.

---

## Como criar uma campanha nova

São três passos, nenhum deles mexe em componente:

1. Copie `campanhas/bpc-loas.ts` para, por exemplo, `campanhas/auxilio-doenca.ts`
2. Troque o `slug` e todos os textos
3. Importe e adicione ao array em `campanhas/index.ts`

```ts
import { auxilioDoenca } from './auxilio-doenca'

const registro: Campanha[] = [bpcLoas, auxilioDoenca]
```

Commit → a Vercel publica → `/auxilio-doenca` está no ar.

O TypeScript recusa o build se faltar algum campo obrigatório. Na prática, não dá pra
publicar uma campanha sem FAQ ou sem mensagem de WhatsApp por esquecimento.

---

## Estrutura

```
app/
  layout.tsx                    Pixel Meta + GA4, noindex global
  [campanha]/page.tsx           Monta a landing a partir do objeto Campanha
  [campanha]/obrigado/          Página de conversão — onde o evento Lead dispara
  api/lead/route.ts             Valida o formulário e repassa ao webhook
  robots.ts                     Bloqueia indexação do subdomínio inteiro

campanhas/
  tipos.ts                      O contrato: o que toda campanha precisa ter
  index.ts                      Registro das campanhas ativas
  bpc-loas.ts                   Conteúdo da campanha BPC/LOAS

components/secoes/              Herói, Dores, Direitos, ComoFunciona,
                                Autoridade, Unidades, Faq, Formulario, Rodape
components/ui/                  LinkWhatsApp (rastreado), ícones

lib/
  escritorio.ts                 Dados fixos: OAB, unidades, contato
  tracking.ts                   Eventos Meta + GA4, sempre com a campanha junto
  utm.ts                        Captura e preserva a origem do tráfego
  whatsapp.ts                   Monta o wa.me com mensagem pré-preenchida
```

---

## Antes de publicar

Confirme os `TODO` em `lib/escritorio.ts`:

- [ ] Número do WhatsApp (`NEXT_PUBLIC_WHATSAPP`)
- [ ] Número da OAB
- [ ] Endereços completos das 5 unidades
- [ ] Link do canal no YouTube
- [ ] Fotos: substituir os blocos vazios em `Heroi.tsx` e `Autoridade.tsx`

E as variáveis de ambiente na Vercel (veja `.env.example`):

| Variável | Para quê |
|---|---|
| `NEXT_PUBLIC_WHATSAPP` | Número de destino, só dígitos: `55` + DDD + número |
| `NEXT_PUBLIC_META_PIXEL_ID` | Pixel do Meta Ads |
| `NEXT_PUBLIC_GA4_ID` | Medição do GA4 |
| `LEAD_WEBHOOK_URL` | Destino dos leads do formulário |

Sem `LEAD_WEBHOOK_URL` o formulário continua funcionando — o lead vai para o log da
Vercel. Dá pra publicar antes de a integração com CRM existir.

---

## DNS

O domínio usa nameservers da **Cloudflare**. O painel do HiveHost não tem efeito.

1. Vercel → Settings → Domains → adicionar `campanhas.fabioribeiroadvogados.com.br`
2. Cloudflare → DNS → `CNAME` · nome `campanhas` · destino: o valor mostrado pela Vercel
3. Deixar o registro como **DNS only** (nuvem cinza). Com o proxy laranja ligado o
   certificado SSL da Vercel costuma dar conflito.

O wildcard `*.fabioribeiroadvogados.com.br` existente não atrapalha — um registro
específico tem precedência sobre ele.

---

## Decisões que valem conhecer

**A conversão dispara no `/obrigado`, não no clique do botão.** Só chega nessa URL quem
teve o formulário aceito pela API. Isso mantém o Meta Ads otimizando por lead real em
vez de por clique — a diferença aparece no custo por lead depois de algumas semanas.

**Todo evento carrega o identificador da campanha.** Sem isso não dá pra saber qual
anúncio gerou o contato, e sem saber isso não dá pra decidir onde colocar verba.

**O subdomínio inteiro é `noindex`.** Landing de tráfego pago indexada disputa as
mesmas buscas que o site institucional e canibaliza o SEO dele.

**A mensagem do WhatsApp muda por campanha.** Quem atende sabe de onde veio o contato
já na primeira linha da conversa, sem precisar perguntar.

**Rodapé com aviso de conformidade OAB.** Landing de captação em Direito exige cuidado
com o Código de Ética — sem promessa de resultado, sem mercantilização. O texto está em
`components/secoes/Rodape.tsx` e vale uma revisão do escritório.

---

## Rodar localmente

```bash
npm install
cp .env.example .env.local     # preencha o WhatsApp
npm run dev
```

Abra `http://localhost:3000/bpc-loas`.
