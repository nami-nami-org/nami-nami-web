'use client'

import { LaptopIcon, MoonStarIcon, SunDimIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className='bg-bg2 flex items-center space-x-1 rounded-md p-1.5 shadow-sm'>
      <button
        onClick={() => setTheme('light')}
        className={`rounded-md p-1.5 transition-colors duration-300 ${theme === 'light' ? 'bg-bg3' : 'bg-transparent'}`}
        aria-label='Cambiar a modo claro'
      >
        <SunDimIcon className='text-fn1' />
      </button>

      <button
        onClick={() => setTheme('dark')}
        className={`rounded-md p-1.5 transition-colors duration-300 ${theme === 'dark' ? 'bg-bg3' : 'bg-transparent'}`}
        aria-label='Cambiar a modo oscuro'
      >
        <MoonStarIcon className='text-fn1' />
      </button>

      <button
        onClick={() => setTheme('system')}
        className={`rounded-md p-1.5 transition-colors duration-300 ${theme === 'system' ? 'bg-bg3' : 'bg-transparent'}`}
        aria-label='Cambiar a modo del sistema'
      >
        <LaptopIcon className='text-fn1' />
      </button>
    </div>
  )
}

export default ThemeChanger
