import nami_api from './root.service'

async function getAllLocals() {
  try {
    const res = await nami_api.get('/local')
    return res.data
  } catch (err: any) {
    throw new Error('Error al obtener locals')
  }
}

async function getLocalById(id: number | string) {
  try {
    const res = await nami_api.get(`/local/${id}`)
    return res.data
  } catch (err: any) {
    const message = err?.response?.data?.message || 'Error al obtener local'
    throw new Error(message)
  }
}

export const localsService = {
  getAllLocals,
  getLocalById
}
