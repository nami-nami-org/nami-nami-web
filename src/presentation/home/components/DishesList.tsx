'use client'

import { useDishesQuery } from '@/core/query/dishes.query'
import BigDishCard from '@/shared/ui/components/BigDishCard'
import BigDishListSkeleton from '@/shared/ui/components/BigDishCard/BigDishListSkeleton'

const DishesList: React.FC = () => {
  const { data, isLoading, isError } = useDishesQuery.getAllDishes()
  if (isError) return <p>Jeff gordo 😀</p>
  if (isLoading || !data) return <BigDishListSkeleton />

  return (
    <div className='flex flex-wrap justify-center gap-5'>
      {data.map((dish, index) => (
        <BigDishCard key={index} {...dish} />
      ))}
    </div>
  )
}

export default DishesList
