@echo off
echo ====================================
echo Customer Support Chatbot Setup
echo ====================================
echo.

echo Step 1: Installing backend dependencies...
call npm install
echo.

echo Step 2: Installing frontend dependencies...
cd client
call npm install
cd ..
echo.

echo ====================================
echo Setup Complete!
echo ====================================
echo.
echo IMPORTANT: Before running the app, please:
echo 1. Open the .env file
echo 2. Add your OpenAI API key
echo.
echo Then run: npm run dev
echo.
pause
