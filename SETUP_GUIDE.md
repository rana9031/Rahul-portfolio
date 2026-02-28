# Portfolio Setup Guide

## Quick Start

Your portfolio is ready to use! The development server should be running at http://localhost:3000

## What's Included

### Components Created:
1. **Navbar** - Responsive navigation with dark/light mode toggle
2. **Hero** - Landing section with name, title, and CTA buttons
3. **About** - Professional summary with skills showcase
4. **Skills** - Categorized skills with progress bars
5. **Projects** - Portfolio projects with images and links
6. **Experience** - Timeline of work experience and education
7. **Contact** - Contact form and social media links
8. **Footer** - Simple footer with copyright

### Features:
- ✅ Fully responsive design
- ✅ Dark/Light mode toggle
- ✅ Smooth scrolling navigation
- ✅ Framer Motion animations
- ✅ Tailwind CSS styling
- ✅ Modern UI/UX design
- ✅ Production-ready code

## Customization Steps

### 1. Update Personal Information

**Hero Section** (`src/components/Hero.js`):
- Line 14: Change name
- Line 21: Change title
- Line 28: Update tagline

**Contact Section** (`src/components/Contact.js`):
- Lines 28-30: Update email, phone, location
- Lines 33-35: Update social media links

### 2. Add Your Projects

Edit `src/components/Projects.js`:
- Replace the 3 sample projects with your own
- Update images (use your own or from Unsplash)
- Add your GitHub and demo links
- Update tech stack for each project

### 3. Update Experience & Education

Edit `src/components/Experience.js`:
- Replace timeline items with your actual experience
- Update job titles, companies, and dates
- Add your education details

### 4. Customize Skills

Edit `src/components/Skills.js`:
- Update skill categories
- Adjust skill levels (0-100)
- Add or remove skills as needed

Edit `src/components/About.js`:
- Update the skills array with your technologies

### 5. Change Colors (Optional)

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#3B82F6',    // Change to your preferred color
  secondary: '#8B5CF6',  // Change to your preferred color
}
```

### 6. Add Resume

Place your resume PDF in the `public` folder as `resume.pdf`, or update the link in `src/components/Hero.js` (line 44)

## Testing

1. Check all sections scroll smoothly
2. Test dark/light mode toggle
3. Test responsive design (mobile, tablet, desktop)
4. Verify all links work
5. Test contact form submission

## Deployment

### Option 1: Netlify
1. Push code to GitHub
2. Go to netlify.com
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `build`
7. Deploy!

### Option 2: Vercel
1. Push code to GitHub
2. Go to vercel.com
3. Import your repository
4. Click Deploy

### Option 3: GitHub Pages
```bash
npm install gh-pages --save-dev
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Deploy:
```bash
npm run deploy
```

## Tips for Job Applications

1. **Keep it updated** - Regularly add new projects
2. **Use real projects** - Replace sample projects with your actual work
3. **Professional images** - Use high-quality project screenshots
4. **Working links** - Ensure all demo and GitHub links work
5. **Contact info** - Keep your contact information current
6. **Resume** - Always have an updated resume available
7. **Performance** - Run `npm run build` and test the production build
8. **SEO** - Update meta tags in `public/index.html`

## Troubleshooting

**Tailwind styles not working?**
- Make sure `tailwind.config.js` and `postcss.config.js` exist
- Check that `index.css` has the Tailwind directives

**Animations not working?**
- Verify framer-motion is installed: `npm list framer-motion`

**Icons not showing?**
- Verify react-icons is installed: `npm list react-icons`

**Build errors?**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

## Next Steps

1. Replace all placeholder content with your information
2. Add your actual projects with screenshots
3. Update all links (GitHub, LinkedIn, etc.)
4. Add your resume PDF
5. Test thoroughly
6. Deploy to your preferred platform
7. Share your portfolio link!

## Support

For issues or questions:
- Check the README.md
- Review React documentation: https://react.dev
- Review Tailwind CSS docs: https://tailwindcss.com
- Review Framer Motion docs: https://www.framer.com/motion

---

Good luck with your job applications! 🚀
