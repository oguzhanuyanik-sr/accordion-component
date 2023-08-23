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
      white: '#FFFFFF',
      softWhite: '#E8E8EA',
      darkBlue: '#1E1F36',
      softBlue: '#4B4C5F',
      lightBlue: '#787887',
      orange: '#F47B56',
    },
    fontFamily: {
      kumbh: ['Kumbh Sans', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        card: '0px 25px 50px rgba(6, 22, 141, 0.0442381)',
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(180deg, #B068E9 0%, #6463E7 100%)',
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
