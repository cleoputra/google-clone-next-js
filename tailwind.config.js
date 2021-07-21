module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),
      buttonColor: '#f8f9fa',
    })
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp'),
],
}