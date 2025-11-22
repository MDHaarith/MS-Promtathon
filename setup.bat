@echo off
setlocal enabledelayedexpansion

echo ========================================
echo MS-Promtathon Setup Script (Windows)
echo ========================================
echo.

REM Check if Node.js is installed
echo Checking Node.js installation...
node --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Node.js is not installed
    echo Please install Node.js 20.x or later from https://nodejs.org/
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo [OK] Node.js %NODE_VERSION% found

REM Check if npm is installed
echo Checking npm installation...
npm --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] npm is not installed
    pause
    exit /b 1
)

echo [OK] npm found

REM Install pnpm globally
echo.
echo Installing pnpm 10.14.0...
call npm install -g pnpm@10.14.0

for /f "tokens=*" %%i in ('pnpm -v') do set PNPM_VERSION=%%i
echo [OK] pnpm %PNPM_VERSION% installed

REM Install dependencies
echo.
echo Installing project dependencies...
call pnpm install

if errorlevel 1 (
    echo [ERROR] Failed to install dependencies
    pause
    exit /b 1
)
echo [OK] Dependencies installed successfully

REM Create .env.local if it doesn't exist
echo.
echo Setting up environment variables...
if not exist ".env.local" (
    copy ".env.example" ".env.local" >nul
    echo [OK] Created .env.local from .env.example
    echo [INFO] Edit .env.local to customize your configuration
) else (
    echo [OK] .env.local already exists
)

REM Run type check
echo.
echo Running TypeScript type check...
call pnpm typecheck

if errorlevel 1 (
    echo [ERROR] TypeScript type check failed
    pause
    exit /b 1
)
echo [OK] Type check passed

REM Run tests
echo.
echo Running tests...
call pnpm test

if errorlevel 1 (
    echo [ERROR] Tests failed
    pause
    exit /b 1
)
echo [OK] All tests passed

REM Summary
echo.
echo ========================================
echo Setup Complete! 
echo ========================================
echo.
echo Next steps:
echo 1. Edit .env.local with your configuration
echo 2. Start development: pnpm dev
echo 3. Open http://localhost:8080 in your browser
echo.
echo Available commands:
echo   pnpm dev        - Start development server
echo   pnpm build      - Build for production
echo   pnpm start      - Run production server
echo   pnpm test       - Run tests
echo   pnpm typecheck  - Check TypeScript types
echo.
echo Documentation:
echo   README.md - Project overview
echo   DEPLOYMENT_GUIDE.md - Deployment instructions
echo   .github/CONTRIBUTING.md - Contributing guidelines
echo.
echo Happy coding!
echo.
pause
