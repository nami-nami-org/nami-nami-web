"use client"

import { Star, Clock, Phone } from "lucide-react"
import Link from 'next/link'    

interface RestaurantTargetProps {
  id: number
  name: string
  image: string
  time: string
  description: string
  phone: string
}

export default function RestaurantsTarget({ id, name, image, time, description, phone }: RestaurantTargetProps) {
  return (
    <div className="bg-bg2 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
      {/* Imagen del restaurante */}
      <div className="relative h-48 overflow-hidden bg-bg3">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform"
        />
       
         <div/>
      </div>

      {/* Información del restaurante */}
      <div className="p-4">
        <h3 className="font-bold text-fn1 text-lg mb-2 line-clamp-2">{name}</h3>

        <p className="text-fn2 text-sm mb-3 line-clamp-2">{description}</p>

        {/* Detalles */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-fn2 text-sm">
            <Clock className="w-4 h-4" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2 text-fn2 text-sm">
            <Phone className="w-4 h-4" />
            <span>{phone}</span>
          </div>
        </div>

        {/* Botón */}
        <button className="w-full bg-tn1 text-fnA py-2 rounded-lg font-medium hover:bg-tn2 transition-colors text-sm">
          Ver menú
        </button>
      </div>
    </div>
  )
}
