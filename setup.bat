@echo off
echo ========================================
echo MyApp - Next.js + Express Setup
echo ========================================
echo.

REM Check if Node.js is installed
where /q node
if errorlevel 1 (
    echo ERROR: Node.js is not installed. Please install Node.js 18+ from https://nodejs.org/
    pause
    exit /b 1
)

echo ✓ Node.js detected
echo.

REM Install frontend dependencies
echo Installing frontend dependencies...
cd "%~dp0"
call npm install
if errorlevel 1 (
    echo ERROR: Failed to install frontend dependencies
    pause
    exit /b 1
)
echo ✓ Frontend dependencies installed
echo.

REM Install backend dependencies
echo Installing backend dependencies...
cd server
call npm install
if errorlevel 1 (
    echo ERROR: Failed to install server dependencies
    pause
    exit /b 1
)
cd ..
echo ✓ Backend dependencies installed
echo.

echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo Next steps:
echo.
echo 1. Start the API server in a new terminal:
echo    cd server
echo    npm start
echo.
echo 2. Start the Next.js app in another terminal:
echo    npm run dev
echo.
echo 3. Open your browser to:
echo    http://localhost:3000
echo.
echo Demo Credentials:
echo   Email: user@example.com
echo   Password: password123
echo.
pause
