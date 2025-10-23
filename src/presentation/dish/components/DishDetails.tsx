import StarRating from '@/shared/ui/components/StarRating'
import { Image } from '@unpic/react/nextjs'
import { Clock, Heart, Info, MapPin, ShoppingCart } from 'lucide-react'
import type { FC } from 'react'

interface Props {
  dishId: string
}

const DishDetails: FC<Props> = ({ dishId }) => {
  return (
    <div className='grid gap-8 lg:grid-cols-2'>
      {/* Image Section */}
      <div className='space-y-4'>
        <div className='bg-bg2 relative aspect-[4/3] overflow-hidden rounded-2xl'>
          <Image
            src='/delicious-tex-mex-burrito-with-grilled-meat--veget.jpg'
            alt='Nocturnos Tex Mex Surquillo'
            className='object-cover'
            priority
          />
          <button className='bg-bg1/90 hover:bg-bg1 absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-full backdrop-blur-sm transition-colors'>
            <Heart className='text-tn1 h-5 w-5' />
          </button>
        </div>

        {/* Thumbnail Gallery */}
        <div className='grid grid-cols-4 gap-3'>
          {[1, 2, 3, 4].map(i => (
            <div
              key={i}
              className='bg-bg2 relative aspect-square cursor-pointer overflow-hidden rounded-lg transition-opacity hover:opacity-80'
            >
              <Image
                src={`/tex-mex-food-detail-.jpg?height=200&width=200&query=tex mex food detail ${i}`}
                alt={`Vista ${i}`}
                className='object-cover'
              />
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
          <span className='text-fn1 font-medium'>Nocturnos</span>
        </div>

        {/* Title and Rating */}
        <div>
          <h1 className='font-instrument text-fn1 mb-3 text-4xl'>Tex Mex Surquillo</h1>
          <div className='text-fn2 flex items-center gap-4'>
            <div className='flex items-center gap-1'>
              <StarRating rating={4.7} />
              <span className='text-fn1 font-semibold'>4.7</span>
              <span>(128 reseñas)</span>
            </div>
            <div className='flex items-center gap-1'>
              <Clock className='h-5 w-5' />
              <span>20-30 min</span>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className='flex items-baseline gap-2'>
          <span className='text-tn1 text-4xl font-bold'>S/ 14.90</span>
          <span className='text-fn2 line-through'>S/ 18.90</span>
        </div>

        {/* Description */}
        <div className='space-y-3'>
          <h3 className='text-fn1 text-lg font-semibold'>Descripción</h3>
          <p className='text-fn2 leading-relaxed'>
            Delicioso burrito estilo Tex-Mex preparado con tortilla de harina suave, relleno de carne asada jugosa, frijoles
            negros, arroz mexicano, queso cheddar derretido, pico de gallo fresco, guacamole cremoso y crema ácida. Acompañado de
            nachos crujientes y salsa picante al lado.
          </p>
        </div>

        {/* Ingredients/Tags */}
        <div className='space-y-3'>
          <h3 className='text-fn1 text-lg font-semibold'>Categorias Principales</h3>
          <div className='flex flex-wrap gap-2'>
            {['Carne asada', 'Frijoles', 'Queso', 'Guacamole', 'Pico de gallo', 'Tortilla'].map(tag => (
              <span key={tag} className='bg-bg2 text-fn1 rounded-full px-4 py-2 text-sm'>
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
              <p className='text-fn2 text-sm'>
                Disponible para delivery en Surquillo y distritos cercanos. Tiempo estimado: 20-30 minutos.
              </p>
            </div>
          </div>
          <div className='flex items-start gap-3'>
            <Info className='text-tn1 mt-0.5 h-5 w-5' />
            <div>
              <p className='text-fn2 text-sm'>Delivery gratis en pedidos mayores a S/ 30.00</p>
            </div>
          </div>
        </div>

        {/* Quantity Selector and Add to Cart */}
        <div className='flex gap-4 pt-4'>
          <div className='bg-bg2 flex items-center gap-3 rounded-full px-4'>
            <button className='text-fn1 hover:text-tn1 flex h-8 w-8 items-center justify-center transition-colors'>
              <span className='text-xl'>−</span>
            </button>
            <span className='text-fn1 min-w-[2ch] text-center font-semibold'>1</span>
            <button className='text-fn1 hover:text-tn1 flex h-8 w-8 items-center justify-center transition-colors'>
              <span className='text-xl'>+</span>
            </button>
          </div>
          <button className='bg-tn1 text-fnA flex flex-1 items-center justify-center gap-2 rounded-full py-4 font-semibold transition-opacity hover:opacity-90'>
            <ShoppingCart className='h-5 w-5' />
            <span>Agregar al carrito</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DishDetails
