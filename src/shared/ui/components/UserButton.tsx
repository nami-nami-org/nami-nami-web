'use client'

import useSessionStore from '@/core/store/useSession'
import { UserIcon } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

import Button from './Button'

const UserButton: FC = () => {
  const user = useSessionStore(s => s.user)
  return (
    <>
      {user && <p>{user.name}</p>}
      {!user && (
        <Link href='/login'>
          <Button asClass variant='active'>
            <UserIcon />
            <h4 className='text-fnA block'>Iniciar sesión</h4>
          </Button>
        </Link>
      )}
    </>
  )
}

export default UserButton
