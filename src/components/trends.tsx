import TrendCard from "./trendscard";

export default function Trends() {
  const products = [
    { name: "Pizza N Cono", rating: 4.7, image: "/imagenes/pizza en cono.jpeg" },
    { name: "Caldo de Gallina", rating: 4.5, image: "/imagenes/caldo de gallina.png" },
    { name: "Hamburguesa de carne", rating: 4.7, image: "/imagenes/hamburguesa.jpeg" },
    { name: "Maki variado", rating: 4.9, image: "/imagenes/maki variado.jpeg" },
    { name: "Sashimi de Salmón", rating: 5.0, image: "/imagenes/sashimi salmon.jpeg" },
  ];

  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {products.map((p, i) => (
          <div key={i} className="w-full aspect-square">
            <TrendCard {...p} />
          </div>
        ))}
      </div>
    </div>
  );
}
