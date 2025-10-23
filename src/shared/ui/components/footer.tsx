'use client'

import NAVIGATION from '@/shared/config/constants/navLinks'
import Button from '@/shared/ui/components/Button'
import Logo from '@/shared/ui/components/Logo'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-bg2 text-fn2 border-bg3 border-t'>
      <div className='mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-10 md:grid-cols-3'>
        <div className='flex flex-col gap-2.5'>
          <Logo size={50} />
          <h2 className='text-h1 text-fn1 font-bold'>Ñami Ñami</h2>
          <p className='text-fn2 max-w-[250px]'>
            Plataforma para digitalizar restaurantes locales en Lima con un buscador inteligente de IA.
          </p>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='text-fn1 font-semibold tracking-wide uppercase'>Navegación</h3>
          <ul>
            {NAVIGATION.globals.map(item => {
              if (item?.exclude) return
              return (
                <li key={`${item.href}-footer`}>
                  <Link href={item.href} className='hover:text-tn1 transition'>
                    <Button asClass className='pl-0'>
                      <item.icon />
                      <span>{item.label}</span>
                    </Button>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <div>
          <h3 className='text-fn1 font-semibold tracking-wide uppercase'>Contacto</h3>
          <ul className='mt-3 space-y-2'>
            <li>
              <span className='font-semibold'>Email:</span> soporte@naminyami.com
            </li>
            <li>
              <span className='font-semibold'>Teléfono:</span> +51 999 123 456
            </li>
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
