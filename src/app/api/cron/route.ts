import nami_api from '@/core/services/root.service'

export async function GET() {
  try {
    const res = await nami_api.get('/health')
    return res.data
  } catch (err: any) {
    const message = err.response?.data?.message || err.message || 'Error al crear usuario'
    throw new Error(message)
  }
}
