# React Admin Pro - Enterprise-Ready Admin Panel Template

<div align="center">

![React Admin Pro](https://img.shields.io/badge/React-18+-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)
![Vite](https://img.shields.io/badge/Vite-4.0+-green.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0+-blue.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

**Modern, production-ready React admin panel template with comprehensive features and best practices.**

[🚀 Live Demo](https://react-admin-pro-demo.vercel.app) • [📚 Documentation](https://react-admin-pro-docs.vercel.app) • [🎨 Storybook](https://react-admin-pro-storybook.vercel.app)

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🔧 Configuration](#-configuration)
- [🎨 Customization](#-customization)
- [🔌 API Integration](#-api-integration)
- [📱 Pages & Components](#-pages--components)
- [🧪 Testing](#-testing)
- [📦 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Features

### 🏗️ **Core Features**
- **Modern Architecture**: React 18+, TypeScript, Vite
- **Responsive Design**: Mobile-first, fully responsive
- **Dark/Light Theme**: Customizable theme system
- **Internationalization**: Multi-language support (EN/TR)
- **Authentication**: JWT-based auth with protected routes
- **State Management**: Zustand for lightweight state management
- **Data Fetching**: TanStack Query for server state
- **Form Handling**: React Hook Form with Yup validation

### 📊 **Admin Features**
- **Dashboard**: Comprehensive analytics and metrics
- **User Management**: Full CRUD with advanced filtering
- **Analytics**: Interactive charts and reports
- **Security Center**: Security events and policy management
- **System Monitor**: Real-time system metrics and service management
- **Logs Management**: System logs with filtering and export
- **Reports**: Generate and manage various reports
- **Settings**: Application and user preferences

### 🎨 **UI/UX Features**
- **Component Library**: Reusable, accessible components
- **Loading States**: Skeleton loaders and spinners
- **Error Handling**: Comprehensive error boundaries
- **Empty States**: User-friendly empty state designs
- **Toast Notifications**: In-app notification system
- **Modal System**: Accessible modal dialogs
- **Data Tables**: Advanced tables with sorting, filtering, pagination
- **File Upload**: Drag & drop file upload with progress

### 🔧 **Developer Features**
- **TypeScript**: Full type safety
- **ESLint & Prettier**: Code quality and formatting
- **Hot Reload**: Instant development feedback
- **Storybook**: Component documentation
- **Testing**: Jest + React Testing Library + Playwright
- **CI/CD**: GitHub Actions workflows
- **Docker**: Containerization support

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | React 18+, TypeScript 5.0+ |
| **Build Tool** | Vite 4.0+ |
| **Styling** | TailwindCSS 3.0+, Headless UI |
| **State Management** | Zustand |
| **Data Fetching** | TanStack Query |
| **Routing** | React Router v6 |
| **Forms** | React Hook Form + Yup |
| **Charts** | Recharts |
| **Icons** | Heroicons |
| **Testing** | Jest, React Testing Library, Playwright |
| **Documentation** | Storybook |
| **Deployment** | Vercel, Netlify, Docker |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** 9.0 or higher (or yarn/pnpm)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/react-admin-pro.git
   cd react-admin-pro
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Demo Credentials

- **Email**: `admin@example.com`
- **Password**: `password`

---

## 📁 Project Structure

```
react-admin-pro/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── __tests__/     # Component tests
│   │   ├── *.stories.tsx  # Storybook stories
│   │   └── *.tsx          # Component files
│   ├── pages/             # Page components
│   │   ├── DashboardPage.tsx
│   │   ├── UsersPage.tsx
│   │   ├── AnalyticsPage.tsx
│   │   ├── SecurityPage.tsx
│   │   ├── SystemPage.tsx
│   │   ├── LogsPage.tsx
│   │   ├── ReportsPage.tsx
│   │   └── SettingsPage.tsx
│   ├── layouts/           # Layout components
│   │   └── DashboardLayout.tsx
│   ├── stores/            # Zustand stores
│   │   ├── authStore.ts
│   │   ├── themeStore.ts
│   │   └── notificationStore.ts
│   ├── hooks/             # Custom React hooks
│   │   ├── useUsersApi.ts
│   │   └── useWebSocket.ts
│   ├── utils/             # Utility functions
│   │   ├── csvExport.ts
│   │   └── fileUpload.ts
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts
│   ├── i18n/              # Internationalization
│   │   ├── index.ts
│   │   └── locales/
│   │       ├── en.json
│   │       └── tr.json
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── .github/               # GitHub Actions workflows
├── .storybook/            # Storybook configuration
├── docs/                  # Documentation
├── tests/                 # E2E tests
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

---

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Application
VITE_APP_NAME="React Admin Pro"
VITE_APP_VERSION="1.0.0"
VITE_APP_DESCRIPTION="Enterprise-ready admin panel template"

# API Configuration
VITE_API_BASE_URL="http://localhost:3001/api"
VITE_API_TIMEOUT="10000"

# Authentication
VITE_JWT_SECRET="your-jwt-secret-key"
VITE_JWT_EXPIRES_IN="7d"

# Features
VITE_ENABLE_ANALYTICS="true"
VITE_ENABLE_NOTIFICATIONS="true"
VITE_ENABLE_WEBSOCKET="true"

# External Services
VITE_GOOGLE_ANALYTICS_ID=""
VITE_SENTRY_DSN=""
VITE_STRIPE_PUBLIC_KEY=""
```

### TailwindCSS Configuration

The project uses TailwindCSS with custom configuration:

```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      },
    },
  },
  plugins: [],
}
```

### TypeScript Configuration

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## 🎨 Customization

### Theme Customization

1. **Color Scheme**
   ```typescript
   // src/stores/themeStore.ts
   export const useThemeStore = create<ThemeState>((set) => ({
     mode: 'light',
     primaryColor: 'blue',
     borderRadius: 'medium',
     // ... other theme options
   }))
   ```

2. **Custom Components**
   ```typescript
   // src/components/Button.tsx
   interface ButtonProps {
     variant?: 'primary' | 'secondary' | 'danger' | 'ghost'
     size?: 'sm' | 'md' | 'lg'
     // ... other props
   }
   ```

### Adding New Pages

1. **Create Page Component**
   ```typescript
   // src/pages/NewPage.tsx
   export const NewPage: React.FC = () => {
     return (
       <div className="space-y-6">
         <h1 className="text-2xl font-bold text-gray-900">New Page</h1>
         {/* Page content */}
       </div>
     )
   }
   ```

2. **Add Route**
   ```typescript
   // src/App.tsx
   import { NewPage } from './pages/NewPage'
   
   // Add route in Routes component
   <Route path="new-page" element={<NewPage />} />
   ```

3. **Add Navigation**
   ```typescript
   // src/components/Sidebar.tsx
   const navigation = [
     // ... existing routes
     { name: 'New Page', href: '/new-page', icon: NewIcon },
   ]
   ```

### Adding New API Endpoints

1. **Create API Hook**
   ```typescript
   // src/hooks/useNewApi.ts
   export const useNewApi = () => {
     const getNewData = async (): Promise<NewData[]> => {
       const response = await fetch('/api/new-data')
       return response.json()
     }
     
     return { getNewData }
   }
   ```

2. **Use in Component**
   ```typescript
   // src/pages/NewPage.tsx
   import { useQuery } from '@tanstack/react-query'
   import { useNewApi } from '../hooks/useNewApi'
   
   const { getNewData } = useNewApi()
   const { data, isLoading } = useQuery({
     queryKey: ['new-data'],
     queryFn: getNewData,
   })
   ```

---

## 🔌 API Integration

### Backend Integration

The template includes mock APIs that can be easily replaced with real backend endpoints:

#### 1. **Authentication API**

Replace mock authentication in `src/stores/authStore.ts`:

```typescript
// Real API integration
const login = async (email: string, password: string) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
  
  if (!response.ok) throw new Error('Login failed')
  
  const data = await response.json()
  localStorage.setItem('token', data.token)
  return data.user
}
```

#### 2. **Users API**

Replace mock users API in `src/hooks/useUsersApi.ts`:

```typescript
// Real API integration
export const useUsersApi = () => {
  const getUsers = async (filters: TableFilters): Promise<PaginatedResponse<User>> => {
    const params = new URLSearchParams(filters as any)
    const response = await fetch(`/api/users?${params}`)
    return response.json()
  }
  
  const createUser = async (userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) => {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
    return response.json()
  }
  
  // ... other CRUD operations
}
```

#### 3. **Analytics API**

Replace mock analytics data in `src/pages/AnalyticsPage.tsx`:

```typescript
// Real API integration
const { data: analyticsData } = useQuery({
  queryKey: ['analytics'],
  queryFn: async () => {
    const response = await fetch('/api/analytics')
    return response.json()
  },
})
```

### Database Integration

#### 1. **Database Schema**

Example database schema for the admin panel:

```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL DEFAULT 'user',
  is_active BOOLEAN DEFAULT true,
  avatar_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- System logs table
CREATE TABLE system_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  level VARCHAR(20) NOT NULL,
  message TEXT NOT NULL,
  source VARCHAR(100),
  user_id UUID REFERENCES users(id),
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Security events table
CREATE TABLE security_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type VARCHAR(50) NOT NULL,
  user_id UUID REFERENCES users(id),
  ip_address INET,
  location VARCHAR(255),
  description TEXT,
  status VARCHAR(20) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### 2. **API Endpoints**

Example REST API endpoints:

```typescript
// API Routes
GET    /api/users              // Get users with pagination/filtering
POST   /api/users              // Create new user
GET    /api/users/:id          // Get user by ID
PUT    /api/users/:id          // Update user
DELETE /api/users/:id          // Delete user

GET    /api/analytics          // Get analytics data
GET    /api/analytics/metrics  // Get specific metrics

GET    /api/logs               // Get system logs
POST   /api/logs               // Create new log entry

GET    /api/reports            // Get available reports
POST   /api/reports            // Generate new report
GET    /api/reports/:id        // Download report

GET    /api/security/events    // Get security events
POST   /api/security/events    // Log security event

GET    /api/system/metrics     // Get system metrics
GET    /api/system/services    // Get service status
POST   /api/system/services/:id/restart // Restart service
```

---

## 📱 Pages & Components

### Available Pages

| Page | Description | Features |
|------|-------------|----------|
| **Dashboard** | Main overview page | Metrics, charts, recent activity, system status |
| **Users** | User management | CRUD operations, filtering, bulk actions, export |
| **Analytics** | Data visualization | Interactive charts, metrics, performance data |
| **Security** | Security management | Events, policies, password settings, 2FA |
| **System** | System monitoring | Metrics, services, alerts, system information |
| **Logs** | System logs | Filtering, search, export, real-time updates |
| **Reports** | Report management | Generate, download, schedule reports |
| **Settings** | Application settings | Theme, preferences, system configuration |

### Component Library

#### Core Components

```typescript
// Button Component
<Button variant="primary" size="md" onClick={handleClick}>
  Click me
</Button>

// Input Component
<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  error={errors.email?.message}
  {...register('email')}
/>

// Modal Component
<Modal isOpen={isOpen} onClose={onClose} title="Modal Title">
  <p>Modal content goes here</p>
</Modal>

// Card Component
<Card>
  <Card.Header>
    <Card.Title>Card Title</Card.Title>
  </Card.Header>
  <Card.Content>
    <p>Card content goes here</p>
  </Card.Content>
</Card>
```

#### Data Components

```typescript
// Data Table
<DataTable
  data={users}
  columns={columns}
  pagination={pagination}
  onSort={handleSort}
  onFilter={handleFilter}
/>

// Chart Component
<Chart
  type="line"
  data={chartData}
  options={chartOptions}
  height={300}
/>

// File Upload
<FileUpload
  accept="image/*"
  maxSize={5 * 1024 * 1024} // 5MB
  onUpload={handleUpload}
/>
```

---

## 🧪 Testing

### Unit Testing

```bash
# Run unit tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### E2E Testing

```bash
# Run E2E tests
npm run test:e2e

# Run E2E tests with UI
npm run test:e2e:ui
```

### Testing Examples

```typescript
// Component test example
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '../Button'

test('renders button with correct text', () => {
  render(<Button>Click me</Button>)
  expect(screen.getByText('Click me')).toBeInTheDocument()
})

test('calls onClick when clicked', () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick}>Click me</Button>)
  fireEvent.click(screen.getByText('Click me'))
  expect(handleClick).toHaveBeenCalledTimes(1)
})
```

---

## 📦 Deployment

### Vercel Deployment

1. **Connect to Vercel**
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

2. **Configure Environment Variables**
   - Go to Vercel Dashboard
   - Select your project
   - Go to Settings > Environment Variables
   - Add all required environment variables

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Docker Deployment

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine as builder
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci
   COPY . .
   RUN npm run build

   FROM nginx:alpine
   COPY --from=builder /app/dist /usr/share/nginx/html
   COPY nginx.conf /etc/nginx/nginx.conf
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```

2. **Build and Run**
   ```bash
   docker build -t react-admin-pro .
   docker run -p 80:80 react-admin-pro
   ```

### Environment-Specific Configuration

#### Development
```env
NODE_ENV=development
VITE_API_BASE_URL=http://localhost:3001/api
VITE_DEBUG=true
```

#### Production
```env
NODE_ENV=production
VITE_API_BASE_URL=https://api.yourdomain.com
VITE_DEBUG=false
VITE_ANALYTICS_ID=your-analytics-id
```

---

## 🔧 Advanced Configuration

### Custom Theme

```typescript
// src/theme/index.ts
export const theme = {
  colors: {
    primary: {
      50: '#eff6ff',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
    },
    secondary: {
      50: '#f8fafc',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
  },
}
```

### Custom Hooks

```typescript
// src/hooks/useLocalStorage.ts
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue] as const
}
```

### Error Boundaries

```typescript
// src/components/ErrorBoundary.tsx
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />
    }

    return this.props.children
  }
}
```

---

## 🚀 Performance Optimization

### Code Splitting

```typescript
// Lazy load pages
const DashboardPage = lazy(() => import('./pages/DashboardPage'))
const UsersPage = lazy(() => import('./pages/UsersPage'))

// Use Suspense
<Suspense fallback={<PageLoader />}>
  <Routes>
    <Route path="/dashboard" element={<DashboardPage />} />
    <Route path="/users" element={<UsersPage />} />
  </Routes>
</Suspense>
```

### Bundle Optimization

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@headlessui/react', '@heroicons/react'],
          charts: ['recharts'],
        },
      },
    },
  },
})
```

### Image Optimization

```typescript
// src/components/OptimizedImage.tsx
export const OptimizedImage: React.FC<ImageProps> = ({ src, alt, ...props }) => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div className="relative">
      {!loaded && !error && <ImageSkeleton />}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  )
}
```

---

## 🔒 Security Best Practices

### Authentication Security

```typescript
// JWT token validation
const validateToken = (token: string): boolean => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!)
    return decoded.exp > Date.now() / 1000
  } catch {
    return false
  }
}

// Password hashing
import bcrypt from 'bcrypt'

const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 12
  return bcrypt.hash(password, saltRounds)
}
```

### Input Validation

```typescript
// Yup validation schemas
const userSchema = yup.object({
  name: yup.string().required().min(2).max(50),
  email: yup.string().email().required(),
  password: yup.string().min(8).matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
    'Password must contain uppercase, lowercase, number and special character'
  ),
})
```

### XSS Protection

```typescript
// Sanitize user input
import DOMPurify from 'dompurify'

const sanitizeHtml = (html: string): string => {
  return DOMPurify.sanitize(html)
}

// Safe HTML rendering
const SafeHtml: React.FC<{ content: string }> = ({ content }) => {
  const sanitized = useMemo(() => sanitizeHtml(content), [content])
  return <div dangerouslySetInnerHTML={{ __html: sanitized }} />
}
```

---

## 📊 Monitoring & Analytics

### Error Tracking

```typescript
// Sentry integration
import * as Sentry from '@sentry/react'

Sentry.init({
  dsn: process.env.VITE_SENTRY_DSN,
  environment: process.env.NODE_ENV,
})

// Error boundary with Sentry
export const SentryErrorBoundary = Sentry.withErrorBoundary(App, {
  fallback: <ErrorFallback />,
  beforeCapture: (scope, error, errorInfo) => {
    scope.setTag('errorBoundary', true)
    scope.setContext('errorInfo', errorInfo)
  },
})
```

### Performance Monitoring

```typescript
// Web Vitals tracking
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

const sendToAnalytics = (metric: any) => {
  // Send to your analytics service
  console.log(metric)
}

getCLS(sendToAnalytics)
getFID(sendToAnalytics)
getFCP(sendToAnalytics)
getLCP(sendToAnalytics)
getTTFB(sendToAnalytics)
```

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run tests**
   ```bash
   npm run test
   npm run test:e2e
   ```
5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Code Style

- Use TypeScript for all new code
- Follow the existing code style
- Write tests for new features
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The UI library
- [TailwindCSS](https://tailwindcss.com/) - The CSS framework
- [Headless UI](https://headlessui.com/) - Accessible components
- [Heroicons](https://heroicons.com/) - Beautiful icons
- [Recharts](https://recharts.org/) - Chart library
- [TanStack Query](https://tanstack.com/query) - Data fetching
- [Zustand](https://zustand-demo.pmnd.rs/) - State management

---

## 📞 Support

- **Documentation**: [https://react-admin-pro-docs.vercel.app](https://react-admin-pro-docs.vercel.app)
- **Issues**: [GitHub Issues](https://github.com/your-username/react-admin-pro/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/react-admin-pro/discussions)
- **Email**: support@reactadminpro.com

---

<div align="center">

**Made with ❤️ by the React Admin Pro Team**

[⭐ Star us on GitHub](https://github.com/your-username/react-admin-pro) • [🐛 Report Bug](https://github.com/your-username/react-admin-pro/issues) • [💡 Request Feature](https://github.com/your-username/react-admin-pro/issues)

</div>