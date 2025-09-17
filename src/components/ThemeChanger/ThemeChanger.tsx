'use client'

import { LaptopIcon, MoonStarIcon, SunDimIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className='bg-bg2 flex items-center space-x-1 rounded-md p-1.5 shadow-sm'>
      {/* Botón para tema claro */}
      <button
        onClick={() => setTheme('light')}
        className={`rounded-md p-1.5 transition-colors duration-300 ${theme === 'light' ? 'bg-bg3' : 'bg-transparent'}`}
        aria-label='Cambiar a modo claro'
      >
        <SunDimIcon size={18} className='text-fn1' />
      </button>

      {/* Botón para tema oscuro */}
      <button
        onClick={() => setTheme('dark')}
        className={`rounded-md p-1.5 transition-colors duration-300 ${theme === 'dark' ? 'bg-bg3' : 'bg-transparent'}`}
        aria-label='Cambiar a modo oscuro'
      >
        <MoonStarIcon size={18} className='text-fn1' />
      </button>

      {/* Botón para tema del sistema */}
      <button
        onClick={() => setTheme('system')}
        className={`rounded-md p-1.5 transition-colors duration-300 ${theme === 'system' ? 'bg-bg3' : 'bg-transparent'}`}
        aria-label='Cambiar a modo del sistema'
      >
        <LaptopIcon size={18} className='text-fn1' />
      </button>
    </div>
  )
}

export default ThemeChanger
