import DishCard from './DishCard'

const dishes = [
  {
    name: 'Special Ceviche',
    price: 35,
    image: '/images/ceviche.png',
    rating: 3.7,
    reviews: 120
  },
  {
    name: 'Lomo Saltado',
    price: 40,
    image: '/images/lomo.png',
    rating: 4.5,
    reviews: 200
  },
  {
    name: 'Cuy Chactado',
    price: 40,
    image: '/images/cuy.png',
    rating: 2.7,
    reviews: 200
  },
  {
    name: 'Limeña Causa',
    price: 40,
    image: '/images/causa.png',
    rating: 3.45,
    reviews: 200
  },
  {
    name: 'Cuy Chactado',
    price: 40,
    image: '/images/cuy.png',
    rating: 4.6,
    reviews: 200
  },
  {
    name: 'Limeña Causa',
    price: 40,
    image: '/images/causa.png',
    rating: 2.2,
    reviews: 200
  }
]

const DishesList: React.FC = () => {
  return (
    <div className='flex flex-wrap justify-center gap-5'>
      {dishes.map((dish, index) => (
        <DishCard key={index} {...dish} />
      ))}
    </div>
  )
}

export default DishesList
