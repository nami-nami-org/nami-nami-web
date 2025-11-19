"use client";

import RestaurantCard from '@/shared/ui/components/RestaurantCard'
import { useLocalsQuery } from '@/core/query/locals.query'

export default function Restaurants() {
  const { data: locals, isLoading } = useLocalsQuery.getAllLocals()

  if (isLoading) return <p>Cargando locales...</p>

  return (
    <div className='flex flex-wrap gap-5'>
      {locals?.map((local) => (
        <RestaurantCard
          key={local.id}
          id={String(local.id)}
          image={local.images?.[0] || '/placeholder.jpg'}
          logo={local.images?.[0] || '/placeholder.jpg'}
          name={local.local_name}
          rating={local.average_rating}
          time={`${local.average_delivery_time} min`}
          price={`S/ ${local.delivery_cost}`}
          className="w-[380px]"
        />
      ))}
    </div>
  )
}
