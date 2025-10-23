'use client'

import NAVIGATION from '@/shared/config/constants/navLinks'
import useNavStore from '@/shared/store/useNavStore'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { FC } from 'react'

interface NavLinksProps {
  isMobile?: boolean
}

const NavLinks: FC<NavLinksProps> = ({ isMobile = false }) => {
  const pathname = usePathname()
  const { closeMenu } = useNavStore()

  return (
    <nav className={`flex ${isMobile ? 'flex-col gap-1 p-1' : 'items-center gap-5'} ${isMobile ? '' : 'max-middle:hidden'}`}>
      {links.map(({ href, label, icon: Icon }) => {
        const isActive = pathname === href
        return (
          <Link
            key={href}
            href={href}
            onClick={isMobile ? closeMenu : undefined}
            className={`active flex items-center gap-2 rounded-lg p-3 transition-colors duration-200 ${
              isActive ? 'text-tn1' : 'hover:text-tn1'
            }`}
          >
            <Icon />
            <h4>{label}</h4>
          </Link>
        )
      })}
    </nav>
  )
}

export default NavLinks
