import { Span } from 'next/dist/trace'
import type { FC, ReactNode } from 'react'
import { Filters } from '../../components/filters'
import { Heading1 } from 'lucide-react'
import Trends from '../../components/trends'
import Restaurants from '../../components/restaurant'
import SearchBox from '../../components/searchbox'


interface Props {
  children?: ReactNode | ReactNode[]
}

const Home: FC<Props> = ({}) => {
  return (

    <main className="h-full w-full flex-1">
  {/* Título principal más grande */}
  <h1 className="font-instrument text-center text-8xl md:text-9xl mb-6">
    ¿Que se te{" "}
    <span className="font-instrument text-orange-500 text-8xl md:text-9xl">
      antoja
    </span>
    ?
  </h1>

  {/* Párrafo más grande */}
  <p className="text-center text-lg md:text-2xl mb-8">
    "Algo ligero", " comida picante", "postre para compartir", "antojo de ceviche", "algo criollo", "lo que sea🇵🇪"
  </p>

  <SearchBox />

  <Filters />

  <h1 className="font-instrument text-left text-2xl md:text-4xl ml-40">
    No te lo puedes perder
  </h1>
  <Trends />

  <h1 className="font-instrument text-left text-2xl md:text-4xl ml-40">
    Descubre opciones nuevas
  </h1>

  <Restaurants />
</main>

  )

}

export default Home
