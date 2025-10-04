import { User, TableFilters, PaginatedResponse } from '../types'

// Mock data
const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
    createdAt: '2023-01-15T10:30:00Z',
    updatedAt: '2023-01-15T10:30:00Z',
    isActive: true,
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'moderator',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
    createdAt: '2023-01-16T14:20:00Z',
    updatedAt: '2023-01-16T14:20:00Z',
    isActive: true,
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    role: 'user',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
    createdAt: '2023-01-17T09:15:00Z',
    updatedAt: '2023-01-17T09:15:00Z',
    isActive: false,
  },
  {
    id: '4',
    name: 'Alice Brown',
    email: 'alice@example.com',
    role: 'user',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face',
    createdAt: '2023-01-18T16:45:00Z',
    updatedAt: '2023-01-18T16:45:00Z',
    isActive: true,
  },
  {
    id: '5',
    name: 'Charlie Wilson',
    email: 'charlie@example.com',
    role: 'moderator',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face',
    createdAt: '2023-01-19T11:30:00Z',
    updatedAt: '2023-01-19T11:30:00Z',
    isActive: true,
  },
  {
    id: '6',
    name: 'Emma Davis',
    email: 'emma@example.com',
    role: 'user',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=32&h=32&fit=crop&crop=face',
    createdAt: '2023-01-20T08:30:00Z',
    updatedAt: '2023-01-20T08:30:00Z',
    isActive: true,
  },
  {
    id: '7',
    name: 'Michael Chen',
    email: 'michael@example.com',
    role: 'admin',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
    createdAt: '2023-01-21T12:15:00Z',
    updatedAt: '2023-01-21T12:15:00Z',
    isActive: true,
  },
  {
    id: '8',
    name: 'Sarah Wilson',
    email: 'sarah@example.com',
    role: 'user',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
    createdAt: '2023-01-22T15:45:00Z',
    updatedAt: '2023-01-22T15:45:00Z',
    isActive: false,
  },
  {
    id: '9',
    name: 'David Miller',
    email: 'david@example.com',
    role: 'moderator',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
    createdAt: '2023-01-23T09:20:00Z',
    updatedAt: '2023-01-23T09:20:00Z',
    isActive: true,
  },
  {
    id: '10',
    name: 'Lisa Anderson',
    email: 'lisa@example.com',
    role: 'user',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face',
    createdAt: '2023-01-24T11:30:00Z',
    updatedAt: '2023-01-24T11:30:00Z',
    isActive: true,
  },
]

let nextId = 11

export const useUsersApi = () => {
  const getUsers = async (filters: TableFilters): Promise<PaginatedResponse<User>> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))

    let filteredUsers = [...mockUsers]

    // Apply search filter
    if (filters.search) {
      const search = filters.search.toLowerCase()
      filteredUsers = filteredUsers.filter(user =>
        user.name.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search)
      )
    }

    // Apply role filter
    if (filters.role) {
      filteredUsers = filteredUsers.filter(user => user.role === filters.role)
    }

    // Apply status filter
    if (filters.isActive !== undefined) {
      filteredUsers = filteredUsers.filter(user => user.isActive === filters.isActive)
    }

    // Apply sorting
    if (filters.sortBy) {
      filteredUsers.sort((a, b) => {
        const aValue = a[filters.sortBy as keyof User]
        const bValue = b[filters.sortBy as keyof User]
        
        if ((aValue ?? '') < (bValue ?? '')) return filters.sortOrder === 'asc' ? -1 : 1
        if ((aValue ?? '') > (bValue ?? '')) return filters.sortOrder === 'asc' ? 1 : -1
        return 0
      })
    }

    // Apply pagination
    const page = filters.page || 1
    const limit = filters.limit || 10
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedUsers = filteredUsers.slice(startIndex, endIndex)

    return {
      data: paginatedUsers,
      total: filteredUsers.length,
      page,
      limit,
      totalPages: Math.ceil(filteredUsers.length / limit),
    }
  }

  const createUser = async (userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    const newUser: User = {
      ...userData,
      id: nextId.toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    mockUsers.push(newUser)
    nextId++

    return newUser
  }

  const updateUser = async (id: string, userData: Partial<User>): Promise<User> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    const userIndex = mockUsers.findIndex(user => user.id === id)
    if (userIndex === -1) {
      throw new Error('User not found')
    }

    const updatedUser: User = {
      ...mockUsers[userIndex],
      ...userData,
      updatedAt: new Date().toISOString(),
    }

    mockUsers[userIndex] = updatedUser
    return updatedUser
  }

  const deleteUser = async (id: string): Promise<void> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    const userIndex = mockUsers.findIndex(user => user.id === id)
    if (userIndex === -1) {
      throw new Error('User not found')
    }

    mockUsers.splice(userIndex, 1)
  }

  return {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
  }
}


