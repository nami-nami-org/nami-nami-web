import { Minus, Plus, Trash2 } from 'lucide-react'
import Image from 'next/image'

interface CartItem {
  id: number
  name: string
  description: string
  time: string
  price: number
  quantity: number
  image: string
}

interface Props {
  cartItems: CartItem[]
  updateQuantity: (id: number, delta: number) => void
  removeItem: (id: number) => void
}

export default function CartItemsList({ cartItems, updateQuantity, removeItem }: Props) {
  return (
    <div>
      <div className='mb-6 flex items-center justify-between'>
        <h2 className='text-h2 font-bold'>Tus Platillos</h2>
        <span className='text-fn2 bg-bg2 rounded-full px-4 py-2 font-medium'>
          {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
        </span>
      </div>

      <div className='space-y-4'>
        {cartItems.map(item => (
          <div
            key={item.id}
            className='bg-bg2 hover:border-tn2 flex gap-6 rounded-2xl border border-transparent p-6 shadow-sm transition-all hover:shadow-md'
          >
            <Image
              src={item.image || '/placeholder.svg'}
              alt={item.name}
              className='h-28 w-28 flex-shrink-0 rounded-xl object-cover'
            />
            <div className='flex-1'>
              <div className='mb-2 flex items-start justify-between gap-4'>
                <div>
                  <h3 className='text-fn1 mb-1 text-lg font-bold'>{item.name}</h3>
                  <p className='text-fn2 mb-1 text-sm'>{item.description}</p>
                  <p className='text-fn2 flex items-center gap-1 text-xs'>
                    <span className='bg-tn1 inline-block h-1.5 w-1.5 rounded-full'></span>
                    {item.time}
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className='text-fn2 hover:text-tn1 hover:bg-bg3 rounded-lg p-2 transition-colors'
                >
                  <Trash2 className='h-5 w-5' />
                </button>
              </div>
              <div className='mt-4 flex items-center justify-between'>
                <div className='bg-bg1 border-bg3 flex items-center gap-3 rounded-xl border px-3 py-2'>
                  <button onClick={() => updateQuantity(item.id, -1)} className='text-fn1 hover:text-tn1 p-1 transition-colors'>
                    <Minus className='h-4 w-4' />
                  </button>
                  <span className='min-w-[24px] text-center font-bold'>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className='text-fn1 hover:text-tn1 p-1 transition-colors'>
                    <Plus className='h-4 w-4' />
                  </button>
                </div>
                <span className='text-tn1 text-xl font-bold'>S/ {(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
