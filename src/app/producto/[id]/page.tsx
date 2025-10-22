'use client'

import ProductDetail from '@/presentation/product-detail'
import { useParams } from 'next/navigation'

// Mock data - in a real app, this would come from an API or database
const mockProducts = [
  {
    id: '1',
    name: 'Special Ceviche',
    price: 35,
    image: '/images/ceviche.png',
    rating: 3.7,
    reviews: 120,
    description:
      'Ceviche fresco preparado con pescado del día, limón, cebolla morada, ají limo y cilantro. Acompañado de camote y choclo. Un clásico de la gastronomía peruana.'
  },
  {
    id: '2',
    name: 'Lomo Saltado',
    price: 40,
    image: '/images/lomo.png',
    rating: 4.5,
    reviews: 200,
    description:
      'Jugoso lomo de res salteado con cebolla, tomate y papas fritas. Servido con arroz blanco. Una fusión perfecta de sabores peruanos y asiáticos.'
  },
  {
    id: '3',
    name: 'Cuy Chactado',
    price: 40,
    image: '/images/cuy.png',
    rating: 2.7,
    reviews: 200,
    description:
      'Cuy tradicional preparado al estilo andino, dorado y crujiente. Acompañado de papas doradas y salsa huancaína. Un platillo emblemático de la sierra peruana.'
  },
  {
    id: '4',
    name: 'Limeña Causa',
    price: 40,
    image: '/images/causa.png',
    rating: 3.45,
    reviews: 200,
    description:
      'Causa limeña con papa amarilla, ají amarillo, limón y relleno de pollo o atún. Decorada con huevo, aceitunas y salsa golf. Un entrante fresco y delicioso.'
  }
]

export default function ProductPage() {
  const params = useParams()
  const id = params.id as string

  // Find the product by id
  const product = mockProducts.find(p => p.id === id) || mockProducts[0]

  return <ProductDetail {...product} />
}
