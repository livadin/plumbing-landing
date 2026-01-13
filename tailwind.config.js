export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#001529',
        'navy-dark': '#000f1f', 
        'navy-light': '#002B5B',
        'cyan-glow': '#4fd1c5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 30% 50%, #003366 0%, #000f1f 80%)',
        'glossy-blue': 'linear-gradient(to bottom, #2E93EA 0%, #0060BA 50%, #004890 100%)',
        'glossy-dark': 'linear-gradient(to bottom, #1a3b5c 0%, #081526 100%)',
        'glossy-orange': 'linear-gradient(to bottom, #FF8C00 0%, #E65100 100%)',
      }
    },
  },
  plugins: [],
}