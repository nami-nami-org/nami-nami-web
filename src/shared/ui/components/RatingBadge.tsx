import { Star } from 'lucide-react'
import { FC } from 'react'

interface Props {
  rating: number | string
}

const RatingBadge: FC<Props> = ({ rating }) => {
  return (
    <div className='bg-bg1 absolute top-2 right-2 flex items-center gap-1 rounded-lg px-1.5 py-0.5'>
      <Star className='h-3 w-3 fill-yellow-500 text-yellow-500' />
      <span className='text-fn2 text-xs font-medium'>{rating}</span>
    </div>
  )
}

export default RatingBadge
