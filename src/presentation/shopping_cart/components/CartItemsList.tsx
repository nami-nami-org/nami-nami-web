import { Image } from '@unpic/react'
import { Trash2 } from 'lucide-react'

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
              width={112} // 28 * 4 = 112px
              height={112}
              className='h-28 w-28 flex-shrink-0 rounded-xl object-cover'
            />
            <div className='flex-1'>
              <div className='mb-2 flex items-start justify-between gap-4'>
                <div>
                  <h3 className='font-semibold'>{item.name}</h3>
                  <p className='text-fn2'>{item.description}</p>
                  <span className='text-xs text-fn2'>Tiempo: {item.time} min</span>
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
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className='text-tn1 font-bold px-2'
                  >
                    -
                  </button>
                  <span className='font-semibold'>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className='text-tn1 font-bold px-2'
                  >
                    +
                  </button>
                </div>
                <span className='text-tn1 text-xl font-bold'>S/ {item.price.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}