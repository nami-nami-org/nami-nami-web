'use client'

import { useLocalsQuery } from '@/core/query/locals.query'
import LocalCard from '@/shared/ui/components/LocalCard'
import LocalListSkeleton from '@/shared/ui/components/LocalCard/LocalListSkeleton'
import { MapPin, Mic, Search } from 'lucide-react'
import { useState } from 'react'

import CategoryFilters from '@/presentation/local/components/CategoryFilters'
import FilterPanel from '@/presentation/local/components/FilterPanel'

interface Category {
  name: string
  emoji: string
  keywords: string[]
}

interface SortOption {
  name: string
  emoji: string
}

export default function LocalesPage() {
  const { data, isLoading, isError } = useLocalsQuery.getAllLocals()
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['Todos'])
  const [selectedSort, setSelectedSort] = useState('Más populares')
  const [searchText, setSearchText] = useState('')
  const [minRating, setMinRating] = useState(0)
  const [isOpen, setIsOpen] = useState<boolean | null>(null)

  const categories: Category[] = [
    { name: 'Todos', emoji: '', keywords: [] },
    { name: 'Restaurantes', emoji: '🍽️', keywords: ['restaurante', 'comida'] },
    { name: 'Cevichería', emoji: '🐟', keywords: ['cevichería', 'mariscos', 'pescado'] },
    { name: 'Chifa', emoji: '🥡', keywords: ['chifa', 'oriental', 'china'] },
    { name: 'Pollería', emoji: '🍗', keywords: ['pollería', 'pollo'] },
    { name: 'Pizzería', emoji: '🍕', keywords: ['pizzería', 'pizza'] },
    { name: 'Cafetería', emoji: '☕', keywords: ['cafetería', 'café', 'pastelería'] },
    { name: 'Fast Food', emoji: '🍔', keywords: ['fast food', 'hamburguesa', 'rápida'] },
    { name: 'Parrilla', emoji: '🔥', keywords: ['parrilla', 'parrillada', 'carnes'] }
  ]

  const sortOptions: SortOption[] = [
    { name: 'Más populares', emoji: '⭐' },
    { name: 'Mejor calificación', emoji: '🏆' },
    { name: 'Más cercanos', emoji: '📍' }
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

  if (isError) return <p>Error al cargar los locales.</p>
  if (isLoading || !data) return <LocalListSkeleton />

  const filteredLocals = data.filter((local: any) => {
    const searchLower = searchText.toLowerCase().trim()
    const localName = (local.name || '').toLowerCase()
    const localDescription = (local.description || '').toLowerCase()
    const localAddress = (local.address || '').toLowerCase()
    const fullText = `${localName} ${localDescription} ${localAddress}`

    // 🔍 FILTRO DE BÚSQUEDA
    let matchesSearch = true
    if (searchLower) {
      matchesSearch = fullText.includes(searchLower)
    }

    // 🗂️ FILTRO DE CATEGORÍAS
    let matchesCategory = true
    if (!searchLower && !selectedCategories.includes('Todos')) {
      matchesCategory = selectedCategories.some(selectedCat => {
        const category = categories.find(cat => cat.name === selectedCat)
        if (!category) return false
        
        return category.keywords.some(keyword => 
          fullText.includes(keyword.toLowerCase())
        )
      })
    }

    // ⭐ FILTRO DE CALIFICACIÓN
    const rating = local.avg_rating || 0
    const matchesRating = rating >= minRating

    // 🕐 FILTRO DE ABIERTO/CERRADO
    let matchesOpenStatus = true
    if (isOpen !== null) {
      matchesOpenStatus = local.is_open === isOpen
    }

    return matchesSearch && matchesCategory && matchesRating && matchesOpenStatus
  })

  const sortedLocals = [...filteredLocals].sort((a, b) => {
    switch (selectedSort) {
      case 'Mejor calificación':
        return (b.avg_rating || 0) - (a.avg_rating || 0)
      case 'Más cercanos':
        return (a.distance || 0) - (b.distance || 0)
      case 'Más populares':
      default:
        return (b.total_orders || 0) - (a.total_orders || 0)
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
            isOpen={isOpen}
            onIsOpenChange={setIsOpen}
          />

          <main className='flex-1'>
            <div className='mb-6'>
              <div className='bg-bg2 border-bg3 flex items-center gap-2 rounded-lg border px-4 py-3'>
                <MapPin className='text-fn2 h-5 w-5' />
                <input
                  type='text'
                  placeholder='Buscar locales, restaurantes...'
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
              Locales
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
                ({sortedLocals.length})
              </span>
            </h2>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
              {sortedLocals.map((local: any, index: number) => (
                <LocalCard key={index} {...local} />
              ))}
            </div>

            {sortedLocals.length === 0 && (
              <div className='text-fn2 py-12 text-center'>
                <p className='text-lg'>No se encontraron locales</p>
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