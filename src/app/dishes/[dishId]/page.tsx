import Dish from '@/presentation/dish'

interface DishPageProps {
  params: Promise<{ dishId: string }>
}

export default async function DishPage({ params }: DishPageProps) {
  const { dishId } = await params
  return <Dish dishId={dishId} />
}
