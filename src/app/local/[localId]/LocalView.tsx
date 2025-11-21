'use client'

import { useLocalsQuery } from '@/core/query/locals.query'

interface LocalViewProps {
  localId: string
}

const LocalView: React.FC<LocalViewProps> = ({ localId }) => {
  const { data, isLoading, isError, error } = useLocalsQuery.getLocalById(localId)

  if (isLoading) {
    return (
      <div className='bg-bg1 min-h-screen flex items-center justify-center'>
        <div className='text-fn1 text-xl'>Cargando local...</div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className='bg-bg1 min-h-screen flex items-center justify-center'>
        <div className='text-red-500 text-xl'>
          Error: {(error as Error).message}
        </div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className='bg-bg1 min-h-screen flex items-center justify-center'>
        <div className='text-fn2 text-xl'>Local no encontrado</div>
      </div>
    )
  }

  return (
    <div className='bg-bg1 min-h-screen'>
      <div className='mx-auto max-w-6xl px-4 py-8'>
        {/* Header con imagen */}
        <div className='relative h-96 overflow-hidden rounded-2xl mb-8'>
          <img
            src={data.image}
            alt={data.name}
            className='h-full w-full object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent' />
          <div className='absolute bottom-0 left-0 right-0 p-8 text-white'>
            <h1 className='text-4xl font-bold mb-2'>{data.name}</h1>
            <p className='text-lg opacity-90'>{data.description}</p>
          </div>
          {/* Badge de estado */}
          <div className={`absolute top-4 right-4 rounded-full px-4 py-2 text-sm font-bold ${
            data.is_open 
              ? 'bg-green-500 text-white' 
              : 'bg-red-500 text-white'
          }`}>
            {data.is_open ? '🟢 Abierto' : '🔴 Cerrado'}
          </div>
        </div>

        {/* Información del local */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Columna izquierda - Info principal */}
          <div className='lg:col-span-2 space-y-6'>
            <div className='bg-bg2 border-bg3 rounded-2xl border p-6'>
              <h2 className='text-fn1 text-2xl font-bold mb-4'>Información</h2>
              
              <div className='space-y-3'>
                <div className='flex items-start gap-3'>
                  <span className='text-2xl'>📍</span>
                  <div>
                    <p className='text-fn2 text-sm'>Dirección</p>
                    <p className='text-fn1 font-semibold'>{data.address}</p>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <span className='text-2xl'>🕐</span>
                  <div>
                    <p className='text-fn2 text-sm'>Horario</p>
                    <p className='text-fn1 font-semibold'>
                      {data.opening_time} - {data.closing_time}
                    </p>
                  </div>
                </div>

                {data.phone && (
                  <div className='flex items-start gap-3'>
                    <span className='text-2xl'>📞</span>
                    <div>
                      <p className='text-fn2 text-sm'>Teléfono</p>
                      <p className='text-fn1 font-semibold'>{data.phone}</p>
                    </div>
                  </div>
                )}

                <div className='flex items-start gap-3'>
                  <span className='text-2xl'>📏</span>
                  <div>
                    <p className='text-fn2 text-sm'>Distancia</p>
                    <p className='text-fn1 font-semibold'>{data.distance} km</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Categorías */}
            <div className='bg-bg2 border-bg3 rounded-2xl border p-6'>
              <h2 className='text-fn1 text-2xl font-bold mb-4'>Categorías</h2>
              <div className='flex flex-wrap gap-2'>
                {data.category.map((cat, index) => (
                  <span
                    key={index}
                    className='bg-tn1/10 text-tn1 border-tn1/30 rounded-full border px-4 py-2 text-sm font-semibold'
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Columna derecha - Stats */}
          <div className='space-y-6'>
            <div className='bg-bg2 border-bg3 rounded-2xl border p-6'>
              <h2 className='text-fn1 text-xl font-bold mb-4'>Estadísticas</h2>
              
              <div className='space-y-4'>
                <div className='text-center p-4 bg-bg1 rounded-xl'>
                  <div className='text-3xl mb-1'>⭐</div>
                  <div className='text-tn1 text-2xl font-bold'>{data.avg_rating.toFixed(1)}</div>
                  <div className='text-fn2 text-sm'>Calificación</div>
                </div>

                <div className='text-center p-4 bg-bg1 rounded-xl'>
                  <div className='text-3xl mb-1'>💬</div>
                  <div className='text-tn1 text-2xl font-bold'>{data.total_reviews}</div>
                  <div className='text-fn2 text-sm'>Reseñas</div>
                </div>

                <div className='text-center p-4 bg-bg1 rounded-xl'>
                  <div className='text-3xl mb-1'>🛍️</div>
                  <div className='text-tn1 text-2xl font-bold'>{data.total_orders}</div>
                  <div className='text-fn2 text-sm'>Pedidos</div>
                </div>
              </div>
            </div>

            {/* Botón de acción */}
            <button className='bg-tn1 hover:bg-tn1/90 text-fnA w-full rounded-xl py-4 font-bold text-lg shadow-lg transition-all hover:shadow-xl active:scale-95'>
              Ver Menú
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocalView