'use client'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { LaptopIcon, MoonStarIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState } from 'react'

import Button from '../Button'

type Theme = {
  id: string
  name: string
  icon: React.ComponentType<{ className?: string }>
}

const themes: Theme[] = [
  { id: 'light', name: 'Claro', icon: SunIcon },
  { id: 'dark', name: 'Oscuro', icon: MoonStarIcon },
  { id: 'system', name: 'Sistema', icon: LaptopIcon }
]

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()
  const [selectedTheme, setSelectedTheme] = useState<Theme>(themes.find(t => t.id === theme) || themes[0])

  const handleThemeChange = (newTheme: Theme) => {
    setSelectedTheme(newTheme)
    setTheme(newTheme.id)
  }

  return (
    <div className='relative text-right'>
      <Menu>
        <MenuButton as={Button}>
          <selectedTheme.icon />
        </MenuButton>

        <MenuItems
          anchor='bottom end'
          className='bg-bg1 border-bg3 mt-5 w-64 origin-top-right overflow-hidden rounded-xl border shadow-xl outline-none'
        >
          <div className='bg-bg3 flex items-center justify-between px-4 py-3'>
            <h3 className='font-semibold tracking-wide'>🎨 Tema</h3>
          </div>

          <div className='space-y-2 p-3'>
            {themes.map(t => (
              <MenuItem key={t.id}>
                <Button
                  onClick={() => handleThemeChange(t)}
                  className={`w-full hover:scale-100 ${selectedTheme.id === t.id ? 'bg-bg3 font-medium' : 'hover:bg-bg2'}`}
                >
                  <t.icon className='h-5 w-5' />
                  <p className='text-fn2'>{t.name}</p>
                </Button>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>
    </div>
  )
}

export default ThemeChanger
