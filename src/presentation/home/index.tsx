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
    <main className='mt-10 flex h-full w-full flex-1 flex-col gap-20 pt-10'>
      <header className='flex flex-col gap-10'>
        <div className='flex flex-col gap-2.5'>
          <h1 className='mb-6 text-center text-8xl'>
            <span className='font-emojis text-ro text-8xl font-black'>🍕</span> ¿Qué se te&nbsp;
            <span className='text-tn1 font-instrument text-8xl font-light italic'>Antoja</span>?
          </h1>

          <h2 className='text-center'>
            &quot;Algo ligero&quot;, &quot;comida picante&quot;, &quot;postre para compartir&quot;, &quot;antojo de ceviche&quot;,
            <br />
            &quot;algo criollo&quot;... lo que sea🇵🇪
          </h2>
        </div>

        <div className='flex flex-col gap-2.5'>
          <SearchBox />
          <Filters />
        </div>
      </header>

      {/* <section className='m-auto flex w-full max-w-[1200px] flex-col flex-wrap justify-between gap-10'>
        <div className='5 flex flex-col gap-2'>
          <h3 className='font-bold'>No te lo puedes perder 🔥</h3>
          <Trends />
        </div>

        <div className='5 flex flex-col gap-2'>
          <h3 className='font-bold'>Descubre opciones nuevas</h3>
          <Restaurants />
        </div>
      </section>

      <article className='bg-bg2 min-h-scree px-2.5 py-10'>
        <div className='m-auto flex w-full max-w-[1200px] flex-col flex-wrap items-center justify-center gap-5'>
          <h2 className='text-3xl font-bold'>
            Platillos recomendados <span className='font-emojis text-center text-3xl'>🕓</span>
          </h2>
          <DishesList />
        </div>
      </article> */}
    </main>
  )
}

export default Home
