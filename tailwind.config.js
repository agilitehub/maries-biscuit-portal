/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        'surface-muted': 'rgb(var(--color-surface-muted) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        'border-input': 'rgb(var(--color-border-input) / <alpha-value>)',
        'border-glass': 'var(--color-border-glass)',
        foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        subtle: 'rgb(var(--color-subtle) / <alpha-value>)',
        placeholder: 'rgb(var(--color-placeholder) / <alpha-value>)',
        'ring-offset': 'rgb(var(--color-ring-offset) / <alpha-value>)',
        'overlay-hover': 'var(--color-overlay-hover)',
        primary: {
          light: '#FF3030',
          DEFAULT: '#E30613',
          dark: '#C00510'
        },
        secondary: {
          light: '#768595',
          DEFAULT: '#4A545E',
          dark: '#303740'
        },
        'agilite-red': '#E30613',
        'agilite-black': '#151515',
        'agilite-slate': '#1E293B',
        'agilite-grey': {
          light: '#E2E8F0',
          DEFAULT: '#718096',
          dark: '#4A5568'
        },
        'agilite-grey-light': '#F5F5F5'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        glow: 'glow 10s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(20px, -20px) scale(1.1)' }
        },
        glow: {
          '0%, 100%': {
            'box-shadow':
              '0 0 50px rgba(227, 6, 19, 0.4), 0 0 100px rgba(227, 6, 19, 0.2), 0 0 150px rgba(227, 6, 19, 0.1)',
            transform: 'scale(1)'
          },
          '50%': {
            'box-shadow':
              '0 0 70px rgba(227, 6, 19, 0.5), 0 0 120px rgba(227, 6, 19, 0.3), 0 0 180px rgba(227, 6, 19, 0.2)',
            transform: 'scale(1.01)'
          }
        }
      },
      container: {
        center: true,
        padding: '1rem'
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(227, 6, 19, 0.3)',
        'glow-md': '0 0 25px rgba(227, 6, 19, 0.2), 0 0 15px rgba(227, 6, 19, 0.1)'
      }
    }
  },
  plugins: []
}
