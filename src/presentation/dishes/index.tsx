'use client'

import { useDishesQuery } from '@/core/query/dishes.query'
import iaGeneration from '@/core/services/ia.service'
import BigDishCard from '@/shared/ui/components/BigDishCard'
import BigDishListSkeleton from '@/shared/ui/components/BigDishCard/BigDishListSkeleton'
import { SpeechInput } from '@/shared/ui/components/SpeechInput'
import { useQuery } from '@tanstack/react-query'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { toast } from 'sonner'

import { searchSchema } from '../home/components/schemas/searchSchema'
import CategoryFilters from './components/CategoryFilters'
import FilterPanel from './components/FilterPanel'

interface Category {
  name: string
  emoji: string
  keywords: string[]
  priority?: number
}

interface SortOption {
  name: string
  emoji: string
}

interface Dish {
  id: string
  name: string
  description: string
  avg_rating: number
  prep_time: number
  price: number
  [key: string]: any
}

// Componente de esqueleto para las cartas de IA
const AICardSkeleton = () => (
  <div className='bg-bg3 border-bg1 flex h-fit w-full max-w-[350px] animate-pulse flex-col gap-3.5 overflow-hidden rounded-2xl border pb-3.5'>
    <div className='bg-bg1 h-56 w-full' />
    <div className='flex flex-col gap-5 px-3.5'>
      <div>
        <div className='bg-bg1 mb-2 h-5 w-3/4 rounded' />
        <div className='bg-bg1 h-4 w-1/4 rounded' />
      </div>
      <div className='flex flex-col gap-2'>
        <div className='bg-bg1 h-3 w-full rounded' />
        <div className='bg-bg1 h-3 w-2/3 rounded' />
      </div>
      <div className='flex gap-2'>
        <div className='bg-bg1 h-10 flex-1 rounded-lg' />
        <div className='bg-bg1 h-10 w-10 rounded-lg' />
      </div>
    </div>
  </div>
)

