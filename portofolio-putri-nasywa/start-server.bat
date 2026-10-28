@echo off
title Portofolio Putri Nasywa Aprilia - Localhost Server
echo ========================================================
echo   Menjalankan Server Lokal Portofolio Putri Nasywa
echo   Buka link berikut di browser: http://localhost:3000/
echo ========================================================
echo.
start http://localhost:3000/
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0serve.ps1"
pause

