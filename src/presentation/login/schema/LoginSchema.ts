import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const loginSchema = z.object({
  email: z.email({ message: 'El correo electrónico no es válido' }),
  password: z.string().min(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
})

export type loginFormValues = z.infer<typeof loginSchema>
export const loginResolver = zodResolver(loginSchema)

export default loginSchema
