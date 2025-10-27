import { Star } from "lucide-react"
import Image from "next/image"

interface DishCardProps {
  name: string
  imageUrl: string
  rating?: number
  prepTime: number | string
  price: number
  logo?: string
  description?: string
}

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
        />
        <div className="absolute top-3 right-3 bg-fnA px-2 py-1 rounded-lg flex items-center gap-1">
          <Star className="w-4 h-4 fill-tn1 text-tn1" />
          <span className="text-sm font-bold text-fn1">{rating}</span>
        </div>
      </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}