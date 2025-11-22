'use client'

import { useLocalsQuery } from '@/core/query/locals.query'
import RestaurantCard from '@/shared/ui/components/RestaurantCard'
import type { Local } from '@/core/mocks/locals.mock'

// Función para adaptar los datos
const adaptLocalToRestaurantCard = (local: Local) => ({
  id: String(local.id),
  images: [local.image],
  logo: local.image,
  name: local.name,
  rating: local.avg_rating,
  time: `${local.opening_time} - ${local.closing_time}`,
  price: `${local.distance} km`,
})

export default function Restaurants() {
  const { data: locals, isLoading, isError } = useLocalsQuery.getAllLocals()

  if (isLoading) {
    return (
      <div className='flex flex-wrap gap-5'>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className='bg-bg3 h-80 w-[380px] animate-pulse rounded-2xl' />
        ))}
      </div>
    )
  }

  if (isError || !locals) {
    return <p className='text-fn2'>Error al cargar locales</p>
  }

  return (
    <div className='flex flex-wrap gap-5'>
      {locals.slice(0, 6).map((local) => {
        const adapted = adaptLocalToRestaurantCard(local)
        return (
          <RestaurantCard
            key={adapted.id}
            {...adapted}
            className='w-[380px]'
          />
        )
      })}
    </div>
  )
}