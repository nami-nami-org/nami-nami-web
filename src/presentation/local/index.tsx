'use client'

import { useState } from 'react'
import { Mic, Search } from 'lucide-react'
import { useLocalsQuery } from '@/core/query/locals.query'
import RestaurantCard from '@/shared/ui/components/RestaurantCard'
import CategoryFilters from ''
import FilterPanel from './components/FilterPanel'
import BigDishListSkeleton from '@/shared/ui/components/BigDishCard/BigDishListSkeleton'

export default function LocalsPage() {
  const { data: locals, isLoading, isError } = useLocalsQuery.getAllLocals()

  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [selectedSort, setSelectedSort] = useState('Más reseñas')
  const [selectedCompanySize, setSelectedCompanySize] = useState('Grande')
  const [search, setSearch] = useState('')

  const categories = [
    { name: 'Todos', emoji: '' },
    { name: 'Cevicherías', emoji: '🐟' },
    { name: 'Pollo', emoji: '🍗' },
    { name: 'Hamburguesas', emoji: '🍔' },
    { name: 'Pizza', emoji: '🍕' },
    { name: 'Chifa', emoji: '🥡' },
    { name: 'Café', emoji: '☕' }
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

  if (isError) return <p>Error al cargar locales.</p>
  if (isLoading || !locals) return <BigDishListSkeleton />

  // 🔍 Aplicar búsqueda simple
  const filteredLocals = locals.filter(local =>
    (local.tradeName || local.localName)?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='bg-bg1 min-h-screen'>
      <CategoryFilters
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className='mx-auto max-w-[1400px] px-4 py-6'>
        <div className='flex gap-6'>

          {/* Panel lateral */}
          <FilterPanel
            sortOptions={sortOptions}
            companySize={companySize}
            selectedSort={selectedSort}
            onSelectSort={setSelectedSort}
            selectedCompanySize={selectedCompanySize}
            onSelectCompanySize={setSelectedCompanySize}
          />

          {/* Contenido Principal */}
          <main className='flex-1'>
            {/* Buscador */}
            <div className='mb-6'>
              <div className='bg-bg2 border-bg3 flex items-center gap-2 rounded-lg border px-4 py-3'>
                <input
                  type='text'
                  placeholder='Buscar locales...'
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className='text-fn1 placeholder:text-fn2 flex-1 bg-transparent outline-none'
                />
                <button className='hover:bg-bg3 rounded p-1 transition-colors'>
                  <Mic className='text-fn2 h-5 w-5' />
                </button>
                <button className='hover:bg-bg3 rounded p-1 transition-colors'>
                  <Search className='text-fn1 h-5 w-5' />
                </button>
              </div>
            </div>

            <h2 className='text-fn1 mb-6 text-2xl font-bold'>Locales</h2>

            {/* Grid de locales */}
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
              {filteredLocals.map(local => (
                <RestaurantCard
                  key={local.id}
                  id={String(local.id)}
                  images={local.imageUrls}
                  logo={local.imageUrls?.[0]}
                  name={local.tradeName || local.localName}
                  rating={local.averageRating}
                  time={`${local.averageDeliveryTime} min`}
                  price={`S/ ${local.deliveryCost}`}
                />
              ))}
            </div>

          </main>
        </div>
      </div>
    </div>
  )
}
