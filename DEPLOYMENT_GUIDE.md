# Vercel Deployment Guide

## 🚀 Deploy MyApp to Vercel

This guide walks you through deploying MyApp's frontend to Vercel and backend to Heroku/Railway.

---

## Part 1: Frontend Deployment to Vercel

### Prerequisites
- Vercel account (free at https://vercel.com)
- GitHub account (recommended)
- Vercel CLI installed

### Step 1: Connect GitHub Repository

**Option A: Using GitHub (Recommended)**
1. Push your code to GitHub
   ```bash
   git init
   git add .
   git commit -m "Initial commit: MyApp"
   git remote add origin https://github.com/YOUR_USERNAME/myapp.git
   git push -u origin main
   ```

2. Go to https://vercel.com/new
3. Click "Import Git Repository"
4. Select your GitHub repository
5. Click "Import"

**Option B: Using Vercel CLI**
1. In project directory: `vercel`
2. Follow the prompts
3. Choose production environment when asked

### Step 2: Configure Environment Variables in Vercel

1. In Vercel Dashboard:
   - Go to your project → Settings → Environment Variables
   - Add: `NEXT_PUBLIC_API_URL`
   - Set value to your backend API URL (from Part 2)
   - Save

Or via CLI:
```bash
vercel env add NEXT_PUBLIC_API_URL
```

### Step 3: Deploy

**Automatic Deployment**
- Just push to GitHub, Vercel auto-deploys

**Manual Deployment**
```bash
vercel --prod
```

Your frontend is now live! 🎉

---

## Part 2: Backend Deployment

### Option A: Deploy to Heroku

#### Step 1: Install Heroku CLI
```bash
npm install -g heroku
```

#### Step 2: Create Heroku Account
Visit https://www.heroku.com/

#### Step 3: Login to Heroku
```bash
heroku login
```

#### Step 4: Create Heroku App
```bash
cd server
heroku create myapp-api
```

#### Step 5: Deploy Backend
```bash
git push heroku main
```

#### Step 6: Get API URL
```bash
heroku apps:info myapp-api
```

Your API URL will be: `https://myapp-api.herokuapp.com/api`

---

### Option B: Deploy to Railway

#### Step 1: Create Railway Account
Visit https://railway.app/

#### Step 2: Connect GitHub
- Login to Railway
- Click "New Project"
- Select "Deploy from GitHub repo"
- Choose your repository

#### Step 3: Configure Build
- Railway auto-detects Node.js
- Build command: `cd server && npm install`
- Start command: `cd server && npm start`

#### Step 4: Get URL
Railway provides your API URL automatically

---

### Option C: Deploy to Render

#### Step 1: Create Render Account
Visit https://render.com/

#### Step 2: Create New Service
- Click "New +"
- Select "Web Service"
- Connect GitHub

#### Step 3: Configure
- Build Command: `npm install`
- Start Command: `npm start` (from server directory)
- Environment: Node
- Plan: Free

#### Step 4: Get URL
Your API URL: `https://your-app-name.onrender.com/api`

---

## Part 3: Update Frontend API URL

### Update .env.local (Local Development)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Update Vercel Production URL
In Vercel Dashboard → Settings → Environment Variables:
```
NEXT_PUBLIC_API_URL=https://your-api-url.herokuapp.com/api
```

Or use CLI:
```bash
vercel env add NEXT_PUBLIC_API_URL https://your-api-url.herokuapp.com/api
```

---

## Full Deployment Checklist

### Frontend (Vercel)
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Environment variables set
- [ ] Build successful
- [ ] Frontend accessible online

### Backend (Heroku/Railway/Render)
- [ ] Account created
- [ ] App deployed
- [ ] API URL obtained
- [ ] CORS enabled (already done)
- [ ] Test API endpoints

### Integration
- [ ] API URL added to Vercel environment variables
- [ ] Frontend redeployed with new URL
- [ ] Test login functionality
- [ ] Test API calls
- [ ] Test protected routes

---

## Testing Your Deployment

### Test Frontend
```bash
# Visit your Vercel domain
https://your-app.vercel.app

# Login with:
# Email: user@example.com
# Password: password123

# Test features:
1. Browse products
2. Search and filter
3. View product details
4. Login/logout
5. Try adding item (protected route)
```

### Test API
```bash
# Test health check
curl https://your-api.herokuapp.com/health

# Test get items
curl https://your-api.herokuapp.com/api/items

# Test get single item
curl https://your-api.herokuapp.com/api/items/1
```

---

## Troubleshooting

### Issue: API calls failing from frontend
**Solution**: Check CORS is enabled on backend
```javascript
// In server/server.js - already configured
app.use(cors());
```

### Issue: 404 errors on routes
**Solution**: Ensure Vercel is treating it as SPA
- Already configured in next.config.mjs

### Issue: Environment variables not loading
**Solution**: Redeploy after setting variables
```bash
vercel --prod
```

### Issue: Database connection errors
**Solution**: Check connection string in environment variables

### Issue: Port issues
**Solution**: Express reads from PORT env variable (default 5000)
- Heroku/Railway/Render automatically set this

---

## Monitoring & Maintenance

### Vercel Dashboard
- Check deploy logs
- Monitor page performance
- View analytics
- Manage environment variables

### Backend Monitoring
- **Heroku**: `heroku logs --tail`
- **Railway**: View in dashboard
- **Render**: View in dashboard

### Update Deployment
```bash
# After code changes
git push origin main  # Auto-deploys on Vercel

# For backend
git push heroku main  # If using Heroku
```

---

## Production Best Practices

### Security
- [ ] Use HTTPS (automatic with Vercel)
- [ ] Set strong API keys
- [ ] Validate all inputs
- [ ] Use environment variables for secrets
- [ ] Enable CORS restrictions (if needed)

### Performance
- [ ] Enable caching
- [ ] Monitor build times
- [ ] Check file sizes
- [ ] Test on slow networks

### Monitoring
- [ ] Set up error tracking
- [ ] Monitor API response times
- [ ] Track user issues
- [ ] Review logs regularly

---

## Custom Domain (Optional)

### Add Custom Domain to Vercel
1. Go to Project Settings → Domains
2. Click "Add Domain"
3. Enter your domain name
4. Follow DNS setup instructions
5. Wait for verification (5-48 hours)

### Add Custom Domain to Backend
- Heroku: Use Heroku domain or custom domain
- Railway: Add in project settings
- Render: Add in custom domains section

---

## Scale Your App (Optional)

### Vercel
- Free tier is generous
- Pro plan for higher limits
- Enterprise for custom needs

### Backend Services
- **Heroku**: Free tier = slow/unreliable for production
  - Recommended: Hobby tier ($7/month)
- **Railway**: $5 credit/month free
- **Render**: Free tier with limitations

---

## Next Steps

1. **Choose backend service** (Heroku recommended)
2. **Deploy backend first**
3. **Get API URL**
4. **Deploy frontend with API URL**
5. **Test everything**
6. **Set up custom domain** (optional)
7. **Monitor and maintain**

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Heroku Docs: https://devcenter.heroku.com/
- Railway Docs: https://docs.railway.app/
- Render Docs: https://render.com/docs

---

**Your app is production-ready! 🚀**
