import Dish from '@/presentation/dish'
import type { FC } from 'react'

interface DishPageProps {
  params: { dishId: string }
}

const DishPage: FC<DishPageProps> = async ({ params }) => {
  const { dishId } = await params
  return <Dish dishId={dishId} />
}

export default DishPage