export default function PlatillosPage() {
  const { data, isLoading, isError } = useDishesQuery.getAllDishes()
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['Todos'])
  const [selectedSort, setSelectedSort] = useState('Más reseñas')
  const [searchText, setSearchText] = useState('')
  const [localSearchText, setLocalSearchText] = useState('')
  const [aiSearchQuery, setAiSearchQuery] = useState('')
  const [minRating, setMinRating] = useState(0)
  const [maxTime, setMaxTime] = useState(Infinity)

  const categories: Category[] = [
    { name: 'Todos', emoji: '', keywords: [], priority: 0 },
    { name: 'Algo Picante', emoji: '🌶️', keywords: ['picante', 'ají', 'chili', 'rocoto'], priority: 10 },
    { name: 'Ceviche', emoji: '🐟', keywords: ['ceviche', 'pescado', 'mariscos', 'limón'], priority: 9 },
    { name: 'Criollo', emoji: '🍖', keywords: ['lomo saltado', 'seco', 'estofado', 'tallarín saltado'], priority: 8 },
    { name: 'Salchipapas', emoji: '🌭', keywords: ['salchipapas', 'salchicha'], priority: 7 },
    { name: 'Pizza', emoji: '🍕', keywords: ['pizza'], priority: 6 },
    { name: 'Postres', emoji: '🍰', keywords: ['postre', 'dulce', 'helado', 'chocolate'], priority: 5 },
    { name: 'Orientales', emoji: '🍜', keywords: ['chaufa', 'wantan', 'chop suey', 'oriental'], priority: 9 },
    { name: 'Sopas', emoji: '🍲', keywords: ['sopa', 'caldo', 'chupe', 'parihuela'], priority: 8 },
    { name: 'Parrilla', emoji: '🔥', keywords: ['parrilla', 'anticucho', 'brocheta', 'asado'], priority: 7 }
  ]

  const sortOptions: SortOption[] = [
    { name: 'Más reseñas', emoji: '⭐' },
    { name: 'Barato', emoji: '💰' },
    { name: 'Tiempo de entrega', emoji: '⏱️' }
  ]

  const {
    data: aiSource = [],
    isFetching: aiLoading,
    refetch: fetchAI
  } = useQuery({
    queryKey: ['get-all-dishes-ai', aiSearchQuery],
    queryFn: async () => iaGeneration(aiSearchQuery),
    enabled: false,
    staleTime: 1000 * 60 * 10
  })

  // Búsqueda local con debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setLocalSearchText(searchText)
    }, 300)
    return () => clearTimeout(timer)
  }, [searchText])

  const handleAISearch = useCallback(async () => {
    const parsed = searchSchema.safeParse({ query: searchText })
    if (!parsed.success) {
      parsed.error.issues.forEach(issue => toast.warning('Búsqueda inválida', { description: issue.message }))
      return
    }

    setAiSearchQuery(searchText)
    const loadingId = toast.loading('Consultando a la IA...', {
      description: 'Un momento mientras buscamos tus platillos'
    })

    try {
      await fetchAI()
      toast.success('Resultados listos', { id: loadingId })
    } catch (err: any) {
      toast.error('Error al consultar la IA', {
        id: loadingId,
        description: err.message
      })
    }
  }, [searchText, fetchAI])

  const handleCategoryToggle = useCallback((categoryName: string) => {
    if (categoryName === 'Todos') {
      setSelectedCategories(['Todos'])
      return
    }
    setSelectedCategories(prev => {
      const withoutTodos = prev.filter(cat => cat !== 'Todos')
      if (prev.includes(categoryName)) {
        const newCategories = withoutTodos.filter(cat => cat !== categoryName)
        return newCategories.length === 0 ? ['Todos'] : newCategories
      } else {
        return [...withoutTodos, categoryName]
      }
    })
  }, [])

  // Filtrado local con búsqueda optimizada
  const filteredDishes = useMemo(() => {
    if (!data) return []
    const searchLower = localSearchText.toLowerCase().trim()

    return data.filter((dish: Dish) => {
      // Filtro de búsqueda
      const matchesSearch =
        !searchLower || dish.name?.toLowerCase().includes(searchLower) || dish.description?.toLowerCase().includes(searchLower)

      if (!matchesSearch) return false

      // Filtro de categoría
      if (!selectedCategories.includes('Todos')) {
        const fullText = `${dish.name ?? ''} ${dish.description ?? ''}`.toLowerCase()
        const matchesCategory = selectedCategories.some(selectedCat =>
          categories.find(cat => cat.name === selectedCat)?.keywords.some(keyword => fullText.includes(keyword))
        )
        if (!matchesCategory) return false
      }

      // Filtro de rating
      if ((dish.avg_rating ?? 0) < minRating) return false

      // Filtro de tiempo
      if ((dish.prep_time ?? 0) > maxTime) return false

      return true
    })
  }, [data, localSearchText, selectedCategories, minRating, maxTime, categories])

  const sortedDishes = useMemo(() => {
    return [...filteredDishes].sort((a: Dish, b: Dish) => {
      switch (selectedSort) {
        case 'Barato':
          return (a.price ?? 0) - (b.price ?? 0)
        case 'Tiempo de entrega':
          return (a.prep_time ?? 0) - (b.prep_time ?? 0)
        default:
          return (b.avg_rating ?? 0) - (a.avg_rating ?? 0)
      }
    })
  }, [filteredDishes, selectedSort])

  if (isError) return <p>Error al cargar los platillos.</p>
  if (isLoading || !data) return <BigDishListSkeleton />

  return (
    <div className='bg-bg1 min-h-screen'>
      <CategoryFilters categories={categories} selectedCategories={selectedCategories} onToggleCategory={handleCategoryToggle} />
      <div className='mx-auto max-w-[1400px] px-4 py-6'>
        <div className='flex gap-6'>
          <FilterPanel
            sortOptions={sortOptions}
            categories={categories}
            selectedSort={selectedSort}
            onSelectSort={setSelectedSort}
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
                  onChange={e => setSearchText(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleAISearch()}
                />
                {/* <SpeechInput onResult={t => setSearchText(t)} /> */}
                <button className='hover:bg-bg3 rounded p-1 transition-colors' onClick={handleAISearch} title='Buscar con IA'>
                  <Search className='text-fn1 h-5 w-5' />
                </button>
              </div>
              <p className='text-fn2 mt-2 text-xs'>
                💡 La búsqueda filtra automáticamente. Presiona Enter o el botón para buscar con IA.
              </p>
            </div>

            <h2 className='text-fn1 mb-6 text-2xl font-bold'>
              Platillos
              {localSearchText && <span className='text-fn2 ml-2 text-base font-normal'>- búsqueda: {localSearchText}</span>}
              {!localSearchText && !selectedCategories.includes('Todos') && selectedCategories.length > 0 && (
                <span className='text-fn2 ml-2 text-base font-normal'>- {selectedCategories.join(', ')}</span>
              )}
              <span className='text-fn2 ml-2 text-sm font-normal'>({sortedDishes.length})</span>
            </h2>

            {sortedDishes.length > 0 ? (
              <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
                {sortedDishes.map((dish: Dish) => (
                  <BigDishCard key={dish.id} {...dish} />
                ))}
              </div>
            ) : (
              <div className='text-fn2 py-12 text-center'>
                <p className='text-lg'>No se encontraron platillos</p>
                {localSearchText ? (
                  <p className='text-sm'>Intenta con otro término de búsqueda</p>
                ) : (
                  <p className='text-sm'>Intenta con otra categoría o filtro</p>
                )}
              </div>
            )}

            {/* Sección de Resultados de IA */}
            {aiSearchQuery && (
              <div className='mt-8'>
                <h3 className='text-fn1 mb-3 text-lg font-semibold'>
                  🤖 Resultados IA
                  <span className='text-fn2 ml-2 text-sm font-normal'>- búsqueda: {aiSearchQuery}</span>
                </h3>

                {aiLoading ? (
                  <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
                    {[...Array(6)].map((_, i) => (
                      <AICardSkeleton key={`skeleton-${i}`} />
                    ))}
                  </div>
                ) : aiSource.length > 0 ? (
                  <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
                    {aiSource.map((dish: Dish, i: number) => (
                      <BigDishCard key={`ai-${i}`} {...dish} />
                    ))}
                  </div>
                ) : (
                  <div className='text-fn2 border-bg3 bg-bg2 rounded-lg border p-8 text-center'>
                    <p className='text-base'>No se encontraron resultados con IA</p>
                    <p className='mt-1 text-sm'>Intenta con otra búsqueda más específica</p>
                  </div>
                )}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
