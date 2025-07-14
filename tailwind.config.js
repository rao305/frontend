/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        'professional': {
          'black': '#000000',
          'dark': '#333333',
          'medium': '#666666',
          'light': '#999999',
          'lighter': '#CCCCCC',
          'lightest': '#F5F5F5',
        }
      },
      boxShadow: {
        'professional': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'professional-lg': '0 4px 16px rgba(0, 0, 0, 0.15)',
        'professional-xl': '0 8px 32px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
};
