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
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false
  })
}

export const useLocalsQuery = {
  getAllLocals,
  getLocalById
}
