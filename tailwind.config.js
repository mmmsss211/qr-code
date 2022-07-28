/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'White': 'hsl(0, 0%, 100%)',
      'Light-gray': 'hsl(212, 45%, 89%)',
      'Grayish-blue': 'hsl(220, 15%, 55%)',
      'Dark-blue': 'hsl(218, 44%, 22%)',
    },
    fontFamily: {
      Outfit: ['Outfit', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
