'use client'

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
          <FilterPanel
            sortOptions={sortOptions}
            companySize={companySize}
            selectedSort={selectedSort}
            onSelectSort={setSelectedSort}
            selectedCompanySize={selectedCompanySize}
            onSelectCompanySize={setSelectedCompanySize}
          />

          <main className="flex-1">
            <div className="mb-6">
              <div className="flex items-center gap-2 bg-bg2 rounded-lg px-4 py-3 border border-bg3">
                <input
                  type="text"
                  placeholder="Se me antojó..."
                  className="flex-1 bg-transparent text-fn1 placeholder:text-fn2 outline-none"
                />
                <button className="p-1 hover:bg-bg3 rounded transition-colors">
                  <Mic className="w-5 h-5 text-fn2" />
                </button>
                <button className="p-1 hover:bg-bg3 rounded transition-colors">
                  <Search className="w-5 h-5 text-fn1" />
                </button>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-fn1 mb-6">Platillos</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {data.map((dish: any, index: number) => (
                <BigDishCard key={index} {...dish} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}