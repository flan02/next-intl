import { create } from 'zustand'

export const useCountry = create((set) => ({
  selected: '',
  setSelected: (code: string) => set({ selected: code })
}))