"use client";

import { useState } from "react";
import { Mic, Search } from "lucide-react";
import CategoryFilters from "./CategoryFilters";
import FilterPanel from "./FilterPanel";
import RestaurantCard from "../home/components/restaurantcard";

export default function PlatillosPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedSort, setSelectedSort] = useState("Más reseñas");
  const [selectedCompanySize, setSelectedCompanySize] = useState("Grande");

  // 🧩 Categorías
  const categories = [
    { name: "Todos", emoji: "" },
    { name: "Algo Picante", emoji: "🌶️" },
    { name: "Ceviche", emoji: "🐟" },
    { name: "Criollo", emoji: "🍖" },
    { name: "Salchipapas", emoji: "🌭" },
    { name: "Pizza", emoji: "🍕" },
    { name: "Postres", emoji: "🍰" },
  ];

  // ⭐ Opciones de orden (para el panel)
  const sortOptions = [
    { name: "Más reseñas", emoji: "⭐" },
    { name: "Calificación", emoji: "🔥" },
    { name: "Barato", emoji: "💰" },
    { name: "Tiempo de entrega", emoji: "⏱️" },
  ];

  // 🏪 Tamaño de empresa
  const companySize = [
    { name: "Grande", emoji: "🏢" },
    { name: "Mediano", emoji: "🏬" },
    { name: "Pequeño", emoji: "🏠" },
    { name: "Nuevo", emoji: "🆕" },
  ];

  // 🍽 Platillos
  const dishes = [
    {
      id: 1,
      name: "Nocturnos Tex Mex Surquillo",
      image: "/tex-mex-food-colorful.jpg",
      logo: "/tex-mex-food-colorful.jpg",
      rating: 4.7,
      time: "20-35 min",
      price: "S/ 14.90",
    },
    {
      id: 2,
      name: "Tacos Mexicanos",
      image: "/tex-mex-tacos-colorful.jpg",
      logo: "/tex-mex-food-colorful.jpg",
      rating: 4.5,
      time: "15-25 min",
      price: "S/ 12.90",
    },
    {
      id: 3,
      name: "Ceviche Clásico",
      image: "/mexican-food-platter.jpg",
      logo: "/tex-mex-food-colorful.jpg",
      rating: 4.8,
      time: "30-40 min",
      price: "S/ 18.50",
    },
    {
      id: 4,
      name: "Burrito Especial",
      image: "/tex-mex-burrito-bowl.jpg",
      logo: "/tex-mex-food-colorful.jpg",
      rating: 4.6,
      time: "20-35 min",
      price: "S/ 16.00",
    },
  ];

  return (
    <div className="min-h-screen bg-bg1">
      {/* Filtros de categoría */}
      <CategoryFilters
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Contenedor principal */}
      <div className="max-w-[1400px] mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* 🧱 Panel lateral de filtros */}
          <FilterPanel
            sortOptions={sortOptions}
            companySize={companySize}
            selectedSort={selectedSort}
            onSelectSort={setSelectedSort}
            selectedCompanySize={selectedCompanySize}
            onSelectCompanySize={setSelectedCompanySize}
          />

          {/* 🍽 Contenido principal */}
          <main className="flex-1">
            {/* Barra de búsqueda */}
            <div className="mb-6">
              <div className="flex items-center gap-2 bg-bg2 rounded-lg px-4 py-3 border border-bg3">
                <input
                  type="text"
                  placeholder="Se me antojó..."
                  className="flex-1 bg-transparent text-fn1 placeholder:text-fn2 outline-none"
                />
                <button className="p-1 hover:bg-bg3 rounded transition-colors">
                  <Mic className="w-5 h-5 text-fn2" />
                </button>
                <button className="p-1 hover:bg-bg3 rounded transition-colors">
                  <Search className="w-5 h-5 text-fn1" />
                </button>
              </div>
            </div>

            {/* Título */}
            <h2 className="text-2xl font-bold text-fn1 mb-6">Platillos</h2>

            {/* 🧆 Lista de platillos */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {dishes.map((rest) => (
                <RestaurantCard key={rest.id} {...rest} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
