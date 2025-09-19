import type { FC, ReactNode } from 'react'

interface Props {
  children?: ReactNode | ReactNode[]
}

const Home: FC<Props> = ({}) => {
  return (
    <main className='h-full w-full flex-1'>
      <h1 className='font-instrument text-center italic'>Home</h1>
    </main>
  )
}

export default Home
