'use client'

import { Home, ShoppingBag, User } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const navItems = [
    { label: 'Inicio', icon: <Home size={18} />, path: '/' },
    { label: 'Pedidos', icon: <ShoppingBag size={18} />, path: '/pedidos' },
    { label: 'Perfil', icon: <User size={18} />, path: '/perfil' }
  ]

  return (
    <footer className='bg-bg2 text-fn2 border-bg3 border-t'>
      <div className='mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-10 md:grid-cols-3'>
        <div>
          <h2 className='text-h2 text-fn1 font-bold'>Ñami Ñami</h2>
          <p className='text-fn2 mt-3 text-sm'>
            Plataforma para digitalizar restaurantes locales en Lima con un buscador inteligente de IA.
          </p>
        </div>

        <div>
          <h3 className='text-fn1 text-sm font-semibold tracking-wide uppercase'>Navegación</h3>
          <ul className='mt-3 space-y-2'>
            {navItems.map(item => (
              <li key={item.path}>
                <Link href={item.path} className='hover:text-tn1 flex items-center gap-2 transition'>
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className='text-fn1 text-sm font-semibold tracking-wide uppercase'>Contacto</h3>
          <ul className='mt-3 space-y-2 text-sm'>
            <li>Email: soporte@naminyami.com</li>
            <li>Teléfono: +51 999 123 456</li>
            <li>Lima, Perú</li>
          </ul>
        </div>
      </div>

      <div className='border-bg3 text-fn2 border-t py-4 text-center text-xs'>
        <p>
          © {new Date().getFullYear()} Ñami Ñami. Todos los derechos reservados. <br />
          Proyecto académico — Universidad Tecnológica del Perú.
        </p>
      </div>
    </footer>
  )
}
