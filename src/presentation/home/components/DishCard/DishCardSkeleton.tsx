import { FC } from 'react'

const DishCardSkeleton: FC = () => {
  return (
    <div className='m-w-[350px] bg-bg2 border-bg3 flex h-fit w-full max-w-[350px] animate-pulse flex-col gap-3.5 overflow-hidden rounded-2xl border pb-3.5'>
      {/* Imagen */}
      <header className='bg-bg3 relative h-56 w-full'></header>

      <div className='flex flex-col gap-2.5 px-3.5'>
        {/* Nombre y precio */}
        <div className='space-y-2'>
          <div className='bg-bg3 h-4 w-2/3 rounded'></div>
          <div className='bg-bg3 h-4 w-1/3 rounded'></div>
        </div>

        {/* Rating y reviews */}
        <div className='flex items-center gap-2'>
          <div className='bg-bg3 h-4 w-16 rounded'></div>
          <div className='bg-bg3 h-4 w-20 rounded'></div>
        </div>

        {/* Botón */}
        <div className='bg-bg3 h-10 w-full rounded-lg'></div>
      </div>
    </div>
  )
}

export default DishCardSkeleton
