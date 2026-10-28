@echo off
title Push Portofolio ke GitHub (narainbi/portofolionaraa)
echo ======================================================================
echo   AUTO PUSH GITHUB REPOSITORY: narainbi/portofolionaraa
echo   Target: https://github.com/narainbi/portofolionaraa.git
echo ======================================================================
echo.

REM Cek apakah git terpasang
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [PERINGATAN] Perangkat lunak Git belum terpasang di komputer Anda.
    echo.
    echo Silakan unduh dan pasang Git terlebih dahulu dari:
    echo https://git-scm.com/downloads
    echo.
    echo Atau gunakan cara mudah Upload Web di GitHub:
    echo 1. Buka https://github.com/narainbi/portofolionaraa
    echo 2. Klik "Add file" lalu "Upload files"
    echo 3. Tarik seluruh file dari folder ini ke browser Anda
    echo.
    pause
    exit /b 1
)

echo [1/5] Menginisialisasi repositori Git lokal...
git init

echo [2/5] Menyiapkan remote GitHub...
git remote remove origin >nul 2>nul
git remote add origin https://github.com/narainbi/portofolionaraa.git

echo [3/5] Menambahkan seluruh file portofolio...
git add .

echo [4/5] Membuat commit...
git commit -m "Portofolio Putri Nasywa Aprilia - IO Psychology Binus University"

echo [5/5] Mengunggah (Push) ke branch main...
git branch -M main
git push -u origin main

echo.
if %errorlevel% equ 0 (
    echo ======================================================================
    echo   BERHASIL! Website portofolio telah terunggah ke:
    echo   https://github.com/narainbi/portofolionaraa
    echo ======================================================================
) else (
    echo ======================================================================
    echo   Gagal push. Pastikan Anda telah login ke akun GitHub Anda.
    echo ======================================================================
)
echo.
pause

