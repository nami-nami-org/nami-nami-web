import DishModel from '@/core/models/dish'
import { Image } from '@unpic/react/nextjs'
import { ClockIcon } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'

import RatingBadge from './RatingBadge'

interface Props {
  dish: DishModel
}

const VerticalDishCard: FC<Props> = () => {
  return (
    <Link href={`/platillo/`} className='bg-bg2 border-bg3 overflow-hidden rounded-xl border transition-shadow hover:shadow-lg'>
      <div className='bg-bg2 relative aspect-[4/3]'>
        <Image
          src={`/mexican-food-dish-.jpg?height=300&width=400&query=mexican food dish`}
          alt={`Platillo `}
          className='object-cover transition-transform duration-300 group-hover:scale-105'
        />
        <RatingBadge rating={4} />
      </div>
      <div className='p-4'>
        <div className='mb-2 flex items-center gap-2'>
          <span className='text-fn2 text-sm'>Nocturnos</span>
        </div>

        <h3 className='text-fn1 group-hover:text-tn1 mb-2 font-semibold transition-colors'>Platillo Especial</h3>

        <div className='flex items-center justify-between'>
          <span className='text-tn1 font-bold'>S/ {12}.90</span>

          <span className='text-fn2 flex items-center gap-1 text-sm'>
            <ClockIcon className='h-4 w-4' />
            20-30 min
          </span>
        </div>
      </div>
    </Link>
  )
}

export default VerticalDishCard
