import { create } from 'zustand'

export const useStore = create((set) => ({
  language: 'en',
  isHamburgerOpen: false,
}))
