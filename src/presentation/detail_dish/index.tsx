import { Clock, Star, Heart, ShoppingCart, MapPin, Info } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import StarRating from '@/shared/ui/components/StarRating'

export default function PlatilloDetalle() {
  return (
    <div className="min-h-screen bg-bg1">

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-bg2">
              <Image
                src="/delicious-tex-mex-burrito-with-grilled-meat--veget.jpg"
                alt="Nocturnos Tex Mex Surquillo"
                fill
                className="object-cover"
                priority
              />
              <button className="absolute top-4 right-4 w-12 h-12 bg-bg1/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-bg1 transition-colors">
                <Heart className="w-5 h-5 text-tn1" />
              </button>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-lg overflow-hidden bg-bg2 cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <Image
                    src={`/tex-mex-food-detail-.jpg?height=200&width=200&query=tex mex food detail ${i}`}
                    alt={`Vista ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            {/* Restaurant Badge */}
            <div className="inline-flex items-center gap-2 bg-bg2 px-4 py-2 rounded-full">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-tn1">
                <Image
                  src="/restaurant-logo.png"
                  alt="Restaurant"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span className="text-fn1 font-medium">Nocturnos</span>
            </div>

            {/* Title and Rating */}
            <div>
              <h1 className="font-instrument text-fn1 text-4xl mb-3">Tex Mex Surquillo</h1>
              <div className="flex items-center gap-4 text-fn2">
                <div className="flex items-center gap-1">
                  <StarRating rating={4.7} />
                  <span className="font-semibold text-fn1">4.7</span>
                  <span>(128 reseñas)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-5 h-5" />
                  <span>20-30 min</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-tn1">S/ 14.90</span>
              <span className="text-fn2 line-through">S/ 18.90</span>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h3 className="font-semibold text-fn1 text-lg">Descripción</h3>
              <p className="text-fn2 leading-relaxed">
                Delicioso burrito estilo Tex-Mex preparado con tortilla de harina suave, relleno de carne asada jugosa,
                frijoles negros, arroz mexicano, queso cheddar derretido, pico de gallo fresco, guacamole cremoso y
                crema ácida. Acompañado de nachos crujientes y salsa picante al lado.
              </p>
            </div>

            {/* Ingredients/Tags */}
            <div className="space-y-3">
              <h3 className="font-semibold text-fn1 text-lg">Categorias Principales</h3>
              <div className="flex flex-wrap gap-2">
                {["Carne asada", "Frijoles", "Queso", "Guacamole", "Pico de gallo", "Tortilla"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-bg2 text-fn1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-bg2 rounded-xl p-4 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-tn1 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-fn1 mb-1">Información de entrega</h4>
                  <p className="text-fn2 text-sm">
                    Disponible para delivery en Surquillo y distritos cercanos. Tiempo estimado: 20-30 minutos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-tn1 mt-0.5" />
                <div>
                  <p className="text-fn2 text-sm">Delivery gratis en pedidos mayores a S/ 30.00</p>
                </div>
              </div>
            </div>

            {/* Quantity Selector and Add to Cart */}
            <div className="flex gap-4 pt-4">
              <div className="flex items-center gap-3 bg-bg2 rounded-full px-4">
                <button className="w-8 h-8 flex items-center justify-center text-fn1 hover:text-tn1 transition-colors">
                  <span className="text-xl">−</span>
                </button>
                <span className="font-semibold text-fn1 min-w-[2ch] text-center">1</span>
                <button className="w-8 h-8 flex items-center justify-center text-fn1 hover:text-tn1 transition-colors">
                  <span className="text-xl">+</span>
                </button>
              </div>
              <button className="flex-1 bg-tn1 text-fnA py-4 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                <span>Agregar al carrito</span>
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <h2 className="font-instrument text-fn1 text-2xl mb-6">También te puede gustar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Link
                key={i}
                href={`/platillo/${i}`}
                className="group bg-bg1 rounded-xl overflow-hidden border border-bg3 hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[4/3] bg-bg2">
                  <Image
                    src={`/mexican-food-dish-.jpg?height=300&width=400&query=mexican food dish ${i}`}
                    alt={`Platillo ${i}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-tn1 text-fnA px-3 py-1 rounded-full text-xs font-semibold">
                    4.{5 + i}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-tn2" />
                    <span className="text-fn2 text-sm">Nocturnos</span>
                  </div>
                  <h3 className="font-semibold text-fn1 mb-2 group-hover:text-tn1 transition-colors">
                    Platillo Especial {i}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-tn1 font-bold">S/ {12 + i}.90</span>
                    <span className="text-fn2 text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      20-30 min
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
