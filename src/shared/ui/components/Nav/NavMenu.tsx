'use client'

import { Menu, MenuButton, MenuItems } from '@headlessui/react'
import { MenuIcon } from 'lucide-react'
import type { FC } from 'react'

import Button from '../Button'
import NavLinks from './NavLinks'

const NavMenu: FC = () => {
  return (
    <Menu as='div' className='middle:hidden relative'>
      <MenuButton as={Button} variant='border'>
        <MenuIcon />
      </MenuButton>
      <MenuItems
        anchor='bottom end'
        className='border-bg3 bg-bg2 w-48 origin-top-right rounded-xl border p-1 text-sm/6 shadow-lg focus:outline-none data-closed:scale-95 data-closed:opacity-0'
      >
        <NavLinks isMobile={true} />
      </MenuItems>
    </Menu>
  )
}

export default NavMenu
