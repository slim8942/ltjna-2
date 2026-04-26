/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#eef2f7',
          100: '#d5e0ee',
          200: '#aac1de',
          300: '#7ea2cd',
          400: '#5383bc',
          500: '#3a6aa8',
          600: '#2d5487',
          700: '#1e3d66',
          800: '#152d4d',
          900: '#0d1e35',
          950: '#080f1a',
        },
        gold: {
          300: '#f5d87a',
          400: '#e8c14e',
          500: '#c9982a',
          600: '#b8891f',
          700: '#9a6f14',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:  ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(13,30,53,0.85) 0%, rgba(21,45,77,0.70) 50%, rgba(58,106,168,0.40) 100%)',
        'cta-gradient':  'linear-gradient(135deg, #0d1e35 0%, #1e3d66 50%, #152d4d 100%)',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease forwards',
        'fade-up-d1': 'fadeUp 0.7s 0.15s ease forwards',
        'fade-up-d2': 'fadeUp 0.7s 0.30s ease forwards',
        'fade-up-d3': 'fadeUp 0.7s 0.45s ease forwards',
        'fade-in':    'fadeIn 1s ease forwards',
      },
    },
  },
  plugins: [],
};
