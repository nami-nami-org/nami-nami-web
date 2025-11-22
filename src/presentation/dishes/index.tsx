'use client'

import { useDishesQuery } from '@/core/query/dishes.query'
import BigDishCard from '@/shared/ui/components/BigDishCard'
import BigDishListSkeleton from '@/shared/ui/components/BigDishCard/BigDishListSkeleton'
import { Mic, Search } from 'lucide-react'
import { useState } from 'react'

import CategoryFilters from './components/CategoryFilters'
import FilterPanel from './components/FilterPanel'

interface Category {
  name: string
  emoji: string
  keywords: string[]
  priority?: number // Para resolver conflictos
}

interface SortOption {
  name: string
  emoji: string
}

export default function PlatillosPage() {
  const { data, isLoading, isError } = useDishesQuery.getAllDishes()
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['Todos'])
  const [selectedSort, setSelectedSort] = useState('Más reseñas')
  const [searchText, setSearchText] = useState('')
  const [minRating, setMinRating] = useState(0)
  const [maxTime, setMaxTime] = useState(Infinity)

  const categories: Category[] = [
    { name: 'Todos', emoji: '', keywords: [], priority: 0 },
    { name: 'Algo Picante', emoji: '🌶️', keywords: ['picante', 'ají', 'chili', 'rocoto'], priority: 10 },
    { name: 'Ceviche', emoji: '🐟', keywords: ['ceviche', 'pescado', 'mariscos', 'limón'], priority: 9 },
    { name: 'Criollo', emoji: '🍖', keywords: ['lomo saltado', 'seco de carne', 'estofado', 'tallarín saltado'], priority: 8 },
    { name: 'Salchipapas', emoji: '🌭', keywords: ['salchipapas', 'salchicha'], priority: 7 },
    { name: 'Pizza', emoji: '🍕', keywords: ['pizza'], priority: 6 },
    { name: 'Postres', emoji: '🍰', keywords: ['postre', 'dulce', 'helado', 'chocolate', 'suspiro', 'mazamorra'], priority: 5 },
    { name: 'Orientales', emoji: '🍜', keywords: ['chaufa', 'wantan', 'chop suey', 'oriental', 'china'], priority: 9 },
    { name: 'Sopas', emoji: '🍲', keywords: ['sopa', 'caldo', 'chupe', 'parihuela'], priority: 8 },
    { name: 'Parrilla', emoji: '🔥', keywords: ['parrilla', 'anticucho', 'brocheta', 'asado', 'parrillada'], priority: 7 }
  ]

  const sortOptions: SortOption[] = [
    { name: 'Más reseñas', emoji: '⭐' },
    { name: 'Barato', emoji: '💰' },
    { name: 'Tiempo de entrega', emoji: '⏱️' }
  ]

  const handleCategoryToggle = (categoryName: string) => {
    if (categoryName === 'Todos') {
      setSelectedCategories(['Todos'])
    } else {
      setSelectedCategories(prev => {
        const withoutTodos = prev.filter(cat => cat !== 'Todos')
        
        if (prev.includes(categoryName)) {
          const newCategories = withoutTodos.filter(cat => cat !== categoryName)
          return newCategories.length === 0 ? ['Todos'] : newCategories
        } else {
          return [...withoutTodos, categoryName]
        }
      })
    }
  }

  const handleSortChange = (sortName: string) => {
    setSelectedSort(sortName)
  }

  if (isError) return <p>Error al cargar los platillos.</p>
  if (isLoading || !data) return <BigDishListSkeleton />

  const filteredDishes = data.filter((dish: any) => {
    const searchLower = searchText.toLowerCase().trim()
    const dishName = (dish.name || '').toLowerCase()
    const dishDescription = (dish.description || '').toLowerCase()
    const fullText = `${dishName} ${dishDescription}`

    // 🔍 FILTRO DE BÚSQUEDA POR TEXTO
    let matchesSearch = true
    if (searchLower) {
      matchesSearch = dishName.includes(searchLower) || dishDescription.includes(searchLower)
    }

    // 🗂️ FILTRO DE CATEGORÍAS (mejorado)
    let matchesCategory = true
    if (!searchLower && !selectedCategories.includes('Todos')) {
      matchesCategory = selectedCategories.some(selectedCat => {
        const category = categories.find(cat => cat.name === selectedCat)
        if (!category) return false
        
        // Verificar si TODAS las keywords de la categoría están en el platillo
        return category.keywords.some(keyword => 
          fullText.includes(keyword.toLowerCase())
        )
      })
    }

    // ⭐ FILTRO DE CALIFICACIÓN
    const rating = dish.avg_rating || 0
    const matchesRating = rating >= minRating

    // ⏱️ FILTRO DE TIEMPO
    const prepTime = dish.prep_time || 0
    const matchesTime = prepTime <= maxTime

    return matchesSearch && matchesCategory && matchesRating && matchesTime
  })

  const sortedDishes = [...filteredDishes].sort((a, b) => {
    switch (selectedSort) {
      case 'Barato':
        return (a.price || 0) - (b.price || 0)
      case 'Tiempo de entrega':
        return (a.prep_time || 0) - (b.prep_time || 0)
      case 'Más reseñas':
      default:
        return (b.avg_rating || 0) - (a.avg_rating || 0)
    }
  })

  return (
    <div className='bg-bg1 min-h-screen'>
      <CategoryFilters
        categories={categories}
        selectedCategories={selectedCategories}
        onToggleCategory={handleCategoryToggle}
      />

      <div className='mx-auto max-w-[1400px] px-4 py-6'>
        <div className='flex gap-6'>
          <FilterPanel
            sortOptions={sortOptions}
            categories={categories}
            selectedSort={selectedSort}
            onSelectSort={handleSortChange}
            selectedCategories={selectedCategories}
            onToggleCategory={handleCategoryToggle}
            minRating={minRating}
            onMinRatingChange={setMinRating}
            maxTime={maxTime}
            onMaxTimeChange={setMaxTime}
          />

          <main className='flex-1'>
            <div className='mb-6'>
              <div className='bg-bg2 border-bg3 flex items-center gap-2 rounded-lg border px-4 py-3'>
                <input
                  type='text'
                  placeholder='Se me antojó...'
                  className='text-fn1 placeholder:text-fn2 flex-1 bg-transparent outline-none'
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <button className='hover:bg-bg3 rounded p-1 transition-colors'>
                  <Mic className='text-fn2 h-5 w-5' />
                </button>
                <button className='hover:bg-bg3 rounded p-1 transition-colors'>
                  <Search className='text-fn1 h-5 w-5' />
                </button>
              </div>
            </div>

            <h2 className='text-fn1 mb-6 text-2xl font-bold'>
              Platillos
              {searchText && (
                <span className='text-fn2 ml-2 text-base font-normal'>
                  - búsqueda: {searchText}
                </span>
              )}
              {!searchText && !selectedCategories.includes('Todos') && selectedCategories.length > 0 && (
                <span className='text-fn2 ml-2 text-base font-normal'>
                  - {selectedCategories.join(', ')}
                </span>
              )}
              <span className='text-fn2 ml-2 text-sm font-normal'>
                ({sortedDishes.length})
              </span>
            </h2>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
              {sortedDishes.map((dish: any, index: number) => (
                <BigDishCard key={index} {...dish} />
              ))}
            </div>

            {sortedDishes.length === 0 && (
              <div className='text-fn2 py-12 text-center'>
                <p className='text-lg'>No se encontraron platillos</p>
                {searchText ? (
                  <p className='text-sm'>Intenta con otro término de búsqueda</p>
                ) : (
                  <p className='text-sm'>Intenta con otra categoría o filtro</p>
                )}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}