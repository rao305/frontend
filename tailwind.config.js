/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        'minimal': {
          'bg': '#F5F5F5',
          'card': '#F5F5F5',
          'border': '#E0E0E0',
          'text': '#666666',
          'text-light': '#999999',
          'hover': '#EEEEEE',
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
