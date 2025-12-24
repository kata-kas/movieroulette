import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'marquee-fast': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
        'reel-spin': 'reel-spin 2s ease-in-out',
        'fade-in': 'fade-in 0.5s ease-in',
        'slide-up': 'slide-up 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'reel-spin': {
          '0%': { transform: 'translateY(0)', opacity: '0.1' },
          '50%': { transform: 'translateY(-50%)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0.1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      colors: {
        cinema: {
          red: '#dc2626',
          gold: '#fbbf24',
          dark: '#1a1a1a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
