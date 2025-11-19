'use client'

import { useLocalsQuery } from '@/core/query/locals.query'
import RestaurantCard from '@/shared/ui/components/RestaurantCard'

export default function Restaurants() {
  const { data: locals, isLoading } = useLocalsQuery.getAllLocals()

  if (isLoading) return <p>Cargando locales...</p>

  return (
    <div className='flex flex-wrap gap-5'>
      {locals?.map((local: any) => (
        <RestaurantCard
          key={local.id}
          id={String(local.id)}
          images={local.imageUrls}
          logo={local.imageUrls?.[0]}
          name={local.tradeName || local.localName}
          rating={local.averageRating}
          time={`${local.averageDeliveryTime} min`}
          price={`S/ ${local.deliveryCost}`}
          className='w-[380px]'
        />
      ))}
    </div>
  )
}
