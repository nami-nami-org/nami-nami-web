'use client'

import iaGeneration from '@/core/services/ia.service'
import Button from '@/shared/ui/components/Button'
import MentionInput from '@/shared/ui/components/MentionInput'
import { useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect, type FC, type KeyboardEvent } from 'react'
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
  const queryClient = useQueryClient()
  const router = useRouter()

  useEffect(() => {
    router.prefetch('/dishes')
  }, [router])

  const handleSearch = async () => {
    const parsed = searchSchema.safeParse({ query })

    if (!parsed.success) {
      return parsed.error.issues.forEach(issue => toast.warning('Búsqueda inválida', { description: issue.message }))
    }

    const loadingId = toast.loading('Consultando a la IA...', {
      description: 'Un momento mientras encontramos tus platillos'
    })

    try {
      const data = await iaGeneration(parsed.data.query)

      queryClient.setQueryData(['get-all-dishes'], data)

      toast.success('Platillos listos 🎉', {
        id: loadingId,
        description: 'Hemos encontrado sugerencias basadas en tu antojo'
      })

      router.push('/dishes')
    } catch (err: any) {
      toast.error('Error buscando platillos', {
        id: loadingId,
        description: err.message
      })
    }
  }

  const handleKeyDown = async (e: KeyboardEvent<any>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      await handleSearch()
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
        renderSuggestion={(suggestion, focused) => (
          <Button key={suggestion.id} className={`w-full ${focused ? 'bg-tn1 text-fnA' : 'bg-bg2 text-fn1'}`}>
            <h4>{suggestion.display}</h4>
          </Button>
        )}
      />
    </div>
  )
}

export default SearchArea
