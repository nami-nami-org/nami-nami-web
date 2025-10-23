import { FC } from 'react'

import DishDetails from './components/DishDetails'
import RelatedProducts from './components/RelatedProducts'

interface Props {
  dishId: string
}

const Dish: FC<Props> = ({ dishId }) => {
  return (
    <main className='mx-auto min-h-screen max-w-7xl px-4 py-8'>
      <DishDetails dishId={dishId} />
      <RelatedProducts />
    </main>
  )
}

export default Dish
