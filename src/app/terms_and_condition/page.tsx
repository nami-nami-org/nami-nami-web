import cardTerminos from '@/app/db_card/terms_cards.json'
import Nav from '@/shared/ui/components/Nav'
import { Card, CardContent } from '@/shared/ui/components/card'
import { Button } from '@/shared/ui/components/radixButton'

const emojiBgColors = [
  'bg-yellow-100',
  'bg-blue-100',
  'bg-red-100',
  'bg-pink-100',
  'bg-green-100',
  'bg-indigo-100',
  'bg-orange-100',
  'bg-teal-100',
  'bg-gray-100'
]

export default function TermsPage() {
  return (
    <div className='min-h-screen bg-[#faf7f5]'>
      {/* Header */}
      <Nav />

      {/* Promotional Banner */}
      <div className='border-b bg-[#fbeee2]'>
        <div className='mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
              <div className='flex h-8 w-8 items-center justify-center rounded-full bg-orange-400'>
                <span className='text-xl text-white'>👤</span>
              </div>
              <span className='text-sm text-gray-700'>
                Descubre todos tus beneficios: <strong>tu cocinas con Nami Nami</strong> y nosotros nos encargamos del resto.
              </span>
            </div>
            <Button variant='link' className='text-sm font-semibold text-red-500'>
              Registrar mi local <span className='ml-1'>→</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className='mx-auto max-w-7xl px-2 py-12 sm:px-4 lg:px-6'>
        {/* Title Section */}
        <div className='mb-12 text-center'>
          <h1 className='mb-4 text-4xl font-bold text-gray-900'>Términos y condiciones de uso</h1>
          <p className='mx-auto mb-8 max-w-2xl text-lg text-gray-600'>
            Antes de continuar, necesitamos tu consentimiento para garantizar una experiencia segura, justa y transparente dentro
            de Nami Nami.
          </p>
          <Button className='rounded-lg bg-red-500 px-8 py-3 text-lg font-semibold text-white shadow hover:bg-red-600'>
            <span className='mr-2 text-2xl'>✅</span>
            Aceptar y continuar
          </Button>
        </div>

        {/* Information Cards Grid */}
        <div className='grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 md:grid-cols-3'>
          {cardTerminos.map((card, idx) => (
            <Card
              key={idx}
              className='flex h-full min-h-[220px] flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md'
            >
              <CardContent className='flex flex-1 flex-col p-0'>
                <div className='mb-4 flex items-center space-x-3'>
                  {/* Emoji destacado con fondo colorido */}
                  <div
                    className={`h-12 w-12 ${emojiBgColors[idx % emojiBgColors.length]} flex items-center justify-center rounded-full text-3xl shadow`}
                  >
                    {card.emoji}
                  </div>
                  <h3 className='text-base font-semibold text-gray-900'>{card.title}</h3>
                </div>
                <div className='flex-1 text-sm text-gray-700'>
                  <p>{card.content}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
