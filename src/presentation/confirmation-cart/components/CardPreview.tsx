import { Lock } from 'lucide-react'

interface CardPreviewProps {
  cardNumber: string
  cardHolder: string
  expiryDate: string
}

export default function CardPreview({ cardNumber, cardHolder, expiryDate }: CardPreviewProps) {
  return (
    <div className='bg-tn1 mb-6 rounded-xl p-6 text-white shadow-lg'>
      <div className='mb-8 flex items-start justify-between'>
        <div className='bg-white/20 h-10 w-14 rounded backdrop-blur-sm'></div>
        <Lock className='h-5 w-5 opacity-80' />
      </div>
      <div className='mb-6'>
        <p className='text-fnA/70 mb-1 text-xs'>Número de Tarjeta</p>
        <p className='font-mono text-lg tracking-wider'>
          {cardNumber || '•••• •••• •••• ••••'}
        </p>
      </div>
      <div className='flex items-end justify-between'>
        <div>
          <p className='text-fnA/70 mb-1 text-xs'>Titular</p>
          <p className='text-sm font-semibold uppercase'>
            {cardHolder || 'NOMBRE APELLIDO'}
          </p>
        </div>
        <div className='text-right'>
          <p className='text-fnA/70 mb-1 text-xs'>Vence</p>
          <p className='font-mono text-sm'>
            {expiryDate || 'MM/YY'}
          </p>
        </div>
      </div>
    </div>
  )
}