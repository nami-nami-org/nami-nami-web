import Nav from '@/shared/ui/components/Nav'
import type { FC, ReactNode } from 'react'

interface Props {
  children?: ReactNode | ReactNode[]
}

const Home: FC<Props> = ({}) => {
  return (
    <main className='h-dvh w-dvw flex-col items-center'>
      <Nav />

      <p>Home</p>
    </main>
  )
}

export default Home
