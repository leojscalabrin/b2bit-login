module.exports = {
  content: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'main-blue': '#02274F',
        'main-yellow': '#FDCF00',
        'white-bg': '#F1F1F1',
        'gray': '#999999'
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif']
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem', 
        'title': '4.875rem'
      },
      fontWeight: {
        'normal': '400',
        'bold': '700',
        'extra-bold': '800',
        'omega-bold': '900'
      },
    },
  },
  plugins: [],
};