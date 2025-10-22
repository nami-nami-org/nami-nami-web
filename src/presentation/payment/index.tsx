'use client'

import type { FC } from 'react'
import PaymentView from './components/PaymentView'

const Payment: FC = () => {
  return (
    <main className='m-auto w-full max-w-[1200px] px-4 py-8'>
      <PaymentView />
    </main>
  )
}

export default Payment
