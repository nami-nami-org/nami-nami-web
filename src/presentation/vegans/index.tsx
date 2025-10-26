"use client"

import { useState } from "react";
import RestaurantTarget from "@/presentation/restaurants/RestaurantTarget";
import CategoryFilters from "../dishes/CategoryFilters";
import FilterPanel from "../dishes/FilterPanel";

interface Restaurant {
    id: number;
    name: string;
    image: string;
    time: string;
    description: string;
    phone: string;
}

const sampleeRestaurants: Restaurant[] = [
    {
        id: 1,
        name: "Verde Vida",
        image: "/assets/images/vegan-bowl.jpg",
        time: "20-35 min",
        description: "Comida 100% vegana con ingredientes orgánicos y locales. Prueba nuestros bowls energéticos y jugos naturales.",
        phone: "555-1111",
    },
    {
        id: 2,
        name: "Plant Power",
        image: "/assets/images/vegan-burger.jpg",
        time: "25-40 min",
        description: "Hamburguesas y wraps veganos hechos con proteína vegetal y pan artesanal. ¡Sabor sin crueldad!",
        phone: "555-2222",
    },
    {
        id: 3,
        name: "Green & Go",
        image: "/assets/images/vegan-salad.jpg",
        time: "15-25 min",
        description: "Ensaladas frescas, smoothies y snacks saludables para llevar. Ideal para un almuerzo rápido y natural.",
        phone: "555-3333",
    },
    {
        id: 4,
        name: "Raíces Urbanas",
        image: "/assets/images/vegan-tacos.jpg",
        time: "20-30 min",
        description: "Tacos veganos con heura, lentejas y salsas caseras. Fusión entre lo tradicional y lo saludable.",
        phone: "555-4444",
    },
    {
        id: 5,
        name: "La Hoja Verde",
        image: "/assets/images/vegan-pasta.jpg",
        time: "25-35 min",
        description: "Pastas y pizzas 100% veganas, con quesos vegetales caseros y opciones sin gluten.",
        phone: "555-5555",
    },
    {
        id: 6,
        name: "EcoSabor",
        image: "/assets/images/vegan-dessert.jpg",
        time: "30-45 min",
        description: "Postres y repostería vegana con cacao orgánico, frutas frescas y endulzantes naturales.",
        phone: "555-6666",
    },
];



export default function RestaurantsTargetVegans() {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSort, setSelectedSort] = useState("Más reseñas");
    const [selectedCompanySize, setSelectedCompanySize] = useState("");

    const categories = [
        { name: "Algo Picante", emoji: "🌶️" },
        { name: "Ceviche", emoji: "🐟" },
        { name: "Criollo", emoji: "🍲" },
        { name: "Salchipapas", emoji: "🥔" },
        { name: "Pizza", emoji: "🍕" },
        { name: "Postres", emoji: "🍰" },
    ];

    const sortOptions = [
        { name: "Más reseñas", emoji: "⭐" },
        { name: "Calificación", emoji: "👍" },
        { name: "Barato", emoji: "💸" },
        { name: "Tiempo de preparación", emoji: "⏱️" },
    ];

    const companySize = [
        { name: "Grande", emoji: "🏢" },
        { name: "Mediano", emoji: "🏬" },
        { name: "Pequeño", emoji: "🏠" },
        { name: "Nuevo", emoji: "🆕" },
    ];

    // Simple filter by category (in sample data we don't have category per item)
    const restaurants = sampleeRestaurants;

    return (
        <div className="bg-bg1 min-h-screen">
            
            {/* Category chips */}
            <CategoryFilters
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={(c) => setSelectedCategory(c)}
            />

            <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6">
                {/* Left filter panel */}
                <FilterPanel
                    sortOptions={sortOptions}
                    companySize={companySize}
                    selectedSort={selectedSort}
                    onSelectSort={(s) => setSelectedSort(s)}
                    selectedCompanySize={selectedCompanySize}
                    onSelectCompanySize={(s) => setSelectedCompanySize(s)}
                />

                {/* Content */}
                <section>
                    {/* Search bar */}
                    <div className="mb-6">
                        <div className="max-w-7xl mx-auto">
                            <div className="bg-bg2 rounded-xl p-4 shadow-sm">
                                <input
                                    type="search"
                                    placeholder="Buscar restaurante..."
                                    className="w-full bg-bg3 rounded-lg px-4 py-3 placeholder:text-fn2"
                                />
                            </div>
                        </div>
                    </div>

                    <h2 className="text-h2 font-bold mb-6">Restaurantes</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {restaurants.map((r) => (
                                        <div key={r.id}>
                                            <RestaurantTarget
                                                id={r.id}
                                                name={r.name}
                                                image={r.image}
                                                time={r.time}
                                                description={r.description}
                                                phone={r.phone}
                                            />
                                        </div>
                                    ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

