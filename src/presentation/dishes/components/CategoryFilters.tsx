'use client'

import { Button } from '@/components/ui/button'

interface Category {
  name: string
  emoji: string
  keywords?: string[]
}

interface CategoryFiltersProps {
  categories: Category[]
  selectedCategories: string[]
  onToggleCategory: (category: string) => void
}

export default function CategoryFilters({
  categories,
  selectedCategories,
  onToggleCategory
}: CategoryFiltersProps) {
  return (
    <nav className='bg-bg1 border-bg3 sticky top-[72px] z-40 border-b'>
      <div className='mx-auto max-w-[1400px] px-4'>
        <div className='flex gap-2 overflow-x-auto py-4 scrollbar-hide'>
          {categories.map(category => {
            const isActive = selectedCategories.includes(category.name)
            return (
              <Button
                key={category.name}
                onClick={() => onToggleCategory(category.name)}
                className={`flex-shrink-0 gap-2 rounded-full px-4 py-2 ${
                  isActive
                    ? 'bg-tn1 text-white hover:bg-tn1/90'
                    : 'bg-bg2 text-fn1 hover:bg-bg3'
                }`}
              >
                {category.emoji && <span>{category.emoji}</span>}
                <span className='text-sm font-medium'>{category.name}</span>
              </Button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}