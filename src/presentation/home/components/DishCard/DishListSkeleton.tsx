import DishCardSkeleton from './DishCardSkeleton'

export default function DishListSkeleton() {
  return (
    <section className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {Array.from({ length: 6 }).map((_, i) => (
        <DishCardSkeleton key={i} />
      ))}
    </section>
  )
}
