import { AlertCircle, CheckCircle2 } from 'lucide-react'
import type { Product } from '@/core/store/shopping-cart.store'
import { useState } from 'react'
import PaymentSuccessModal from '@/presentation/confirmation-cart/components/PaymentsSucessModal'

interface OrderSummaryConfirmationProps {
  cartItems: Product[]
  subtotal: number
  igv: number
  shippingCost: number
  total: number
  isProcessing: boolean
  onConfirmPayment: () => void
}

export default function OrderSummaryConfirmation({
  cartItems,
  subtotal,
  igv,
  shippingCost,
  total,
  isProcessing,
  onConfirmPayment
}: OrderSummaryConfirmationProps) {
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handlePaymentClick = () => {
    setShowSuccessModal(true)
    // Llamar a la función original después de mostrar el modal
    setTimeout(() => {
      onConfirmPayment()
    }, 2500) // Espera 2.5 segundos antes de ejecutar la acción original
  }

  return (
    <>
      <div className='bg-bg2 border-bg3 h-fit rounded-2xl border shadow-lg'>
        {/* Header */}
        <div className='bg-tn1 px-6 py-4'>
          <h2 className='text-fnA text-lg font-bold'>Resumen del Pedido</h2>
        </div>

        <div className='p-6'>
          {/* Productos */}
          <div className='mb-6 space-y-3'>
            <h3 className='text-fn1 mb-3 text-sm font-semibold'>Productos ({cartItems.length})</h3>
            {cartItems.map(item => (
              <div key={item.id} className='border-bg3 flex items-start justify-between border-b pb-3 last:border-0'>
                <div className='flex-1'>
                  <p className='text-fn1 mb-1 text-sm font-semibold'>{item.name}</p>
                  <p className='text-fn2 text-xs'>Cantidad: {item.quantity}</p>
                </div>
                <p className='text-tn1 text-sm font-bold'>S/ {(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>

          {/* Totales */}
          <div className='border-bg3 mb-6 space-y-2 border-t pt-4'>
            <div className='flex justify-between text-sm'>
              <span className='text-fn2'>Subtotal</span>
              <span className='text-fn1 font-semibold'>S/ {subtotal.toFixed(2)}</span>
            </div>
            <div className='flex justify-between text-sm'>
              <span className='text-fn2'>IGV (18%)</span>
              <span className='text-fn1 font-semibold'>S/ {igv.toFixed(2)}</span>
            </div>
            <div className='flex justify-between text-sm'>
              <span className='text-fn2'>Envío</span>
              <span className='text-fn1 font-semibold'>S/ {shippingCost.toFixed(2)}</span>
            </div>
          </div>

          {/* Total */}
          <div className='bg-tn1/10 border-tn1/30 mb-6 rounded-lg border p-4'>
            <div className='flex items-center justify-between'>
              <span className='text-fn1 font-semibold'>Total a Pagar</span>
              <span className='text-tn1 text-2xl font-bold'>S/ {total.toFixed(2)}</span>
            </div>
          </div>

          {/* Botón de confirmación */}
          <button
            onClick={handlePaymentClick}
            disabled={isProcessing}
            className='bg-tn1 hover:bg-tn1/90 disabled:bg-fn2 text-fnA flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-base font-bold shadow-md transition-all hover:shadow-lg active:scale-[0.98] disabled:cursor-not-allowed'
          >
            {isProcessing ? (
              <>
                <div className='h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent'></div>
                <span>Procesando...</span>
              </>
            ) : (
              <>
                <CheckCircle2 className='h-5 w-5' />
                <span>Confirmar Pago</span>
              </>
            )}
          </button>

          {/* Nota informativa */}
          <div className='bg-blue-500/10 border-blue-500/30 mt-4 flex gap-2 rounded-lg border p-3'>
            <AlertCircle className='text-blue-600 dark:text-blue-400 mt-0.5 h-4 w-4 flex-shrink-0' />
            <p className='text-fn2 text-xs leading-relaxed'>
              Al confirmar, aceptas nuestros términos y condiciones
            </p>
          </div>
        </div>
      </div>

      {/* Modal de éxito */}
      <PaymentSuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
      />
    </>
  )
}