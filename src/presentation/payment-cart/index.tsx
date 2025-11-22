'use client'

import { useCartStore } from '@/core/store/shopping-cart.store'
import { AlertCircle, CheckCircle2, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function CarritoPage() {
  const { items: cartItems } = useCartStore()

  // Cálculos del pedido
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const igv = subtotal * 0.18
  const shippingCost = 5.0
  const discountAmount = 0
  const total = subtotal + igv + shippingCost - discountAmount

  return (
    <div className='bg-bg1 min-h-screen py-6'>
      <div className='mx-auto max-w-2xl px-4'>
        <div className='bg-bg2 border-bg3 overflow-hidden rounded-2xl border shadow-lg'>
          {/* Encabezado compacto */}
          <div className='bg-tn1 px-6 py-4'>
            <div className='flex items-center gap-3'>
              <div className='bg-white/20 flex h-10 w-10 items-center justify-center rounded-xl'>
                <ShoppingCart className='text-fnA h-5 w-5' />
              </div>
              <div>
                <h1 className='text-fnA text-lg font-bold'>Resumen del Pedido</h1>
                <p className='text-fnA/80 text-xs'>Detalle completo de tu compra</p>
              </div>
            </div>
          </div>

          <div className='p-6'>
            {/* Lista de productos compacta */}
            <div className='mb-6 space-y-3'>
              <h3 className='text-fn1 mb-3 text-sm font-semibold'>Productos ({cartItems.length})</h3>
              {cartItems.map(item => (
                <div key={item.id} className='bg-bg1 border-bg3 rounded-lg border p-3'>
                  <div className='flex items-start justify-between gap-3'>
                    <div className='flex-1'>
                      <p className='text-fn1 mb-1 text-sm font-semibold'>{item.name}</p>
                      <p className='text-fn2 mb-2 text-xs leading-relaxed'>{item.description}</p>
                      <div className='bg-bg2 text-fn2 inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium'>
                        <span>Cantidad:</span>
                        <span className='text-tn1 font-bold'>{item.quantity}</span>
                      </div>
                    </div>
                    <div className='text-right'>
                      <p className='text-fn2 mb-0.5 text-xs'>Precio</p>
                      <p className='text-tn1 text-base font-bold'>S/ {(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Totales compactos */}
            <div className='border-bg3 mb-5 space-y-3 rounded-xl border p-4'>
              <div className='flex items-center justify-between'>
                <span className='text-fn2 text-xs'>Subtotal</span>
                <span className='text-fn1 text-sm font-semibold'>S/ {subtotal.toFixed(2)}</span>
              </div>

              <div className='bg-tn1/10 border-tn1/30 flex items-center justify-between rounded-lg border px-3 py-2'>
                <div>
                  <span className='text-fn1 block text-xs font-medium'>IGV (18%)</span>
                  <span className='text-fn2 text-[10px]'>Impuesto incluido</span>
                </div>
                <span className='text-tn1 text-sm font-bold'>S/ {igv.toFixed(2)}</span>
              </div>

              <div className='flex items-center justify-between'>
                <span className='text-fn2 text-xs'>Costo de Envío</span>
                <span className='text-fn1 text-sm font-semibold'>S/ {shippingCost.toFixed(2)}</span>
              </div>

              {discountAmount > 0 && (
                <div className='bg-green-500/10 border-green-500/30 flex items-center justify-between rounded-lg border px-3 py-2'>
                  <span className='text-green-600 dark:text-green-400 text-xs font-medium'>Descuento Aplicado</span>
                  <span className='text-green-600 dark:text-green-400 text-sm font-bold'>- S/ {discountAmount.toFixed(2)}</span>
                </div>
              )}
            </div>

            {/* Total final compacto */}
            <div className='bg-tn1/10 border-tn1/30 mb-5 rounded-xl border p-5'>
              <div className='flex items-end justify-between'>
                <div>
                  <p className='text-fn2 mb-1 text-xs font-medium'>Monto Total a Pagar</p>
                  <p className='text-tn1 text-3xl font-bold'>S/ {total.toFixed(2)}</p>
                </div>
                <div className='bg-tn1/20 rounded-lg px-3 py-1.5'>
                  <p className='text-tn1 text-[10px] font-semibold'>INC. IGV</p>
                </div>
              </div>
            </div>

            {/* Botón enlazado a confirmation-cart */}
            <Link 
              href="/confirmation-cart"
              className='bg-tn1 hover:bg-tn1/90 text-fnA mb-5 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-base font-bold shadow-md transition-all hover:shadow-lg active:scale-[0.98]'
            >
              <CheckCircle2 className='h-5 w-5' />
              <span>Procesar Pago</span>
            </Link>

            {/* Nota informativa compacta */}
            <div className='bg-blue-500/10 border-blue-500/30 flex gap-3 rounded-xl border p-4'>
              <AlertCircle className='text-blue-600 dark:text-blue-400 mt-0.5 h-5 w-5 flex-shrink-0' />
              <div>
                <p className='text-fn1 mb-0.5 text-xs font-semibold'>Información importante</p>
                <p className='text-fn2 text-[11px] leading-relaxed'>
                  Al procesar, serás redirigido a la página de pago seguro donde podrás ingresar los datos de tu tarjeta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}