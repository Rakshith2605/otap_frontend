@echo off
REM OTAP Frontend Setup Script for Windows

echo Setting up OTAP Frontend...
echo.

REM Check if Node.js is installed
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed. Please install Node.js first.
    echo Visit: https://nodejs.org/
    exit /b 1
)

echo Node.js version:
node -v
echo.

REM Install dependencies
echo Installing dependencies...
call npm install

REM Copy environment file
if not exist .env (
    echo Creating .env file...
    copy .env.example .env
    echo Please update .env with your API configuration
)

echo.
echo Setup complete!
echo.
echo To start the development server, run:
echo    npm start
echo.
echo To build for production, run:
echo    npm run build
echo.
echo Default credentials:
echo    Username: root
echo    Password: Jio@75034
echo.
pause