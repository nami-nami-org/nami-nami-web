import { useQuery } from '@tanstack/react-query'
import { localsService } from '../services/locals.service'

const getAllLocals = () => {
  return useQuery({
    queryKey: ['get-all-locals'],
    queryFn: localsService.getAllLocals,
    staleTime: 1000 * 60 * 5,
    refetchOnMount: 'always',
    refetchOnWindowFocus: false
  })
}

const getLocalById = (id: number | string) => {
  return useQuery({
    queryKey: ['get-local-by-id', id],
    queryFn: () => localsService.getLocalById(id),
    enabled: !!id, // solo ejecuta si ID es válido
    staleTime: 1000 * 60 * 5
  })
}

export const useLocalsQuery = {
  getAllLocals,
  getLocalById
}
