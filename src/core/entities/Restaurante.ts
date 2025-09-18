export const RestauranteEstado = {
  ABIERTO: 'abierto',
  CERRADO: 'cerrado',
  OCUPADO: 'ocupado',
  MANTENIMIENTO: 'mantenimiento'
} as const

export interface Restaurante {
  id: number
  id_usuario: number
  nombre_comercial: string
  descripcion?: string
  direccion: string
  telefono: string
  costo_envio: number
  tiempo_entrega: number
  estado: (typeof RestauranteEstado)[keyof typeof RestauranteEstado]
  calificacion_promedio: number
  created_at: string
  updated_at: string
}
