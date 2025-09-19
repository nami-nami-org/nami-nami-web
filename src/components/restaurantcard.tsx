import { Star } from "lucide-react";

export default function RestaurantCard({ image, logo, name, rating, time, price }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition w-[380px] h-[170px] flex flex-col">  {/* Imagen principal */}
      <div className="relative w-full h-[90px]">
        <img src={image} alt={name} className="w-full h-full object-cover" />

        {/* Rating */}
        <div className="absolute top-2 right-2 flex items-center bg-white rounded-full px-2 py-1 shadow">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="ml-1 text-sm font-semibold">{rating}</span>
        </div>
      </div>

      {/* Info del restaurante */}
      <div className="flex items-start gap-3 p-3 flex-1">
        {/* Logo */}
        <img src={logo} alt={name} className="w-12 h-12 rounded-md object-cover" />

        {/* Detalles */}
        <div className="flex flex-col justify-center">
          <h3 className="font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600">
            {time} · <span className="text-red-500 font-semibold">{price}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
