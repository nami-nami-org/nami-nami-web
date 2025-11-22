import { create } from "zustand";
import { persist } from 'zustand/middleware'

export interface Product {
  id: number;
  name: string;
  description: string;
  time: number; // Cambié de string a number
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
  getItemsCount: () => number;
  updateQuantity: (id: number, delta: number) => void; // Agregado para compatibilidad
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      // ✅ MODIFICADO: Ahora suma la cantidad que le pasas
      addToCart: (product) => {
        const existing = get().items.find((p) => p.id === product.id);
        if (existing) {
          set({
            items: get().items.map((p) =>
              p.id === product.id
                ? { ...p, quantity: p.quantity + (product.quantity || 1) } // Suma la cantidad recibida
                : p
            ),
          });
        } else {
          set({ items: [...get().items, { ...product, quantity: product.quantity || 1 }] });
        }
      },

      decreaseQuantity: (id) => {
        const item = get().items.find(p => p.id === id);
        if (item && item.quantity > 1) {
          set({
            items: get().items.map((p) =>
              p.id === id
                ? { ...p, quantity: p.quantity - 1 }
                : p
            ),
          });
        } else {
          // Si la cantidad es 1, eliminar el item
          get().removeFromCart(id);
        }
      },

      // ✅ AGREGADO: Para compatibilidad con CartItemsList
      updateQuantity: (id, delta) => {
        if (delta > 0) {
          set({
            items: get().items.map((p) =>
              p.id === id
                ? { ...p, quantity: p.quantity + delta }
                : p
            ),
          });
        } else {
          get().decreaseQuantity(id);
        }
      },

      removeFromCart: (id) => {
        set({
          items: get().items.filter((p) => p.id !== id),
        });
      },

      clearCart: () => set({ items: [] }),

      getTotal: () => {
        return get().items.reduce(
          (acc, p) => acc + p.price * p.quantity,
          0
        );
      },

      getItemsCount: () => {
        return get().items.reduce((acc, p) => acc + p.quantity, 0);
      },
    }),
    {
      name: 'cart-storage' // Persiste en localStorage
    }
  )
);