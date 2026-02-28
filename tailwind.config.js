/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#00D9FF', // Bright Cyan
        secondary: '#7C3AED', // Purple
        accent: '#F59E0B', // Amber
        dark: {
          bg: '#0A0A0F',
          card: '#13131A',
          border: '#1F1F28',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
