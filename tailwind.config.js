/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'nodo-bg': '#F8F9FA',
        'nodo-text': '#2D3436',
        'nodo-red': '#D63031',
        'nodo-blue': '#74B9FF',
        'nodo-lavanda': '#E1D5F8',
      }
    },
  },
  plugins: [],
}

