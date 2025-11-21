'use client'

import { CreditCard } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

interface Props {
  subtotal: number
  envio: number
  servicio: number
  total: number
}

export default function OrderSummary({ subtotal, envio, servicio, total }: Props) {
  const router = useRouter()

  const handlePayment = () => {
    router.push('/payment-cart')
  }

  return (
    <div className='bg-bg2 border-bg3 sticky top-6 rounded-2xl border p-8 shadow-md'>
      <h3 className='text-h3 mb-6 flex items-center gap-2 font-bold'>
        <CreditCard className='text-tn1 h-5 w-5' />
        Resumen del Pedido
      </h3>

      <div className='mb-6 space-y-4'>
        <div className='flex items-center justify-between'>
          <span className='text-fn2'>Sub Total</span>
          <span className='text-lg font-semibold'>S/ {subtotal.toFixed(2)}</span>
        </div>

        <div className='flex items-center justify-between'>
          <span className='text-fn2'>Gasto de Envío</span>
          <span className='text-lg font-semibold'>S/ {envio.toFixed(2)}</span>
        </div>

        <div className='text-tn1 flex items-center justify-between'>
          <span className='font-medium'>Descuento de Servicio</span>
          <span className='text-lg font-semibold'>- S/ {servicio.toFixed(2)}</span>
        </div>
      </div>

      <div className='border-bg3 mb-6 border-t-2 pt-6'>
        <div className='flex items-center justify-between'>
          <span className='text-h3 font-bold'>Total</span>
          <span className='text-h2 text-tn1 font-bold'>S/ {total.toFixed(2)}</span>
        </div>
      </div>

      <button
        className='bg-tn1 text-fnA mb-3 w-full rounded-xl py-4 text-lg font-bold shadow-md transition-opacity hover:opacity-90'
        onClick={handlePayment}
      >
        Procesar Pago
      </button>
 

      <p className='text-fn2 mt-4 text-center text-xs leading-relaxed'>Al procesar, aceptas nuestros términos y condiciones</p>
    </div>
  )
}
