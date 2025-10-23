"use client";

import { Star, Clock, MapPin } from "lucide-react";

interface SortOption {
  name: string;
  emoji: string;
}

interface CompanySize {
  name: string;
  emoji: string;
}

interface FilterPanelProps {
  sortOptions: SortOption[];
  companySize: CompanySize[];
  selectedSort: string;
  onSelectSort: (sort: string) => void;
  selectedCompanySize: string;
  onSelectCompanySize: (size: string) => void;
}

export default function FilterPanel({
  sortOptions,
  companySize,
  selectedSort,
  onSelectSort,
  selectedCompanySize,
  onSelectCompanySize,
}: FilterPanelProps) {
  return (
    <aside className="hidden lg:block w-[240px] flex-shrink-0">
      <div className="bg-bg2 rounded-xl p-4 sticky top-[180px] border border-bg3">
        <h3 className="font-bold text-fn1 mb-4">Panel de filtros</h3>

        {/* Ordenar */}
        <div className="mb-6">
          <h4 className="font-semibold text-fn1 mb-3 text-sm">Ordenar</h4>
          <div className="space-y-2">
            <button className="flex items-center gap-2 text-fn1 hover:text-accent transition-colors w-full">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm">4.5</span>
            </button>
            <button className="flex items-center gap-2 text-fn1 hover:text-accent transition-colors w-full">
              <Clock className="w-4 h-4" />
              <span className="text-sm">1 hora</span>
            </button>
          </div>
        </div>

        {/* Cercanos */}
        <div className="mb-6">
          <button className="flex items-center gap-2 text-fn1 hover:text-accent transition-colors w-full">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">Cercanos</span>
          </button>
        </div>

        {/* Ordenar por */}
        <div className="mb-6">
          <h4 className="font-semibold text-fn1 mb-3 text-sm">Ordenar por:</h4>
          <div className="space-y-2">
            {sortOptions.map((option) => (
              <button
                key={option.name}
                onClick={() => onSelectSort(option.name)}
                className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg transition-colors text-left ${
                  selectedSort === option.name
                    ? "bg-accent text-white font-medium"
                    : "hover:bg-bg3 text-fn1"
                }`}
              >
                <span>{option.emoji}</span>
                <span className="text-sm">{option.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tamaño de empresa */}
        <div className="mb-6">
          <h4 className="font-semibold text-fn1 mb-3 text-sm">
            Tamaño de empresa
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {companySize.map((size) => (
              <button
                key={size.name}
                onClick={() => onSelectCompanySize(size.name)}
                className={`flex items-center gap-1 px-2 py-2 rounded-lg text-fn1 transition-colors ${
                  selectedCompanySize === size.name
                    ? "bg-accent text-white font-medium"
                    : "hover:bg-bg3"
                }`}
              >
                <span className="text-base">{size.emoji}</span>
                <span className="text-xs">{size.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Categorías */}
        <div>
          <h4 className="font-semibold text-fn1 text-sm">Categorías:</h4>
        </div>
      </div>
    </aside>
  );
}
