import ThemeChanger from '@/components/ThemeChanger'
import LogoBg from '@/shared/ui/logo-bg'
import { Home as HomeIcon, Leaf, Store, Utensils } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'

const Nav: FC = () => {
  return (
    <header className='m-w-[500px] flex w-full items-center justify-between'>
      <div className='flex items-center space-x-2'>
        <LogoBg size={40} />
        <h4 className='text-[12px] font-bold'>
          Ñami <br /> Nami
        </h4>
      </div>
      <nav className='hidden space-x-8 md:flex'>
        <Link href='#' className='text-fn2 hover:text-fn1 flex items-center space-x-2 transition-colors duration-300'>
          <HomeIcon size={20} />
          <span>Inicio</span>
        </Link>
        <Link href='#' className='text-fn2 hover:text-fn1 flex items-center space-x-2 transition-colors duration-300'>
          <Utensils size={20} />
          <span>Platillos</span>
        </Link>
        <Link href='#' className='text-fn2 hover:text-fn1 flex items-center space-x-2 transition-colors duration-300'>
          <Store size={20} />
          <span>Restaurantes</span>
        </Link>
        <Link href='#' className='text-fn2 hover:text-fn1 flex items-center space-x-2 transition-colors duration-300'>
          <Leaf size={20} />
          <span>Veganos</span>
        </Link>
        <ThemeChanger />
      </nav>
    </header>
  )
}

export default Nav
