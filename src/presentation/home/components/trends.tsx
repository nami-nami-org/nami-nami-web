import TrendCard from './trendscard'

export default function Trends() {
  const products = [
    { name: 'Pizza N Cono', rating: 4.7, image: '/imagenes/pizza en cono.jpeg' },
    { name: 'Caldo de Gallina', rating: 4.5, image: '/imagenes/caldo de gallina.png' },
    { name: 'Hamburguesa de carne', rating: 4.7, image: '/imagenes/hamburguesa.jpeg' },
    { name: 'Maki variado', rating: 4.9, image: '/imagenes/maki variado.jpeg' },
    { name: 'Sashimi de Salmón', rating: 5.0, image: '/imagenes/sashimi salmon.jpeg' }
  ]

  return (
    <div className='mx-auto w-full'>
      <div className='flex flex-row flex-wrap gap-4'>
        {products.map((p, i) => (
          <TrendCard {...p} key={i} />
        ))}
      </div>
    </div>
  )
}
