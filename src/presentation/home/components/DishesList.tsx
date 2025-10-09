'use client'

import { useDishesQuery } from '@/core/query/dishes.query'

import DishCard from './DishCard'
import DishListSkeleton from './DishCard/DishListSkeleton'

const DishesList: React.FC = () => {
  const { data, isLoading, isError } = useDishesQuery.getAllDishes()
  if (isError) return <p>Jeff gordo 😀</p>
  if (isLoading || !data) return <DishListSkeleton />

  return (
    <div className='flex flex-wrap justify-center gap-5'>
      {data.map((dish, index) => (
        <DishCard key={index} {...dish} />
      ))}
    </div>
  )
}

export default DishesList
