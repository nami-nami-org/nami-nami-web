import { create } from "zustand";

export interface Product {
  id: number;
  name: string;
  description: string;
  time: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  items: Product[];
  addToCart: (product: Product) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [
    {
      id: 1,
      name: "Arroz con Pollo",
      description: "Taza Vicentina",
      time: "25 - 20 min",
      price: 14.0,
      quantity: 3,
      image: "/arroz-con-pollo-peruano.jpg",
    },
    {
      id: 2,
      name: "Arroz con Pollo",
      description: "Taza Vicentina",
      time: "25 - 20 min",
      price: 14.0,
      quantity: 3,
      image: "/arroz-con-pollo-peruano.jpg",
    },
  ],

  addToCart: (product) => {
    const existing = get().items.find((p) => p.id === product.id);
    if (existing) {
      set({
        items: get().items.map((p) =>
          p.id === product.id
            ? { ...p, quantity: (p.quantity || 1) + 1 }
            : p
        ),
      });
    } else {
      set({ items: [...get().items, { ...product, quantity: 1 }] });
    }
  },

  decreaseQuantity: (id) => {
    set({
      items: get().items.map((p) =>
        p.id === id
          ? { ...p, quantity: Math.max((p.quantity || 1) - 1, 1) }
          : p
      ),
    });
  },

  removeFromCart: (id) => {
    set({
      items: get().items.filter((p) => p.id !== id),
    });
  },

  clearCart: () => set({ items: [] }),

  getTotal: () => {
    return get().items.reduce(
      (acc, p) => acc + p.price * (p.quantity || 1),
      0
    );
  },
}));
