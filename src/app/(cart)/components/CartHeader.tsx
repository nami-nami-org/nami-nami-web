'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function CartHeader() {
  const pathname = usePathname()

  const steps = [
    { label: 'Mi Carrito', path: '/shopping-cart' },
    // { label: 'Resumen de Compra', path: '/payment-cart' },
    { label: 'Metodo de Pago', path: '/confirmation-cart' }
  ]

  return (
    <header className='bg-bg1 border-bg3 border-b px-4 py-6 shadow-sm md:px-8'>
      <div className='mx-auto max-w-7xl'>
        {/* Steps navegables */}
        <div className='flex items-center justify-center gap-4'>
          {steps.map((step, i) => {
            const stepNumber = i + 1
            const isActive = pathname === step.path

            return (
              <div key={i} className='flex items-center gap-3'>
                {/* Número del paso */}
                <Link href={step.path}>
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full font-bold transition-all ${
                      isActive
                        ? 'bg-tn1 text-fnA scale-110 shadow-lg'
                        : 'bg-bg2 text-fn2 hover:bg-bg3'
                    }`}
                  >
                    {stepNumber}
                  </div>
                </Link>

                {/* Label del paso */}
                <Link href={step.path}>
                  <span
                    className={`text-base font-semibold transition-colors ${
                      isActive ? 'text-tn1' : 'text-fn2 hover:text-fn1'
                    }`}
                  >
                    {step.label}
                  </span>
                </Link>

                {/* Línea separadora */}
                {i < steps.length - 1 && (
                  <div
                    className={`h-0.5 w-16 transition-colors ${
                      isActive ? 'bg-tn1' : 'bg-bg3'
                    }`}
                  ></div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </header>
  )
}