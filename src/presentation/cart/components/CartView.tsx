'use client'

import Button from '@/shared/ui/components/Button'
import useCartStore from '@/shared/store/useCartStore'
import { ShoppingBag, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'
import CartItem from './CartItem'

const CartView: FC = () => {
  const { items, getTotal, getItemCount, clearCart } = useCartStore()
  const total = getTotal()
  const itemCount = getItemCount()
  const deliveryCost = 5.5

  if (items.length === 0) {
    return (
      <div className='flex min-h-[60vh] flex-col items-center justify-center gap-4'>
        <ShoppingBag className='text-fn2 h-24 w-24' />
        <h2 className='text-h2 text-fn1 font-bold'>Tu carrito está vacío</h2>
        <p className='text-fn2'>Agrega algunos platillos deliciosos para comenzar</p>
        <Link href='/'>
          <Button variant='active'>
            <h4>Ver menú</h4>
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-h1 text-fn1 font-bold'>Carrito de Compras</h1>
          <p className='text-fn2'>
            {itemCount} {itemCount === 1 ? 'producto' : 'productos'}
          </p>
        </div>
        <Button variant='border' onClick={clearCart}>
          <Trash2 className='h-4 w-4' />
          <span>Vaciar carrito</span>
        </Button>
      </div>

      <div className='grid gap-6 lg:grid-cols-3'>
        <div className='lg:col-span-2'>
          <div className='bg-bg2 border-bg3 flex flex-col gap-4 rounded-2xl border p-6'>
            {items.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className='lg:col-span-1'>
          <div className='bg-bg2 border-bg3 sticky top-24 flex flex-col gap-4 rounded-2xl border p-6'>
            <h3 className='text-h3 text-fn1 font-bold'>Resumen del Pedido</h3>

            <div className='flex flex-col gap-2'>
              <div className='flex justify-between'>
                <span className='text-fn2'>Subtotal</span>
                <span className='text-fn1 font-semibold'>S/ {total.toFixed(2)}</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-fn2'>Costo de envío</span>
                <span className='text-fn1 font-semibold'>S/ {deliveryCost.toFixed(2)}</span>
              </div>
              <div className='border-bg3 my-2 border-t'></div>
              <div className='flex justify-between'>
                <span className='text-fn1 text-lg font-bold'>Total</span>
                <span className='text-tn1 text-lg font-bold'>S/ {(total + deliveryCost).toFixed(2)}</span>
              </div>
            </div>

            <Link href='/pago' className='w-full'>
              <Button variant='active' className='w-full justify-center'>
                <h4>Proceder al pago</h4>
              </Button>
            </Link>

            <Link href='/'>
              <Button variant='border' className='w-full justify-center'>
                <h4>Continuar comprando</h4>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartView
