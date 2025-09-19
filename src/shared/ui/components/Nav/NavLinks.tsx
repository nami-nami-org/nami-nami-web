'use client'

import { cn } from '@/lib/utils'
import useNavStore from '@/shared/store/useNavStore'
import { bowlChopsticks } from '@lucide/lab'
import { ChefHatIcon, Home as HomeIcon, Icon, SaladIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { FC } from 'react'

import Button from '../Button'

interface NavLinksProps {
  isMobile?: boolean
}

const NavLinks: FC<NavLinksProps> = ({ isMobile = false }) => {
  const pathname = usePathname()
  const { closeMenu } = useNavStore()

  const links = [
    { href: '/', label: 'Inicio', icon: HomeIcon },
    { href: '/platillos', label: 'Platillos', icon: () => <Icon iconNode={bowlChopsticks} /> },
    { href: '/restaurantes', label: 'Restaurantes', icon: ChefHatIcon },
    { href: '/veganos', label: 'Veganos', icon: SaladIcon }
  ]

  return (
    <nav className={`flex ${isMobile ? 'flex-col gap-1 p-1' : 'items-center gap-5'} ${isMobile ? '' : 'max-middle:hidden'}`}>
      {links.map(({ href, label, icon: Icon }) => {
        const isActive = pathname === href

        return (
          <Link key={href} href={href} onClick={isMobile ? closeMenu : undefined}>
            <Button variant='transparent' asClass className={cn(isActive ? 'text-tn1' : 'hover:bg-tn1 hover:text-fnA')}>
              <Icon />
              <span className='text-h4'>{label}</span>
            </Button>
          </Link>
        )
      })}
    </nav>
  )
}

export default NavLinks
