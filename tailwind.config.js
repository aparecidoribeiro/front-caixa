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
        'black-opacity': '#0006',
        'primary': '#FA9B2F',
        'white': '#FFF',
      },
      padding: {
        'standard': '20px',
      },
      borderRadius: {
        'standard': '4px'
      },
      borderWidth: {
        'standard': '1px'
      },
      keyframes: {
        bounceDots: {
          '0%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        bounceDots: 'bounceDots 1.4s infinite ease-in-out',
      }
    },
  },
  plugins: [],
}

