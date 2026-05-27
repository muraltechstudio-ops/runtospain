/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red:    '#E63024',
          orange: '#F97316',
          dark:   '#0F1117',
          card:   '#1A1D27',
          muted:  '#6B7280',
        }
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body:    ['var(--font-body)'],
      }
    }
  },
  plugins: []
}
