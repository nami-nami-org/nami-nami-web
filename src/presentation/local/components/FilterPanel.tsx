'use client'

import { Check } from 'lucide-react'

interface Category {
  name: string
  emoji: string
  keywords: string[]
}

interface SortOption {
  name: string
  emoji: string
}

interface Props {
  sortOptions: SortOption[]
  categories: Category[]
  selectedSort: string
  onSelectSort: (sortName: string) => void
  selectedCategories: string[]
  onToggleCategory: (categoryName: string) => void
  minRating: number
  onMinRatingChange: (rating: number) => void
  isOpen: boolean | null
  onIsOpenChange: (isOpen: boolean | null) => void
}

export default function FilterPanel({
  sortOptions,
  categories,
  selectedSort,
  onSelectSort,
  selectedCategories,
  onToggleCategory,
  minRating,
  onMinRatingChange,
  isOpen,
  onIsOpenChange
}: Props) {
  return (
    <aside className='bg-bg2 border-bg3 h-fit w-64 flex-shrink-0 rounded-2xl border p-6 shadow-sm'>
      <h3 className='text-fn1 mb-4 text-lg font-bold'>Panel de filtros</h3>

      {/* Categorías */}
      <div className='mb-6'>
        <h4 className='text-fn1 mb-3 text-sm font-semibold'>Categorías</h4>
        <div className='space-y-2'>
          {categories.map((category) => {
            const isSelected = selectedCategories.includes(category.name)
            
            return (
              <button
                key={category.name}
                onClick={() => onToggleCategory(category.name)}
                className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-all ${
                  isSelected
                    ? 'bg-tn1/10 text-tn1 font-semibold'
                    : 'text-fn2 hover:bg-bg3'
                }`}
              >
                <div className='flex h-4 w-4 items-center justify-center'>
                  {isSelected && <Check className='h-4 w-4' />}
                </div>
                {category.emoji && <span>{category.emoji}</span>}
                <span>{category.name}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Ordenar por */}
      <div className='mb-6'>
        <h4 className='text-fn1 mb-3 text-sm font-semibold'>Ordenar por</h4>
        <div className='space-y-2'>
          {sortOptions.map((option) => {
            const isSelected = selectedSort === option.name
            
            return (
              <button
                key={option.name}
                onClick={() => onSelectSort(option.name)}
                className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-all ${
                  isSelected
                    ? 'bg-tn1/10 text-tn1 font-semibold'
                    : 'text-fn2 hover:bg-bg3'
                }`}
              >
                <div className='flex h-4 w-4 items-center justify-center'>
                  {isSelected && <Check className='h-4 w-4' />}
                </div>
                <span>{option.emoji}</span>
                <span>{option.name}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Calificación mínima */}
      <div className='mb-6'>
        <h4 className='text-fn1 mb-3 text-sm font-semibold'>Calificación mínima</h4>
        <div className='flex items-center gap-2'>
          <input
            type='range'
            min='0'
            max='5'
            step='0.5'
            value={minRating}
            onChange={(e) => onMinRatingChange(parseFloat(e.target.value))}
            className='flex-1'
          />
          <span className='text-tn1 font-bold'>{minRating.toFixed(1)}⭐</span>
        </div>
      </div>

      {/* Estado */}
      <div>
        <h4 className='text-fn1 mb-3 text-sm font-semibold'>Estado</h4>
        <div className='space-y-2'>
          <button
            onClick={() => onIsOpenChange(null)}
            className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-all ${
              isOpen === null
                ? 'bg-tn1/10 text-tn1 font-semibold'
                : 'text-fn2 hover:bg-bg3'
            }`}
          >
            <div className='flex h-4 w-4 items-center justify-center'>
              {isOpen === null && <Check className='h-4 w-4' />}
            </div>
            <span>Todos</span>
          </button>
          <button
            onClick={() => onIsOpenChange(true)}
            className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-all ${
              isOpen === true
                ? 'bg-tn1/10 text-tn1 font-semibold'
                : 'text-fn2 hover:bg-bg3'
            }`}
          >
            <div className='flex h-4 w-4 items-center justify-center'>
              {isOpen === true && <Check className='h-4 w-4' />}
            </div>
            <span className='text-green-500'>🟢</span>
            <span>Abierto ahora</span>
          </button>
          <button
            onClick={() => onIsOpenChange(false)}
            className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-all ${
              isOpen === false
                ? 'bg-tn1/10 text-tn1 font-semibold'
                : 'text-fn2 hover:bg-bg3'
            }`}
          >
            <div className='flex h-4 w-4 items-center justify-center'>
              {isOpen === false && <Check className='h-4 w-4' />}
            </div>
            <span className='text-red-500'>🔴</span>
            <span>Cerrado</span>
          </button>
        </div>
      </div>
    </aside>
  )
}