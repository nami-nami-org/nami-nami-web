export default function RecommendedDishes() {
  const dishes = [
    { name: "Inca Kola Personal", emoji: "🥤" },
    { name: "Picarones", emoji: "🍩" },
    { name: "Chicha Morada", emoji: "🍇" },
    { name: "Papa a la Huancaína", emoji: "🥔" },
  ];

  return (
    <div className="bg-bg2 rounded-2xl p-8 shadow-sm">
      <h3 className="font-bold text-h3 mb-6">Platillos Recomendados</h3>
      <div className="grid grid-cols-4 gap-3">
        {dishes.map((d) => (
          <button
            key={d.name}
            className="flex flex-col items-center gap-3 p-5 bg-bg1 rounded-xl hover:bg-bg3 hover:scale-105 transition-all border border-transparent hover:border-tn2"
          >
            <span className="text-4xl">{d.emoji}</span>
            <span className="text-xs text-center font-medium leading-tight">{d.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
