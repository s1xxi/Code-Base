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
        'ocean-deep': '#0A2342',
        'ocean-blue': '#2C5F8D',
        'ocean-teal': '#3A9FB5',
        'seafoam': '#7DD3C0',
        'sand': '#F4E4C1',
        'driftwood': '#8B7355',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        ocean: {
          'primary': '#3A9FB5',
          'primary-content': '#ffffff',
          'secondary': '#7DD3C0',
          'secondary-content': '#0A2342',
          'accent': '#2C5F8D',
          'accent-content': '#ffffff',
          'neutral': '#0A2342',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#F4E4C1',
          'base-300': '#E8D4A8',
          'base-content': '#0A2342',
          'info': '#3A9FB5',
          'success': '#7DD3C0',
          'warning': '#F4E4C1',
          'error': '#DC2626',
        },
      },
      'dark',
    ],
  },
}
