@echo off
echo ==========================================
echo MyApp - Vercel Deployment Helper
echo ==========================================
echo.

REM Check if Vercel CLI is installed
where /q vercel
if errorlevel 1 (
    echo Vercel CLI not found. Installing...
    call npm install -g vercel
)

echo √ Vercel CLI ready
echo.

REM Check if git is initialized
if not exist .git (
    echo Initializing Git repository...
    call git init
    echo √ Git initialized
    echo.
    echo Add your GitHub repository:
    echo   git remote add origin https://github.com/YOUR_USERNAME/myapp.git
    echo   git branch -M main
    echo   git push -u origin main
    echo.
    pause
)

echo ==========================================
echo Deployment Steps:
echo ==========================================
echo.
echo 1. DEPLOY BACKEND ^(Choose one^):
echo.
echo    Option A: Heroku
echo    ---------
echo    heroku login
echo    cd server
echo    heroku create myapp-api
echo    git push heroku main
echo.
echo    Option B: Railway ^(Recommended^)
echo    ---------
echo    1. Go to https://railway.app/
echo    2. Click 'New Project'
echo    3. Deploy from GitHub
echo    4. Select your repo
echo    5. Configure build ^& start commands
echo.
echo 2. GET YOUR API URL
echo    - From Heroku: heroku apps:info myapp-api
echo    - From Railway: Check in dashboard
echo.
echo 3. DEPLOY FRONTEND
echo    vercel --prod
echo.
echo 4. SET ENVIRONMENT VARIABLES IN VERCEL
echo    - Go to Vercel dashboard
echo    - Project Settings -^> Environment Variables
echo    - Add: NEXT_PUBLIC_API_URL=^<YOUR_API_URL^>
echo    - Redeploy: vercel --prod
echo.
echo ==========================================
echo.
echo Ready to deploy? Type 'vercel' to start!
echo.
pause
