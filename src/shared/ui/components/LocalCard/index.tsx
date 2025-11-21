'use client'

import { Clock, MapPin, Star } from 'lucide-react'
import Link from 'next/link'

interface LocalCardProps {
  id: number
  name: string
  description: string
  image: string
  avg_rating: number
  total_reviews: number
  address: string
  is_open: boolean
  opening_time?: string
  closing_time?: string
  distance?: number
}

export default function LocalCard({
  id,
  name,
  description,
  image,
  avg_rating,
  total_reviews,
  address,
  is_open,
  opening_time,
  closing_time,
  distance
}: LocalCardProps) {
  return (
    <Link href={`/local/${id}`}>
      <div className='group bg-bg2 border-bg3 overflow-hidden rounded-2xl border shadow-sm transition-all hover:shadow-lg'>
        {/* Imagen */}
        <div className='relative h-48 overflow-hidden'>
          <img
            src={image}
            alt={name}
            className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-110'
          />
          {/* Badge de estado */}
          <div className={`absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-bold ${
            is_open 
              ? 'bg-green-500/90 text-white' 
              : 'bg-red-500/90 text-white'
          }`}>
            {is_open ? '🟢 Abierto' : '🔴 Cerrado'}
          </div>
          {/* Distancia */}
          {distance && (
            <div className='absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white rounded-full px-3 py-1 text-xs font-bold flex items-center gap-1'>
              <MapPin className='h-3 w-3' />
              {distance.toFixed(1)} km
            </div>
          )}
        </div>

        {/* Contenido */}
        <div className='p-4'>
          <h3 className='text-fn1 mb-2 text-lg font-bold line-clamp-1'>{name}</h3>
          
          <p className='text-fn2 mb-3 text-sm line-clamp-2'>{description}</p>

          {/* Info adicional */}
          <div className='space-y-2'>
            {/* Rating */}
            <div className='flex items-center gap-2'>
              <div className='flex items-center gap-1'>
                <Star className='text-yellow-500 h-4 w-4 fill-yellow-500' />
                <span className='text-fn1 font-semibold text-sm'>{avg_rating.toFixed(1)}</span>
              </div>
              <span className='text-fn2 text-xs'>({total_reviews} reseñas)</span>
            </div>

            {/* Dirección */}
            <div className='flex items-start gap-2'>
              <MapPin className='text-fn2 h-4 w-4 mt-0.5 flex-shrink-0' />
              <span className='text-fn2 text-xs line-clamp-1'>{address}</span>
            </div>

            {/* Horario */}
            {opening_time && closing_time && (
              <div className='flex items-center gap-2'>
                <Clock className='text-fn2 h-4 w-4' />
                <span className='text-fn2 text-xs'>
                  {opening_time} - {closing_time}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}