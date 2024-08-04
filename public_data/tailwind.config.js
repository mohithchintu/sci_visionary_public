/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '5': '5px',
      '6': '6px',
      '4': '4px',
    },
    extend: {
      fontFamily: {
        'mont': ['Montserrat', 'sans-serif'],
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))'
      },
    },
  },
  plugins: [],
}