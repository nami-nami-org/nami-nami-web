import BigDishCardSkeleton from './BigDishCardSkeleton'

export default function BigDishListSkeleton() {
  return (
    <section className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {Array.from({ length: 6 }).map((_, i) => (
        <BigDishCardSkeleton key={i} />
      ))}
    </section>
  )
}
