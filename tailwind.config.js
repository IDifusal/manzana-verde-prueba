module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'grey-50': '#606060',
        'grey-250': '#E8E8E8',
        'yellow-550': '#FFD538',
        disabled: '#A9A9A9',
        'bk-disabled': '#FAFAFA',
        'green-content': '#35B266',
        'green-bg': '#d7f5e3',
        'bar-color': '#6B757D',
        'info-color': '#979797',
        'check-green': '#54CE84',
      },
      fontSize: {
        'text-10': '0.625rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
