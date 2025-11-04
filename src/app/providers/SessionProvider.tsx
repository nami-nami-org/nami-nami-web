'use client'

import { meSessionToken } from '@/core/services/users.service'
import useSessionStore from '@/core/store/useSession'
import { redirect } from 'next/navigation'
import { type FC, type PropsWithChildren, useEffect } from 'react'
import { toast } from 'sonner'

interface Props extends PropsWithChildren {
  token: any
}

const SessionProvider: FC<Props> = ({ children, token }) => {
  const user = useSessionStore(s => s.user)
  const setUser = useSessionStore(s => s.setUser)

  useEffect(() => {
    if (!token?.value || !!user) return
    const fetchSession = async () => {
      try {
        const sessionResponse = await meSessionToken(token)
        if (sessionResponse?.status !== 200) throw new Error('Error al cargar los datos del cliente')

        setUser(sessionResponse.data)
      } catch (e: any) {
        toast.error(e?.message || 'Error al cargar la datos del usuario')
        console.error('Error al obtener sesión en cliente:', e)
        redirect('/login')
      }
    }

    fetchSession()
  }, [setUser, token, user])

  return <>{children}</>
}

export default SessionProvider
