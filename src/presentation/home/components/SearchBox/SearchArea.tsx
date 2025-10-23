'use client'

import Button from '@/shared/ui/components/Button'
import MentionInput from '@/shared/ui/components/MentionInput'
import type { FC, KeyboardEvent } from 'react'
import { toast } from 'sonner'

import { useSearchStore } from '../../store/useSearchStore'
import { searchSchema } from '../schemas/searchSchema'

export const filterOptions = [
  { id: '1', display: '🥬 algo ligero' },
  { id: '2', display: '🌶️ bien picante' },
  { id: '3', display: '🐟 Ceviche' },
  { id: '4', display: '🍗 Criollo' },
  { id: '5', display: '🥢 Chifa' },
  { id: '6', display: '🍕 Pizza' },
  { id: '7', display: '🍨 Postre' },
  { id: '8', display: '❓ Sorpréndeme' },
  { id: '9', display: '💰 Barato' },
  { id: '10', display: '⏰ Menos de 30 min' }
]

const SearchArea: FC = () => {
  const { query, setQuery } = useSearchStore()

  const handleSearch = () => {
    const { success, data, error } = searchSchema.safeParse({ query })

    if (!success) {
      return error.issues.forEach(msg => toast.warning('Búsqueda inválida', { description: msg?.message }))
    }

    toast.success(`Buscando: ${data.query}`)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement> | KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSearch()
    }
  }

  return (
    <div className='no-scrollbar h-[100px] overflow-y-scroll p-3.5'>
      <MentionInput
        data={filterOptions}
        onChange={setQuery}
        query={query}
        className='text-h3 min-h-[50px] w-[500px] border-none'
        mentionClassName='bg-red-100 border border-bg3'
        onKeyDown={handleKeyDown}
        renderSuggestion={(suggestion, focused) => {
          return (
            <Button key={suggestion.id} className={`w-full ${focused ? 'bg-tn1 text-fnA' : 'bg-bg2 text-fn1'}`}>
              <h4>{suggestion?.display}</h4>
            </Button>
          )
        }}
      />
    </div>
  )
}

export default SearchArea
