/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        'purdue': {
          'black': '#000000',
          'gold': '#CEB888',
          'dark-bg': '#1A1A1A',
          'medium': '#333333',
          'light': '#666666',
        }
      },
      boxShadow: {
        'purdue': '0 2px 8px rgba(0, 0, 0, 0.3)',
        'purdue-lg': '0 4px 16px rgba(0, 0, 0, 0.4)',
        'purdue-xl': '0 8px 32px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
};
