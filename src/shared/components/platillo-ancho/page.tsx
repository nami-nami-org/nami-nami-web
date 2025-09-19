import Image from "next/image";
import { Star } from "lucide-react";

interface PlatilloCardProps {
  nombre: string;
  precio: number;
  imagen: string;
  rating?: number;
  reseñas?: number;
}

export default function PlatilloCard({
  nombre,
  precio,
  imagen,
  rating = 5,
  reseñas = 0,
}: PlatilloCardProps) {
  return (
    <div className="w-full max-w-lg bg-neutral-800 rounded-2xl shadow-md overflow-hidden">
      {/* Imagen destacada */}
      <div className="relative w-full h-56">
        <Image
          src={imagen}
          alt={nombre}
          fill
          className="object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-white">{nombre}</h2>
        <p className="text-lg font-bold text-red-400 mt-1">S/ {precio.toFixed(2)}</p>

        {/* Ranking */}
        <div className="flex items-center gap-1 mt-2 text-yellow-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={18}
              fill={i < rating ? "currentColor" : "none"}
            />
          ))}
          <span className="text-sm text-gray-400 ml-2">({reseñas} reseñas)</span>
        </div>

        <button className="mt-4 w-full bg-red-500 text-white font-medium py-2 rounded-xl hover:bg-red-600 transition">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
