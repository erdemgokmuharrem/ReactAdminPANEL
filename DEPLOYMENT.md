# Deployment Guide

This guide covers various deployment options for React Admin Pro.

## 🚀 Quick Deploy

### Vercel (Recommended)

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

### Netlify

1. **Connect to Netlify**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

2. **Configure Environment Variables**
   - Go to Site Settings > Environment Variables
   - Add all required environment variables

3. **Deploy**
   - Push to main branch for automatic deployment

## 🐳 Docker Deployment

### Dockerfile

```dockerfile
# Multi-stage build
FROM node:18-alpine as builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
```

### nginx.conf

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    # Handle client-side routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
}
```

### Docker Commands

```bash
# Build image
docker build -t react-admin-pro .

# Run container
docker run -p 80:80 react-admin-pro

# Run with environment variables
docker run -p 80:80 \
  -e VITE_API_BASE_URL=https://api.yourdomain.com \
  -e VITE_APP_NAME="My Admin Panel" \
  react-admin-pro
```

### Docker Compose

```yaml
version: '3.8'

services:
  admin-panel:
    build: .
    ports:
      - "80:80"
    environment:
      - VITE_API_BASE_URL=https://api.yourdomain.com
      - VITE_APP_NAME=My Admin Panel
    restart: unless-stopped

  nginx:
    image: nginx:alpine
    ports:
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - admin-panel
```

## ☁️ Cloud Deployment

### AWS S3 + CloudFront

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Upload to S3**
   ```bash
   aws s3 sync dist/ s3://your-bucket-name --delete
   ```

3. **Configure CloudFront**
   - Create CloudFront distribution
   - Set S3 bucket as origin
   - Configure caching behaviors
   - Set up custom domain and SSL

### Google Cloud Platform

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy to App Engine**
   ```yaml
   # app.yaml
   runtime: nodejs18
   env: standard
   
   handlers:
   - url: /.*
     static_files: dist/index.html
     upload: dist/index.html
   ```

3. **Deploy**
   ```bash
   gcloud app deploy
   ```

### Azure Static Web Apps

1. **Install Azure CLI**
   ```bash
   npm install -g @azure/static-web-apps-cli
   ```

2. **Deploy**
   ```bash
   swa build
   swa deploy
   ```

## 🔧 Environment Configuration

### Development

```env
NODE_ENV=development
VITE_API_BASE_URL=http://localhost:3001/api
VITE_DEBUG=true
VITE_MOCK_API=true
```

### Staging

```env
NODE_ENV=staging
VITE_API_BASE_URL=https://staging-api.yourdomain.com
VITE_DEBUG=false
VITE_MOCK_API=false
VITE_SENTRY_DSN=your-sentry-dsn
```

### Production

```env
NODE_ENV=production
VITE_API_BASE_URL=https://api.yourdomain.com
VITE_DEBUG=false
VITE_MOCK_API=false
VITE_SENTRY_DSN=your-sentry-dsn
VITE_ANALYTICS_ID=your-analytics-id
```

## 🔒 Security Configuration

### HTTPS Setup

1. **SSL Certificate**
   ```bash
   # Using Let's Encrypt
   certbot --nginx -d yourdomain.com
   ```

2. **Force HTTPS**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       return 301 https://$server_name$request_uri;
   }
   ```

### Security Headers

```nginx
# Security headers
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';" always;
```

### Environment Variables Security

- Never commit `.env` files
- Use environment-specific configuration
- Rotate secrets regularly
- Use secret management services

## 📊 Monitoring & Analytics

### Application Monitoring

1. **Sentry Setup**
   ```typescript
   import * as Sentry from '@sentry/react'
   
   Sentry.init({
     dsn: process.env.VITE_SENTRY_DSN,
     environment: process.env.NODE_ENV,
   })
   ```

2. **Performance Monitoring**
   ```typescript
   import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'
   
   getCLS(console.log)
   getFID(console.log)
   getFCP(console.log)
   getLCP(console.log)
   getTTFB(console.log)
   ```

### Analytics

1. **Google Analytics**
   ```typescript
   // Add to index.html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

2. **Custom Analytics**
   ```typescript
   // Track page views
   useEffect(() => {
     analytics.track('Page View', {
       page: location.pathname,
       timestamp: new Date().toISOString(),
     })
   }, [location.pathname])
   ```

## 🔄 CI/CD Pipeline

### GitHub Actions

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm run test
    
    - name: Build application
      run: npm run build
      env:
        VITE_API_BASE_URL: ${{ secrets.API_BASE_URL }}
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        working-directory: ./
```

### GitLab CI

```yaml
# .gitlab-ci.yml
stages:
  - test
  - build
  - deploy

test:
  stage: test
  script:
    - npm ci
    - npm run test
    - npm run test:e2e

build:
  stage: build
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - dist/

deploy:
  stage: deploy
  script:
    - echo "Deploying to production"
  only:
    - main
```

## 🚀 Performance Optimization

### Build Optimization

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

### CDN Configuration

```nginx
# Cache static assets
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# Cache HTML files
location ~* \.html$ {
    expires 1h;
    add_header Cache-Control "public";
}
```

### Compression

```nginx
# Gzip compression
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types
    text/plain
    text/css
    text/xml
    text/javascript
    application/javascript
    application/xml+rss
    application/json;
```

## 🔍 Troubleshooting

### Common Issues

1. **Build Fails**
   - Check Node.js version
   - Clear node_modules and reinstall
   - Check environment variables

2. **Runtime Errors**
   - Check browser console
   - Verify API endpoints
   - Check network connectivity

3. **Performance Issues**
   - Enable gzip compression
   - Optimize images
   - Use CDN for static assets

### Debug Mode

```typescript
// Enable debug mode
const DEBUG = import.meta.env.VITE_DEBUG === 'true'

if (DEBUG) {
  console.log('Debug mode enabled')
  // Add debug logging
}
```

## 📞 Support

- **Documentation**: [https://react-admin-pro-docs.vercel.app](https://react-admin-pro-docs.vercel.app)
- **Issues**: [GitHub Issues](https://github.com/your-username/react-admin-pro/issues)
- **Email**: support@reactadminpro.com

---

This deployment guide covers the most common deployment scenarios. For specific cloud providers or custom setups, please refer to their respective documentation.
