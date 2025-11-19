import nami_api from './root.service'

async function getAllLocals() {
  try {
    const res = await nami_api.get('/local')
    return res.data
  } catch (err: any) {
    throw new Error('Error al obtener locals')
  }
}

// Obtener 1 local por id (mock)
async function getLocalById(id: number | string) {
  try {
    const local = localsMock.find(l => l.id === Number(id))
    if (!local) throw new Error('Local no encontrado')
    return local
  } catch (err: any) {
    const message = err.message || 'Error al obtener local'
    throw new Error(message)
  }
}

export const localsService = {
  getAllLocals,
  getLocalById
}
