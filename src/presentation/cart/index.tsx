'use client'

import type { FC } from 'react'
import CartView from './components/CartView'

const Cart: FC = () => {
  return (
    <main className='m-auto w-full max-w-[1200px] px-4 py-8'>
      <CartView />
    </main>
  )
}

export default Cart
