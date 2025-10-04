import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ThemeState {
  mode: 'light' | 'dark'
  primaryColor: string
  borderRadius: number
  toggleMode: () => void
  setPrimaryColor: (color: string) => void
  setBorderRadius: (radius: number) => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      mode: 'light',
      primaryColor: '#3b82f6',
      borderRadius: 8,

      toggleMode: () => {
        const newMode = get().mode === 'light' ? 'dark' : 'light'
        set({ mode: newMode })
        
        // Update document class for Tailwind dark mode
        if (newMode === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      },

      setPrimaryColor: (color: string) => {
        set({ primaryColor: color })
      },

      setBorderRadius: (radius: number) => {
        set({ borderRadius: radius })
      }
    }),
    {
      name: 'theme-storage',
    }
  )
)


