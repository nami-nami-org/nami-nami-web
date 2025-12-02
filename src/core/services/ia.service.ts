import nami_api from './root.service'

async function iaGeneration(prompt: string) {
  try {
    console.log('PASOOOOOO')

    const res = await nami_api.get(`/searchAi?prompt=${encodeURIComponent(prompt)}`)
    return res.data
  } catch (err: any) {
    const message = err.response?.data?.message || err.message || 'Error al generar la búsqueda con IA'
    throw new Error(message)
  }
}

export default iaGeneration
