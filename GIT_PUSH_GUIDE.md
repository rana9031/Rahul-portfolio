# Push Portfolio to GitHub

Follow these steps to push your portfolio to GitHub:

## Step 1: Initialize Git Repository

Open your terminal/command prompt in the `myporfolio` folder and run:

```bash
git init
```

## Step 2: Add Remote Repository

```bash
git remote add origin https://github.com/rana9031/Rahul-portfolio.git
```

## Step 3: Create .gitignore (if not exists)

Make sure you have a `.gitignore` file with:

```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.vscode
.idea
```

## Step 4: Add All Files

```bash
git add .
```

## Step 5: Commit Changes

```bash
git commit -m "Initial commit: Modern portfolio website with React and Tailwind CSS"
```

## Step 6: Push to GitHub

If this is a new repository:
```bash
git branch -M main
git push -u origin main
```

If the repository already exists and you want to force push:
```bash
git push -f origin main
```

## Alternative: Using GitHub Desktop

1. Open GitHub Desktop
2. Click "Add" → "Add Existing Repository"
3. Select the `myporfolio` folder
4. Click "Publish repository" or "Push origin"

## Troubleshooting

### If you get authentication errors:
1. Make sure you're logged into GitHub
2. Use a Personal Access Token instead of password
3. Or use SSH keys

### If repository already has content:
```bash
git pull origin main --allow-unrelated-histories
git push origin main
```

## After Pushing

Your portfolio will be available at:
- Repository: https://github.com/rana9031/Rahul-portfolio
- GitHub Pages (if enabled): https://rana9031.github.io/Rahul-portfolio

## Deploy to GitHub Pages

To deploy your portfolio:

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://rana9031.github.io/Rahul-portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

Your site will be live at: https://rana9031.github.io/Rahul-portfolio

## Quick Commands Reference

```bash
# Check status
git status

# Add specific files
git add filename.js

# Commit with message
git commit -m "Your message"

# Push changes
git push origin main

# Pull latest changes
git pull origin main

# View remote URL
git remote -v
```

---

Good luck! 🚀
