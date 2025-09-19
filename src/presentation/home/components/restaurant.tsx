import RestaurantCard from "./restaurantcard";

export default function Restaurants() {
  // Array de restaurantes
  const restaurants = [
    {
      image: "/imagenes/burritos texmex.jpeg",
      logo: "/imagenes/burritos texmex.jpeg",
      name: "Nocturnos Tex Mex Surquillo",
      rating: 4.7,
      time: "20-35 min",
      price: "S/ 14.90",
    },
    {
      image: "/images/texmex-carne.jpg",
      logo: "/images/logo-texmex.png",
      name: "Tex Mex Grill",
      rating: 4.6,
      time: "25-40 min",
      price: "S/ 18.50",
    },
    {
      image: "/images/texmex-postre.jpg",
      logo: "/images/logo-texmex.png",
      name: "Tex Mex Dulce",
      rating: 4.9,
      time: "15-25 min",
      price: "S/ 12.00",
    },
  ];

  return (
    <div className="ml-35 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 p-4">

      {restaurants.map((rest, index) => (
        <RestaurantCard key={index} {...rest} />
      ))}
    </div>
  );
}
