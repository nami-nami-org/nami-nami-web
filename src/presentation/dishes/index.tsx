'use client'

<<<<<<< HEAD:src/presentation/dishes/dishes.tsx
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
=======
import { useDishesQuery } from '@/core/query/dishes.query'
import BigDishCard from '@/shared/ui/components/BigDishCard'
import BigDishListSkeleton from '@/shared/ui/components/BigDishCard/BigDishListSkeleton'

import { Mic, Search } from 'lucide-react'
import { useState } from 'react'
import CategoryFilters from './components/CategoryFilters'
import FilterPanel from './components/FilterPanel'

export default function PlatillosPage() {
  const { data, isLoading, isError } = useDishesQuery.getAllDishes()
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedSort, setSelectedSort] = useState("Más reseñas")
  const [selectedCompanySize, setSelectedCompanySize] = useState("Grande")

  // Categorías, opciones de orden y tamaño de empresa (puedes mantener tus arrays)
  const categories = [
    { name: "Todos", emoji: "" },
    { name: "Algo Picante", emoji: "🌶️" },
    { name: "Ceviche", emoji: "🐟" },
    { name: "Criollo", emoji: "🍖" },
    { name: "Salchipapas", emoji: "🌭" },
    { name: "Pizza", emoji: "🍕" },
    { name: "Postres", emoji: "🍰" },
  ]
  const sortOptions = [
    { name: "Más reseñas", emoji: "⭐" },
    { name: "Calificación", emoji: "🔥" },
    { name: "Barato", emoji: "💰" },
    { name: "Tiempo de entrega", emoji: "⏱️" },
  ]
  const companySize = [
    { name: "Grande", emoji: "🏢" },
    { name: "Mediano", emoji: "🏬" },
    { name: "Pequeño", emoji: "🏠" },
    { name: "Nuevo", emoji: "🆕" },
  ]

  if (isError) return <p>Error al cargar los platillos.</p>
  if (isLoading || !data) return <BigDishListSkeleton />

  return (
    <div className="min-h-screen bg-bg1">
      <CategoryFilters
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="max-w-[1400px] mx-auto px-4 py-6">
        <div className="flex gap-6">
>>>>>>> f828f2e (feat: 🐛 commit Implement related products section with loading and error handling):src/presentation/dishes/index.tsx
          <FilterPanel
            sortOptions={sortOptions}
            companySize={companySize}
            selectedSort={selectedSort}
            onSelectSort={setSelectedSort}
            selectedCompanySize={selectedCompanySize}
            onSelectCompanySize={setSelectedCompanySize}
          />

<<<<<<< HEAD:src/presentation/dishes/dishes.tsx
          {/* Contenido */}
          <main className='flex-1'>
            <div className='mb-6'>
              <div className='bg-bg2 border-bg3 flex items-center gap-2 rounded-lg border px-4 py-3'>
=======
          <main className="flex-1">
            <div className="mb-6">
              <div className="flex items-center gap-2 bg-bg2 rounded-lg px-4 py-3 border border-bg3">
>>>>>>> f828f2e (feat: 🐛 commit Implement related products section with loading and error handling):src/presentation/dishes/index.tsx
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

<<<<<<< HEAD:src/presentation/dishes/dishes.tsx
            <h2 className='text-fn1 mb-6 text-2xl font-bold'>Platillos</h2>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
              {dishes.map(rest => (
                <RestaurantCard key={rest.id} {...rest} />
=======
            <h2 className="text-2xl font-bold text-fn1 mb-6">Platillos</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {data.map((dish: any, index: number) => (
                <BigDishCard key={index} {...dish} />
>>>>>>> f828f2e (feat: 🐛 commit Implement related products section with loading and error handling):src/presentation/dishes/index.tsx
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
<<<<<<< HEAD:src/presentation/dishes/dishes.tsx
}
=======
}
>>>>>>> f828f2e (feat: 🐛 commit Implement related products section with loading and error handling):src/presentation/dishes/index.tsx
