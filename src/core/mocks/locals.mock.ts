export interface Local {
  id: number
  name: string
  description: string
  image: string
  avg_rating: number
  total_reviews: number
  address: string
  is_open: boolean
  opening_time: string
  closing_time: string
  distance: number
  total_orders: number
  category: string[]
  phone?: string
  email?: string
}

export const MOCK_LOCALS: Local[] = [
  {
    id: 1,
    name: "El Rincón del Sabor",
    description: "Cocina peruana tradicional con los mejores platos criollos y mariscos frescos",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    avg_rating: 4.8,
    total_reviews: 245,
    address: "Av. Arequipa 1234, Miraflores",
    is_open: true,
    opening_time: "12:00",
    closing_time: "23:00",
    distance: 1.2,
    total_orders: 1500,
    category: ['Restaurantes', 'Cevichería'],
    phone: "+51 999 888 777",
    email: "contacto@rincon.com"
  },
  {
    id: 2,
    name: "La Chalana Cevichería",
    description: "Los mejores ceviches y tiraditos de Lima, pescado fresco todos los días",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800",
    avg_rating: 4.9,
    total_reviews: 189,
    address: "Calle Los Pinos 567, San Isidro",
    is_open: true,
    opening_time: "11:00",
    closing_time: "18:00",
    distance: 2.5,
    total_orders: 980,
    category: ['Cevichería'],
    phone: "+51 998 765 432"
  },
  {
    id: 3,
    name: "Chifa Dragón Dorado",
    description: "Auténtica comida china-peruana, especialidad en arroz chaufa y tallarín saltado",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
    avg_rating: 4.6,
    total_reviews: 312,
    address: "Jr. Carabaya 890, Cercado de Lima",
    is_open: false,
    opening_time: "12:00",
    closing_time: "22:00",
    distance: 3.8,
    total_orders: 2100,
    category: ['Chifa'],
    phone: "+51 997 654 321"
  },
  {
    id: 4,
    name: "Pardo's Chicken",
    description: "Pollo a la brasa estilo Pardo's, el sabor que todos aman",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800",
    avg_rating: 4.7,
    total_reviews: 567,
    address: "Av. Javier Prado 2345, San Borja",
    is_open: true,
    opening_time: "11:30",
    closing_time: "23:30",
    distance: 1.8,
    total_orders: 3200,
    category: ['Pollería'],
    phone: "+51 996 543 210"
  },
  {
    id: 5,
    name: "Pizzería Bella Nápoles",
    description: "Pizzas artesanales en horno de leña, masa madre y ingredientes importados",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
    avg_rating: 4.5,
    total_reviews: 234,
    address: "Calle Schell 456, Miraflores",
    is_open: true,
    opening_time: "18:00",
    closing_time: "00:00",
    distance: 0.9,
    total_orders: 890,
    category: ['Pizzería'],
    phone: "+51 995 432 109"
  },
  {
    id: 6,
    name: "Café Cultural Lima",
    description: "Cafetería con arte local, café de especialidad y postres caseros",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800",
    avg_rating: 4.8,
    total_reviews: 156,
    address: "Av. Benavides 789, Barranco",
    is_open: true,
    opening_time: "08:00",
    closing_time: "20:00",
    distance: 2.1,
    total_orders: 650,
    category: ['Cafetería'],
    phone: "+51 994 321 098"
  },
  {
    id: 7,
    name: "Burger King Express",
    description: "Hamburguesas rápidas, combos y promociones todo el día",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800",
    avg_rating: 4.3,
    total_reviews: 789,
    address: "Av. Universitaria 1234, Los Olivos",
    is_open: true,
    opening_time: "10:00",
    closing_time: "23:00",
    distance: 5.2,
    total_orders: 4500,
    category: ['Fast Food'],
    phone: "+51 993 210 987"
  },
  {
    id: 8,
    name: "La Parrilla del Tío",
    description: "Carnes premium a la parrilla, parrilladas familiares y anticuchos",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
    avg_rating: 4.9,
    total_reviews: 421,
    address: "Av. La Marina 3456, Pueblo Libre",
    is_open: false,
    opening_time: "18:00",
    closing_time: "01:00",
    distance: 3.2,
    total_orders: 1800,
    category: ['Parrilla'],
    phone: "+51 992 109 876"
  },
  {
    id: 9,
    name: "Mariscos del Sur",
    description: "Especialidad en mariscos frescos, jalea mixta y sudados",
    image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=800",
    avg_rating: 4.7,
    total_reviews: 298,
    address: "Calle Conquistadores 567, San Miguel",
    is_open: true,
    opening_time: "11:00",
    closing_time: "19:00",
    distance: 2.7,
    total_orders: 1200,
    category: ['Cevichería', 'Restaurantes'],
    phone: "+51 991 098 765"
  },
  {
    id: 10,
    name: "El Palacio Criollo",
    description: "Comida criolla casera, seco de res, ají de gallina y más",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    avg_rating: 4.6,
    total_reviews: 167,
    address: "Jr. Ancash 234, Cercado de Lima",
    is_open: true,
    opening_time: "10:00",
    closing_time: "17:00",
    distance: 4.1,
    total_orders: 780,
    category: ['Restaurantes'],
    phone: "+51 990 987 654"
  },
  {
    id: 11,
    name: "Sushi Nikkei Fusión",
    description: "Fusión nikkei, makis creativos y sashimi fresco",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800",
    avg_rating: 4.8,
    total_reviews: 345,
    address: "Av. Conquistadores 890, San Isidro",
    is_open: true,
    opening_time: "12:30",
    closing_time: "23:00",
    distance: 1.5,
    total_orders: 1650,
    category: ['Restaurantes'],
    phone: "+51 989 876 543"
  },
  {
    id: 12,
    name: "Pollería Norky's",
    description: "Pollo a la brasa tradicional, papas fritas crujientes",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800",
    avg_rating: 4.4,
    total_reviews: 456,
    address: "Av. Aviación 1234, San Borja",
    is_open: true,
    opening_time: "11:00",
    closing_time: "23:00",
    distance: 2.3,
    total_orders: 2800,
    category: ['Pollería'],
    phone: "+51 988 765 432"
  }
]

// Función helper para filtrar por categoría
export const getLocalsByCategory = (category: string): Local[] => {
  if (category === 'Todos') return MOCK_LOCALS
  return MOCK_LOCALS.filter(local => local.category.includes(category))
}

// Función helper para buscar
export const searchLocals = (query: string): Local[] => {
  const searchTerm = query.toLowerCase().trim()
  return MOCK_LOCALS.filter(local => 
    local.name.toLowerCase().includes(searchTerm) ||
    local.description.toLowerCase().includes(searchTerm) ||
    local.address.toLowerCase().includes(searchTerm)
  )
}

// Función helper para filtrar por rating
export const getLocalsByRating = (minRating: number): Local[] => {
  return MOCK_LOCALS.filter(local => local.avg_rating >= minRating)
}

// Función helper para ordenar
export const sortLocals = (locals: Local[], sortBy: string): Local[] => {
  const sorted = [...locals]
  
  switch (sortBy) {
    case 'Mejor calificación':
      return sorted.sort((a, b) => b.avg_rating - a.avg_rating)
    case 'Más cercanos':
      return sorted.sort((a, b) => a.distance - b.distance)
    case 'Más populares':
    default:
      return sorted.sort((a, b) => b.total_orders - a.total_orders)
  }
}