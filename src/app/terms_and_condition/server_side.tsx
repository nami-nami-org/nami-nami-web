import cardTerminos from '@/app/db_card/terms_cards.json'

const CardsTerminos = () => {
  return (
    <section className="grid gap-4">
      {cardTerminos.map((card, idx) => (
        <div key={idx} className="border rounded-lg p-4 shadow bg-neutral-900">
          <span className="text-2xl">{card.emoji}</span>
          <h2 className="font-bold mt-2">{card.title}</h2>
          <p className="mt-1 text-gray-300">{card.content}</p>
        </div>
      ))}
    </section>
  )
}

export default CardsTerminos