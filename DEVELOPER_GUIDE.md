# Development Notes & Developer Guide

## 📖 For Developers

This document provides information for developers who need to understand, maintain, or extend the MyApp codebase.

---

## 🏗️ Architecture Overview

### Frontend Architecture
- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **State Management**: React Hooks (useState, useEffect)
- **Navigation**: Next.js useRouter

### Backend Architecture
- **Framework**: Express.js
- **Data Storage**: In-memory (ready for database)
- **API Style**: RESTful
- **CORS**: Enabled for frontend communication

### Communication Flow
```
Next.js Frontend (port 3000)
         ↓ (Axios HTTP requests)
Express API (port 5000)
         ↓ (JSON responses)
Next.js Frontend (renders)
```

---

## 🔄 Data Flow

### Authentication Flow
```
1. User enters credentials on /login
2. validateLogin() called with email/password
3. Hardcoded credentials checked
4. Cookie set if valid: auth=authenticated
5. Middleware checks cookie for protected routes
6. Redirects to login if not authenticated
```

### Product Fetching Flow
```
1. User visits /items or /items/[id]
2. useEffect triggers fetchItems() or fetchItemById()
3. Axios makes GET request to API
4. Express server returns JSON data
5. Components render with data
6. Error: Show fallback mock data + toast
```

### Add Product Flow
```
1. User fills form on /add-item
2. Form validation on submit
3. createItem() calls API with POST
4. Express validates and adds to storage
5. Success: Toast notification + redirect
6. Error: Show error toast
```

---

## 📁 Code Organization

### Frontend Structure
```
src/
├── app/                    # Next.js App Router
│   ├── page.js            # Root/Landing page
│   ├── layout.js          # Root layout (Navbar, Footer, ToastProvider)
│   ├── globals.css        # Global styles
│   ├── login/
│   │   └── page.js        # Login form page
│   ├── items/
│   │   ├── page.js        # Product list with filters
│   │   └── [id]/
│   │       └── page.js    # Dynamic product details
│   └── add-item/
│       └── page.js        # Add product form (protected)
│
├── components/            # Reusable React components
│   ├── Navbar.js         # Navigation bar (auth-aware)
│   ├── Footer.js         # Footer (static)
│   ├── ItemCard.js       # Product card (reusable)
│   └── ToastProvider.js  # Toast notification system
│
├── lib/                  # Utilities and helpers
│   ├── auth.js          # Authentication functions
│   └── api.js           # API client (Axios)
│
└── middleware.js         # Route protection middleware
```

### Backend Structure
```
server/
├── server.js            # Express app setup
├── package.json         # Dependencies
└── node_modules/        # Installed packages
```

---

## 🔧 Key Functions

### Authentication (src/lib/auth.js)
```javascript
validateLogin(email, password)     // Check credentials
setAuthCookie(document)            // Set auth cookie
clearAuthCookie(document)          // Remove auth cookie
isAuthenticated(cookieString)      // Check if authenticated
getAuthToken(cookieString)         // Get auth token
```

### API Client (src/lib/api.js)
```javascript
fetchItems()                       // GET all products
fetchItemById(id)                  // GET single product
createItem(itemData)               // POST new product
```

### Components
```javascript
Navbar()                           // Navigation with auth
Footer()                           // Footer section
ItemCard({item})                   // Product display card
ToastProvider({children})          // Toast notification wrapper
```

---

## 📊 Data Models

### Product Model
```javascript
{
  id: Number,
  name: String,
  description: String,
  longDescription: String,
  price: Number,
  stock: Number,
  category: String,
  image: String (URL),
  specs: {
    [key: String]: String
  }
}
```

### Auth Cookie
```
Name: auth
Value: authenticated
Expires: 24 hours
SameSite: Lax
Path: /
```

---

## 🧩 Component Props

### ItemCard
```javascript
<ItemCard 
  item={{
    id: Number,
    name: String,
    description: String,
    price: Number,
    image: String,
    stock: Number
  }}
/>
```

### ToastProvider
```javascript
<ToastProvider>
  {children}
</ToastProvider>
```

