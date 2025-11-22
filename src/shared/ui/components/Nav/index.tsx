'use client'

import { useCartStore } from '@/core/store/shopping-cart.store'
import { ChevronDown, ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'

import Button from '../Button'
import Logo from '../Logo'
import ThemeChanger from '../ThemeChanger'
import UserButton from '../UserButton'
import NavLinks from './NavLinks'
import NavMenu from './NavMenu'

const Nav: FC = () => {
  const itemsCount = useCartStore(state => state.getItemsCount())

  return (
    <header className='bg-bg2 sticky top-0 z-50 w-full p-3'>
      <div className='m-auto flex flex-wrap items-center justify-between gap-2.5 max-xl:px-2.5 max-w-[1400px]'>
        {/* Logo y ubicación */}
        <div className='flex flex-row items-center gap-7'>
          <Link href='/' className='flex items-center gap-2.5'>
            <Logo />
            <h5 className='text-tn1 flex gap-0 font-bold'>
              Ñami <br /> Ñami
            </h5>
          </Link>
          <section className='text-fn1 hidden sm:flex flex-col'> {/* ✅ AGREGADO: hidden sm:flex */}
            <span className='text-fn2'>Enviar a:</span>
            <button className='flex items-center gap-1 font-semibold'>
              <h4>Lima</h4>
              <ChevronDown className='h-4 w-4' />
            </button>
          </section>
        </div>  

        {/* Links de navegación - Solo desktop */}
        <div className='hidden region:flex'> {/* ✅ AGREGADO: wrapper con hidden region:flex */}
          <NavLinks />
        </div>

        {/* Acciones de la derecha */}
        <div className='flex items-center gap-4'>
          <ThemeChanger />
          
          <Link href='/shopping-cart'>
            <Button asClass variant='border' className='relative'>
              <ShoppingCartIcon />
              {itemsCount > 0 && (
                <span className='bg-tn1 absolute -top-2 -right-2 rounded-full px-2 py-0.5 text-xs font-bold text-white'>
                  {itemsCount}
                </span>
              )}
            </Button>
          </Link>

          {/* UserButton - Solo desktop */}
          <UserButton />

          {/* Menú hamburguesa - Solo mobile */}
          <NavMenu />
        </div>
      </div>
    </header>
  )
}

export default Nav