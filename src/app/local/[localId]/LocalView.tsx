'use client'

import { useLocalsQuery } from '@/core/query/locals.query'
import type { FC } from 'react'

interface LocalViewProps {
  localId: string | number
}

const LocalView: FC<LocalViewProps> = ({ localId }) => {
  const { data, isLoading, isError, error } = useLocalsQuery.getLocalById(localId)

  if (isLoading) {
    return <div>Cargando local...</div>
  }

  if (isError) {
    return <div>Error: {(error as Error).message}</div>
  }

  return (
    <div>
      <h1>{data?.name}</h1>
    </div>
  )
}

export default LocalView
