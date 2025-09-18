export interface PedidoItem {
  id: number
  id_pedido: number
  id_platillo: number
  nombre_platillo: string
  cantidad: number
  precio_unitario: number
  subtotal: number
  notas?: string
  created_at: string
}
