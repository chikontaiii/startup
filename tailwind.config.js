/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        bone: {
          50: '#fdfcfa',
          100: '#f7f4ef',
          200: '#ede8e0',
          300: '#ddd6ca',
          400: '#c4bba9',
          500: '#a89e8a',
          600: '#8a8170',
          700: '#6b6354',
          800: '#4a4438',
          900: '#2d2922',
        },
        charcoal: {
          50: '#f6f6f4',
          100: '#e8e8e4',
          200: '#c9c9c2',
          300: '#a0a098',
          400: '#6e6e66',
          500: '#4a4a43',
          600: '#33332e',
          700: '#222220',
          800: '#161614',
          900: '#0c0c0b',
        },
        emerald: {
          50: '#f0f9f4',
          100: '#dcf0e3',
          200: '#bbe1c9',
          300: '#8ec9a6',
          400: '#5aab80',
          500: '#3a8d65',
          600: '#2a704f',
          700: '#205a40',
          800: '#194533',
          900: '#133528',
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.7s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'float': 'float 7s ease-in-out infinite',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
