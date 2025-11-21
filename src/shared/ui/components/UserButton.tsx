'use client'

import useSessionStore from '@/core/store/useSession'
import { UserIcon, ChevronDown, User, Settings, LogOut } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC, useState, useRef, useEffect } from 'react'
import { toast } from 'sonner'

import Button from './Button'

const UserButton: FC = () => {
  const { user, clearUser } = useSessionStore()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Cerrar menú al hacer click afuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLogout = () => {
    clearUser()
    toast.success('Sesión cerrada correctamente')
    setIsOpen(false)
    router.push('/login')
  }

  // Si hay usuario → mostrar menú dropdown
  if (user) {
    return (
      <div className='relative' ref={menuRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='flex items-center gap-2 text-tn1 hover:text-tn1/80 transition font-semibold'
        >
          <UserIcon className='w-5 h-5' />
          <span>{user.name?.split(' ')[0] || 'Usuario'}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {/* Dropdown menu */}
        {isOpen && (
          <div className='bg-bg2 border-bg3 absolute right-0 top-full z-50 mt-2 w-64 rounded-xl border shadow-xl'>
            {/* Header con info del usuario */}
            <div className='border-bg3 border-b p-4'>
              <div className='flex items-center gap-3'>
                <div className='bg-tn1 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white'>
                  {user.name?.charAt(0).toUpperCase() || 'U'}
                </div>
                <div className='flex-1 min-w-0'>
                  <p className='text-fn1 font-semibold truncate'>{user.name}</p>
                  <p className='text-fn2 text-sm truncate'>{user.email}</p>
                </div>
              </div>
            </div>

            {/* Menu items */}
            <div className='p-2'>
              <Link
                href='/profile'
                onClick={() => setIsOpen(false)}
                className='text-fn1 hover:bg-bg3 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 transition-colors'
              >
                <User className='h-4 w-4' />
                <span className='font-medium'>Mi Perfil</span>
              </Link>

              <Link
                href='/profile/settings'
                onClick={() => setIsOpen(false)}
                className='text-fn1 hover:bg-bg3 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 transition-colors'
              >
                <Settings className='h-4 w-4' />
                <span className='font-medium'>Configuración</span>
              </Link>

              <hr className='border-bg3 my-2' />

              <button
                onClick={handleLogout}
                className='text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 transition-colors'
              >
                <LogOut className='h-4 w-4' />
                <span className='font-medium'>Cerrar Sesión</span>
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }

  // Si NO hay usuario → botón de iniciar sesión
  return (
    <Link href='/login'>
      <Button asClass variant='active'>
        <UserIcon />
        <h4 className='text-fnA block'>Iniciar sesión</h4>
      </Button>
    </Link>
  )
}

export default UserButton