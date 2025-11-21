import type { Product } from '@/core/store/shopping-cart.store'
import { Trash2 } from 'lucide-react'

interface CartItemsListProps {
  cartItems: Product[] // ✅ Cambiar de CartItem[] a Product[]
  updateQuantity: (id: number, delta: number) => void
  removeItem: (id: number) => void
}

export default function CartItemsList({
  cartItems,
  updateQuantity,
  removeItem
}: CartItemsListProps) {
  if (cartItems.length === 0) {
    return (
      <div className='bg-bg2 border-bg3 rounded-2xl border p-12 text-center'>
        <p className='text-fn2 text-lg'>Tu carrito está vacío</p>
        <p className='text-fn3 mt-2 text-sm'>Agrega algunos platillos deliciosos</p>
      </div>
    )
  }

  return (
    <div className='space-y-4'>
      <h2 className='text-fn1 mb-4 text-2xl font-bold'>
        Tus Platillos ({cartItems.length})
      </h2>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className='bg-bg2 border-bg3 group rounded-xl border p-4 transition-all hover:shadow-md'
        >
          <div className='flex items-start gap-4'>
            {/* Imagen del producto */}
            <div className='bg-bg3 h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg'>
              <img
                src={item.image}
                alt={item.name}
                className='h-full w-full object-cover'
              />
            </div>

            {/* Información del producto */}
            <div className='flex flex-1 flex-col justify-between'>
              <div>
                <h3 className='text-fn1 mb-1 text-lg font-semibold'>{item.name}</h3>
                <p className='text-fn2 mb-2 text-sm'>{item.description}</p>
                <p className='text-fn2 text-xs'>⏱️ Tiempo: {item.time} min</p>
              </div>

              {/* Controles de cantidad y precio */}
              <div className='mt-3 flex items-center justify-between'>
                {/* Control de cantidad */}
                <div className='bg-bg1 border-bg3 flex items-center gap-2 rounded-lg border px-3 py-1.5'>
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className='text-tn1 hover:text-tn1/80 font-bold transition-colors'
                  >
                    −
                  </button>
                  <span className='text-fn1 min-w-[2ch] text-center font-semibold'>
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className='text-tn1 hover:text-tn1/80 font-bold transition-colors'
                  >
                    +
                  </button>
                </div>

                {/* Precio y botón eliminar */}
                <div className='flex items-center gap-4'>
                  <p className='text-tn1 text-xl font-bold'>
                    S/ {(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className='text-fn2 hover:text-red-500 transition-colors'
                  >
                    <Trash2 className='h-5 w-5' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}