import LocalView from './LocalView'

interface LocalPageProps {
  params: Promise<{ localId: string }>
}

export default async function LocalPage({ params }: LocalPageProps) {
  const { localId } = await params
  return <LocalView localId={localId} />
}
