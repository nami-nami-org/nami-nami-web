import { Image } from '@unpic/react/nextjs'
import { Star } from 'lucide-react'

interface DishCardProps {
  name: string
  image: string
  rating: number
  time: string
  price: string
  logo?: string
}

export default function DishCard({ name, image, rating, time, price, logo = '/elegant-restaurant-logo.png' }: DishCardProps) {
  return (
    <div className='bg-bg2 group cursor-pointer overflow-hidden rounded-xl transition-shadow hover:shadow-lg'>
      <div className='relative'>
        <Image
          src={image || '/placeholder.svg'}
          alt={name}
          className='h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105'
        />
        <div className='bg-fnA absolute top-3 right-3 flex items-center gap-1 rounded-lg px-2 py-1'>
          <Star className='fill-tn1 text-tn1 h-4 w-4' />
          <span className='text-fn1 text-sm font-bold'>{rating}</span>
        </div>
      </div>
      <div className='p-4'>
        <div className='flex items-start gap-3'>
          <Image src={logo || '/placeholder.svg'} alt='Logo' className='h-12 w-12 rounded-lg object-cover' />
          <div className='flex-1'>
            <h3 className='text-fn1 mb-2 font-semibold'>{name}</h3>
            <div className='text-fn2 flex items-center gap-3 text-sm'>
              <span>{time}</span>
              <span>•</span>
              <span className='text-tn1 font-bold'>{price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
