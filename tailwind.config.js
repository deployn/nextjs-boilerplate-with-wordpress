/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f3',
          100: '#fce7e8',
          200: '#f9d2d7',
          300: '#f4adb5',
          400: '#ed7f8e',
          500: '#e25169',
          600: '#cd3152',
          700: '#bb2649',
          800: '#91203e',
          900: '#7c1f3a',
        },
      },
    },
  },
  plugins: [],
};
