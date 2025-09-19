import { Star } from "lucide-react";

export default function TrendCard({ name, rating, image }) {
  return (
    <div className="relative flex flex-col items-center justify-center p-2 rounded-xl shadow-sm bg-gray-50 hover:shadow-md transition min-w-[100px] min-h-[120px] mx-1 my-1">
      {/* Rating */}
      <div className="absolute top-2 right-2 flex items-center gap-1 bg-white/80 rounded-lg px-1.5 py-0.5">
        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
        <span className="text-xs font-medium text-gray-700">{rating}</span>
      </div>

      {/* Imagen */}
      <img src={image} alt={name} className="w-16 h-16 object-contain mb-3" />

      {/* Nombre */}
      <h3 className="text-xs font-semibold text-gray-800 text-center">{name}</h3>
    </div>
  );
}
