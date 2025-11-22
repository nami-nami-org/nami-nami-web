'use client'

import { CheckCircle2 } from 'lucide-react'
import { useEffect, useState } from 'react'

interface PaymentSuccessModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function PaymentSuccessModal({ isOpen, onClose }: PaymentSuccessModalProps) {
  const [showCheck, setShowCheck] = useState(false)
  const [orderNumber, setOrderNumber] = useState('')

  useEffect(() => {
    if (isOpen) {
      // Generar el número de orden solo en el cliente
      setOrderNumber(`#NN-${Date.now().toString().slice(-6)}`)
      setTimeout(() => setShowCheck(true), 100)
    } else {
      setShowCheck(false)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* Overlay oscuro */}
      <div 
        className='fixed inset-0 z-50 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200'
        onClick={onClose}
      />

      {/* Modal */}
      <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
        <div 
          className='bg-bg1 relative w-full max-w-md rounded-3xl p-8 shadow-2xl animate-in zoom-in-95 duration-300'
          onClick={(e) => e.stopPropagation()}
        >
          {/* Animación del check */}
          <div className='mb-6 flex justify-center'>
            <div
              className={`bg-green-500/20 flex h-32 w-32 items-center justify-center rounded-full transition-all duration-500 ${
                showCheck ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-180 opacity-0'
              }`}
            >
              <CheckCircle2 
                className='text-green-500 h-20 w-20 animate-in spin-in-180 duration-700' 
                strokeWidth={2.5}
              />
            </div>
          </div>

          {/* Texto */}
          <div className='text-center'>
            <h2 className='text-fn1 mb-3 text-2xl font-bold'>¡Pago Exitoso! 🎉</h2>
            <p className='text-fn2 mb-6 leading-relaxed'>
              Tu pedido ha sido confirmado correctamente. Recibirás un correo de confirmación en breve.
            </p>

            {/* Detalles adicionales */}
            {orderNumber && (
              <div className='bg-bg2 border-bg3 mb-6 rounded-xl border p-4'>
                <div className='flex items-center justify-between text-sm'>
                  <span className='text-fn2'>Número de Orden</span>
                  <span className='text-fn1 font-mono font-semibold'>{orderNumber}</span>
                </div>
              </div>
            )}

            {/* Botón */}
            <button
              onClick={onClose}
              className='bg-tn1 hover:bg-tn1/90 text-fnA w-full rounded-xl py-3.5 font-semibold transition-all hover:shadow-lg active:scale-[0.98]'
            >
              Entendido
            </button>
          </div>

          {/* Confetti decorativo */}
          <div className='pointer-events-none absolute inset-0 overflow-hidden rounded-3xl'>
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className='bg-tn1 absolute h-2 w-2 rounded-full opacity-50 animate-in fade-in slide-in-from-top duration-1000'
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `-10px`,
                  animationDelay: `${Math.random() * 500}ms`,
                  animationDuration: `${1000 + Math.random() * 1000}ms`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}