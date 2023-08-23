/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      'light-purple': '#666ca3',
      purple: '#13183f',
      'light-gray': '#83869a',
      'dark-pink': '#f74780',
      'light-pink': '#ffa7c3',
      white: '#ffffff',
    },
    fontFamily: {
      jakarta: ['Plus Jakarta Sans', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        card: '0px 25px 50px rgba(6, 22, 141, 0.0442381)',
      },
      backgroundImage: {
        'gradient-gray': 'linear-gradient(180deg, #FFFFFF 0%, #F0F1FF 100%)',
        'gradient-pink': 'linear-gradient(322deg, #F02AA6, #FF6F48)',
        'gradient-pink-hover':
          'linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5), #FF6F48 0%, #F02AA6 100%)',
        'gradient-purple': 'linear-gradient(237deg, #4851FF, #F02AA6)',
        'gradient-purple-hover':
          'linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5), #4851FF -54.32%, #F02AA6 100%)',
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
};
