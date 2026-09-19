/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: {
          950: '#04030a',
          900: '#080714',
          800: '#0d0c1e',
          700: '#14122c',
          600: '#1c1940',
        },
        bone: {
          DEFAULT: '#ece7f5',
          dim: '#a49dc0',
        },
        cosmic: {
          DEFAULT: '#8b5cf6',
          dim: '#4c2f8a',
          bright: '#c4b5fd',
        },
        reptile: {
          DEFAULT: '#39ff8f',
          dim: '#0f5c34',
        },
        leonine: {
          DEFAULT: '#ffb02e',
          dim: '#7a4a05',
        },
        atlante: {
          DEFAULT: '#2ee6d6',
          dim: '#0a5c54',
        },
        alert: {
          DEFAULT: '#ff3b5c',
          dim: '#7a1526',
        },
      },
      fontFamily: {
        display: ['"Oswald"', '"Bebas Neue"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', 'monospace'],
        body: ['"Barlow"', 'sans-serif'],
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(139,92,246,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(139,92,246,0.08) 1px, transparent 1px)',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.25' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        flicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: '1' },
          '20%, 24%, 55%': { opacity: '0.4' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        scan: 'scan 6s linear infinite',
        blink: 'blink 1.4s ease-in-out infinite',
        pulseSlow: 'pulseSlow 3s ease-in-out infinite',
        flicker: 'flicker 7s linear infinite',
        float: 'float 5s ease-in-out infinite',
        spinSlow: 'spinSlow 18s linear infinite',
      },
    },
  },
  plugins: [],
}
