import { StateCreator, create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Props {
  user: any | null
  setUser: (user: any) => void
  clearUser: () => void
}

const state: StateCreator<Props> = set => ({
  user: null,
  setUser: user => set({ user }),
  clearUser: () => set({ user: null })
})

const useSessionStore = create(persist(state, { name: 'nami-user' }))
// const useSessionStore = create(state)

export default useSessionStore
