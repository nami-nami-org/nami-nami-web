'use client'

interface Category {
  name: string
  emoji: string
  keywords: string[]
}

interface Props {
  categories: Category[]
  selectedCategories: string[]
  onToggleCategory: (categoryName: string) => void
}

export default function CategoryFilters({ 
  categories, 
  selectedCategories, 
  onToggleCategory 
}: Props) {
  return (
    <div className='bg-bg2 border-bg3 sticky top-[72px] z-40 border-b px-4 py-4 shadow-sm'>
      <div className='mx-auto max-w-[1400px]'>
        <div className='flex gap-2 overflow-x-auto pb-2 scrollbar-hide'>
          {categories.map((category) => {
            const isSelected = selectedCategories.includes(category.name)
            
            return (
              <button
                key={category.name}
                onClick={() => onToggleCategory(category.name)}
                className={`flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-tn1 text-fnA shadow-md'
                    : 'bg-bg1 text-fn1 hover:bg-bg3 border border-bg3'
                }`}
              >
                {category.emoji && <span className='text-base'>{category.emoji}</span>}
                <span>{category.name}</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}