import type { Campanha } from './tipos'
import { bpcLoas } from './bpc-loas'

/**
 * Registro de campanhas ativas.
 *
 * PARA CRIAR UMA CAMPANHA NOVA:
 *   1. copie campanhas/bpc-loas.ts com outro nome
 *   2. troque o slug e os textos
 *   3. importe e adicione na lista abaixo
 *
 * Pronto — no ar em /{slug}, sem tocar em componente nenhum.
 */
const registro: Campanha[] = [bpcLoas]

export const campanhas: Record<string, Campanha> = Object.fromEntries(
  registro.map((c) => [c.slug, c]),
)

export const slugs: string[] = registro.map((c) => c.slug)

export function getCampanha(slug: string): Campanha | undefined {
  return campanhas[slug]
}

export type { Campanha } from './tipos'
