/**
 * A URL da API fica no ambiente para que a troca entre homologação e produção
 * não exija alterar nenhuma campanha nem o componente do formulário.
 */
const baseUrl = process.env.NEXT_PUBLIC_LEADS_EMBED_API_URL?.replace(/\/$/, '')

export function obterScriptDoFormulario(formId: string): string | null {
  if (!baseUrl) return null
  return `${baseUrl}/api/embed/forms/${encodeURIComponent(formId)}/script.js`
}
