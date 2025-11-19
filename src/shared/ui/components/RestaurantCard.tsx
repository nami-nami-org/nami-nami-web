import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import RatingBadge from '@/shared/ui/components/RatingBadge'
import { Image } from '@unpic/react'
import Link from 'next/link'

interface RestaurantCardProps {
  id: string
  images: string[]
  logo: string
  name: string
  rating: number | string
  time: string
  price: string
  className?: string
}

export default function RestaurantCard({ id, images, logo, name, rating, time, price, className }: RestaurantCardProps) {
  return (
    <div className={className}>
      <Card className='bg-bg2 border-bg3 hover:bg-bg3 overflow-hidden transition-shadow hover:shadow-lg'>
        {/* SLIDER */}
        <div className='relative w-full'>
          <Carousel className='w-full'>
            <CarouselContent>
              {images.map((img, index) => (
                <CarouselItem key={index}>
                  <div className='relative h-[150px] w-full'>
                    <img src={img} alt={name} className='h-full w-full object-cover' />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className='left-2' />
            <CarouselNext className='right-2' />
          </Carousel>

          <div className='absolute top-2 right-2 z-10'>
            <RatingBadge rating={rating} />
          </div>
        </div>

        {/* INFO */}
        <CardContent className='flex items-start gap-3'>
          <img src={logo} alt={name} className='h-12 w-12 rounded-md object-cover' />

          <div className='flex flex-col justify-center'>
            <h3 className='font-semibold'>{name}</h3>
            <p className='text-fn2'>
              {time} · <span className='text-tn1 font-semibold'>{price}</span>
            </p>
          </div>
        </CardContent>

        <CardFooter>
          <Button asChild className='w-full'>
            <Link href={`/restaurants/${id}`}>Ver más detalles</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
