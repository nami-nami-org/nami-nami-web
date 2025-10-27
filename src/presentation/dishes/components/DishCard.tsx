<<<<<<< HEAD:src/presentation/dishes/DishCard.tsx
import { Image } from '@unpic/react/nextjs'
import { Star } from 'lucide-react'
=======
import { Star } from "lucide-react"
import Image from "next/image"
>>>>>>> f828f2e (feat: 🐛 commit Implement related products section with loading and error handling):src/presentation/dishes/components/DishCard.tsx

interface DishCardProps {
  name: string
  imageUrl: string
  rating?: number
  prepTime: number | string
  price: number
  logo?: string
  description?: string
}

<<<<<<< HEAD:src/presentation/dishes/DishCard.tsx
export default function DishCard({ name, image, rating, time, price, logo = '/elegant-restaurant-logo.png' }: DishCardProps) {
  return (
    <div className='bg-bg2 group cursor-pointer overflow-hidden rounded-xl transition-shadow hover:shadow-lg'>
      <div className='relative'>
        <Image
          src={image || '/placeholder.svg'}
          alt={name}
          className='h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105'
=======
export default function DishCard({
  name,
  imageUrl,
  rating = 5.0,
  prepTime,
  price,
  logo = "/elegant-restaurant-logo.png",
  description,
}: DishCardProps) {
  return (
    <div className="bg-bg2 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
      <div className="relative">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          width={400}
          height={192}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
>>>>>>> f828f2e (feat: 🐛 commit Implement related products section with loading and error handling):src/presentation/dishes/components/DishCard.tsx
        />
        <div className='bg-fnA absolute top-3 right-3 flex items-center gap-1 rounded-lg px-2 py-1'>
          <Star className='fill-tn1 text-tn1 h-4 w-4' />
          <span className='text-fn1 text-sm font-bold'>{rating}</span>
        </div>
      </div>
<<<<<<< HEAD:src/presentation/dishes/DishCard.tsx
      <div className='p-4'>
        <div className='flex items-start gap-3'>
          <Image src={logo || '/placeholder.svg'} alt='Logo' className='h-12 w-12 rounded-lg object-cover' />
          <div className='flex-1'>
            <h3 className='text-fn1 mb-2 font-semibold'>{name}</h3>
            <div className='text-fn2 flex items-center gap-3 text-sm'>
              <span>{time}</span>
              <span>•</span>
              <span className='text-tn1 font-bold'>{price}</span>
=======
      <div className="p-4">
        <div className="flex items-start gap-3">
          <Image
            src={logo || "/placeholder.svg"}
            alt="Logo"
            width={48}
            height={48}
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-fn1 mb-2">{name}</h3>
            {description && (
              <p className="text-xs text-fn2 mb-1">{description}</p>
            )}
            <div className="flex items-center gap-3 text-fn2 text-sm">
              <span>{prepTime} min</span>
              <span>•</span>
              <span className="text-tn1 font-bold">S/ {price.toFixed(2)}</span>
>>>>>>> f828f2e (feat: 🐛 commit Implement related products section with loading and error handling):src/presentation/dishes/components/DishCard.tsx
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}