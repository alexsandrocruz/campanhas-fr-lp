import { escritorio } from '@/lib/escritorio'

export default function NaoEncontrado() {
  return (
    <main className="flex min-h-screen items-center bg-navy text-white">
      <div className="mx-auto max-w-md px-5 text-center">
        <p className="rotulo">Página não encontrada</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl">
          Esta campanha não está no ar.
        </h1>
        <a
          href={escritorio.siteInstitucional}
          className="mt-8 inline-block rounded-full border border-white/25 px-6 py-3 text-sm transition hover:border-white/60"
        >
          Ir para o site principal
        </a>
      </div>
    </main>
  )
}
