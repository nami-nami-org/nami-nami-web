'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Clock, MapPin, Star } from 'lucide-react'

interface SortOption {
  name: string
  emoji: string
}

interface CompanySize {
  name: string
  emoji: string
}

interface FilterPanelProps {
  sortOptions: SortOption[]
  companySize: CompanySize[]
  selectedSort: string
  onSelectSort: (sort: string) => void
  selectedCompanySize: string
  onSelectCompanySize: (size: string) => void
}

export default function FilterPanel({
  sortOptions,
  companySize,
  selectedSort,
  onSelectSort,
  selectedCompanySize,
  onSelectCompanySize
}: FilterPanelProps) {
  return (
    <aside className='hidden w-[240px] flex-shrink-0 lg:block'>
      <Card className='bg-bg2 border-bg3 sticky top-[180px] rounded-xl p-4'>
        <h3 className='text-fn1 mb-4 font-bold'>Panel de filtros</h3>

        {/* ⭐ Orden rápido */}
        <section className='mb-6 space-y-2'>
          <h4 className='text-fn1 mb-2 text-sm font-semibold'>Ordenar</h4>

          <Button variant='ghost' className='text-fn1 hover:bg-bg3 w-full justify-start gap-2'>
            <Star className='h-4 w-4 fill-current' />
            <span className='text-sm'>4.5+</span>
          </Button>

          <Button variant='ghost' className='text-fn1 hover:bg-bg3 w-full justify-start gap-2'>
            <Clock className='h-4 w-4' />
            <span className='text-sm'>1 hora</span>
          </Button>
        </section>

        {/* 📍 Cercanos */}
        <section className='mb-6'>
          <Button variant='ghost' className='text-fn1 hover:bg-bg3 w-full justify-start gap-2'>
            <MapPin className='h-4 w-4' />
            <span className='text-sm font-medium'>Cercanos</span>
          </Button>
        </section>

        {/* 🔎 Ordenar por */}
        <section className='mb-6'>
          <h4 className='text-fn1 mb-3 text-sm font-semibold'>Ordenar por</h4>

          <div className='space-y-2'>
            {sortOptions.map(option => {
              const active = selectedSort === option.name
              return (
                <Button
                  key={option.name}
                  onClick={() => onSelectSort(option.name)}
                  className={`w-full justify-start gap-2 rounded-lg px-3 py-2 text-left ${
                    active ? 'bg-tn1 hover:bg-tn1/90 font-medium text-white' : 'hover:bg-bg3 text-fn1 bg-transparent'
                  }`}
                >
                  <span>{option.emoji}</span>
                  <span className='text-sm'>{option.name}</span>
                </Button>
              )
            })}
          </div>
        </section>

        {/* 🏢 Tamaño de empresa */}
        <section className='mb-6'>
          <h4 className='text-fn1 mb-3 text-sm font-semibold'>Tamaño de empresa</h4>

          <div className='grid grid-cols-2 gap-2'>
            {companySize.map(size => {
              const active = selectedCompanySize === size.name
              return (
                <Button
                  key={size.name}
                  onClick={() => onSelectCompanySize(size.name)}
                  className={`text-fn1 flex items-center gap-1 rounded-lg px-2 py-2 ${
                    active ? 'bg-tn1 font-medium text-white' : 'hover:bg-bg3 bg-transparent'
                  }`}
                >
                  <span className='text-base'>{size.emoji}</span>
                  <span className='text-xs'>{size.name}</span>
                </Button>
              )
            })}
          </div>
        </section>

        {/* 🗂 Categorías */}
        <section>
          <h4 className='text-fn1 text-sm font-semibold'>Categorías</h4>
        </section>
      </Card>
    </aside>
  )
}
