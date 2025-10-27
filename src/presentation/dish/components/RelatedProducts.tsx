'use client'

import { useDishesQuery } from '@/core/query/dishes.query'
import VerticalDishCard from '@/shared/ui/components/VerticalDishCard'
import type { FC } from 'react'

const RelatedProducts: FC = () => {
  const { data, isLoading, isError } = useDishesQuery.getAllDishes()

  if (isError) return <p className="text-red-500 text-center">❌ Error al cargar los platillos relacionados</p>
  if (isLoading || !data) return <p className="text-center">🍽️ Cargando platillos relacionados...</p>

  return (
    <section className="mt-16">
      <h2 className="font-instrument text-fn1 mb-6 text-2xl">También te puede gustar</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {data.map((dish: any, index: number) => (
          <VerticalDishCard key={index} dish={dish} />
        ))}
      </div>
    </section>
  )
}

export default RelatedProducts
