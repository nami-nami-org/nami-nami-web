import Dish from '@/presentation/dish'

interface DishPageProps {
  params: { dishId: string }
}

export default function DishPage({ params }: DishPageProps) {
  const { dishId } = params

  return <Dish dishId={dishId} />
}