---

## 🔌 API Endpoints

### Health Check
```
GET /health
Response: { status: "Server is running", timestamp: "..." }
```

### Get All Items
```
GET /api/items
Response: [{ id, name, description, ... }]
```

### Get Single Item
```
GET /api/items/:id
Response: { id, name, description, ... }
404: { error: "Item not found" }
```

### Create Item
```
POST /api/items
Body: {
  name: String,
  description: String,
  price: Number,
  stock: Number,
  category?: String,
  image?: String
}
Response: { id, name, ... }
400: { error: "Missing required fields" }
```

---

## 🎯 Hooks & State Management

### Landing Page (page.js)
- No state management (static content)

### Items List (items/page.js)
```javascript
const [items, setItems] = useState([])
const [filteredItems, setFilteredItems] = useState([])
const [isLoading, setIsLoading] = useState(true)
const [searchQuery, setSearchQuery] = useState('')
const [selectedCategory, setSelectedCategory] = useState('all')
const [sortBy, setSortBy] = useState('name')
```

### Item Details (items/[id]/page.js)
```javascript
const [item, setItem] = useState(null)
const [isLoading, setIsLoading] = useState(true)
const [quantity, setQuantity] = useState(1)
```

### Add Item (add-item/page.js)
```javascript
const [formData, setFormData] = useState({
  name: '',
  description: '',
  longDescription: '',
  price: '',
  category: 'electronics',
  stock: '',
  image: ''
})
const [isLoading, setIsLoading] = useState(false)
```

### Navbar (components/Navbar.js)
```javascript
const [isLoggedIn, setIsLoggedIn] = useState(false)
const [isOpen, setIsOpen] = useState(false)
```

---

## 🌐 Environment Variables

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

**Note**: Variables prefixed with `NEXT_PUBLIC_` are exposed to browser.

### Backend (Optional)
No required environment variables. Optional:
```env
PORT=5000
NODE_ENV=development
```

---

## 🔒 Route Protection

### Middleware (src/middleware.js)
```javascript
Protects: /add-item (and /add-item/:path*)
Checks: auth cookie value === 'authenticated'
If not auth: Redirects to /login
```

### Client-Side Check (add-item/page.js)
```javascript
useEffect(() => {
  const isAuth = document.cookie.includes('auth=authenticated')
  if (!isAuth) router.push('/login')
}, [])
```

---

## 🎨 Tailwind CSS Usage

### Key Classes Used
```css
/* Layout */
.max-w-7xl              /* Max width container */
.grid grid-cols-*       /* Responsive grid */
.flex flex-col          /* Flexbox layouts */

/* Colors */
.bg-blue-600            /* Primary blue */
.text-gray-900          /* Text colors */
.border-gray-300        /* Borders */

/* Spacing */
.p-4 .px-6 .py-2       /* Padding */
.mb-4 .mt-6             /* Margins */
.gap-4                  /* Grid gaps */

/* Effects */
.shadow-lg              /* Shadows */
.rounded-lg             /* Border radius */
.transition             /* Smooth transitions */
.hover:scale-110        /* Hover effects */

/* Responsive */
.sm: .md: .lg:          /* Breakpoints */
.grid-cols-1 md:grid-cols-2 lg:grid-cols-4
```

---

## 🚀 Performance Tips

### Frontend Optimization
1. **Image Optimization**: Use Next.js Image component for production
2. **Code Splitting**: Next.js automatically splits code by route
3. **Lazy Loading**: Pages loaded on-demand
4. **Caching**: Browser and server caching enabled

### Backend Optimization
1. **Response Caching**: Add caching headers
2. **Database Indexing**: When moving to real DB
3. **Pagination**: Implement for large datasets
4. **Compression**: Add gzip compression

---

## 🔍 Debugging Tips

### Frontend
```javascript
// Check if authenticated
console.log(document.cookie)

// Check API response
console.log(await fetchItems())

// Check router state
console.log(useRouter())
```

### Backend
```javascript
// Log all requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`)
  next()
})

