'use client'

import Image from "next/image"
import { useCartStore } from '@/core/store/shopping-cart.store'
import { Clock, Plus, Star } from 'lucide-react'
import { toast } from 'sonner'

interface RecommendedDish {
  id: number
  name: string
  description: string
  price: number
  image: string
  time: number
  rating: number
}

export default function RecommendedDishes() {
  const { addToCart } = useCartStore()

  const recommendedDishes: RecommendedDish[] = [
    {
      id: 101,
      name: "Inca Kola Personal",
      description: "Bebida gaseosa tradicional peruana",
      price: 3.5,
      image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop",
      time: 5,
      rating: 4.5
    },
    {
      id: 102,
      name: "Picarones",
      description: "Postre tradicional con miel de chancaca",
      price: 8.0,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
      time: 15,
      rating: 4.8
    },
    {
      id: 103,
      name: "Chicha Morada",
      description: "Bebida refrescante de maíz morado",
      price: 4.0,
      image: "https://images.unsplash.com/photo-1546548970-71785318a17b?w=400&h=300&fit=crop",
      time: 5,
      rating: 4.6
    },
    {
      id: 104,
      name: "Papa a la Huancaína",
      description: "Papas con salsa de ají amarillo y queso",
      price: 12.0,
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop",
      time: 20,
      rating: 4.7
    },
  ]

  const handleAddToCart = (dish: RecommendedDish) => {
    addToCart({
      id: dish.id,
      name: dish.name,
      description: dish.description,
      price: dish.price,
      image: dish.image,
      time: dish.time,
      quantity: 1
    })

    toast.success('¡Agregado al carrito!', {
      description: dish.name
    })
  }

  return (
    <div className="bg-bg2 border-bg3 rounded-2xl border p-6 shadow-sm w-full">
      <h3 className="font-bold text-fn1 text-xl mb-4">Platillos Recomendados</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {recommendedDishes.map((dish) => (
          <div
            key={dish.id}
            className="group bg-bg1 border-bg3 rounded-xl border overflow-hidden transition-all hover:shadow-lg"
          >
            {/* Imagen con badge */}
            <div className="relative h-32 overflow-hidden bg-gradient-to-br from-bg3 to-bg2">
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Badge de tiempo */}
              <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-md text-[10px] font-bold flex items-center gap-1">
                <Clock className="h-2.5 w-2.5" />
                {dish.time} min
              </div>
            </div>

            {/* Contenido */}
            <div className="p-2.5">
              {/* Nombre */}
              <h4 className="text-fn1 font-bold text-xs mb-1 leading-tight line-clamp-1">
                {dish.name}
              </h4>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-2">
                <Star className="text-yellow-500 h-3 w-3 fill-yellow-500" />
                <span className="text-fn1 text-[10px] font-semibold">{dish.rating}</span>
              </div>

              {/* Descripción */}
              <p className="text-fn2 text-[10px] mb-2 line-clamp-2 leading-tight">
                {dish.description}
              </p>

              {/* Precio */}
              <div className="mb-2">
                <span className="text-tn1 text-base font-bold leading-none">
                  S/ {dish.price.toFixed(2)}
                </span>
              </div>

              {/* Botón */}
              <button
                onClick={() => handleAddToCart(dish)}
                className="bg-tn1 hover:bg-tn1/90 text-fnA w-full flex items-center justify-center gap-1 rounded-lg px-2 py-1.5 text-[10px] font-bold transition-all hover:shadow-md active:scale-95"
              >
                <Plus className="h-3 w-3" />
                Agregar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
