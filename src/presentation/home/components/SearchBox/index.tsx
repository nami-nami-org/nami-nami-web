'use client'

import Button from '@/shared/ui/components/Button'
import { MicIcon } from 'lucide-react'

import SearchArea from './SearchArea'
import SearchHandle from './SearchHandle'

export default function SearchBox() {
  return (
    <section className='border-bg3 bg-bg2 m-auto flex w-fit flex-col items-center justify-center gap-3 rounded-xl border p-2.5'>
      <SearchArea />
      <div className='flex w-full justify-between gap-2.5'>
        <Button variant='transparent'>
          <MicIcon />
        </Button>
        <SearchHandle />
      </div>
    </section>
  )
}
