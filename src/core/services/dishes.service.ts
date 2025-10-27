import nami_api from "./root.service"

async function getAllDishes() {
  try {
    const res = await nami_api.get('/dish', { headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqZ29uemFsZXpjaGFjYUBnbWFpbC5jb20iLCJpYXQiOjE3NjEyOTE3NzEsImV4cCI6MTc2MTM3ODE3MX0.ongM4O75XbEKdoMGdOxfSwN18Jv_TlSRE2exNKZWOwsQavvL-GcWSTfEpJXv8k5_uY_muC_4ijvHJZ3lL5rUqw' },  })
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
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqZ29uemFsZXpjaGFjYUBnbWFpbC5jb20iLCJpYXQiOjE3NjEyOTE3NzEsImV4cCI6MTc2MTM3ODE3MX0.ongM4O75XbEKdoMGdOxfSwN18Jv_TlSRE2exNKZWOwsQavvL-GcWSTfEpJXv8k5_uY_muC_4ijvHJZ3lL5rUqw'
      },
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
