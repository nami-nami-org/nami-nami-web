// n - n
export interface RestauranteCategoria {
  id: number
  id_restaurante: number
  id_categoria: number
  es_principal: boolean
  created_at: string
}

// La tabla central
export interface CategoriaRestaurante {
  id: number
  nombre: string
  descripcion: string | null
  activa: boolean
  orden: number
  created_at: string
}
