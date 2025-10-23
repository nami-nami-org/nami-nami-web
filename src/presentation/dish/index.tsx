import { Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import DishDetails from './components/DishDetails'

interface Props {
  dishId: string
}

const Dish: FC<Props> = ({ dishId }) => {
  return (
    <main className='mx-auto min-h-screen max-w-7xl px-4 py-8'>
      <DishDetails dishId={dishId} />

      {/* Related Products */}
      <section className='mt-16'>
        <h2 className='font-instrument text-fn1 mb-6 text-2xl'>También te puede gustar</h2>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {[1, 2, 3, 4].map(i => (
            <Link
              key={i}
              href={`/platillo/${i}`}
              className='group bg-bg1 border-bg3 overflow-hidden rounded-xl border transition-shadow hover:shadow-lg'
            >
              <div className='bg-bg2 relative aspect-[4/3]'>
                <Image
                  src={`/mexican-food-dish-.jpg?height=300&width=400&query=mexican food dish ${i}`}
                  alt={`Platillo ${i}`}
                  fill
                  className='object-cover transition-transform duration-300 group-hover:scale-105'
                />
                <div className='bg-tn1 text-fnA absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-semibold'>
                  4.{5 + i}
                </div>
              </div>
              <div className='p-4'>
                <div className='mb-2 flex items-center gap-2'>
                  <div className='bg-tn2 h-6 w-6 rounded-full' />
                  <span className='text-fn2 text-sm'>Nocturnos</span>
                </div>
                <h3 className='text-fn1 group-hover:text-tn1 mb-2 font-semibold transition-colors'>Platillo Especial {i}</h3>
                <div className='flex items-center justify-between'>
                  <span className='text-tn1 font-bold'>S/ {12 + i}.90</span>
                  <span className='text-fn2 flex items-center gap-1 text-sm'>
                    <Clock className='h-4 w-4' />
                    20-30 min
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Dish
