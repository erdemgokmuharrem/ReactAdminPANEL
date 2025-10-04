import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { AuthUser, LoginCredentials } from '../types'

interface AuthState {
  user: AuthUser | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (credentials: LoginCredentials) => Promise<void>
  logout: () => void
  setLoading: (loading: boolean) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (credentials: LoginCredentials) => {
        set({ isLoading: true })
        
        try {
          // Mock login - replace with real API call
          await new Promise(resolve => setTimeout(resolve, 1000))
          
          if (credentials.email === 'admin@example.com' && credentials.password === 'password') {
            const user: AuthUser = {
              id: '1',
              email: credentials.email,
              name: 'Admin User',
              role: 'admin',
              avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
            }
            
            set({ 
              user, 
              isAuthenticated: true, 
              isLoading: false 
            })
          } else {
            throw new Error('Invalid credentials')
          }
        } catch (error) {
          set({ isLoading: false })
          throw error
        }
      },

      logout: () => {
        set({ 
          user: null, 
          isAuthenticated: false 
        })
      },

      setLoading: (loading: boolean) => {
        set({ isLoading: loading })
      }
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ 
        user: state.user, 
        isAuthenticated: state.isAuthenticated 
      }),
    }
  )
)

