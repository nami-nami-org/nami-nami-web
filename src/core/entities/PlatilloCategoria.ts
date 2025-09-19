// La tabla central
export interface CategoriaPlatillo {
  id: number
  nombre: string
  descripcion?: string
  tipo?: string
  activa: boolean
  created_at: string
}

// n - n
export interface PlatilloCategoria {
  id: number
  id_platillo: number
  id_categoria: number
  created_at: string
}
