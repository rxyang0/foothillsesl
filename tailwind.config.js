module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '2rem',
      },
    },
    extend: {
      colors: {
        'blue-light': '#27aae1',
        'blue-dark': '#0e486c'
      }
    }
  },
  purge: [
    './src/**/*.js',
  ]
}
