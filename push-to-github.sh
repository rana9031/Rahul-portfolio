#!/bin/bash

echo "========================================"
echo "Pushing Portfolio to GitHub"
echo "========================================"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "ERROR: Git is not installed"
    echo "Please install Git first"
    exit 1
fi

echo "Step 1: Initializing Git repository..."
git init

echo ""
echo "Step 2: Adding remote repository..."
git remote remove origin 2>/dev/null
git remote add origin https://github.com/rana9031/Rahul-portfolio.git

echo ""
echo "Step 3: Adding all files..."
git add .

echo ""
echo "Step 4: Committing changes..."
git commit -m "Update: Modern React portfolio with dark mode, responsive design, and animations"

echo ""
echo "Step 5: Setting main branch..."
git branch -M main

echo ""
echo "Step 6: Pushing to GitHub..."
git push -f origin main

echo ""
echo "========================================"
echo "Push completed successfully!"
echo "========================================"
echo ""
echo "Your portfolio is now at:"
echo "https://github.com/rana9031/Rahul-portfolio"
echo ""
