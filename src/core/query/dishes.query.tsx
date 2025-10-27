import { useQuery } from '@tanstack/react-query'
import { dishesService } from '../services/dishes.service'


const getAllDishes = () => {
  return useQuery({
    queryKey: ['get-all-dishes'],
    queryFn: dishesService.getAllDishes,
    staleTime: 1000 * 60 * 5,
    refetchOnMount: 'always',
    refetchOnWindowFocus: false
  })
}

const getDishById = (id: number | string) => {
  return useQuery({
    queryKey: ['get-dish-by-id', id],
    queryFn: () => dishesService.getDishById(id),
    enabled: !!id, // solo ejecuta si hay un id válido
    staleTime: 1000 * 60 * 5
  })
}

export const useDishesQuery = {
  getAllDishes,
  getDishById
}
