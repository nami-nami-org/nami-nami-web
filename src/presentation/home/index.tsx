import type { FC, ReactNode } from 'react'

import DishesList from './components/DishesList'
import SearchBox from './components/SearchBox'
import { Filters } from './components/filters'
import Restaurants from './components/restaurant'
import Trends from './components/trends'

interface Props {
  children?: ReactNode | ReactNode[]
}

const Home: FC<Props> = ({}) => {
  return (
    <main className='mb-20 flex h-full w-full flex-col gap-10 py-10'>
      <header className='flex h-fit min-h-[50vh] flex-col items-center justify-center gap-10'>
        <div className='flex flex-col gap-2.5'>
          <h1 className='font-instrument mb-6 text-center text-9xl'>
            <span className='font-emojis text-ro text-9xl font-black'>🍕</span> ¿Qué se te&nbsp;
            <span className='text-tn1 text-9xl font-light italic'>Antoja</span>?
          </h1>

          <h2 className='text-center'>
            &quot;Algo ligero&quot;, &quot;comida picante&quot;, &quot;postre para compartir&quot;, &quot;antojo de ceviche&quot;,
            <br />
            &quot;algo criollo&quot;... lo que sea🇵🇪
          </h2>
        </div>

        <div className='flex flex-col gap-10'>
          <SearchBox />
          <Filters />
        </div>
      </header>

      <article className='region m-auto flex flex-col flex-wrap justify-between gap-20'>
        <div className='5 flex flex-col gap-5'>
          <h2 className='font-semibold'>No te lo puedes perder 🔥</h2>
          <Trends />
        </div>

        <div className='5 flex flex-col gap-5'>
          <h2 className='font-semibold'>Descubre opciones nuevas 🍮</h2>
          <Restaurants />
        </div>
      </article>

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

export default Home
