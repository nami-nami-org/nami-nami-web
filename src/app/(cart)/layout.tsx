'use client'

import type { FC, ReactNode } from 'react'

import CartHeader from './components/CartHeader'

interface Props {
  children?: ReactNode | ReactNode[]
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className='bg-bg1 min-h-screen'>
      <CartHeader />
      {children}
    </div>
  )
}

export default Layout