// Check data
console.log(items)
```

### Browser DevTools
- **Network Tab**: Check API requests/responses
- **Application Tab**: View cookies and storage
- **Console**: Check for errors
- **Elements Tab**: Inspect HTML structure

---

## 📦 Dependencies

### Frontend (package.json)
```json
{
  "next": "16.1.3",
  "react": "19.2.3",
  "react-dom": "19.2.3",
  "axios": "latest",
  "js-cookie": "latest",
  "react-toastify": "latest",
  "tailwindcss": "4"
}
```

### Backend (server/package.json)
```json
{
  "express": "4.18.2",
  "cors": "2.8.5"
}
```

---

## 🔄 Extending the Application

### Adding a New Page
```javascript
// 1. Create directory: src/app/newpage/
// 2. Create file: src/app/newpage/page.js
// 3. Export default component
export default function NewPage() {
  return <div>New Page</div>
}
```

### Adding a New Component
```javascript
// 1. Create: src/components/NewComponent.js
// 2. Export component
export default function NewComponent() {
  return <div>Component</div>
}
// 3. Import in other files: import NewComponent from '@/components/NewComponent'
```

### Adding API Endpoint
```javascript
// In server/server.js
app.get('/api/newroute', (req, res) => {
  try {
    // Handle request
    res.json({ data: [] })
  } catch (error) {
    res.status(500).json({ error: 'Failed' })
  }
})
```

### Adding Form Field
```javascript
// In form component
const [formData, setFormData] = useState({
  ...existing,
  newField: ''
})

// Update handler
const handleChange = (e) => {
  setFormData(prev => ({
    ...prev,
    [e.target.name]: e.target.value
  }))
}

// In JSX
<input 
  name="newField"
  value={formData.newField}
  onChange={handleChange}
/>
```

---

## 🧪 Testing Strategy

### Manual Testing
1. **Frontend Tests**: Click through all pages
2. **API Tests**: Use curl/Postman to test endpoints
3. **Auth Tests**: Test login/logout/redirects
4. **Responsive Tests**: Test on mobile/tablet/desktop

### Automated Testing (Optional)
```bash
npm install --save-dev jest @testing-library/react
# Add tests to __tests__ directories
```

---

## 📋 Common Issues & Solutions

### Issue: API not responding
**Solution**: Check if Express server is running on port 5000
```bash
curl http://localhost:5000/health
```

### Issue: Authentication not persisting
**Solution**: Check browser cookies
DevTools → Application → Cookies → Check auth cookie

### Issue: Styling not applying
**Solution**: Rebuild Tailwind CSS
```bash
npm run build
```

### Issue: Port already in use
**Solution**: Change port or kill process
```bash
PORT=3001 npm run dev
```

---

## 📚 Resources for Developers

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Axios Documentation](https://axios-http.com)

---

## 👥 Code Style Guide

### Naming Conventions
- Components: PascalCase (ItemCard, Navbar)
- Functions: camelCase (fetchItems, handleClick)
- Constants: UPPER_SNAKE_CASE (API_BASE_URL)
- Files: lowercase (auth.js, api.js)

### Component Structure
```javascript
'use client' // If client-side

// Imports
import { useState, useEffect } from 'react'

// Component
export default function MyComponent() {
  // Hooks
  const [state, setState] = useState(null)
  
  // Effects
  useEffect(() => {
    // Logic
  }, [])
  
  // Event handlers
  const handleClick = () => {}
  
  // Render
  return (
    <div>Content</div>
  )
}
```

---

## 🔐 Security Best Practices

1. ✅ Validate all inputs
2. ✅ Sanitize user data
3. ✅ Use HTTPS in production
4. ✅ Secure sensitive data
5. ✅ Implement rate limiting
6. ✅ Use proper authentication
7. ✅ Log errors without exposing details
8. ✅ Regular security updates

---

## 📞 Developer Support

For questions or issues:
1. Check the documentation files
2. Review code comments
3. Check browser console for errors
4. Check server logs for errors
5. Test with sample data

---

**Last Updated**: January 18, 2026
**Document Version**: 1.0
**Status**: Complete
