module.exports = {
  

  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true, // Center the container by default
        padding: '0', // Set default padding to 0
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

