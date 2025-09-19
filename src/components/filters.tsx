export function Filters() {
    const Opciones = ['🥬 algo ligero', '🌶️bien picante', '🐟 Ceviche', 'Criollo', '🥢Chifa', '🍕Pizza', '🍨 Postre', '❓ Sorprendeme', '💰Barato', '⏰Menos de 30 min']

  return (
    <div className="flex flex-wrap justify-center gap-2 p-4">
      {Opciones.map((opcion) => (
        <button
          key={opcion}
          className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
        >
          {opcion}
        </button>
      ))}
    </div>
     
  )
}

