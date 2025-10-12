'use client'

import Button from '@/shared/ui/components/Button'
import FormInput from '@/shared/ui/components/FormInput'
import useCartStore from '@/shared/store/useCartStore'
import { CreditCard, Wallet, DollarSign, ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import { toast } from 'sonner'

type PaymentMethod = 'tarjeta' | 'yape' | 'efectivo'

const PaymentView: FC = () => {
  const router = useRouter()
  const { items, getTotal, clearCart } = useCartStore()
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('tarjeta')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')

  const total = getTotal()
  const deliveryCost = 5.5
  const finalTotal = total + deliveryCost

  if (items.length === 0) {
    return (
      <div className='flex min-h-[60vh] flex-col items-center justify-center gap-4'>
        <h2 className='text-h2 text-fn1 font-bold'>No hay productos en el carrito</h2>
        <Link href='/'>
          <Button variant='active'>
            <h4>Ver menú</h4>
          </Button>
        </Link>
      </div>
    )
  }

  const paymentMethods = [
    { id: 'tarjeta' as PaymentMethod, name: 'Tarjeta de Crédito/Débito', icon: CreditCard },
    { id: 'yape' as PaymentMethod, name: 'Yape', icon: Wallet },
    { id: 'efectivo' as PaymentMethod, name: 'Efectivo', icon: DollarSign }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!address || !phone) {
      toast.error('Por favor completa todos los campos')
      return
    }

    const myPromise = new Promise(resolve => {
      setTimeout(() => resolve(true), 1500)
    })

    toast.promise(myPromise, {
      loading: 'Procesando pedido...',
      success: () => {
        clearCart()
        router.push('/')
        return 'Pedido realizado con éxito'
      },
      error: 'Error al procesar el pedido'
    })
  }

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex items-center gap-4'>
        <Link href='/carrito'>
          <Button variant='border'>
            <ChevronLeft className='h-4 w-4' />
          </Button>
        </Link>
        <h1 className='text-h1 text-fn1 font-bold'>Método de Pago</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='grid gap-6 lg:grid-cols-3'>
          <div className='lg:col-span-2'>
            <div className='bg-bg2 border-bg3 flex flex-col gap-6 rounded-2xl border p-6'>
              <div>
                <h3 className='text-h3 text-fn1 mb-4 font-bold'>Información de Entrega</h3>
                <div className='flex flex-col gap-4'>
                  <FormInput
                    type='text'
                    label='Dirección de Entrega'
                    placeholder='Av. Ejemplo 123, Distrito, Lima'
                    required
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                  />
                  <FormInput
                    type='tel'
                    label='Teléfono de Contacto'
                    placeholder='+51 999 999 999'
                    required
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <h3 className='text-h3 text-fn1 mb-4 font-bold'>Método de Pago</h3>
                <div className='grid gap-4 sm:grid-cols-3'>
                  {paymentMethods.map(method => (
                    <button
                      key={method.id}
                      type='button'
                      onClick={() => setSelectedMethod(method.id)}
                      className={`border-bg3 bg-bg3 hover:border-tn1 flex flex-col items-center gap-3 rounded-xl border-2 p-6 transition ${
                        selectedMethod === method.id ? 'border-tn1 bg-tn1/10' : ''
                      }`}
                    >
                      <method.icon className={`h-8 w-8 ${selectedMethod === method.id ? 'text-tn1' : 'text-fn2'}`} />
                      <span className={`text-center text-sm font-semibold ${selectedMethod === method.id ? 'text-tn1' : 'text-fn1'}`}>
                        {method.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className='lg:col-span-1'>
            <div className='bg-bg2 border-bg3 sticky top-24 flex flex-col gap-4 rounded-2xl border p-6'>
              <h3 className='text-h3 text-fn1 font-bold'>Resumen del Pedido</h3>

              <div className='flex flex-col gap-2'>
                {items.map(item => (
                  <div key={item.id} className='flex justify-between text-sm'>
                    <span className='text-fn2'>
                      {item.name} x{item.quantity}
                    </span>
                    <span className='text-fn1 font-semibold'>S/ {(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className='border-bg3 my-2 border-t'></div>
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
                  <span className='text-tn1 text-lg font-bold'>S/ {finalTotal.toFixed(2)}</span>
                </div>
              </div>

              <div className='bg-bg3 rounded-lg p-3'>
                <p className='text-fn2 text-sm'>
                  <span className='font-semibold'>Método seleccionado:</span>{' '}
                  {paymentMethods.find(m => m.id === selectedMethod)?.name}
                </p>
              </div>

              <Button variant='active' className='w-full justify-center' type='submit'>
                <h4>Confirmar Pedido</h4>
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PaymentView
