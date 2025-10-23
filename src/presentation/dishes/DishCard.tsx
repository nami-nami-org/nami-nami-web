import { Star } from "lucide-react"

interface DishCardProps {
  name: string
  image: string
  rating: number
  time: string
  price: string
  logo?: string
}

export default function DishCard({
  name,
  image,
  rating,
  time,
  price,
  logo = "/elegant-restaurant-logo.png",
}: DishCardProps) {
  return (
    <div className="bg-bg2 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
      <div className="relative">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-fnA px-2 py-1 rounded-lg flex items-center gap-1">
          <Star className="w-4 h-4 fill-tn1 text-tn1" />
          <span className="text-sm font-bold text-fn1">{rating}</span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start gap-3">
          <img src={logo || "/placeholder.svg"} alt="Logo" className="w-12 h-12 rounded-lg object-cover" />
          <div className="flex-1">
            <h3 className="font-semibold text-fn1 mb-2">{name}</h3>
            <div className="flex items-center gap-3 text-fn2 text-sm">
              <span>{time}</span>
              <span>•</span>
              <span className="text-tn1 font-bold">{price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
