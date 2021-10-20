module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
     extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'lato': ['Lato', 'sans-serif']
       },
       zIndex: {
        '-1': '-1',
       }
     },
  },
  variants: {
    extend: {},
  },
  plugins: []
}