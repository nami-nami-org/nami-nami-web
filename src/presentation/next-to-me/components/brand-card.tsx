import Image from "next/image"
import { Star } from "lucide-react"

interface BrandCardProps {
  logo: string
  name: string
  rating: number
  alt?: string
}

export function BrandCard({ logo, name, rating, alt }: BrandCardProps) {
  return (
    <div className="inline-flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm border border-gray-100">
      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
        <Image src={logo || "/placeholder.svg"} alt={alt || name} fill className="object-cover" />
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1.5">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-semibold text-gray-900">{rating.toFixed(1)}</span>
        </div>
        <h3 className="text-base font-semibold text-gray-900">{name}</h3>
      </div>
    </div>
  )
}
