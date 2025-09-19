import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const registerSchema = z
  .object({
    name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres' }),
    email: z.email({ message: 'El correo electrónico no es válido' }),
    password: z.string().min(8, { message: 'La contraseña debe tener al menos 8 caracteres' }),
    confirmPassword: z.string().min(8, { message: 'La confirmación de contraseña debe tener al menos 8 caracteres' }),
    phone: z
      .string()
      .min(8, { message: 'El teléfono debe tener al menos 8 dígitos' })
      .max(15, { message: 'El teléfono no puede tener más de 15 dígitos' })
      .regex(/^\d+$/, { message: 'El teléfono solo puede contener números' }),
    terms: z.boolean().refine(val => val === true, { message: 'Debes aceptar los términos y condiciones' }) // ✅ acepta false, pero falla si no es true
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword']
  })

export type registerFormValues = z.infer<typeof registerSchema>
export const registerResolver = zodResolver(registerSchema)

export default registerSchema
