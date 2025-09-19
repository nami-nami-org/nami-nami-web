export interface Valoracion {
  id: number
  id_pedido: number
  id_usuario: number
  id_restaurante: number
  calificacion: number
  comentario: string | null
  respuesta_restaurante: string | null
  fecha_respuesta: string | null
  created_at: string
  updated_at: string
}
