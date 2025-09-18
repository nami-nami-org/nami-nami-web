'use client'

import { LoaderIcon } from 'lucide-react'
import dynamic from 'next/dynamic'

const ThemeChanger = dynamic(() => import('./ThemeChanger'), {
  ssr: false,
  loading: () => {
    return (
      <div className='flex items-center justify-center p-2.5'>
        <LoaderIcon className='text-fn2 animate-spin' />
      </div>
    )
  }
})

export default ThemeChanger
