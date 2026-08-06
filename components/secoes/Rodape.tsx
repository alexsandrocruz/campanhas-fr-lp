import Image from 'next/image'
import { escritorio } from '@/lib/escritorio'

export function Rodape() {
  return (
    <footer className="bg-[#0b1524] text-white/60">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-18">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image src={escritorio.fotos.logo} alt={escritorio.nome} width={321} height={66} className="h-auto w-[205px]" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Advocacia previdenciária humanizada desde {escritorio.fundacao}, tornando o acesso à Justiça mais simples para quem precisa.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.15em] text-dourado uppercase">Unidades</p>
            <div className="mt-4 space-y-2 text-sm leading-relaxed">
              {escritorio.unidades.map((unidade) => (
                <p key={`${unidade.cidade}-${unidade.rotulo}`}>
                  <span className="font-medium text-white/85">{unidade.cidade}/{unidade.uf}</span> · {unidade.rotulo}
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.15em] text-dourado uppercase">Contato</p>
            <p className="mt-4 text-sm">{escritorio.email}</p>
            <a href={escritorio.siteInstitucional} className="mt-2 block text-sm transition hover:text-dourado">
              Site institucional
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.15em] text-dourado uppercase">Institucional</p>
            <p className="mt-4 text-sm leading-relaxed">
              {escritorio.advogado}<br />
              {escritorio.oab}
            </p>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-xs leading-relaxed text-white/40">
          Conteúdo meramente informativo, em conformidade com o Código de Ética e Disciplina da
          OAB. Não constitui promessa de resultado nem captação de clientela. Cada caso depende de
          análise individual.
        </p>

        <p className="mt-4 text-xs text-white/30">
          © {new Date().getFullYear()} {escritorio.nome}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
