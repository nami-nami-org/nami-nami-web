import { Home as HomeIcon, Leaf, Store, Utensils } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'

import Logo from './Logo'
import ThemeChanger from './ThemeChanger'

const Nav: FC = () => {
  return (
    <header className='m-w-[500px] flex w-full items-center justify-between'>
      <div className='flex items-center space-x-2'>
        <Logo />
        <h4 className='text-[12px] font-bold'>
          Ñami <br /> Nami
        </h4>
      </div>
      <nav className='hidden space-x-8 md:flex'>
        <Link href='#' className='text-fn2 hover:text-fn1 flex items-center space-x-2 transition-colors duration-300'>
          <HomeIcon />
          <span>Inicio</span>
        </Link>
        <Link href='#' className='text-fn2 hover:text-fn1 flex items-center space-x-2 transition-colors duration-300'>
          <Utensils />
          <span>Platillos</span>
        </Link>
        <Link href='#' className='text-fn2 hover:text-fn1 flex items-center space-x-2 transition-colors duration-300'>
          <Store />
          <span>Restaurantes</span>
        </Link>
        <Link href='#' className='text-fn2 hover:text-fn1 flex items-center space-x-2 transition-colors duration-300'>
          <Leaf />
          <span>Veganos</span>
        </Link>
        <ThemeChanger />
      </nav>
    </header>
  )
}

export default Nav
