'use client'

import { SpeechInput } from '@/shared/ui/components/SpeechInput'

import { useSearchStore } from '../../store/useSearchStore'
import SearchArea from './SearchArea'
import SearchHandle from './SearchHandle'

export default function SearchBox() {
  const setQuery = useSearchStore(s => s.setQuery)

  return (
    <section className='border-bg3 bg-bg2 m-auto flex w-fit flex-col items-center justify-center gap-3 rounded-xl border p-2.5'>
      <SearchArea />
      <div className='flex w-full justify-between gap-2.5'>
        <SpeechInput onResult={t => setQuery(t)} />
        <SearchHandle />
      </div>
    </section>
  )
}
