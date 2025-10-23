import Dish from '@/presentation/dish'
import type { FC } from 'react'

interface DishPageProps {
  params: { dishId: string }
}

const DishPage: FC<DishPageProps> = ({ params }) => {
  const { dishId } = params
  return <Dish dishId={dishId} />
}

export default DishPage
