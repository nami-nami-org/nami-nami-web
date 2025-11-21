'use client'

import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'

interface SortOption {
  name: string
  emoji: string
}

interface Category {
  name: string
  emoji: string
  keywords?: string[]
}

interface FilterPanelProps {
  sortOptions: SortOption[]
  categories: Category[]
  selectedSort: string
  onSelectSort: (sort: string) => void
  selectedCategories: string[]
  onToggleCategory: (category: string) => void
  minRating: number
  onMinRatingChange: (rating: number) => void
  maxTime: number
  onMaxTimeChange: (time: number) => void
}

export default function FilterPanel({
  sortOptions,
  categories,
  selectedSort,
  onSelectSort,
  selectedCategories,
  onToggleCategory,
}: FilterPanelProps) {
  const handleSortChange = (sortName: string) => {
    if (selectedSort === sortName) {
      onSelectSort('Más reseñas')
    } else {
      onSelectSort(sortName)
    }
  }

  // Validación de seguridad
  if (!categories || !sortOptions) {
    return null
  }

  return (
    <aside className='hidden w-[240px] flex-shrink-0 lg:block'>
      <Card className='bg-bg2 border-bg3 sticky top-[180px] max-h-[calc(100vh-200px)] overflow-y-auto rounded-xl p-4'>
        <h3 className='text-fn1 mb-4 font-bold'>Panel de filtros</h3>

        {/* 🗂 Categorías */}
        <section className='mb-6'>
          <h4 className='text-fn1 mb-3 text-sm font-semibold'>Categorías</h4>

          <div className='space-y-3'>
            {categories.map(category => {
              const isChecked = selectedCategories.includes(category.name)
              return (
                <label
                  key={category.name}
                  className='flex items-center gap-2 cursor-pointer hover:bg-bg3 rounded-lg px-2 py-1.5 transition-colors'
                >
                  <Checkbox
                    checked={isChecked}
                    onCheckedChange={() => onToggleCategory(category.name)}
                  />
                  {category.emoji && <span className='text-base'>{category.emoji}</span>}
                  <span className='text-fn1 text-sm flex-1'>{category.name}</span>
                </label>
              )
            })}
          </div>
        </section>

        {/* 🔎 Ordenar por */}
        <section>
          <h4 className='text-fn1 mb-3 text-sm font-semibold'>Ordenar por</h4>

          <div className='space-y-3'>
            {sortOptions.map(option => {
              const isChecked = selectedSort === option.name
              return (
                <label
                  key={option.name}
                  className='flex items-center gap-2 cursor-pointer hover:bg-bg3 rounded-lg px-2 py-1.5 transition-colors'
                >
                  <Checkbox
                    checked={isChecked}
                    onCheckedChange={() => handleSortChange(option.name)}
                  />
                  <span className='text-base'>{option.emoji}</span>
                  <span className='text-fn1 text-sm flex-1'>{option.name}</span>
                </label>
              )
            })}
          </div>
        </section>
      </Card>
    </aside>
  )
}