import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

interface CartHeaderProps {
  activeStep?: number
  pathname?: string
}

export default function CartHeader({ activeStep = 1, pathname = '/shopping-cart' }: CartHeaderProps) {
  const steps = [
    { label: 'Mi Carrito', path: '/shopping-cart' },
    { label: 'Pago', path: '/payment-cart' },
    { label: 'Confirmación', path: '/confirmation-cart' }
  ]

  const currentStepIndex = steps.findIndex(s => s.path === pathname)
  const computedActiveStep = currentStepIndex !== -1 ? currentStepIndex + 1 : activeStep

  return (
    <header className='border-b px-4 py-6 shadow-sm md:px-8'>
      <div className='mx-auto max-w-7xl'>
        {/* Steps navegables */}
        <div className='flex items-center justify-center gap-4'>
          {steps.map((step, i) => {
            const stepNumber = i + 1
            const isActive = stepNumber === computedActiveStep

            return (
              <div key={i} className='flex items-center gap-3'>
                <Button
                  asChild
                  variant={isActive ? 'default' : 'outline'}
                  className={`h-8 w-8 rounded-full p-0 font-bold transition-all ${isActive ? 'scale-110' : 'opacity-75'}`}
                >
                  <Link href={step.path}>{stepNumber}</Link>
                </Button>

                <Button
                  asChild
                  variant='link'
                  className={`p-0 text-base font-semibold transition-opacity ${isActive ? '' : 'opacity-75'}`}
                >
                  <Link href={step.path}>{step.label}</Link>
                </Button>

                {i < steps.length - 1 && <div className='h-0.5 w-16 border'></div>}
              </div>
            )
          })}
        </div>
      </div>
    </header>
  )
}
