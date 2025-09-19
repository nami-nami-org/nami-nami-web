import PlatilloCard from './PlatillosList'

const platillos = [
  {
    nombre: 'Ceviche Especial',
    precio: 35,
    imagen: '/images/ceviche.png',
    rating: 4,
    reseñas: 120
  },
  {
    nombre: 'Lomo Saltado',
    precio: 40,
    imagen: '/images/lomo.png',
    rating: 5,
    reseñas: 200
  },
  {
    nombre: 'Cuy Chactado',
    precio: 40,
    imagen: '/images/cuy.png',
    rating: 5,
    reseñas: 200
  },
  {
    nombre: 'Causa Limeña',
    precio: 40,
    imagen: '/images/causa.png',
    rating: 5,
    reseñas: 200
  },
  {
    nombre: 'Cuy Chactado',
    precio: 40,
    imagen: '/images/cuy.png',
    rating: 5,
    reseñas: 200
  },
  {
    nombre: 'Causa Limeña',
    precio: 40,
    imagen: '/images/causa.png',
    rating: 5,
    reseñas: 200
  }
]

const PlatillosList: React.FC = () => {
  return (
    <div className='flex flex-wrap gap-5'>
      {platillos.map((platillo, index) => (
        <PlatilloCard key={index} {...platillo} />
      ))}
    </div>
  )
}

export default PlatillosList
