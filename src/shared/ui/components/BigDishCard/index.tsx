import { useCartStore } from '@/core/store/shopping-cart.store'
import Button from '@/shared/ui/components/Button'
import StarRating from '@/shared/ui/components/StarRating'
import { Image } from '@unpic/react'
import { EyeIcon, ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

interface DishCardProps {
  name: string
  description: string
  discount: number
  imageUrl: string
  available: boolean
  prepTime: number | string
  price: number
}

const BigDishCard: FC<DishCardProps> = ({ name, description, discount, imageUrl, prepTime, price }) => {
  const addToCart = useCartStore(state => state.addToCart)

  const handleAddToCart = () => {
    addToCart({
      id: discount, // Usando discount como identificador
      name,
      description,
      time: prepTime.toString(),
      price,
      quantity: 1,
      image: imageUrl
    })
  }

  return (
    <div className='bg-bg3 border-bg1 flex h-fit w-full max-w-[350px] flex-col gap-3.5 overflow-hidden rounded-2xl border pb-3.5 transition-shadow hover:shadow-lg'>
      <header className='relative h-56 w-full'>
        <Image src={imageUrl} alt={name} layout='fullWidth' className='h-full w-full object-cover' />
      </header>

      <div className='flex flex-col gap-5 px-3.5'>
        <div>
          <h3 className='font-semibold'>{name}</h3>
          <p className='text-tn1 font-bold'>S/ {price.toFixed(2)}</p>
        </div>

        <div className='flex items-center gap-1'>
          <p className='text-fn2'>{description}</p>
          <StarRating rating={5.4} />
        </div>

        <div className='flex gap-2'>
          <Button variant='active' className='justify-center' onClick={handleAddToCart}>
            <h4>Agregar al carrito</h4>
            <ShoppingCartIcon />
          </Button>
          <Link href={`/dishes/${discount}`}>
            <Button variant='border'>
              <EyeIcon />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BigDishCard
