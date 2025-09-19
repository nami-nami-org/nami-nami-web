import { StateCreator, create } from 'zustand'

interface Props {
  isMenuOpen: boolean
  toggleMenu: () => void
  closeMenu: () => void
}

const state: StateCreator<Props> = set => ({
  isMenuOpen: false,
  toggleMenu: () => set(state => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false })
})

const useNavStore = create(state)

export default useNavStore
