/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#F7F7F7',
        'black-one': '#393A3E',
        'primary': '#FA9B2F'
      },
      padding: {
        'standard': '20px',
      },
      borderRadius: {
        'standard': '4px'
      },
      borderWidth: {
        'standard': '1px'
      }
    },
  },
  plugins: [],
}

