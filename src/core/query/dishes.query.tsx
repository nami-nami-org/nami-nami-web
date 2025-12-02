import { useQuery, useQueryClient } from '@tanstack/react-query'

import { dishesService } from '../services/dishes.service'

const getAllDishes = () => {
  const queryClient = useQueryClient()

  const cached = queryClient.getQueryData(['get-all-dishes'])

  return useQuery({
    queryKey: ['get-all-dishes'],
    queryFn: dishesService.getAllDishes,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,

    refetchOnMount: cached ? false : 'always'
  })
}

const getDishById = (id: number | string) => {
  return useQuery({
    queryKey: ['get-dish-by-id', id],
    queryFn: () => dishesService.getDishById(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5
  })
}

export const useDishesQuery = {
  getAllDishes,
  getDishById
}
