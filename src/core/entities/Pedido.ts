export const PedidoEstado = {
  BORRADOR: 'borrador',
  CONFIRMADO: 'confirmado',
  PREPARANDO: 'preparando',
  LISTO: 'listo',
  EN_CAMINO: 'en_camino',
  ENTREGADO: 'entregado',
  CANCELADO: 'cancelado'
} as const

export interface Pedido {
  id: number
  codigo: string
  id_usuario: number
  id_restaurante: number
  estado: (typeof PedidoEstado)[keyof typeof PedidoEstado]
  direccion_entrega: string
  telefono_entrega: string
  subtotal: number
  costo_envio: number
  total: number
  metodo_pago?: string
  notas?: string
  fecha_entrega_estimada?: string
  fecha_entrega_real?: string
  created_at: string
  updated_at: string
}
