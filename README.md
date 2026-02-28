# Rahul Kumar Rana - Portfolio Website

A modern, professional, and fully responsive portfolio website built with React.js, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://img.shields.io/badge/React-19.2.4-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Live Demo

[View Live Portfolio](https://rana9031.github.io/Rahul-portfolio)

## ✨ Features

- 🎨 Modern and clean UI/UX design
- 🌓 Dark/Light mode toggle with localStorage persistence
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Smooth animations with Framer Motion
- 🎯 Smooth scrolling navigation
- 💼 Professional sections (Hero, About, Skills, Projects, Experience, Contact)
- 📧 Contact form
- 🔗 Social media integration
- 🎭 Glassmorphism effects
- 🚀 Optimized performance

## 🛠️ Tech Stack

- **Frontend:** React.js 19.2.4
- **Styling:** Tailwind CSS 3.4.1
- **Animations:** Framer Motion 12.34.3
- **Icons:** React Icons 5.5.0
- **Build Tool:** CRACO 7.1.0
- **Fonts:** Inter, JetBrains Mono

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/rana9031/Rahul-portfolio.git
cd Rahul-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
myporfolio/
├── public/
│   ├── index.html
│   ├── profile.jpg
│   └── ...
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Experience.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── craco.config.js
├── tailwind.config.js
└── package.json
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.js`):
   - Update name, title, and tagline
   - Replace profile image in `public/profile.jpg`

2. **About Section** (`src/components/About.js`):
   - Update bio and skills

3. **Projects** (`src/components/Projects.js`):
   - Add your projects with images and links

4. **Experience** (`src/components/Experience.js`):
   - Update work experience and education

5. **Contact** (`src/components/Contact.js`):
   - Update email, phone, and social links

### Change Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#00D9FF',    // Cyan
  secondary: '#7C3AED',  // Purple
  accent: '#F59E0B',     // Amber
}
```

## 🚀 Deployment

### Deploy to GitHub Pages

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

### Deploy to Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `build`

### Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Click Deploy

## 📝 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run deploy` - Deploys to GitHub Pages

## 🎯 Key Sections

### Hero
- Animated profile image with gradient border
- Name and title with gradient text
- Call-to-action buttons

### About
- Professional summary
- Feature cards with icons
- Technical skills badges

### Skills
- Categorized skills (Frontend, Backend, Tools)
- Animated progress bars
- Skill level indicators

### Projects
- Project cards with images
- Tech stack tags
- GitHub and live demo links

### Experience & Education
- Two-column layout
- Work experience and education
- Timeline with icons

### Contact
- Contact form
- Contact information
- Social media links

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Rahul Kumar Rana**

- Email: ranarahul62000@gmail.com
- Phone: +91 6200047493
- Location: New Delhi, India
- GitHub: [@rana9031](https://github.com/rana9031)

## 🙏 Acknowledgments

- Design inspiration from modern developer portfolios
- Icons from React Icons
- Fonts from Google Fonts
- Images from Unsplash

## 📞 Support

For support, email ranarahul62000@gmail.com or create an issue in the repository.

---

⭐ Star this repo if you like it!

Made with ❤️ by Rahul Kumar Rana
