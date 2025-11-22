@echo off
setlocal enabledelayedexpansion

cls
echo ===============================================
echo    MS-Promtathon Setup
echo ===============================================
echo.

REM Check Node.js
node --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Node.js is not installed
    echo Please install from https://nodejs.org/ (version 20.x or 22.x)
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo [OK] Node.js %NODE_VERSION% found

REM Install pnpm
echo.
echo Installing pnpm...
call npm install -g pnpm@10.14.0 >nul 2>&1
for /f "tokens=*" %%i in ('pnpm -v') do set PNPM_VERSION=%%i
echo [OK] pnpm %PNPM_VERSION% ready

REM Install dependencies
echo.
echo Installing dependencies...
call pnpm install >nul 2>&1
echo [OK] Dependencies installed

REM Create .env.local
if not exist ".env.local" (
    echo Creating .env.local...
    copy ".env.example" ".env.local" >nul
    echo [OK] .env.local created
)

REM Type check
echo.
echo Checking TypeScript...
call pnpm typecheck >nul 2>&1
echo [OK] TypeScript OK

REM Tests
echo Running tests...
call pnpm test >nul 2>&1
echo [OK] Tests passed

REM Build
echo Building project...
call pnpm build >nul 2>&1
echo [OK] Build complete

echo.
echo ===============================================
echo     Setup Complete!
echo ===============================================
echo.
echo Next: Start the development server
echo.
echo Run this command:
echo   pnpm dev
echo.
echo Then visit: http://localhost:8080
echo.
pause
