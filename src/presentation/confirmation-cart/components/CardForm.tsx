import { Calendar, CreditCard, User } from 'lucide-react'

interface CardFormProps {
  cardData: {
    cardNumber: string
    cardHolder: string
    expiryDate: string
    cvv: string
    saveCard: boolean
  }
  onCardNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onCardHolderChange: (value: string) => void
  onExpiryChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onCvvChange: (value: string) => void
  onSaveCardChange: (checked: boolean) => void
}

export default function CardForm({
  cardData,
  onCardNumberChange,
  onCardHolderChange,
  onExpiryChange,
  onCvvChange,
  onSaveCardChange
}: CardFormProps) {
  return (
    <div className='space-y-4'>
      {/* Número de tarjeta */}
      <div>
        <label className='text-fn1 mb-2 block text-sm font-semibold'>
          Número de Tarjeta
        </label>
        <div className='relative'>
          <input
            type='text'
            value={cardData.cardNumber}
            onChange={onCardNumberChange}
            placeholder='1234 5678 9012 3456'
            className='border-bg3 text-fn1 placeholder:text-fn2 w-full rounded-lg border bg-bg1 px-4 py-3 pl-10 font-mono outline-none focus:border-tn1 focus:ring-2 focus:ring-tn1/20'
            maxLength={19}
          />
          <CreditCard className='text-fn2 absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2' />
        </div>
      </div>

      {/* Nombre del titular */}
      <div>
        <label className='text-fn1 mb-2 block text-sm font-semibold'>
          Nombre del Titular
        </label>
        <div className='relative'>
          <input
            type='text'
            value={cardData.cardHolder}
            onChange={(e) => onCardHolderChange(e.target.value.toUpperCase())}
            placeholder='JUAN PÉREZ'
            className='border-bg3 text-fn1 placeholder:text-fn2 w-full rounded-lg border bg-bg1 px-4 py-3 pl-10 uppercase outline-none focus:border-tn1 focus:ring-2 focus:ring-tn1/20'
          />
          <User className='text-fn2 absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2' />
        </div>
      </div>

      {/* Fecha de expiración y CVV */}
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <label className='text-fn1 mb-2 block text-sm font-semibold'>
            Fecha de Expiración
          </label>
          <div className='relative'>
            <input
              type='text'
              value={cardData.expiryDate}
              onChange={onExpiryChange}
              placeholder='MM/YY'
              className='border-bg3 text-fn1 placeholder:text-fn2 w-full rounded-lg border bg-bg1 px-4 py-3 pl-10 font-mono outline-none focus:border-tn1 focus:ring-2 focus:ring-tn1/20'
              maxLength={5}
            />
            <Calendar className='text-fn2 absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2' />
          </div>
        </div>

        <div>
          <label className='text-fn1 mb-2 block text-sm font-semibold'>
            CVV
          </label>
          <input
            type='password'
            value={cardData.cvv}
            onChange={(e) => onCvvChange(e.target.value.replace(/\D/g, ''))}
            placeholder='123'
            className='border-bg3 text-fn1 placeholder:text-fn2 w-full rounded-lg border bg-bg1 px-4 py-3 text-center font-mono outline-none focus:border-tn1 focus:ring-2 focus:ring-tn1/20'
            maxLength={3}
          />
        </div>
      </div>

      {/* Checkbox guardar tarjeta */}
      <div className='flex items-center gap-2 pt-2'>
        <input
          type='checkbox'
          id='saveCard'
          checked={cardData.saveCard}
          onChange={(e) => onSaveCardChange(e.target.checked)}
          className='h-4 w-4 rounded border-bg3 text-tn1 focus:ring-2 focus:ring-tn1/20'
        />
        <label htmlFor='saveCard' className='text-fn2 text-sm'>
          Guardar tarjeta para futuras compras
        </label>
      </div>
    </div>
  )
}