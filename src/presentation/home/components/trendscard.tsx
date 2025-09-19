import { Image } from '@unpic/react/nextjs'
import { Star } from 'lucide-react'
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
      <div className='bg-bg1 absolute top-2 right-2 flex items-center gap-1 rounded-lg px-1.5 py-0.5'>
        <Star className='h-3 w-3 fill-yellow-500 text-yellow-500' />
        <span className='text-fn2 text-xs font-medium'>{rating}</span>
      </div>

      <Image layout='fixed' height={64} src={image} alt={name} className='h-16 w-16 object-contain' />

      <h4 className='text-center font-black'>{name}</h4>
    </Link>
  )
}

export default TrendCard
