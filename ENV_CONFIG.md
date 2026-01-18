# Environment Configuration Guide

## Overview
This document explains the environment setup and configuration for the MyApp application.

## Environment Variables

### Frontend (.env.local)

Located in the root directory: `next-assignment/.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

**Variables**:
- `NEXT_PUBLIC_API_URL`: The base URL for the Express API server
  - Used for fetching products and managing items
  - Accessible in browser (public variable)
  - Default: http://localhost:5000/api

### Backend (server/.env) - Optional

The Express server doesn't require environment variables for basic functionality.

Optional configuration you could add:
```env
PORT=5000
NODE_ENV=development
```

## Port Configuration

### Default Ports

- **Next.js Application**: Port 3000
  - Development: http://localhost:3000
  - Command: `npm run dev`

- **Express API Server**: Port 5000
  - API: http://localhost:5000/api
  - Health: http://localhost:5000/health
  - Command: `npm start` (from server directory)

### Changing Ports

#### Next.js Port
```bash
npm run dev -- -p 3001
```

#### Express Port
Edit `server/server.js`:
```javascript
const PORT = process.env.PORT || 3001; // Change 5000 to 3001
```

Or set environment variable:
```bash
PORT=3001 npm start  # Linux/Mac
set PORT=3001 && npm start  # Windows
```

## API Configuration

### API Base URL

The frontend communicates with the API through the base URL defined in `.env.local`.

**For Local Development**:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

**For Production** (example with deployed API):
```env
NEXT_PUBLIC_API_URL=https://api.myapp.com/api
```

## CORS Configuration

The Express server is configured with CORS to accept requests from the Next.js frontend.

Current configuration in `server/server.js`:
```javascript
const cors = require('cors');
app.use(cors());
```

This allows requests from any origin. For production, you may want to restrict:

```javascript
app.use(cors({
  origin: 'https://myapp.com',
  credentials: true
}));
```

## Database (Future)

When migrating from in-memory storage to a database, add:

```env
# MongoDB
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/myapp

# PostgreSQL
DATABASE_URL=postgresql://user:password@localhost:5432/myapp
```

## Authentication

Currently using hardcoded mock credentials:
- Email: `user@example.com`
- Password: `password123`

For production, implement:
- NextAuth.js for OAuth
- JWT tokens
- Secure password hashing
- Database user storage

## Development vs Production

### Development Setup
```env
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NODE_ENV=development
```

### Production Setup
```env
# .env.local
NEXT_PUBLIC_API_URL=https://api.myapp.com/api
NODE_ENV=production
```

## Deployment Configuration

### Vercel (Next.js Frontend)

1. Connect your GitHub repository to Vercel
2. Set environment variable in Vercel dashboard:
   ```
   NEXT_PUBLIC_API_URL=https://your-api-server.com/api
   ```
3. Deploy

### Heroku (Express Backend)

```bash
# Create Heroku app
heroku create your-api-app

# Set environment variable
heroku config:set PORT=5000

# Deploy
git push heroku main
```

Update frontend `.env.local`:
```env
NEXT_PUBLIC_API_URL=https://your-api-app.herokuapp.com/api
```

## Troubleshooting

### API Connection Issues

1. **"Failed to fetch"** error:
   - Check if Express server is running: `http://localhost:5000/health`
   - Verify API URL in `.env.local`
   - Check browser console for CORS errors

2. **Port already in use**:
   ```bash
   # Find process using port
   lsof -i :5000  # Mac/Linux
   netstat -ano | findstr :5000  # Windows
   
   # Kill process or use different port
   ```

3. **CORS errors**:
   - Ensure Express CORS middleware is configured
   - Check origin restrictions

## Quick Reference

### Running Both Servers

**Terminal 1 - API Server**:
```bash
cd server
npm start
```

**Terminal 2 - Next.js App**:
```bash
npm run dev
```

### Environment Commands

```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# List environment variables
echo $PATH  # Mac/Linux
echo %PATH%  # Windows
```

## Security Recommendations

For production deployment:

1. ✅ Use HTTPS for all connections
2. ✅ Set strong environment variables
3. ✅ Implement proper authentication
4. ✅ Validate and sanitize inputs
5. ✅ Use environment-specific configurations
6. ✅ Secure sensitive data in .env files
7. ✅ Never commit .env files to version control
8. ✅ Use database instead of in-memory storage
9. ✅ Implement rate limiting
10. ✅ Add proper error logging

## Support

For configuration issues, check:
- Server logs: `server/server.js` output
- Browser console: DevTools → Console
- Network tab: DevTools → Network (API calls)

---

**Last Updated**: January 18, 2026
