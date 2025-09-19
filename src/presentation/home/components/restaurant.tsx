import RestaurantCard from './restaurantcard'

export default function Restaurants() {
  // Array de restaurantes
  const restaurants = [
    {
      image: '/imagenes/burritos texmex.jpeg',
      logo: '/imagenes/burritos texmex.jpeg',
      name: 'Nocturnos Tex Mex Surquillo',
      rating: 4.7,
      time: '20-35 min',
      price: 'S/ 14.90'
    },
    {
      image: '/imagenes/burritos texmex.jpeg',
      logo: '/imagenes/burritos texmex.jpeg',
      name: 'Tex Mex Grill',
      rating: 4.6,
      time: '25-40 min',
      price: 'S/ 18.50'
    },
    {
      image: '/imagenes/burritos texmex.jpeg',
      logo: '/imagenes/burritos texmex.jpeg',
      name: 'Tex Mex Dulce',
      rating: 4.9,
      time: '15-25 min',
      price: 'S/ 12.00'
    }
  ]

  return (
    <div className='flex flex-wrap gap-5'>
      {restaurants.map((rest, index) => (
        <RestaurantCard key={index} {...rest} />
      ))}
    </div>
  )
}
