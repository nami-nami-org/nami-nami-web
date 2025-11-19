import DishModel from '@/core/models/dish'
import { ClockIcon } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'

import RatingBadge from './RatingBadge'

interface Props {
  dish: DishModel
}

const VerticalDishCard: FC<Props> = ({ dish }) => {
  return (
    <Link
      href={`/dishes/${dish.id || dish.discount}`}
      className='group bg-bg2 border-bg3 overflow-hidden rounded-xl border transition-shadow hover:shadow-lg'
    >
      <div className='bg-bg2 relative aspect-[4/3] w-full'>
        <img
          src={dish.imageUrl || '/🍛.jpg'}
          alt={dish.name || 'Platillo'}
          className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
        />

        <RatingBadge rating={dish.avgRating ?? 4} />
      </div>

      <div className='p-4'>
        <div className='mb-2 flex items-center gap-2'>
          <span className='text-fn2 text-sm'>{dish.categories?.[0]?.name || '🍽️'}</span>
        </div>

        <h3 className='text-fn1 group-hover:text-tn1 mb-2 line-clamp-2 font-semibold transition-colors'>
          {dish.name || 'Platillo Especial'}
        </h3>

        <div className='flex items-center justify-between'>
          <span className='text-tn1 font-bold'>S/ {dish.price?.toFixed(2) || '💰'}</span>

          <span className='text-fn2 flex items-center gap-1 text-sm'>
            <ClockIcon className='h-4 w-4' />
            {dish.prepTime ? `${dish.prepTime} min` : '⏳'}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default VerticalDishCard
