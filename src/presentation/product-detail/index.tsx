'use client'

import Button from '@/shared/ui/components/Button'
import StarRating from '@/shared/ui/components/StarRating'
import { Image } from '@unpic/react/nextjs'
import { ArrowLeft, ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'

interface ProductDetailProps {
  id: string
  name: string
  price: number
  image: string
  rating?: number
  reviews?: number
  description?: string
}

const ProductDetail: FC<ProductDetailProps> = ({ name, price, image, rating = 5, reviews = 0, description }) => {
  return (
    <main className='mt-10 flex h-full w-full flex-1 flex-col gap-10 px-4 pb-10'>
      <Link href='/' className='text-fn2 hover:text-tn1 flex w-fit items-center gap-2 transition'>
        <ArrowLeft size={20} />
        <span>Volver al inicio</span>
      </Link>

      <article className='mx-auto flex w-full max-w-[1200px] flex-col gap-10 md:flex-row'>
        <section className='relative h-[400px] w-full overflow-hidden rounded-2xl md:h-[500px] md:w-1/2'>
          <Image src={image} alt={name} layout='fullWidth' className='h-full w-full object-cover' />
        </section>

        <section className='flex w-full flex-col gap-6 md:w-1/2'>
          <header className='flex flex-col gap-3'>
            <h1 className='text-4xl font-bold'>{name}</h1>
            <div className='flex items-center gap-3'>
              <StarRating rating={rating} />
              <p className='text-fn2'>({reviews} reviews)</p>
            </div>
          </header>

          <div className='flex flex-col gap-2'>
            <p className='text-tn1 text-5xl font-bold'>S/ {price.toFixed(2)}</p>
          </div>

          {description && (
            <div className='flex flex-col gap-2'>
              <h3 className='text-xl font-semibold'>Descripción</h3>
              <p className='text-fn2'>{description}</p>
            </div>
          )}

          {!description && (
            <div className='flex flex-col gap-2'>
              <h3 className='text-xl font-semibold'>Descripción</h3>
              <p className='text-fn2'>
                Delicioso platillo preparado con los mejores ingredientes. Una experiencia culinaria única que
                combina sabores tradicionales con un toque moderno. Perfecto para compartir con familia y amigos.
              </p>
            </div>
          )}

          <div className='mt-auto flex flex-col gap-3'>
            <Button variant='active' className='justify-center text-lg'>
              <h4>Agregar al carrito</h4>
              <ShoppingCartIcon size={24} />
            </Button>

            <p className='text-fn2 text-center text-sm'>
              <span className='font-emojis'>🚚</span> Entrega estimada: 30-45 minutos
            </p>
          </div>
        </section>
      </article>
    </main>
  )
}

export default ProductDetail
