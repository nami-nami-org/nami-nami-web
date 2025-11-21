'use client'

import { useDishesQuery } from '@/core/query/dishes.query'
import BigDishCard from '@/shared/ui/components/BigDishCard'
import BigDishListSkeleton from '@/shared/ui/components/BigDishCard/BigDishListSkeleton'
import { Mic, Search } from 'lucide-react'
import { useState } from 'react'

import CategoryFilters from './components/CategoryFilters'
import FilterPanel from './components/FilterPanel'

export default function PlatillosPage() {
  const { data, isLoading, isError } = useDishesQuery.getAllDishes()
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [selectedSort, setSelectedSort] = useState('Más reseñas')
  const [selectedCompanySize, setSelectedCompanySize] = useState('Grande')
  const [searchText, setSearchText] = useState('') // ← NUEVO ESTADO PARA BUSCAR

  const categories = [
    { name: 'Todos', emoji: '' },
    { name: 'Algo Picante', emoji: '🌶️' },
    { name: 'Ceviche', emoji: '🐟' },
    { name: 'Criollo', emoji: '🍖' },
    { name: 'Salchipapas', emoji: '🌭' },
    { name: 'Pizza', emoji: '🍕' },
    { name: 'Postres', emoji: '🍰' }
  ]

  const sortOptions = [
    { name: 'Más reseñas', emoji: '⭐' },
    { name: 'Calificación', emoji: '🔥' },
    { name: 'Barato', emoji: '💰' },
    { name: 'Tiempo de entrega', emoji: '⏱️' }
  ]

  const companySize = [
    { name: 'Grande', emoji: '🏢' },
    { name: 'Mediano', emoji: '🏬' },
    { name: 'Pequeño', emoji: '🏠' },
    { name: 'Nuevo', emoji: '🆕' }
  ]

  if (isError) return <p>Error al cargar los platillos.</p>
  if (isLoading || !data) return <BigDishListSkeleton />

  // 🔍 FILTRAR LOS PLATILLOS POR NOMBRE O DESCRIPCIÓN
  const filteredDishes = data.filter((dish: any) => {
    const text = searchText.toLowerCase()

    return (
      dish.name.toLowerCase().includes(text) ||
      (dish.description && dish.description.toLowerCase().includes(text))
    )
  })

  return (
    <div className='bg-bg1 min-h-screen'>
      <CategoryFilters
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className='mx-auto max-w-[1400px] px-4 py-6'>
        <div className='flex gap-6'>
          <FilterPanel
            sortOptions={sortOptions}
            companySize={companySize}
            selectedSort={selectedSort}
            onSelectSort={setSelectedSort}
            selectedCompanySize={selectedCompanySize}
            onSelectCompanySize={setSelectedCompanySize}
          />

          <main className='flex-1'>
            {/* 🔍 Barra de Búsqueda */}
            <div className='mb-6'>
              <div className='bg-bg2 border-bg3 flex items-center gap-2 rounded-lg border px-4 py-3'>
                <input
                  type='text'
                  placeholder='Se me antojó...'
                  className='text-fn1 placeholder:text-fn2 flex-1 bg-transparent outline-none'
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)} // ← ACTUALIZA LA BÚSQUEDA
                />
                <button className='hover:bg-bg3 rounded p-1 transition-colors'>
                  <Mic className='text-fn2 h-5 w-5' />
                </button>
                <button className='hover:bg-bg3 rounded p-1 transition-colors'>
                  <Search className='text-fn1 h-5 w-5' />
                </button>
              </div>
            </div>

            <h2 className='text-fn1 mb-6 text-2xl font-bold'>Platillos</h2>

            {/* 🔍 Renderizar platillos filtrados */}
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
              {filteredDishes.map((dish: any, index: number) => (
                <BigDishCard key={index} {...dish} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
