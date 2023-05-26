/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'cormorant': ['Cormorant Garamond', 'serif'],
        'branch': ['Branch', 'serif'],
      },
      boxShadow: {
        neomorphism: '24px 24px 48px #ca8a04, -24px -24px 48px #facc15',
      },
    },
  },
  plugins: [],
}