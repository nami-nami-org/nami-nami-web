import nami_api from './root.service'

// =============== MOCK DE LOCALS ==================

const localsMock = [
  {
    id: 1,
    restaurant_id: 10,
    altitude: 2450.5,
    average_delivery_time: 25,
    average_rating: 4.7,
    delivery_available: true,
    delivery_cost: 5.0,
    longitude: -77.0428,
    latitude: -12.0464,
    closing_time: "22:00:00",
    opening_time: "08:00:00",
    created_at: "2024-11-18T10:00:00Z",
    updated_at: "2024-11-18T12:00:00Z",
    phone: "987654321",
    local_name: "Local San Isidro",
    trade_name: "Nami Sushi",
    address: "Av. Javier Prado 123, San Isidro",
    description: "Local especializado en sushi premium.",
    direction: "Frente al banco BCP",
    status: "ACTIVE",
    images: [
      "https://cdn.nami.com/local1/img1.jpg",
      "https://cdn.nami.com/local1/img2.jpg"
    ]
  },
  {
    id: 2,
    restaurant_id: 10,
    altitude: 2400.0,
    average_delivery_time: 30,
    average_rating: 4.5,
    delivery_available: false,
    delivery_cost: 0,
    longitude: -77.0501,
    latitude: -12.0568,
    closing_time: "21:00:00",
    opening_time: "09:00:00",
    created_at: "2024-11-18T10:20:00Z",
    updated_at: "2024-11-18T13:10:00Z",
    phone: "912345678",
    local_name: "Local Miraflores",
    trade_name: "Nami Sushi",
    address: "Calle Berlín 500, Miraflores",
    description: "Local con ambiente moderno y terraza.",
    direction: "A una cuadra del parque Kennedy",
    status: "ACTIVE",
    images: [
      "https://cdn.nami.com/local2/img1.jpg",
      "https://cdn.nami.com/local2/img2.jpg"
    ]
  }
]

// ==================================================

// Obtener todos los locals (mock)
async function getAllLocals() {
  try {
    return localsMock
  } catch (err: any) {
    throw new Error("Error al obtener locals")
  }
}

// Obtener 1 local por id (mock)
async function getLocalById(id: number | string) {
  try {
    const local = localsMock.find(l => l.id === Number(id))
    if (!local) throw new Error("Local no encontrado")
    return local
  } catch (err: any) {
    const message = err.message || "Error al obtener local"
    throw new Error(message)
  }
}

export const localsService = {
  getAllLocals,
  getLocalById
}
