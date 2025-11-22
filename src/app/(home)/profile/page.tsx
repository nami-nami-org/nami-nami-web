'use client'

import useSessionStore from '@/core/store/useSession'
import { Mail, MapPin, Phone, User, Clock, Package, Heart, DollarSign, Settings } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function ProfilePage() {
  const { user } = useSessionStore()
  const router = useRouter()

  // Redirigir si no hay usuario
  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user, router])

  // Mostrar loading mientras verifica
  if (!user) {
    return (
      <div className='bg-bg1 flex min-h-screen items-center justify-center'>
        <div className='text-fn1 text-xl'>Cargando...</div>
      </div>
    )
  }

  return (
    <div className='bg-bg1 min-h-screen py-12'>
      <div className='mx-auto max-w-6xl px-4'>
        {/* Header del perfil */}
        <div className='bg-bg2 border-bg3 mb-8 overflow-hidden rounded-2xl border shadow-sm'>
          {/* Banner superior */}
          <div className='bg-gradient-to-r from-tn1 to-tn2 h-32' />
          
          <div className='relative px-8 pb-6'>
            {/* Avatar */}
            <div className='bg-tn1 absolute -top-16 flex h-32 w-32 items-center justify-center rounded-full border-4 border-bg2 text-5xl font-bold text-white shadow-lg'>
              {user.name?.charAt(0).toUpperCase() || 'U'}
            </div>

            {/* Info del usuario */}
            <div className='pt-20'>
              <h1 className='text-fn1 text-3xl font-bold'>{user.name}</h1>
              <p className='text-fn2 mt-1'>Cliente desde {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>

        {/* Grid de información */}
        <div className='grid gap-6 lg:grid-cols-3'>
          {/* Columna izquierda - Información personal (2/3) */}
          <div className='lg:col-span-2 space-y-6'>
            {/* Información de contacto */}
            <div className='bg-bg2 border-bg3 rounded-2xl border p-6 shadow-sm'>
              <h2 className='text-fn1 mb-6 text-2xl font-bold'>Información Personal</h2>
              
              <div className='space-y-4'>
                <div className='flex items-start gap-4'>
                  <div className='bg-tn1/10 text-tn1 rounded-full p-3'>
                    <User className='h-5 w-5' />
                  </div>
                  <div>
                    <p className='text-fn2 text-sm'>Nombre completo</p>
                    <p className='text-fn1 font-semibold'>{user.name}</p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='bg-tn1/10 text-tn1 rounded-full p-3'>
                    <Mail className='h-5 w-5' />
                  </div>
                  <div>
                    <p className='text-fn2 text-sm'>Email</p>
                    <p className='text-fn1 font-semibold'>{user.email}</p>
                  </div>
                </div>

                {user.phone && (
                  <div className='flex items-start gap-4'>
                    <div className='bg-tn1/10 text-tn1 rounded-full p-3'>
                      <Phone className='h-5 w-5' />
                    </div>
                    <div>
                      <p className='text-fn2 text-sm'>Teléfono</p>
                      <p className='text-fn1 font-semibold'>{user.phone}</p>
                    </div>
                  </div>
                )}

                {user.address && (
                  <div className='flex items-start gap-4'>
                    <div className='bg-tn1/10 text-tn1 rounded-full p-3'>
                      <MapPin className='h-5 w-5' />
                    </div>
                    <div>
                      <p className='text-fn2 text-sm'>Dirección</p>
                      <p className='text-fn1 font-semibold'>{user.address}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Actividad reciente */}
            <div className='bg-bg2 border-bg3 rounded-2xl border p-6 shadow-sm'>
              <h2 className='text-fn1 mb-4 text-2xl font-bold'>Actividad Reciente</h2>
              
              <div className='text-fn2 flex items-center justify-center py-12'>
                <div className='text-center'>
                  <Clock className='text-fn3 mx-auto mb-3 h-12 w-12' />
                  <p>No hay actividad reciente</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha - Estadísticas (1/3) */}
          <div className='space-y-6'>
            {/* Estadísticas */}
            <div className='bg-bg2 border-bg3 rounded-2xl border p-6 shadow-sm'>
              <h2 className='text-fn1 mb-4 text-xl font-bold'>Estadísticas</h2>
              
              <div className='space-y-3'>
                <div className='bg-bg1 rounded-xl p-4 text-center'>
                  <Package className='text-tn1 mx-auto mb-2 h-8 w-8' />
                  <div className='text-tn1 text-3xl font-bold'>0</div>
                  <div className='text-fn2 mt-1 text-sm'>Pedidos</div>
                </div>

                <div className='bg-bg1 rounded-xl p-4 text-center'>
                  <Heart className='text-tn1 mx-auto mb-2 h-8 w-8' />
                  <div className='text-tn1 text-3xl font-bold'>0</div>
                  <div className='text-fn2 mt-1 text-sm'>Favoritos</div>
                </div>

                <div className='bg-bg1 rounded-xl p-4 text-center'>
                  <DollarSign className='text-tn1 mx-auto mb-2 h-8 w-8' />
                  <div className='text-tn1 text-3xl font-bold'>S/ 0</div>
                  <div className='text-fn2 mt-1 text-sm'>Total Gastado</div>
                </div>
              </div>
            </div>

            {/* Acciones rápidas */}
            <div className='bg-bg2 border-bg3 rounded-2xl border p-6 shadow-sm'>
              <h2 className='text-fn1 mb-4 text-xl font-bold'>Acciones</h2>
              
              <div className='space-y-2'>
                <button className='hover:bg-bg3 text-fn1 w-full rounded-lg p-3 text-left transition-colors'>
                  <div className='flex items-center gap-3'>
                    <Package className='h-5 w-5' />
                    <span className='font-medium'>Mis Pedidos</span>
                  </div>
                </button>

                <button className='hover:bg-bg3 text-fn1 w-full rounded-lg p-3 text-left transition-colors'>
                  <div className='flex items-center gap-3'>
                    <Heart className='h-5 w-5' />
                    <span className='font-medium'>Favoritos</span>
                  </div>
                </button>

                <button className='hover:bg-bg3 text-fn1 w-full rounded-lg p-3 text-left transition-colors'>
                  <div className='flex items-center gap-3'>
                    <MapPin className='h-5 w-5' />
                    <span className='font-medium'>Direcciones</span>
                  </div>
                </button>

                <button className='hover:bg-bg3 text-fn1 w-full rounded-lg p-3 text-left transition-colors'>
                  <div className='flex items-center gap-3'>
                    <Settings className='h-5 w-5' />
                    <span className='font-medium'>Configuración</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}