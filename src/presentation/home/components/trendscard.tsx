import RatingBadge from '@/shared/ui/components/RatingBadge'
import { Image } from '@unpic/react/nextjs'
import Link from 'next/link'

type TrendCardProps = {
  name: string
  rating: number | string
  image: string
}

const TrendCard: React.FC<TrendCardProps> = ({ name, rating, image }) => {
  return (
    <Link
      href='/pedidos'
      className='bg-bg2 hover:bg-bg3 relative flex min-h-[120px] w-[200px] min-w-[100px] flex-col items-center justify-center gap-2.5 rounded-xl p-2 shadow-md transition'
    >
      <RatingBadge rating={rating} />
      <Image layout='fixed' height={64} src={image} alt={name} className='h-16 w-16 object-contain' />
      <h4 className='text-center font-black'>{name}</h4>
    </Link>
  )
}

export default TrendCard
