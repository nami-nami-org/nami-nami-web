import Button from '@/shared/ui/components/Button'
import StarRating from '@/shared/ui/components/StarRating'
import { Image } from '@unpic/react/nextjs'
import { EyeIcon, ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

interface DishCardProps {
  id: string
  name: string
  price: number
  image: string
  rating?: number
  reviews?: number
}

const DishCard: FC<DishCardProps> = ({ name, price, image, rating = 5, reviews = 0, id }) => {
  console.log('id', id)
  return (
    <div className='bg-bg3 border-bg1 flex h-fit w-full max-w-[350px] flex-col gap-3.5 overflow-hidden rounded-2xl border pb-3.5'>
      <header className='relative h-56 w-full'>
        <Image src={image} alt={name} layout='fullWidth' className='h-full w-full object-cover' />
      </header>

      <div className='flex flex-col gap-5 px-3.5'>
        <div>
          <h3 className='font-semibold'>{name}</h3>
          <p className='text-tn1 font-bold'>S/ {price.toFixed(2)}</p>
        </div>

        <div className='flex items-center gap-1'>
          <p className='text-fn2'>{reviews} reviews</p>
          <StarRating rating={rating} />
        </div>

        <div className='flex gap-2'>
          <Button variant='active' className='justify-center'>
            <h4>Agregar al carrito</h4>
            <ShoppingCartIcon />
          </Button>
          <Link href={`/dishes/${id}`}>
            <Button variant='border'>
              <EyeIcon />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DishCard
