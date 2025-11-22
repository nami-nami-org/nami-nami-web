'use client'

import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

interface CartHeaderProps {
  /** 1 = Mi Carrito, 2 = Pago, 3 = Confirmación */
  activeStep?: number
}

export default function CartHeader({ activeStep = 1 }: CartHeaderProps) {
  const steps = ['Mi Carrito', 'Pago', 'Confirmación']

  return (
    <header className='bg-bg2 border-bg3 border-b px-4 py-6 shadow-sm md:px-8'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-6 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='bg-tn1 flex h-10 w-10 items-center justify-center rounded-full'>
              <ShoppingCart className='text-fnA h-5 w-5' />
            </div>
            <h1 className='text-h1 font-bold'>Mi Carrito</h1>
          </div>

          <Link href='/' className='text-fn2 hover:text-tn1 font-medium transition-colors'>
            Volver
          </Link> 
        </div>

        {/* Progreso */}
        <div className='flex items-center justify-center gap-4'>
          {steps.map((step, i) => {
            const stepNumber = i + 1
            const isActive = stepNumber === activeStep

            return (
              <div key={i} className='flex items-center gap-3'>
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition-all ${
                    isActive ? 'bg-tn1 text-fnA scale-110' : 'bg-bg3 text-fn2 opacity-75'
                  }`}
                >
                  {stepNumber}
                </div>

                <span className={`font-semibold transition-colors ${isActive ? 'text-tn1' : 'text-fn2'}`}>{step}</span>

                {i < steps.length - 1 && <div className='bg-bg3 h-0.5 w-16'></div>}
              </div>
            )
          })}
        </div>
      </div>
    </header>
  )
}
