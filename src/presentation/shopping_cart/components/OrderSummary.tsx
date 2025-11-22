import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'

interface Props {
  subtotal: number
  envio: number
  servicio: number
  total: number
  selectedPayment: string | null
}

export default function OrderSummary({ subtotal, envio, servicio, total, selectedPayment }: Props) {
  const router = useRouter()

  const handleProcesarPago = () => {
    if (!selectedPayment) {
      toast.error('Selecciona un método de pago', {
        description: 'Debes elegir cómo deseas pagar'
      })
      return
    }

    if (selectedPayment === 'pago-tarjeta') {
      // Redirigir a confirmación con tarjeta
      router.push('/confirmation-cart?method=tarjeta')
    } else if (selectedPayment === 'pago-qr') {
      // Redirigir a confirmación con QR
      router.push('/confirmation-cart?method=qr')
    }
  }

  return (
    <div className='bg-bg2 border-bg3 rounded-2xl border p-6 shadow-md'>
      <h3 className='text-fn1 mb-4 text-xl font-bold'>Resumen del Pedido</h3>

      <div className='space-y-3'>
        <div className='flex items-center justify-between text-sm'>
          <span className='text-fn2'>Subtotal</span>
          <span className='text-fn1 font-semibold'>S/ {subtotal.toFixed(2)}</span>
        </div>

        <div className='flex items-center justify-between text-sm'>
          <span className='text-fn2'>Envío</span>
          <span className='text-fn1 font-semibold'>S/ {envio.toFixed(2)}</span>
        </div>

        <div className='flex items-center justify-between text-sm'>
          <span className='text-fn2'>Servicio</span>
          <span className='text-fn1 font-semibold'>S/ {servicio.toFixed(2)}</span>
        </div>

        <div className='border-bg3 border-t pt-3'>
          <div className='flex items-center justify-between'>
            <span className='text-fn1 text-lg font-bold'>Total</span>
            <span className='text-tn1 text-2xl font-bold'>S/ {total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <button
        onClick={handleProcesarPago}
        disabled={!selectedPayment}
        className='bg-tn1 hover:bg-tn1/90 disabled:bg-fn2 disabled:cursor-not-allowed text-fnA mt-6 w-full rounded-xl py-3.5 font-bold shadow-md transition-all hover:shadow-lg active:scale-[0.98]'
      >
        Procesar Pago
      </button>

      {!selectedPayment && (
        <p className='text-fn2 mt-2 text-center text-xs'>
          Selecciona un método de pago para continuar
        </p>
      )}
    </div>
  )
}