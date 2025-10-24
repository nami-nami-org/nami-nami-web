'use client'

import Button from '@/shared/ui/components/Button'
import { CreditCard } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface Props {
  subtotal: number
  envio: number
  servicio: number
  total: number
}

export default function OrderSummary({ subtotal, envio, servicio, total }: Props) {
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

      <Link href='/payment-cart'>
        <button className='bg-tn1 text-fnA mb-3 w-full rounded-xl py-4 text-lg font-bold shadow-md transition-opacity hover:opacity-90'>
          Procesar Pago
        </button>
      </Link>

      <button className='border-tn1 text-tn1 hover:bg-tn1 hover:text-fnA w-full rounded-xl border-2 py-4 font-bold transition-all'>
        Descuento (NUEVO)
      </button>

      <p className='text-fn2 mt-4 text-center text-xs leading-relaxed'>Al procesar, aceptas nuestros términos y condiciones</p>
    </div>
  )
}
