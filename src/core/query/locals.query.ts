import { useQuery } from '@tanstack/react-query'
import { MOCK_LOCALS } from '../mocks/locals.mock'

const fetchAllLocals = async () => {
  // Simula un delay de API
  await new Promise(resolve => setTimeout(resolve, 500))
  return MOCK_LOCALS
}

const fetchLocalById = async (localId: string | number) => {
  // Simula un delay de API
  await new Promise(resolve => setTimeout(resolve, 300))
  
  const id = typeof localId === 'string' ? parseInt(localId, 10) : localId
  const local = MOCK_LOCALS.find(l => l.id === id)
  
  if (!local) {
    throw new Error(`Local con ID ${localId} no encontrado`)
  }
  
  return local
}

export const useLocalsQuery = {
  getAllLocals: () => useQuery({
    queryKey: ['locals'],
    queryFn: fetchAllLocals
  }),
  
  getLocalById: (localId: string | number) => useQuery({
    queryKey: ['local', localId],
    queryFn: () => fetchLocalById(localId),
    enabled: !!localId // Solo ejecuta si localId existe
  })
}