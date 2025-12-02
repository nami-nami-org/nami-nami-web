import iaGeneration from '@/core/services/ia.service'
import { Button } from '@headlessui/react'
import { useQueryClient } from '@tanstack/react-query'
import { SendHorizontalIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, type FC } from 'react'
import { toast } from 'sonner'

import { useSearchStore } from '../../store/useSearchStore'
import { searchSchema } from '../schemas/searchSchema'

const SearchHandle: FC = () => {
  const query = useSearchStore(s => s.query)
  const router = useRouter()
  const queryClient = useQueryClient()

  useEffect(() => {
    router.prefetch('/dishes')
  }, [router])

  const handleSearch = async () => {
    const parsed = searchSchema.safeParse({ query })

    if (!parsed.success) {
      return parsed.error.issues.forEach(issue => toast.warning('Búsqueda inválida', { description: issue.message }))
    }

    const loadingId = toast.loading('Consultando a la IA...', {
      description: 'Un momento mientras buscamos tus platillos'
    })

    try {
      const data = await iaGeneration(parsed.data.query)

      queryClient.setQueryData(['get-all-dishes'], data)

      toast.success(`Resultados listos`, {
        id: loadingId
      })

      router.push('/dishes')
    } catch (err: any) {
      toast.error('Error al consultar la IA', {
        id: loadingId,
        description: err.message
      })
    }
  }

  return (
    <Button onClick={handleSearch}>
      <SendHorizontalIcon />
    </Button>
  )
}

export default SearchHandle
