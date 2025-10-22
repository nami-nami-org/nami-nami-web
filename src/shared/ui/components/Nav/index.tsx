'use client'

import { ChevronDown, ShoppingCartIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'

import useCartStore from '@/shared/store/useCartStore'
import Button from '../Button'
import Logo from '../Logo'
import ThemeChanger from '../ThemeChanger'
import NavLinks from './NavLinks'
import NavMenu from './NavMenu'

const Nav: FC = () => {
  const itemCount = useCartStore(state => state.getItemCount())
  return (
    <header className='bg-bg1 sticky top-0 z-50 w-full'>
      <div className='max-middle:justify-center m-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-2.5 pt-2 max-xl:px-2.5'>
        <div className='flex flex-row items-center gap-7'>
          <Link href='/' className='flex items-center gap-2.5'>
            <Logo />
            <h5 className='text-tn1 flex gap-0 font-bold'>
              Ñami <br /> Ñami
            </h5>
          </Link>
          <section className='text-fn1 flex flex-col'>
            <span className='text-fn2'>Enviar a:</span>
            <button className='flex items-center gap-1 font-semibold'>
              <h4>Lima</h4>
              <ChevronDown className='h-4 w-4' />
            </button>
          </section>
        </div>

        <NavLinks />

        <div className='flex items-center gap-4'>
          <ThemeChanger />
          <NavMenu />

          <Link href='/carrito'>
            <Button asClass variant='border' className='relative'>
              <ShoppingCartIcon />
              {itemCount > 0 && (
                <span className='bg-tn1 text-fnA absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold'>
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>

          <Link href='/login'>
            <Button asClass variant='active'>
              <UserIcon />
              <h4 className='text-fnA block max-xl:hidden'>Iniciar sesión</h4>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Nav
