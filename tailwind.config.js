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
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      transitionTimingFunction: {
        'soft': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      scale: {
        '102': '1.02',
        '105': '1.05',
      },
    }
  },
  plugins: []
}
