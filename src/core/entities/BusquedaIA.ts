export interface BusquedaIA {
  id: number
  id_usuario?: number
  query_usuario: string
  intent?: string
  parametros_extraidos?: string
  resultados_encontrados?: string
  total_resultados: number
  satisfaccion?: number
  tiempo_respuesta_ms?: number
  sesion_id?: string
  created_at: string
}
