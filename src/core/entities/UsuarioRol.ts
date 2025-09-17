// La tabla central
export interface RolUsuarios {
  id: number
  nombre: string
  activo: boolean
  created_at: string
}

// n - n
export interface UsuarioRol {
  id: number
  id_usuario: number
  id_rol: number
  activo: boolean
  created_at: string
}
