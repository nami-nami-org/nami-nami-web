export function Filters() {
  const options = [
    '🥬 algo ligero',
    '🌶️ bien picante',
    '🐟 Ceviche',
    '🍗 Criollo',
    '🥢 Chifa',
    '🍕 Pizza',
    '🍨 Postre',
    '❓ Sorprendeme',
    '💰 Barato',
    '⏰ Menos de 30 min'
  ]

  return (
    <div className='gap-2bg-amber-300 m-auto flex w-full max-w-[600px] flex-wrap justify-center gap-3.5'>
      {options.map(option => (
        <button key={option} className='bg-bg1 border-bg3 hover:bg-bg3 rounded-full px-4 py-2 text-sm shadow-sm'>
          <h4>{option}</h4>
        </button>
      ))}
    </div>
  )
}
