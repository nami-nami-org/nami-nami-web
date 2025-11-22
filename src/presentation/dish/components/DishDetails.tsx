"use client"

import { useDishesQuery } from '@/core/query/dishes.query'
import { useCartStore } from '@/core/store/shopping-cart.store'
import StarRating from '@/shared/ui/components/StarRating'
import { Image } from '@unpic/react'
import { Clock, Heart, Info, MapPin, ShoppingCart } from 'lucide-react'
import { useState, type FC } from 'react'

interface Props {
  dishId: string
}

const DishDetails: FC<Props> = ({ dishId }) => {
  const { data: dish } = useDishesQuery.getDishById(dishId)
  const { addToCart } = useCartStore()
  const [quantity, setQuantity] = useState(1)

  const handleIncrement = () => {
    setQuantity(prev => prev + 1)
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  const handleAddToCart = () => {
    if (!dish) return
    
    console.log('🛒 Agregando al carrito:', { // Debug
      id: dish.id,
      name: dish.name,
      quantity: quantity,
      price: dish.price
    })
    
    addToCart({
      id: dish.id,
      name: dish.name,
      price: dish.price,
      description: dish.description,
      quantity: quantity, // Esta es la cantidad que seleccionaste
      image: dish.imageUrl,
      time: dish.prepTime || 0 // Aseguramos que sea número
    })
    
    // Resetear cantidad después de agregar
    setQuantity(1)
  }

  if (!dish) return <p className="text-fn2">🍽️ Cargando plato...</p>
  if (!dishId) return <p className="text-fn2">🍽️ ID de plato no válido</p>

  return (
    <div className='grid gap-8 lg:grid-cols-2'>
      {/* Image Section */}
      <div className='space-y-4'>
        <div className='bg-bg2 relative aspect-[4/3] overflow-hidden rounded-2xl'>
          <Image
            src={dish.imageUrl || '/🍳.jpg'}
            alt={dish.name || '🍽️'}
            className='object-cover h-full w-full'
            layout="fullWidth"
          />
          <button className='bg-bg1/90 hover:bg-bg1 absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-full backdrop-blur-sm transition-colors'>
            <Heart className='text-tn1 h-5 w-5' />
          </button>
        </div>

        {/* Thumbnail Gallery */}
        <div className='grid grid-cols-4 gap-3'>
          {dish.imageUrls?.length
            ? dish.imageUrls.map((img: any, i: any) => (
                <div
                  key={i}
                  className='bg-bg2 relative aspect-square cursor-pointer overflow-hidden rounded-lg transition-opacity hover:opacity-80'
                >
                  <Image
                    src={typeof img === 'string' ? img : '/🍛.jpg'}
                    alt={`Vista ${i + 1}`}
                    className='object-cover'
                    layout='fullWidth'
                  />
                </div>
              ))
            : ['🍲', '🥘', '🍜', '🍛'].map((emoji, i) => (
                <div
                  key={i}
                  className='bg-bg2 flex items-center justify-center aspect-square rounded-lg text-3xl'
                >
                  {emoji}
                </div>
              ))}
        </div>
      </div>

      {/* Details Section */}
      <div className='space-y-6'>
        {/* Restaurant Badge */}
        <div className='bg-bg2 inline-flex items-center gap-2 rounded-full px-4 py-2'>
          <div className='bg-tn1 h-8 w-8 overflow-hidden rounded-full'>
            <Image src='/restaurant-logo.png' alt='Restaurant' width={32} height={32} className='object-cover' />
          </div>
          <span className='text-fn1 font-medium'>🍴</span>
        </div>

        {/* Title and Rating */}
        <div>
          <h1 className='font-instrument text-fn1 mb-3 text-4xl'>{dish.name || '🍛'}</h1>
          <div className='text-fn2 flex items-center gap-4'>
            <div className='flex items-center gap-1'>
              <StarRating rating={4.5} />
              <span className='text-fn1 font-semibold'>4.5</span>
              <span>(⭐ reseñas)</span>
            </div>
            <div className='flex items-center gap-1'>
              <Clock className='h-5 w-5' />
              <span>{dish.prepTime ? `${dish.prepTime} min` : '⏳'}</span>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className='flex items-baseline gap-2'>
          <span className='text-tn1 text-4xl font-bold'>S/ {dish.price ?? '💰'}</span>
          <span className='text-fn2 line-through'>
            {dish.discount ? `S/ ${(dish.price / (1 - dish.discount)).toFixed(2)}` : '💸'}
          </span>
        </div>

        {/* Description */}
        <div className='space-y-3'>
          <h3 className='text-fn1 text-lg font-semibold'>Descripción</h3>
          <p className='text-fn2 leading-relaxed'>{dish.description || '📝'}</p>
        </div>

        {/* Categories */}
        <div className='space-y-3'>
          <h3 className='text-fn1 text-lg font-semibold'>Categorias Principales</h3>
          <div className='flex flex-wrap gap-2'>
            {dish.categories?.length
              ? dish.categories.map((cat: any) => (
                  <span key={cat.name} className='bg-bg2 text-fn1 rounded-full px-4 py-2 text-sm'>
                    {cat.name}
                  </span>
                ))
              : ['🍲', '🍚', '🥩'].map((tag, i) => (
                  <span key={i} className='bg-bg2 text-fn1 rounded-full px-4 py-2 text-sm'>
                    {tag}
                  </span>
                ))}
          </div>
        </div>

        {/* Delivery Info */}
        <div className='bg-bg2 space-y-3 rounded-xl p-4'>
          <div className='flex items-start gap-3'>
            <MapPin className='text-tn1 mt-0.5 h-5 w-5' />
            <div>
              <h4 className='text-fn1 mb-1 font-semibold'>Información de entrega</h4>
              <p className='text-fn2 text-sm'>📍 Por definir</p>
            </div>
          </div>
          <div className='flex items-start gap-3'>
            <Info className='text-tn1 mt-0.5 h-5 w-5' />
            <div>
              <p className='text-fn2 text-sm'>🚚 Delivery disponible según zona</p>
            </div>
          </div>
        </div>

        {/* Quantity Selector and Add to Cart */}
        <div className='flex gap-4 pt-4'>
          <div className='bg-bg2 border-bg3 flex items-center gap-3 rounded-xl border px-4 py-2'>
            <button
              onClick={handleDecrement}
              disabled={quantity <= 1}
              className='text-tn1 hover:text-tn1/80 disabled:text-fn2 disabled:cursor-not-allowed font-bold transition-colors px-2'
            >
              −
            </button>
            <span className='text-fn1 min-w-[2ch] text-center font-semibold'>{quantity}</span>
            <button
              onClick={handleIncrement}
              className='text-tn1 hover:text-tn1/80 font-bold transition-colors px-2'
            >
              +
            </button>
          </div>
          <button 
            className='bg-tn1 text-fnA flex flex-1 items-center justify-center gap-2 rounded-full py-4 font-semibold transition-opacity hover:opacity-90' 
            onClick={handleAddToCart}
          >
            <ShoppingCart className='h-5 w-5' />
            <span>Agregar al carrito</span>
          </button>
        </div>

        {/* Total Price Preview */}
        {quantity > 1 && (
          <div className='bg-bg2 rounded-xl p-4 flex items-center justify-between'>
            <span className='text-fn2'>Total ({quantity} unidades):</span>
            <span className='text-tn1 text-2xl font-bold'>S/ {(dish.price * quantity).toFixed(2)}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default DishDetails