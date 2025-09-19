'use client'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { LaptopIcon, MoonStarIcon, SunDimIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState } from 'react'

import Button from '../Button'

type Theme = {
  id: string
  name: string
  icon: React.ComponentType<{ className?: string }>
}

const themes: Theme[] = [
  { id: 'light', name: 'Claro', icon: SunDimIcon },
  { id: 'dark', name: 'Oscuro', icon: MoonStarIcon },
  { id: 'system', name: 'Sistema', icon: LaptopIcon }
]

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()
  const [selectedTheme, setSelectedTheme] = useState<Theme>(themes.find(t => t.id === theme) || themes[1])

  const handleThemeChange = (newTheme: Theme) => {
    setSelectedTheme(newTheme)
    setTheme(newTheme.id)
  }

  return (
    <div className='w-fit text-right'>
      <Menu>
        <MenuButton as={Button} variant='normal'>
          <selectedTheme.icon />
        </MenuButton>
        <MenuItems anchor='bottom end' className='bg-bg2 w-32 origin-bottom-right rounded-md p-1 shadow-lg focus:outline-none'>
          {themes.map(t => (
            <MenuItem key={t.id}>
              <Button onClick={() => handleThemeChange(t)} className={`w-full ${selectedTheme.id === t.id ? 'bg-bg3' : ''}`}>
                <t.icon className='text-fn1 h-4 w-4' />
                <h4 className='text-fn2'>{t.name}</h4>
              </Button>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  )
}

export default ThemeChanger
