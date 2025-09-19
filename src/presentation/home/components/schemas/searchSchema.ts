import { z } from 'zod'

export const searchSchema = z.object({
  query: z
    .string()
    .min(3, 'La búsqueda debe tener al menos 3 caracteres')
    .max(100, 'La búsqueda no puede superar los 100 caracteres')
})

export type SearchSchema = z.infer<typeof searchSchema>
