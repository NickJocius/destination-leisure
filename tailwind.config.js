module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-home': "url('/src/assets/images/bgs/1920x1080.jpg')",
        'page-header': "url('/src/assets/images/bgs/1920x1080.jpg')",
        'signup-col': "url('/src/assets/images/bgs/1920x1080.jpg')",
      },
      fontFamily: {
        'passion': ['Passion One', 'cursive'],
      },
      height: {
        xxl: '620px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
