export interface Platillo {
  id: number
  id_restaurante: number
  nombre: string
  descripcion: string | null
  precio: number
  imagen_url: string | null
  disponible: boolean
  tiempo_preparacion: number
  popular: boolean
  created_at: string
  updated_at: string
}
