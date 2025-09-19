export interface Usuario {
  id: number
  nombre: string
  email: string
  contraseña?: string
  telefono: string | null
  activo: boolean
  created_at: string
  updated_at: string
}
