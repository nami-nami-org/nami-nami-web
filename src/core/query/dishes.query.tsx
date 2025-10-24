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

export const useDishesQuery = {
  getAllDishes
}
