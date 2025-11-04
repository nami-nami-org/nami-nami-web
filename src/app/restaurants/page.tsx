import DishesList from '@/presentation/home/components/DishesList'
import type { FC } from 'react'

const RestaurantsPage: FC = () => {
  return (
    <main className='mb-20 flex h-full w-full flex-col gap-10 py-10'>
      <article className='bg-bg2 min-h-scree mt-10 px-2.5 py-10'>
        <div className='m-auto flex w-full max-w-[1200px] flex-col flex-wrap items-center justify-center gap-5'>
          <h1 className='font-instrument mb-6 text-center text-5xl'>
            Platillos Recomendados <span className='font-emojis text-center text-5xl'>🍓</span>
          </h1>
          <DishesList />
        </div>
      </article>
    </main>
  )
}

export default RestaurantsPage
