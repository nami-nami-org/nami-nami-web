import { Star } from 'lucide-react'
import { FC } from 'react'

interface StarRatingProps {
  rating: number
  maxStars?: number
  maxRating?: number
}

const StarRating: FC<StarRatingProps> = ({ rating, maxStars = 5, maxRating = 5 }) => {
  const normalizedRating = (rating / maxRating) * maxStars

  return (
    <div className='flex items-center gap-1 text-yellow-400'>
      {Array.from({ length: maxStars }).map((_, i) => {
        const fillPercentage = Math.min(Math.max(normalizedRating - i, 0), 1) * 100

        return (
          <div key={i} className='relative'>
            <Star className='text-bg3 h-5 w-5' fill='none' />

            <div className='absolute top-0 left-0 overflow-hidden text-yellow-400' style={{ width: `${fillPercentage}%` }}>
              <Star className='h-5 w-5' fill='currentColor' />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default StarRating
