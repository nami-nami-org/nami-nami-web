import { bowlChopsticks } from '@lucide/lab'
import { ChefHatIcon, Home as HomeIcon, Icon, SaladIcon } from 'lucide-react'

const NAVIGATION = {
  globals: [
    { href: '/', label: 'Inicio', icon: HomeIcon, exclude: true },
    { href: '/dishes', label: 'Platillos', icon: () => <Icon iconNode={bowlChopsticks} /> },
    { href: '/restaurants', label: 'Restaurantes', icon: ChefHatIcon },
    { href: '/veganos', label: 'Veganos', icon: SaladIcon }
  ]
}

export default NAVIGATION
