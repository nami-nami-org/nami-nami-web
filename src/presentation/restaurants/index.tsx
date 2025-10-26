"use client"

import { useState } from "react";
import RestaurantTarget from "./RestaurantTarget";
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

const sampleRestaurants: Restaurant[] = [
	{
		id: 1,
		name: "Víctor Hamburguesas",
		image: "/assets/images/burger-restaurant.jpg",
		time: "20-35 min",
		description: "Hamburguesas artesanales de carne de res premium.",
		phone: "555-1011",
    
	},
	{
		id: 2,
		name: "El Sabor Criollo",
		image: "/assets/images/creole-food.jpg",
		time: "25-40 min",
		description: "Comida criolla tradicional peruana con ingredientes frescos.",
		phone: "555-2022",
    
	},
	{
		id: 3,
		name: "Cevichería Marina",
		image: "/assets/images/ceviche.jpg",
		time: "15-25 min",
		description: "Ceviches frescos y mariscos de la mejor calidad.",
		phone: "555-3033",
    
	},
	{
		id: 4,
		name: "Taquería El Rey",
		image: "/assets/images/tacos.jpg",
		time: "20-30 min",
		description: "Tacos auténticos con salsas caseras.",
		phone: "555-4044",
    
	},
];

export default function RestaurantsTarget() {
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
	const restaurants = sampleRestaurants;

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

