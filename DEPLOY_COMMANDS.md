# 🚀 Deploy Commands - Copy & Paste Ready

## Build Verification ✅
```bash
npm run build
```
**Expected Output**: "Compiled successfully" with 7 routes

---

## 🔧 Pre-Deployment Setup

### 1. Git Configuration
```bash
# Initialize Git
git init

# Add all files
git add .

# Commit
git commit -m "MyApp: Next.js E-commerce Application Ready for Deployment"

# Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/myapp.git

# Rename to main
git branch -M main

# Push to GitHub
git push -u origin main
```

**Check**: https://github.com/YOUR_USERNAME/myapp - should show your code

---

## 🌐 Deploy Backend (Choose ONE)

### Railway (Recommended)
```bash
# 1. Go to https://railway.app/
# 2. Click "New Project"
# 3. Select "Deploy from GitHub repo"
# 4. Choose your myapp repository
# 5. Click "Deploy"
# 6. Get URL from railway dashboard

# Copy this URL (you'll need it next):
# https://myapp-[random].railway.app
```

### Heroku
```bash
# Install
npm install -g heroku

# Login (opens browser)
heroku login

# Navigate to server directory
cd server

# Create app
heroku create myapp-api

# Go back to root
cd ..

# Push to heroku
git push heroku main

# Get info
heroku apps:info myapp-api

# Copy this URL:
# https://myapp-api.herokuapp.com
```

### Render
```bash
# 1. Go to https://render.com/
# 2. Click "New +"
# 3. Select "Web Service"
# 4. Connect your GitHub account
# 5. Select your myapp repository
# 6. Deploy
# 7. Copy your URL from dashboard
```

---

## 🎯 Deploy Frontend to Vercel

### Using CLI (Easiest)
```bash
# From project root
vercel --prod
```

**Follow prompts**:
- "Set up and deploy?" → `y`
- "Overwrite settings?" → `n`

Wait for deployment to complete.

**Copy your URL**:
```
https://your-app.vercel.app
```

### Using Vercel Dashboard
```
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your myapp repository
4. Click "Import"
5. Wait for deployment
6. Copy URL from dashboard
```

---

## 🔗 Connect Backend to Frontend

### Get Your API URL
- **Railway**: From dashboard → Settings → Domains → Copy `https://xxx.railway.app`
- **Heroku**: `https://myapp-api.herokuapp.com`
- **Render**: From dashboard URL

### Set Environment Variable in Vercel

**Option A: Via Vercel Dashboard**
```
1. Open https://vercel.com
2. Click your project
3. Settings → Environment Variables
4. Click "Add New"
5. Name: NEXT_PUBLIC_API_URL
6. Value: (paste your API URL)
7. Click "Save"
```

**Option B: Via CLI**
```bash
vercel env add NEXT_PUBLIC_API_URL

# When prompted, paste your API URL
# Example: https://myapp-xyz.railway.app
```

---

## 🚀 Redeploy Frontend

```bash
vercel --prod
```

Wait for "Production deployed" message.

---

## ✅ Verify Everything Works

### 1. Test Frontend
```bash
# Open in browser
https://your-app.vercel.app
```
Should see landing page.

### 2. Test Login
```
Email: user@example.com
Password: password123

Should redirect to /items page
```

### 3. Test API
```bash
curl https://your-api.railway.app/api/items
```
Should return JSON array of products.

### 4. Test Features
```
✓ Search products
✓ Filter by category
✓ Sort by price/rating/date
✓ Click product to see details
✓ Login and add new item
✓ See toast notifications
```

---

## 📊 Final URLs

After deployment, save these:

**Frontend**: 
```
https://your-app.vercel.app
```

**Backend API**:
```
https://your-api.railway.app
(or https://myapp-api.herokuapp.com)
```

---

## 🆘 Troubleshooting

### Build Fails on Vercel
```bash
# Test locally first
npm run build

# If it works locally but fails on Vercel:
# 1. Push code again
git add .
git commit -m "Fix build"
git push origin main

# Vercel auto-redeploys
```

### "Failed to fetch" in Frontend
```bash
# Check environment variable was set
vercel env list

# If not there, add it again:
vercel env add NEXT_PUBLIC_API_URL

# Redeploy
vercel --prod
```

### Products Don't Show
```bash
# Test API directly
curl https://your-api.railway.app/api/items

# Should return JSON array
# If not, check backend logs in Railway/Heroku/Render dashboard
```

### "Cannot GET /api/items"
```bash
# Backend not deployed correctly
# Check in your platform dashboard:
# - Railway: Is app running?
# - Heroku: Check logs with: heroku logs --tail
# - Render: Check dashboard
```

---

## 📝 Checklists

### Pre-Deployment
- [ ] Code builds locally: `npm run build`
- [ ] Git initialized
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Vercel CLI installed: `vercel --version`

### Deployment Order
1. [ ] Push code to GitHub
2. [ ] Deploy backend to Railway/Heroku/Render
3. [ ] Get backend API URL
4. [ ] Deploy frontend to Vercel
5. [ ] Add NEXT_PUBLIC_API_URL environment variable
6. [ ] Redeploy frontend

### Post-Deployment
- [ ] Frontend loads: https://your-app.vercel.app
- [ ] Backend works: curl https://your-api.xxx
- [ ] Login succeeds with user@example.com / password123
- [ ] Products appear on /items page
- [ ] Search/filter/sort works
- [ ] Add item works (when logged in)
- [ ] Toast notifications appear

---

## 💡 Pro Tips

1. **Don't share your API URL publicly** - It's for your frontend only
2. **Keep NEXT_PUBLIC_API_URL value in Vercel** - Don't hardcode it
3. **Test each feature after deployment** - APIs can be slow sometimes
4. **Monitor Vercel & backend logs** - Check if something goes wrong
5. **Enable Analytics** - Track your app's performance

---

## 🎉 Success Indicators

You're done when:
- ✅ Frontend loads without errors
- ✅ All 6 pages are accessible
- ✅ Login works with demo credentials
- ✅ Products load from backend API
- ✅ Search/filter/sort functional
- ✅ Add item form works
- ✅ Toast notifications appear
- ✅ No console errors in browser DevTools

---

## 📚 Need More Help?

- [Next.js Deployment](https://nextjs.org/docs/app/building-your-application/deploying)
- [Vercel Documentation](https://vercel.com/docs)
- [Railway Docs](https://docs.railway.app/)
- [Heroku Documentation](https://devcenter.heroku.com/)

---

**Your app is production-ready! 🚀**

Start with: `git init` and follow the commands above in order.
