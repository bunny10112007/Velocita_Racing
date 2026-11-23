@echo off
echo ===================================================
echo Velocita Racing - Web Application Build Script
echo ===================================================

echo [1/3] Checking Node.js and NPM environment...
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed or not in PATH.
    pause
    exit /b 1
)
npm -v >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: NPM is not installed or not in PATH.
    pause
    exit /b 1
)

echo [2/3] Installing dependencies...
call npm install --legacy-peer-deps
if %errorlevel% neq 0 (
    echo [ERROR] npm install failed!
    pause
    exit /b %errorlevel%
)

echo [3/3] Building production bundle...
set CI=false
call npm run build
if %errorlevel% neq 0 (
    echo [ERROR] Build failed!
    pause
    exit /b %errorlevel%
)

echo ===================================================
echo [SUCCESS] Production build completed successfully!
echo Artifacts located in: build/
echo ===================================================
pause
