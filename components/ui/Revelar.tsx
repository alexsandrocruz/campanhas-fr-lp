'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  atraso?: number
}

/** Revela blocos apenas quando entram na área visível, sem animar usuários que reduziram movimento. */
export function Revelar({ children, className, atraso = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const elemento = ref.current
    if (!elemento) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisivel(true)
      return
    }

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true)
          observador.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    observador.observe(elemento)
    return () => observador.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${className ?? ''} revelar-scroll ${visivel ? 'revelar-scroll-visivel' : ''}`}
      style={{ transitionDelay: `${atraso}ms` }}
    >
      {children}
    </div>
  )
}
