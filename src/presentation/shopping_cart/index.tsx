'use client'

import { useCartStore } from '@/core/store/shopping-cart.store'
import { useState } from 'react'

import CartHeader from './components/CartHeader'
import CartItemsList from './components/CartItemsList'
import DiscountSection from './components/DiscountSection'
import OrderSummary from './components/OrderSummary'
import PaymentMethods from './components/PaymentMethods'
import RecommendedDishes from './components/RecommendedDishes'

export default function ShoppingCartPage() {
  const { items, addToCart, decreaseQuantity, removeFromCart, getTotal } = useCartStore()

  const [discountCode, setDiscountCode] = useState('')
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null)

  const updateQuantity = (id: number, delta: number) => {
    if (delta > 0) {
      const product = items.find(item => item.id === id)
      if (product) addToCart(product)
    } else {
      decreaseQuantity(id)
    }
  }

  const removeItem = (id: number) => {
    removeFromCart(id)
  }

  const subtotal = getTotal()
  const shippingCost = 4.4
  const serviceFee = 2.0
  const total = subtotal + shippingCost - serviceFee

  return (
    <div className='bg-bg1 min-h-screen'>
      <main className='mx-auto max-w-7xl px-4 py-12 md:px-8'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-[1fr_400px]'>
          <div className='space-y-8'>
            <CartItemsList cartItems={items} updateQuantity={updateQuantity} removeItem={removeItem} />
            <DiscountSection discountCode={discountCode} setDiscountCode={setDiscountCode} />
            <RecommendedDishes />
          </div>

          <div className='space-y-6'>
            <OrderSummary subtotal={subtotal} envio={shippingCost} servicio={serviceFee} total={total} />
            <PaymentMethods selectedPayment={selectedPayment} setSelectedPayment={setSelectedPayment} />
          </div>
        </div>
      </main>
    </div>
  )
}
