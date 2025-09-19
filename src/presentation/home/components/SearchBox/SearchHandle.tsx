import { Button } from '@headlessui/react'
import { SendHorizontalIcon } from 'lucide-react'
import type { FC } from 'react'
import { toast } from 'sonner'

import { useSearchStore } from '../../store/useSearchStore'
import { searchSchema } from '../schemas/searchSchema'

const SearchHandle: FC = () => {
  const query = useSearchStore(s => s.query)

  const handleSearch = () => {
    const { success, data, error } = searchSchema.safeParse({ query })

    if (!success) {
      return error.issues.forEach(msg => toast.warning('Búsqueda inválida', { description: msg?.message }))
    }

    toast.success(`Buscando: ${data.query}`)
  }

  return (
    <Button onClick={handleSearch}>
      <SendHorizontalIcon />
    </Button>
  )
}

export default SearchHandle
