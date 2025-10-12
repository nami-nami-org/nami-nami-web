/* eslint-disable @typescript-eslint/no-explicit-any */
import nami_api from './root.service'

async function getAllDishes() {
  try {
    // const res = await nami_api.get('/dishes')
    // return res.data
    return [
      {
        id: '1',
        name: 'Special Ceviche',
        price: 35,
        image: '/images/ceviche.png',
        rating: 3.7,
        reviews: 120
      },
      {
        id: '2',
        name: 'Lomo Saltado',
        price: 40,
        image: '/images/lomo.png',
        rating: 4.5,
        reviews: 200
      },
      {
        id: '3',
        name: 'Cuy Chactado',
        price: 40,
        image: '/images/cuy.png',
        rating: 2.7,
        reviews: 200
      },
      {
        id: '4',
        name: 'Limeña Causa',
        price: 40,
        image: '/images/causa.png',
        rating: 3.45,
        reviews: 200
      },
      {
        id: '5',
        name: 'Cuy Chactado',
        price: 40,
        image: '/images/cuy.png',
        rating: 4.6,
        reviews: 200
      },
      {
        id: '6',
        name: 'Limeña Causa',
        price: 40,
        image: '/images/causa.png',
        rating: 2.2,
        reviews: 200
      }
    ]
  } catch (err: any) {
    const message = err.response?.data?.message || err.message || 'Error al obtener usuarios'
    throw new Error(message)
  }
}
export const dishedService = {
  getAllDishes
}
