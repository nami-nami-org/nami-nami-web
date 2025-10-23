import { Star } from 'lucide-react'
import { FC } from 'react'

interface Props {
  rating: number | string
}

const RatingBadge: FC<Props> = ({ rating }) => {
  return (
    <div className='bg-bg1 absolute top-2 right-2 flex items-center gap-1 rounded-lg px-1.5 py-0.5'>
      <Star className='h-4 w-4 fill-yellow-500 text-yellow-500' />
      <p className='text-fn2 font-medium'>{rating}</p>
    </div>
  )
}

export default RatingBadge
