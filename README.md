# MyApp - Product Management Platform

A modern, feature-rich Next.js application for browsing and managing products with secure authentication and a responsive design.

## Overview

MyApp is a full-stack e-commerce platform built with Next.js 16 (App Router) and Express.js. It features a public product catalog, secure authentication system, user-protected pages, and comprehensive product management capabilities.

## Key Features

### ✨ Core Features
- **Landing Page** - Beautiful 7-section homepage with brand storytelling
- **Product Catalog** - Browse, search, filter, and sort products
- **Product Details** - Comprehensive product information with specifications
- **Authentication** - Secure mock login with cookie-based sessions
- **Protected Routes** - Add Item page accessible only to authenticated users
- **Responsive Design** - Mobile-first design using Tailwind CSS
- **Toast Notifications** - Real-time user feedback on actions
- **Express API** - Robust backend API for data management

### 🔐 Authentication
- Hardcoded credentials for demo (email: user@example.com, password: password123)
- Cookie-based session management (24-hour expiration)
- Middleware-based route protection
- Automatic redirection for unauthenticated users

### 📦 Product Management
- View all products with rich details
- Filter by category and price range
- Search products by name/description
- Sort by name, price (high/low)
- Add new products (authenticated users only)
- Product specifications and stock tracking
- Professional product cards with images

## Tech Stack

- **Frontend**: Next.js 16, React 19, Tailwind CSS 4
- **Backend**: Express.js
- **State Management**: React Hooks
- **Styling**: Tailwind CSS with responsive design
- **API Client**: Axios
- **Notifications**: React Toastify
- **Authentication**: Cookie-based sessions

## Project Structure

```
next-assignment/
├── src/
│   ├── app/
│   │   ├── layout.js                 # Root layout with Navbar & Footer
│   │   ├── page.js                   # Landing page (7 sections)
│   │   ├── globals.css               # Global styles
│   │   ├── login/
│   │   │   └── page.js              # Login page
│   │   ├── items/
│   │   │   ├── page.js              # Products list page
│   │   │   └── [id]/
│   │   │       └── page.js          # Product details page
│   │   └── add-item/
│   │       └── page.js              # Add product form (protected)
│   ├── components/
│   │   ├── Navbar.js                # Navigation component
│   │   ├── Footer.js                # Footer component
│   │   ├── ItemCard.js              # Product card component
│   │   └── ToastProvider.js         # Toast notification provider
│   ├── lib/
│   │   ├── auth.js                  # Authentication utilities
│   │   └── api.js                   # API client functions
│   └── middleware.js                 # Next.js middleware for route protection
├── server/
│   ├── package.json
│   └── server.js                    # Express API server
├── public/                          # Static assets
├── package.json
├── .env.local                       # Environment variables
└── README.md
```

## Routes Summary

### Public Routes
- `/` - Landing page
- `/items` - Products list page
- `/items/[id]` - Product details page
- `/login` - Login page

### Protected Routes (Require Authentication)
- `/add-item` - Add new product form
  - Redirects to `/login` if not authenticated

## Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### 1. Install Frontend Dependencies

```bash
cd next-assignment
npm install
```

### 2. Install Backend Dependencies

```bash
cd server
npm install
cd ..
```

### 3. Configure Environment Variables

Create or update `.env.local` in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## Running the Application

### Start the API Server (Terminal 1)

```bash
cd server
npm start
```

The API server will run on `http://localhost:5000`
- Health check: `http://localhost:5000/health`
- API endpoints: `http://localhost:5000/api/items`

### Start the Next.js Application (Terminal 2)

```bash
npm run dev
```

The Next.js app will run on `http://localhost:3000`

### Access the Application

Open your browser and navigate to `http://localhost:3000`

## Demo Credentials

For testing the authentication system:
- **Email**: user@example.com
- **Password**: password123

These credentials are displayed on the login page for convenience.

## Features Explained

### Landing Page (7 Sections)
1. **Hero Section** - Eye-catching welcome message with CTA
2. **Why Choose Us** - Three key features highlighting the platform
3. **How It Works** - Step-by-step process flow
4. **Testimonials** - User reviews and testimonials
5. **Features Section** - Detailed feature cards
6. **CTA Section** - Call-to-action with buttons
7. **Navigation** - Navbar with auth-aware menu (in header)

### Authentication System
- **Cookie-based**: Sessions stored as HTTP cookies with 24-hour expiration
- **Mock Implementation**: Demonstrates secure auth pattern
- **Protected Routes**: Middleware prevents unauthorized access
- **Auto-redirect**: Users redirected to login when accessing protected pages
- **Session Persistence**: Cookies persist across page refreshes

### Product Management
- **API Integration**: Communicates with Express backend
- **Error Handling**: Graceful fallbacks with mock data
- **Search & Filter**: Real-time filtering with multiple criteria
- **Image Support**: Products with image URLs and placeholders
- **Stock Tracking**: Visual stock status (In Stock/Out of Stock)

### API Endpoints

**GET** `/api/items` - Fetch all products
```json
Response: [
  {
    id: 1,
    name: "Laptop",
    description: "...",
    price: 999.99,
    stock: 5,
    category: "electronics",
    image: "https://...",
    specs: { ... }
  }
]
```

**GET** `/api/items/:id` - Fetch single product
```json
Response: { ... product details ... }
```

**POST** `/api/items` - Create new product
```json
Body: {
  name: "Product Name",
  description: "Description",
  price: 99.99,
  stock: 10,
  category: "electronics",
  image: "https://...",
  longDescription: "Detailed description"
}
Response: { ... created product ... }
```

## Styling & Design

- **Tailwind CSS 4**: Utility-first CSS framework
- **Responsive**: Mobile-first design approach
- **Color Scheme**: 
  - Primary: Blue (#2563eb)
  - Neutral: Gray palette
  - Success: Green for in-stock items
  - Error: Red for out-of-stock items
- **Components**: Pre-built card components, buttons, forms
- **Animations**: Smooth transitions and hover effects

## State Management

- **React Hooks**: useState for local component state
- **useRouter**: Next.js navigation and redirects
- **useParams**: Dynamic route parameters
- **useEffect**: Data fetching and side effects
- **Cookies**: Client-side session management

## Error Handling

- **API Failures**: Graceful error messages and fallback data
- **Missing Items**: Proper 404 handling with links back to catalog
- **Form Validation**: Client-side validation with user feedback
- **Authentication**: Middleware-based route protection

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User registration system
- [ ] Google/OAuth authentication
- [ ] Shopping cart functionality
- [ ] Order management
- [ ] Admin dashboard
- [ ] Product reviews & ratings
- [ ] Wishlist feature
- [ ] Payment integration

## Troubleshooting

### Port 5000 already in use
```bash
# Change PORT in server/server.js or use:
PORT=5001 npm start
```

### API connection issues
- Ensure the Express server is running on port 5000
- Check `.env.local` has correct API URL
- Check browser console for CORS errors

### Authentication not working
- Clear browser cookies: DevTools → Application → Cookies
- Ensure cookies are enabled
- Try clearing cache and reloading

## License

MIT

## Support

For issues or questions, please refer to the project documentation or open an issue in the repository.

---

**Built with ❤️ using Next.js 16 and Express.js**
