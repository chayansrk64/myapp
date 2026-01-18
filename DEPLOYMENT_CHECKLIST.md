# ✅ Deployment Checklist & Commands

## Complete Step-by-Step Deployment

---

## 📋 Pre-Deployment

- [ ] Application builds without errors: `npm run build`
- [ ] All features work locally
- [ ] Have Vercel account (free at vercel.com)
- [ ] Have GitHub account
- [ ] Vercel CLI installed: `vercel --version`

---

## 🔧 Step 1: Setup Git & GitHub

### Commands to Run:
```bash
cd "c:\Users\Chayan\Desktop\nextjs-assignment\next-assignment"

git init
git add .
git commit -m "MyApp: Next.js E-commerce Application"

git remote add origin https://github.com/YOUR_USERNAME/myapp.git
git branch -M main
git push -u origin main
```

### Checklist:
- [ ] Git initialized
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Repository is public

**Time**: ~5 minutes

---

## 🌐 Step 2: Deploy Backend API

### Choose One Option:

#### ✅ OPTION A: Railway (Recommended)

**Steps**:
1. [ ] Go to https://railway.app/
2. [ ] Sign up with GitHub
3. [ ] Click "New Project"
4. [ ] Select "Deploy from GitHub repo"
5. [ ] Choose your `myapp` repository
6. [ ] Click "Deploy"
7. [ ] Wait for deployment (~2-3 minutes)
8. [ ] **Copy your API URL** from settings

**Your API URL will be**:
```
https://myapp-[random].railway.app/api
```

**Time**: ~5 minutes

---

#### ⚪ OPTION B: Heroku

**Commands**:
```bash
# Install if needed
npm install -g heroku

# Login (opens browser)
heroku login

# Navigate to server
cd server

# Create app
heroku create myapp-api

# Go back to root
cd ..

# Deploy
git push heroku main

# Get URL
heroku apps:info myapp-api
```

**Your API URL will be**:
```
https://myapp-api.herokuapp.com/api
```

**Checklist**:
- [ ] Heroku CLI installed
- [ ] Logged into Heroku
- [ ] App created
- [ ] Code deployed
- [ ] API URL copied

**Time**: ~10 minutes

---

#### ⚪ OPTION C: Render

1. [ ] Go to https://render.com/
2. [ ] Click "New +"
3. [ ] Select "Web Service"
4. [ ] Connect GitHub
5. [ ] Select repository
6. [ ] Configure build settings
7. [ ] Deploy
8. [ ] Copy API URL

**Time**: ~10 minutes

---

## 🎯 Step 3: Deploy Frontend to Vercel

### Using CLI (Recommended):

```bash
vercel --prod
```

**Prompts**:
- "Set up and deploy?" → Type `y`
- "Overwrite settings?" → Type `n`
- Wait for build (~3-5 minutes)

**You'll see**:
```
✓ Production: https://your-app.vercel.app
```

**Checklist**:
- [ ] Vercel CLI initialized
- [ ] Build successful
- [ ] Frontend URL obtained
- [ ] Deployment complete

**Alternative: Use Vercel Dashboard**:
1. [ ] Go to https://vercel.com/new
2. [ ] Click "Import Git Repository"
3. [ ] Select your myapp repository
4. [ ] Click "Import"
5. [ ] Wait for deployment
6. [ ] Copy your URL

**Time**: ~5-10 minutes

---

## 🔗 Step 4: Connect Backend to Frontend

### Get Your API URL:
- **From Railway**: Settings → Domains → Copy URL
- **From Heroku**: `https://myapp-api.herokuapp.com/api`
- **From Render**: Copy URL from dashboard

### Set Environment Variable:

#### Method A: Vercel Dashboard
1. [ ] Open Vercel Dashboard
2. [ ] Click your project
3. [ ] Go to Settings → Environment Variables
4. [ ] Click "Add New"
5. [ ] Fill in:
   - **Name**: `NEXT_PUBLIC_API_URL`
   - **Value**: Your API URL (e.g., `https://myapp-api.railway.app`)
