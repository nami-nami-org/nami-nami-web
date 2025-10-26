"use client"

interface Category {
  name: string
  emoji: string
}

interface CategoryFiltersProps {
  categories: Category[]
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

export default function CategoryFilters({ categories, selectedCategory, onSelectCategory }: CategoryFiltersProps) {
  return (
    <div className="bg-bg1 border-b border-bg3 sticky top-[73px] z-40 flex items-center justify-center">
      <div className="max-w-[1400px] mx-auto px-4 py-4">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => onSelectCategory(category.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === category.name ? "bg-tn1 text-fnA font-medium" : "bg-bg2 text-fn1 hover:bg-bg3"
              }`}
            >
              {category.emoji && <span>{category.emoji}</span>}
              <span className="text-sm">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
