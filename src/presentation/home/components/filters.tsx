'use client'

import { useSearchStore } from '../store/useSearchStore'
import { filterOptions } from './SearchBox/SearchArea'

export function Filters() {
  const { query, setQuery } = useSearchStore()

  const handleAddFilter = (option: { id: string; display: string }) => {
    const mention = `@[${option.display}](id:${option.id}) `
    setQuery(query + mention)
  }

  return (
    <div className='m-auto flex w-full max-w-[600px] flex-wrap justify-center gap-3.5'>
      {filterOptions.map(option => (
        <button
          key={option.id}
          type='button'
          onClick={() => handleAddFilter(option)}
          className='bg-bg1 text-fn1 hover:bg-bg3 rounded-full px-4 py-2 text-sm shadow-sm transition'
        >
          <h4>{option.display}</h4>
        </button>
      ))}
    </div>
  )
}
