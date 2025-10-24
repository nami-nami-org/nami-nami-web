import nami_api from "./root.service"

async function getAllDishes() {
  try {
    const res = await nami_api.get('/dish', { headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqZ29uemFsZXpjaGFjYUBnbWFpbC5jb20iLCJpYXQiOjE3NjEyNzk4MzksImV4cCI6MTc2MTM2NjIzOX0.PCBwekFKbKoAAxKiNCajM_ls4_cTCPamIY3FlUPfn6GH8VfeJxUIlBx6W9dIuVmFjGT13o1uOwJXoynDrn0x2w' },  })
    return res.data
    
  } catch (err: any) {
    const message = err.response?.data?.message || err.message || 'Error al obtener usuarios'
    throw new Error(message)
  }
}
export const dishesService = {
  getAllDishes
}
