import nami_api from './root.service'

async function getAllDishes() {
  try {
    const res = await nami_api.get('/dish', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return res.data
  } catch (err: any) {
    const message = err.response?.data?.message || err.message || 'Error al obtener usuarios'
    throw new Error(message)
  }
}

async function getDishById(id: number | string) {
  try {
    const res = await nami_api.get(`/dish/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return res.data
  } catch (err: any) {
    const message = err.response?.data?.message || err.message || 'Error al obtener el plato'
    throw new Error(message)
  }
}

export const dishesService = {
  getAllDishes,
  getDishById
}
