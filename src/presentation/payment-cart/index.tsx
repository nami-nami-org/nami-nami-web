'use client'

import { useCartStore } from '@/core/store/shopping-cart.store'
import { AlertCircle, ShoppingCart } from 'lucide-react'
import React from 'react'

export default function CarritoPage() {
  const { items: cartItems } = useCartStore()

  // Estado: carrito vacío
  if (cartItems.length === 0) {
    return (
      <div className='bg-bg1 min-h-screen'>
        <div className='text-fn2 flex flex-col items-center justify-center py-20 text-center'>
          <ShoppingCart className='text-tn1 mb-4 h-12 w-12' />
          <p className='text-lg font-semibold'>Tu carrito está vacío.</p>
          <p className='text-fn3 mt-1 text-sm'>Agrega productos para continuar con el pago.</p>
        </div>
      </div>
    )
  }

  // Cálculos del pedido
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const igv = subtotal * 0.18
  const shippingCost = 5.0
  const discountAmount = 0
  const total = subtotal + igv + shippingCost - discountAmount

  return (
    <div className='bg-bg1 min-h-screen'>
      <div className='flex justify-center px-4 py-10 md:px-8'>
        <div className='bg-bg2 border-bg3 w-full max-w-2xl rounded-2xl border p-8 shadow-lg'>
          {/* Encabezado */}
          <div className='border-bg3 mb-6 flex items-center justify-between border-b pb-6'>
            <div className='flex items-center gap-3'>
              <div className='bg-tn1 flex h-12 w-12 items-center justify-center rounded-full shadow-md'>
                <ShoppingCart className='text-fnA h-6 w-6' />
              </div>
              <div>
                <h1 className='text-h2 text-fn1 font-bold'>Resumen del Pedido</h1>
                <p className='text-fn2 text-sm'>Detalle completo de tu compra</p>
              </div>
            </div>
          </div>

          {/* Productos */}
          <div className='mb-8 space-y-4'>
            {cartItems.map(item => (
              <div key={item.id} className='border-bg3 flex items-start justify-between border-b pb-3'>
                <div className='flex-1'>
                  <p className='text-fn1 font-semibold'>{item.name}</p>
                  <p className='text-fn2 text-xs'>{item.description}</p>
                  <p className='text-fn2 text-xs'>Cantidad: {item.quantity}</p>
                </div>
                <p className='text-tn1 text-sm font-bold'>S/ {(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>

          {/* Totales */}
          <div className='border-bg3 mb-6 space-y-3 border-t pt-4 text-sm'>
            <div className='flex items-center justify-between'>
              <span className='text-fn2'>Subtotal</span>
              <span className='text-fn1 font-semibold'>S/ {subtotal.toFixed(2)}</span>
            </div>

            <div className='bg-tn1/10 border-tn1/20 flex items-center justify-between rounded-lg border px-3 py-2'>
              <span className='text-fn2'>IGV (18%)</span>
              <span className='text-tn1 font-bold'>S/ {igv.toFixed(2)}</span>
            </div>

            <div className='flex items-center justify-between'>
              <span className='text-fn2'>Costo de Envío</span>
              <span className='text-fn1 font-semibold'>S/ {shippingCost.toFixed(2)}</span>
            </div>

            {discountAmount > 0 && (
              <div className='text-tn1 flex items-center justify-between'>
                <span>Descuento</span>
                <span className='font-bold'>- S/ {discountAmount.toFixed(2)}</span>
              </div>
            )}
          </div>

          {/* Total final */}
          <div className='from-tn1/10 to-tn2/10 border-tn1/20 mb-6 rounded-xl border bg-gradient-to-r p-6'>
            <p className='text-fn2 mb-2 text-sm'>Monto Total a Pagar</p>
            <p className='text-h1 text-tn1 font-bold'>S/ {total.toFixed(2)}</p>
          </div>

          {/* Botón principal */}
          <button className='bg-tn1 text-fnA w-full transform rounded-xl py-4 text-lg font-bold shadow-lg transition-opacity duration-200 hover:scale-105 hover:opacity-90 hover:shadow-xl'>
            Confirmar Pedido
          </button>

          {/* Nota */}
          <div className='bg-bg1 border-bg3 mt-6 flex gap-3 rounded-lg border p-4'>
            <AlertCircle className='text-tn1 mt-0.5 h-5 w-5 flex-shrink-0' />
            <p className='text-fn2 text-xs leading-relaxed'>
              Tu pedido ha sido registrado correctamente. Recibirás una confirmación por correo o WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
