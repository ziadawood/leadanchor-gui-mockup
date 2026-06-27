/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          500: 'var(--navy-500)',
          700: 'var(--navy-700)',
          900: 'var(--navy-900)',
        },
        emerald: {
          500: 'var(--emerald-500)',
          600: 'var(--emerald-600)',
        },
        amber: {
          500: 'var(--amber-500)',
        },
        red: {
          500: 'var(--red-500)',
        },
        gray: {
          200: 'var(--gray-200)',
          500: 'var(--gray-500)',
        },
        app: 'var(--bg-app)',
        card: 'var(--bg-card)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
