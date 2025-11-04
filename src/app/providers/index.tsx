import { cookies } from 'next/headers'
import type { FC, PropsWithChildren } from 'react'

import ReactQueryProvider from './ReactQueryProvider'
import SessionProvider from './SessionProvider'

const Providers: FC<PropsWithChildren> = async ({ children }) => {
  const cookieStore = await cookies()
  const token = cookieStore.get('Nami_Auth_Session')

  return (
    <ReactQueryProvider>
      <SessionProvider token={token} />
      {children}
    </ReactQueryProvider>
  )
}

export default Providers
