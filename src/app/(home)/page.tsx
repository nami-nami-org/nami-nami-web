import PlatilloCard from "@/shared/components/platillo-ancho/page";
import Footer from '@/shared/components/footer/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-900 p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Recomendados 🍽️</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PlatilloCard
          nombre="Ceviche Especial"
          precio={35}
          imagen="/images/ceviche.png"
          rating={4}
          reseñas={120}
        />
        <PlatilloCard
          nombre="Lomo Saltado"
          precio={40}
          imagen="/images/lomo.png"
          rating={5}
          reseñas={200}
        />
        <PlatilloCard
          nombre="Cuy Chactado"
          precio={40}
          imagen="/images/cuy.png"
          rating={5}
          reseñas={200}
        />
        <PlatilloCard
          nombre="Causa Limeña"
          precio={40}
          imagen="/images/causa.png"
          rating={5}
          reseñas={200}
        />
        <Footer />
      </div>
    </div>
  );
}
