import RatingBadge from '@/shared/ui/components/RatingBadge'
import { Image } from '@unpic/react/nextjs'
import Link from 'next/link'

interface RestaurantCardProps {
  id: string
  image: string
  logo: string
  name: string
  rating: number | string
  time: string
  price: string
  className?: string
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ image, logo, name, rating, time, price, id, className }) => {
  return (
    <Link
      href={`/restaurants/${id}`}
      className={`bg-bg2 hover:bg-bg3 border-bg3 flex flex-col overflow-hidden rounded-xl border transition-shadow hover:shadow-lg ${className}`}
    >
      <div className='relative h-[120px] w-full'>
        <Image layout='fullWidth' src={image} alt={name} height={120} />
        <RatingBadge rating={rating} />
      </div>

      <div className='flex items-start gap-3 p-3'>
        <Image src={logo} alt={name} width={48} height={48} className='rounded-md object-cover' />

        <div className='flex flex-col justify-center'>
          <h3 className='font-semibold'>{name}</h3>
          <p className='text-fn2'>
            {time} · <span className='text-tn1 font-semibold'>{price}</span>
          </p>
        </div>
      </div>
    </Link>
  )
}

export default RestaurantCard
