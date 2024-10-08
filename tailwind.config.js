/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1B204A',
        'custom-red': '#FF5A5A',
      },
    },
  },
  plugins: [],
}