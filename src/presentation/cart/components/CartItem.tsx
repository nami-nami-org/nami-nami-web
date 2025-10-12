'use client'

import Button from '@/shared/ui/components/Button'
import useCartStore, { CartItem as CartItemType } from '@/shared/store/useCartStore'
import { Image } from '@unpic/react/nextjs'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { FC } from 'react'

interface CartItemProps {
  item: CartItemType
}

const CartItem: FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCartStore()

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1)
  }

  const handleDecrement = () => {
    updateQuantity(item.id, item.quantity - 1)
  }

  const handleRemove = () => {
    removeItem(item.id)
  }

  return (
    <div className='border-bg3 flex gap-4 border-b pb-4 last:border-b-0'>
      <div className='relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg'>
        <Image src={item.image} alt={item.name} layout='fullWidth' className='h-full w-full object-cover' />
      </div>

      <div className='flex flex-1 flex-col justify-between'>
        <div className='flex justify-between'>
          <div>
            <h4 className='text-fn1 font-semibold'>{item.name}</h4>
            <p className='text-tn1 font-bold'>S/ {item.price.toFixed(2)}</p>
          </div>
          <Button variant='transparent' onClick={handleRemove} className='hover:text-red-500 p-1'>
            <Trash2 className='h-4 w-4' />
          </Button>
        </div>

        <div className='flex items-center justify-between'>
          <div className='bg-bg3 flex items-center gap-2 rounded-lg p-1'>
            <button
              onClick={handleDecrement}
              className='hover:bg-bg1 flex h-8 w-8 items-center justify-center rounded transition'
            >
              <Minus className='h-4 w-4' />
            </button>
            <span className='text-fn1 w-8 text-center font-semibold'>{item.quantity}</span>
            <button
              onClick={handleIncrement}
              className='hover:bg-bg1 flex h-8 w-8 items-center justify-center rounded transition'
            >
              <Plus className='h-4 w-4' />
            </button>
          </div>
          <span className='text-fn1 font-bold'>S/ {(item.price * item.quantity).toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}

export default CartItem
