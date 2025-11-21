'use client'

import { useCartStore } from '@/core/store/shopping-cart.store'
import { CheckCircle2, CreditCard } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'

import CardForm from './components/CardForm'
import CardPreview from './components/CardPreview'
import OrderSummaryConfirmation from './components/OrderSummaryConfirmation'
import QRPaymentSection from '@/presentation/confirmation-cart/components/QRPaymentSection'
import SecurityNote from './components/SecurityNote'

export default function ConfirmationPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const paymentMethod = searchParams.get('method') // 'tarjeta' o 'qr'
  
  const { items: cartItems, clearCart } = useCartStore()
  const [isProcessing, setIsProcessing] = useState(false)

  // Estado del formulario de tarjeta
  const [cardData, setCardData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
    saveCard: false
  })

  // Cálculos del pedido
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const igv = subtotal * 0.18
  const shippingCost = 5.0
  const total = subtotal + igv + shippingCost

  // Handlers para tarjeta
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, '').replace(/\D/g, '')
    const formatted = value.match(/.{1,4}/g)?.join(' ') || value
    setCardData({ ...cardData, cardNumber: formatted.slice(0, 19) })
  }

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '')
    let formatted = value
    if (value.length >= 2) {
      formatted = value.slice(0, 2) + '/' + value.slice(2, 4)
    }
    setCardData({ ...cardData, expiryDate: formatted.slice(0, 5) })
  }

  const validateForm = () => {
    if (paymentMethod === 'tarjeta') {
      if (cardData.cardNumber.replace(/\s/g, '').length !== 16) {
        toast.error('Número de tarjeta inválido', { description: 'Debe tener 16 dígitos' })
        return false
      }
      if (cardData.cardHolder.trim().length < 3) {
        toast.error('Nombre del titular requerido')
        return false
      }
      if (!/^\d{2}\/\d{2}$/.test(cardData.expiryDate)) {
        toast.error('Fecha de expiración inválida', { description: 'Formato: MM/YY' })
        return false
      }
      if (cardData.cvv.length !== 3) {
        toast.error('CVV inválido', { description: 'Debe tener 3 dígitos' })
        return false
      }
    }
    return true
  }

  const handleConfirmPayment = async () => {
    if (!validateForm()) return

    setIsProcessing(true)

    setTimeout(() => {
      toast.success('¡Pago procesado con éxito!', {
        description: 'Tu pedido ha sido confirmado',
        icon: <CheckCircle2 className='h-5 w-5' />
      })
      clearCart()
      setIsProcessing(false)
      router.push('/')
    }, 2000)
  }

  return (
    <div className='bg-bg1 min-h-screen py-6'>
      <div className='mx-auto max-w-4xl px-4'>
        <div className='grid gap-6 lg:grid-cols-2'>
          {/* Columna izquierda: Método de pago */}
          <div className='bg-bg2 border-bg3 rounded-2xl border shadow-lg'>
            {/* Header */}
            <div className='bg-tn1 px-6 py-4'>
              <div className='flex items-center gap-3'>
                <div className='bg-white/20 flex h-10 w-10 items-center justify-center rounded-xl'>
                  <CreditCard className='text-fnA h-5 w-5' />
                </div>
                <div>
                  <h1 className='text-fnA text-lg font-bold'>
                    {paymentMethod === 'tarjeta' ? 'Información de Pago' : 'Pago con QR'}
                  </h1>
                  <p className='text-fnA/80 text-xs'>
                    {paymentMethod === 'tarjeta' 
                      ? 'Ingresa los datos de tu tarjeta'
                      : 'Escanea el código para pagar'}
                  </p>
                </div>
              </div>
            </div>

            <div className='p-6'>
              {paymentMethod === 'tarjeta' ? (
                <>
                  <CardPreview
                    cardNumber={cardData.cardNumber}
                    cardHolder={cardData.cardHolder}
                    expiryDate={cardData.expiryDate}
                  />
                  <CardForm
                    cardData={cardData}
                    onCardNumberChange={handleCardNumberChange}
                    onCardHolderChange={(value) => setCardData({ ...cardData, cardHolder: value })}
                    onExpiryChange={handleExpiryChange}
                    onCvvChange={(value) => setCardData({ ...cardData, cvv: value })}
                    onSaveCardChange={(checked) => setCardData({ ...cardData, saveCard: checked })}
                  />
                  <SecurityNote />
                </>
              ) : (
                <QRPaymentSection total={total} />
              )}
            </div>
          </div>

          {/* Columna derecha: Resumen del pedido */}
          <OrderSummaryConfirmation
            cartItems={cartItems}
            subtotal={subtotal}
            igv={igv}
            shippingCost={shippingCost}
            total={total}
            isProcessing={isProcessing}
            onConfirmPayment={handleConfirmPayment}
          />
        </div>
      </div>
    </div>
  )
}