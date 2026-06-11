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
        marie: {
          cream: '#FAF8F4',
          ivory: '#FFFEF9',
          linen: '#F3EFE8',
          'green-deep': '#2F4538',
          'green-forest': '#3D5A47',
          'green-soft': '#5C7264',
          gold: '#B8956A',
          'gold-rich': '#9A7A4E',
          'gold-light': '#D4BC94',
          'gold-pale': '#EDE4D4'
        },
        botanical: {
          teal: '#0a3d3c',
          'teal-mid': '#123d4a',
          plum: '#2a1a35',
          sage: '#8faf9a',
          gold: 'rgb(var(--botanical-gold) / <alpha-value>)',
          'gold-light': 'rgb(var(--botanical-gold-light) / <alpha-value>)'
        }
      },
      fontFamily: {
        sans: ['Nunito Sans', 'system-ui', 'sans-serif'],
        heading: ['Playfair Display', 'Georgia', 'serif']
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(20px, -20px) scale(1.05)' }
        }
      },
      container: {
        center: true,
        padding: '1rem'
      }
    }
  },
  plugins: []
}
