import { StateCreator, create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

interface CartState {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  getTotal: () => number
  getItemCount: () => number
}

const state: StateCreator<CartState> = (set, get) => ({
  items: [],
  addItem: item => {
    const items = get().items
    const existingItem = items.find(i => i.id === item.id)

    if (existingItem) {
      set({
        items: items.map(i => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i))
      })
    } else {
      set({
        items: [...items, { ...item, quantity: 1 }]
      })
    }
  },
  removeItem: id => {
    set({
      items: get().items.filter(i => i.id !== id)
    })
  },
  updateQuantity: (id, quantity) => {
    if (quantity <= 0) {
      get().removeItem(id)
    } else {
      set({
        items: get().items.map(i => (i.id === id ? { ...i, quantity } : i))
      })
    }
  },
  clearCart: () => {
    set({ items: [] })
  },
  getTotal: () => {
    return get().items.reduce((total, item) => total + item.price * item.quantity, 0)
  },
  getItemCount: () => {
    return get().items.reduce((count, item) => count + item.quantity, 0)
  }
})

const useCartStore = create(
  persist(state, {
    name: 'cart-storage'
  })
)

export default useCartStore
