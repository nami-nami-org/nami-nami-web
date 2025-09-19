import PlatilloCard from '@/shared/components/platillo-ancho/page'
import type { FC, ReactNode } from 'react'

import { Filters } from './components/filters'
import Restaurants from './components/restaurant'
import SearchBox from './components/searchbox'
import Trends from './components/trends'

interface Props {
  children?: ReactNode | ReactNode[]
}

const Home: FC<Props> = ({}) => {
  return (
    <main className='mt-10 flex h-full w-full flex-1 flex-col gap-5'>
      <div className='flex flex-col gap-2.5'>
        <h1 className='font-instrument mb-6 text-center text-8xl md:text-9xl'>
          <span className='font-emojis'>🍕</span> ¿Que se te <span className='text-tn1 font-light italic'>antoja</span>?
        </h1>

        <h2 className='mb-8 text-center'>
          &quot;Algo ligero&quot;, &quot;comida picante&quot;, &quot;postre para compartir&quot;, &quot;antojo de ceviche&quot;,
          <br />
          &quot;algo criollo&quot;... lo que sea🇵🇪
        </h2>
      </div>

      <SearchBox />

      <Filters />

      <div className='m-auto flex w-full max-w-[1200px] flex-col flex-wrap justify-between'>
        <h3 className='font-bold'>No te lo puedes perder 🔥</h3>
        <Trends />
        <h3 className='font-bold'>Descubre opciones nuevas</h3>
        <Restaurants />
      </div>

      <div className='min-h-screen bg-neutral-900 p-6'>
        <h1 className='mb-6 text-2xl font-bold text-white'>Recomendados 🍽️</h1>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          <PlatilloCard nombre='Ceviche Especial' precio={35} imagen='/images/ceviche.png' rating={4} reseñas={120} />
          <PlatilloCard nombre='Lomo Saltado' precio={40} imagen='/images/lomo.png' rating={5} reseñas={200} />
          <PlatilloCard nombre='Cuy Chactado' precio={40} imagen='/images/cuy.png' rating={5} reseñas={200} />
          <PlatilloCard nombre='Causa Limeña' precio={40} imagen='/images/causa.png' rating={5} reseñas={200} />
        </div>
      </div>
    </main>
  )
}

export default Home
