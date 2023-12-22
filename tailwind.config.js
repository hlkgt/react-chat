/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      padding: {
        15: '15px',
        19: '19px',
        75: '75px',
      },
      colors: {
        primary: '#212529',
      },
    },
  },
  plugins: [],
}
