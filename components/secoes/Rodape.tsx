import { escritorio } from '@/lib/escritorio'

export function Rodape() {
  return (
    <footer className="bg-navy-claro text-white/60">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-[family-name:var(--font-display)] text-lg text-white">
              {escritorio.nome}
            </p>
            <p className="mt-2 text-sm">
              {escritorio.advogado} · {escritorio.oab}
            </p>
            <p className="mt-1 text-sm">Advocacia previdenciária desde {escritorio.fundacao}.</p>
          </div>

          <div>
            <p className="text-xs tracking-[0.15em] text-dourado uppercase">Contato</p>
            <p className="mt-3 text-sm">{escritorio.email}</p>
            <a href={escritorio.siteInstitucional} className="mt-1 block text-sm hover:text-white">
              Site institucional
            </a>
          </div>

          <div>
            <p className="text-xs tracking-[0.15em] text-dourado uppercase">Unidades</p>
            <p className="mt-3 text-sm leading-relaxed">
              {escritorio.unidades.map((u) => `${u.cidade}/${u.uf}`).join(' · ')}
            </p>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-xs leading-relaxed text-white/40">
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
