@echo off
echo ====================================
echo Starting Customer Support Chatbot
echo ====================================
echo.
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo Press Ctrl+C to stop both servers
echo.

start cmd /k "cd /d "%~dp0" && echo Starting Backend Server... && npm run server"
timeout /t 3 /nobreak > nul
start cmd /k "cd /d "%~dp0client" && echo Starting Frontend Server... && npm start"

echo.
echo Both servers are starting in separate windows...
echo.
