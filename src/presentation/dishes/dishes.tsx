'use client'

import RestaurantCard from '@/shared/ui/components/RestaurantCard'
import { Mic, Search } from 'lucide-react'
import { useState } from 'react'

import CategoryFilters from './CategoryFilters'
import FilterPanel from './FilterPanel'

export default function PlatillosPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [selectedSort, setSelectedSort] = useState('Más reseñas')
  const [selectedCompanySize, setSelectedCompanySize] = useState('Grande')

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

  const dishes = [
    {
      id: '1',
      name: 'Nocturnos Tex Mex Surquillo',
      image: '/tex-mex-food-colorful.jpg',
      logo: '/tex-mex-food-colorful.jpg',
      rating: 4.7,
      time: '20-35 min',
      price: 'S/ 14.90'
    },
    {
      id: '2',
      name: 'Tacos Mexicanos',
      image: '/tex-mex-tacos-colorful.jpg',
      logo: '/tex-mex-food-colorful.jpg',
      rating: 4.5,
      time: '15-25 min',
      price: 'S/ 12.90'
    },
    {
      id: '3',
      name: 'Ceviche Clásico',
      image: '/mexican-food-platter.jpg',
      logo: '/tex-mex-food-colorful.jpg',
      rating: 4.8,
      time: '30-40 min',
      price: 'S/ 18.50'
    },
    {
      id: '4',
      name: 'Burrito Especial',
      image: '/tex-mex-burrito-bowl.jpg',
      logo: '/tex-mex-food-colorful.jpg',
      rating: 4.6,
      time: '20-35 min',
      price: 'S/ 16.00'
    }
  ]

  return (
    <div className='bg-bg1 min-h-screen'>
      {/* Filtros arriba */}
      <CategoryFilters categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />

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

          {/* Contenido */}
          <main className='flex-1'>
            <div className='mb-6'>
              <div className='bg-bg2 border-bg3 flex items-center gap-2 rounded-lg border px-4 py-3'>
                <input
                  type='text'
                  placeholder='Se me antojó...'
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

            <h2 className='text-fn1 mb-6 text-2xl font-bold'>Platillos</h2>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
              {dishes.map(rest => (
                <RestaurantCard key={rest.id} {...rest} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
