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
        primary: {
          DEFAULT: '#2C3E50',
          light: '#3D566E',
          dark: '#1A2636',
        },
        accent: {
          DEFAULT: '#C8875F',
          hover: '#B5764E',
          light: '#E8D5C4',
          pale: '#F3EAE0',
        },
        surface: '#ECEAE6',
        bg: '#F7F5F2',
        border: {
          DEFAULT: '#D5D0CA',
          light: '#E8E4DE',
        },
        text: {
          DEFAULT: '#1C2833',
          secondary: '#5A6B7A',
          muted: '#8B95A0',
        },
        status: {
          success: '#4A8C5C',
          warning: '#C4841D',
          error: '#B5382A',
        },
        badge: {
          cost: { bg: '#F3EAE0', text: '#8B5E3C' },
          guide: { bg: '#E0E6EC', text: '#2C3E50' },
          problem: { bg: '#F8E0D8', text: '#B5382A' },
          review: { bg: '#E0ECDF', text: '#4A8C5C' },
          comparison: { bg: '#E8E0F0', text: '#6B5B8A' },
          realestate: { bg: '#E0E8F0', text: '#3A5A7C' },
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '8px',
        lg: '12px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(44,62,80,0.08)',
        md: '0 4px 12px rgba(44,62,80,0.1)',
        lg: '0 8px 24px rgba(44,62,80,0.12)',
      },
      maxWidth: {
        article: '720px',
      },
    },
  },
  plugins: [],
}
