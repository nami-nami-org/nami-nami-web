"use client"
import { useState } from "react"

export default function SearchBox() {
  const [query, setQuery] = useState("")

  const handleSearch = () => {
    alert(`Buscando: ${query}`) // 🔍 por ahora solo muestra lo que escribes
  }

  return (
    <div className="flex items-center justify-center gap-3 my-8">
      <input
        type="text"
        placeholder="Escribe un platillo..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-300 rounded-lg px-6 py-8 w-[500px] text-lg"
      />
      <button
        onClick={handleSearch}
        className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition text-lg"
      >
        Buscar
      </button>
    </div>
  )
}