6. [ ] Click "Save"

#### Method B: Vercel CLI
```bash
vercel env add NEXT_PUBLIC_API_URL

# Enter your API URL when prompted
```

**Checklist**:
- [ ] API URL from backend service
- [ ] Environment variable added
- [ ] Variable name: `NEXT_PUBLIC_API_URL`
- [ ] Value set correctly

**Time**: ~2 minutes

---

## 🚀 Step 5: Redeploy Frontend

```bash
vercel --prod
```

Wait for build completion.

**Checklist**:
- [ ] Deployment successful
- [ ] Build without errors
- [ ] Frontend accessible

**Time**: ~5 minutes

---

## ✨ VERIFICATION

### ✅ Test 1: Frontend Loads
```
Visit: https://your-app.vercel.app
Expected: Landing page appears
Result: ____
```

### ✅ Test 2: Login
```
Email: user@example.com
Password: password123
Expected: Redirects to /items
Result: ____
```

### ✅ Test 3: Products Appear
```
Expected: Product list shows items
Try: Search, filter, sort
Result: ____
```

### ✅ Test 4: Add Item
```
Login first
Click: Add Item button
Fill form and submit
Expected: Success toast, redirect to /items
Result: ____
```

### ✅ Test 5: API Direct Test
```bash
curl https://your-api.railway.app/api/items

Expected: JSON array of products
Result: ____
```

---

## 🎉 DEPLOYMENT COMPLETE!

### Your URLs:

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

## ⏱️ Total Time

| Step | Time |
|------|------|
| Git Setup | 5 min |
| Backend Deploy | 5-10 min |
| Frontend Deploy | 5-10 min |
| Connect APIs | 2 min |
| Test & Verify | 5 min |
| **TOTAL** | **22-37 min** |

---

## 🔍 Troubleshooting

### Frontend shows "Failed to fetch"
```bash
# Check environment variable
vercel env list

# Redeploy
vercel --prod
```

### API returns 404
```bash
# Test API directly
curl https://your-api.railway.app/api/items

# Check backend logs in dashboard
```

### Login not working
```
1. Open DevTools (F12)
2. Go to Application tab
3. Check Cookies
4. Clear all cookies
5. Refresh page
6. Try again
```

### Build fails on Vercel
```bash
# Test locally
npm run build

# Fix errors locally
git add .
git commit -m "Fix build"
git push origin main

# Vercel auto-redeploys
```

---

## 📞 Quick Help

**Lost?** Read the full guide:
```
DEPLOYMENT_STEPS.md - Full detailed instructions
DEPLOYMENT_GUIDE.md - Comprehensive guide with options
QUICK_DEPLOY.md - Quick 5-minute summary
```

**Need Vercel help?**
- https://vercel.com/docs
- https://vercel.com/support

**Need Railway help?**
- https://docs.railway.app/
- Support in dashboard

---

## 🎯 What's Next?

After deployment:

1. **Setup Custom Domain** (optional)
   - Buy domain
   - Add to Vercel settings
   - Update DNS

2. **Add Database** (optional)
   - MongoDB
   - PostgreSQL
   - Firebase

3. **Add Payment** (optional)
   - Stripe integration
   - PayPal integration

4. **Monitor App**
   - Check Vercel analytics
   - Monitor API usage
   - Track errors

---

## ✅ Final Checklist

- [ ] Git repository on GitHub
- [ ] Backend deployed
- [ ] Frontend deployed
- [ ] API URL configured
- [ ] Frontend redeployed
- [ ] Login works
- [ ] Products appear
- [ ] Add item works
- [ ] Search/filter works
- [ ] All tests pass

**Status**: Ready for production! 🚀

---

**Remember**: Your app is now live and accessible worldwide!

Share your URL: `https://your-app.vercel.app`
