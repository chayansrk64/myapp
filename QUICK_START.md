# Quick Start Commands

## 🚀 One-Time Setup

### Windows
```batch
setup.bat
```

### Linux / macOS
```bash
chmod +x setup.sh
./setup.sh
```

### Manual Setup
```bash
# Navigate to project
cd next-assignment

# Install frontend dependencies
npm install

# Install server dependencies
cd server
npm install
cd ..
```

## ▶️ Running the Application

### Terminal 1 - API Server
```bash
cd server
npm start
```

**Expected output**:
```
✓ API Server running on http://localhost:5000
✓ Health check: http://localhost:5000/health
✓ Items endpoint: http://localhost:5000/api/items
```

### Terminal 2 - Next.js Frontend
```bash
npm run dev
```

**Expected output**:
```
▲ Next.js 16.1.3 (Turbopack)
- Local:        http://localhost:3000
```

### Open Browser
```
http://localhost:3000
```

## 📋 Available Commands

### Frontend Commands
```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Backend Commands
```bash
# From server directory
cd server

# Start API server
npm start

# Or with custom port
PORT=5001 npm start
```

## 🧪 Testing the Application

### 1. Test Landing Page
- Go to `http://localhost:3000`
- Verify 7 sections are visible
- Click navigation links

### 2. Test Public Pages
- Visit `/items` - Browse products
- Click product card - View details
- Use search and filters

### 3. Test Authentication
- Click "Login" in navbar
- Enter: `user@example.com` / `password123`
- Click "Sign In"
- Should redirect to `/items`

### 4. Test Protected Route
- Try accessing `/add-item` without login
- Should redirect to `/login`
- After login, `/add-item` should be accessible

### 5. Test Add Item
- Login with provided credentials
- Click "Add Item" in navbar
- Fill in the form
- Submit
- Should see success toast
- Should redirect to `/items`

### 6. Test API
- Check health: `http://localhost:5000/health`
- Fetch all items: `http://localhost:5000/api/items`
- Fetch single item: `http://localhost:5000/api/items/1`

## 🔍 Troubleshooting Commands

### Check if ports are in use
```bash
# Linux/macOS
lsof -i :3000
lsof -i :5000

# Windows
netstat -ano | findstr :3000
netstat -ano | findstr :5000
```

### Kill process on port
```bash
# Linux/macOS (port 5000)
lsof -ti:5000 | xargs kill -9

# Windows (port 5000)
taskkill /PID <PID> /F
```

### Use different port
```bash
# Next.js on port 3001
npm run dev -- -p 3001

# Express on port 5001
PORT=5001 npm start
```

### Clear cache
```bash
# Clear Next.js cache
rm -rf .next

# Clear npm cache
npm cache clean --force
```

### Check Node/npm versions
```bash
node --version
npm --version
```

## 📖 Documentation Files

```bash
# Main README
cat README.md

# Implementation details
cat IMPLEMENTATION.md

# Environment configuration
cat ENV_CONFIG.md

# Verification checklist
cat VERIFICATION.md

# This file
cat QUICK_START.md
```

## 🌐 Important URLs

| Service | URL | Status |
|---------|-----|--------|
| Frontend | http://localhost:3000 | Main app |
| Landing | http://localhost:3000/ | Home page |
| Login | http://localhost:3000/login | Auth page |
| Items | http://localhost:3000/items | Product list |
| Add Item | http://localhost:3000/add-item | Add product |
| API Health | http://localhost:5000/health | Server check |
| API Items | http://localhost:5000/api/items | Product API |

## 🔑 Test Credentials

```
Email:    user@example.com
Password: password123
```

## 📱 Responsive Design Testing

```bash
# Chrome DevTools: Press F12
# Select mobile device: Ctrl+Shift+M (or Cmd+Shift+M on Mac)

# Test breakpoints:
- Mobile:  320px - 640px
- Tablet:  641px - 1024px
- Desktop: 1025px+
```

## 📦 Build & Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy Backend to Heroku
```bash
# Install Heroku CLI first
# From server directory
cd server
heroku create your-app-name
git push heroku main
```

## 🔧 Environment Setup

### Set API URL (if needed)
```bash
# Windows
set NEXT_PUBLIC_API_URL=http://localhost:5000/api

# Linux/macOS
export NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## 🎨 Live Reload Features

Both servers support hot reload:
- **Next.js**: Auto-refreshes when you save files
- **Express**: Restart server for changes (or use nodemon)

```bash
# Use nodemon for auto-restart (optional)
npm install --save-dev nodemon

# Update package.json
"dev": "nodemon server.js"
```

## 💡 Common Tasks

### Add new page
```bash
# Create in src/app/newpage/page.js
touch src/app/newpage/page.js
```

### Add new component
```bash
# Create in src/components/
touch src/components/NewComponent.js
```

### Add new API endpoint
```bash
# Add in server/server.js
app.get('/api/newroute', (req, res) => {
  // Handle request
});
```

### Restart servers
```bash
# Terminal 1 (API): Ctrl+C then npm start
# Terminal 2 (Frontend): Ctrl+C then npm run dev
```

## 📞 Support Resources

- Next.js Docs: https://nextjs.org/docs
- Express Docs: https://expressjs.com
- Tailwind Docs: https://tailwindcss.com/docs
- React Docs: https://react.dev
- Axios Docs: https://axios-http.com

---

**Last Updated**: January 18, 2026
**Version**: 1.0.0
