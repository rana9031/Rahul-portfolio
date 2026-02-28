@echo off
echo ========================================
echo Pushing Portfolio to GitHub
echo ========================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed or not in PATH
    echo Please install Git from: https://git-scm.com/download/win
    pause
    exit /b 1
)

echo Step 1: Initializing Git repository...
git init

echo.
echo Step 2: Adding remote repository...
git remote remove origin 2>nul
git remote add origin https://github.com/rana9031/Rahul-portfolio.git

echo.
echo Step 3: Adding all files...
git add .

echo.
echo Step 4: Committing changes...
git commit -m "Update: Modern React portfolio with dark mode, responsive design, and animations"

echo.
echo Step 5: Setting main branch...
git branch -M main

echo.
echo Step 6: Pushing to GitHub...
git push -f origin main

echo.
echo ========================================
echo Push completed successfully!
echo ========================================
echo.
echo Your portfolio is now at:
echo https://github.com/rana9031/Rahul-portfolio
echo.
pause
