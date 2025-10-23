import VerticalDishCard from '@/shared/ui/components/VerticalDishCard'
import type { FC } from 'react'

const RelatedProducts: FC = () => {
  return (
    <section className='mt-16'>
      <h2 className='font-instrument text-fn1 mb-6 text-2xl'>También te puede gustar</h2>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
        {[1, 2, 3, 4].map(i => (
          <VerticalDishCard key={i} dish={{} as any} />
        ))}
      </div>
    </section>
  )
}

export default RelatedProducts
