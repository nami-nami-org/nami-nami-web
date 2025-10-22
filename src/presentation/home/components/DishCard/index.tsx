import Button from '@/shared/ui/components/Button'
import StarRating from '@/shared/ui/components/StarRating'
import { Image } from '@unpic/react/nextjs'
import { ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

interface DishCardProps {
  id?: string
  name: string
  price: number
  image: string
  rating?: number
  reviews?: number
}

const DishCard: FC<DishCardProps> = ({ id, name, price, image, rating = 5, reviews = 0 }) => {
  // Generate a simple id based on the name if not provided
  const productId = id || name.toLowerCase().replace(/\s+/g, '-')
  
  return (
    <div className='bg-bg2 border-bg3 flex h-fit w-full max-w-[350px] flex-col gap-3.5 overflow-hidden rounded-2xl border pb-3.5'>
      <Link href={`/producto/${productId}`}>
        <header className='relative h-56 w-full cursor-pointer transition hover:opacity-90'>
          <Image src={image} alt={name} layout='fullWidth' className='h-full w-full object-cover' />
        </header>
      </Link>

      <div className='flex flex-col gap-2.5 px-3.5'>
        <Link href={`/producto/${productId}`}>
          <div className='cursor-pointer transition hover:opacity-80'>
            <h3 className='font-semibold'>{name}</h3>
            <p className='text-tn1 font-bold'>S/ {price.toFixed(2)}</p>
          </div>
        </Link>

        <div className='flex items-center gap-1'>
          <p className='text-fn2 text-span ml-2'>({reviews} reviews)</p>
          <StarRating rating={rating} />
        </div>

        <Button variant='active' className='justify-center'>
          <h4>Agregar al carrito</h4>
          <ShoppingCartIcon />
        </Button>
      </div>
    </div>
  )
}

export default DishCard
