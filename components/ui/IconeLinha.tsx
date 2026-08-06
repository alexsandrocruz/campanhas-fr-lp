type Tipo = 'documento' | 'relogio' | 'grafico' | 'escudo' | 'calendario' | 'pulso' | 'localizacao'

export function IconeLinha({ tipo, className = 'h-5 w-5' }: { tipo: Tipo; className?: string }) {
  const comum = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...comum}>
      {tipo === 'documento' && <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v5h5M9 12l6 6m0-6-6 6" /></>}
      {tipo === 'relogio' && <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>}
      {tipo === 'grafico' && <><path d="m4 7 6 6 4-4 6 6" /><path d="M15 15h5v-5" /></>}
      {tipo === 'escudo' && <><path d="M12 3 19 6v5c0 4.6-3 7.8-7 10-4-2.2-7-5.4-7-10V6z" /><path d="m9 12 2 2 4-4" /></>}
      {tipo === 'calendario' && <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M7 3v4m10-4v4M3 10h18m-5 4-4 4-2-2" /></>}
      {tipo === 'pulso' && <path d="M3 12h4l2.1-5 3.5 10 2.2-5H21" />}
      {tipo === 'localizacao' && <><path d="M20 10c0 5-8 11-8 11s-8-6-8-11a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>}
    </svg>
  )
}
