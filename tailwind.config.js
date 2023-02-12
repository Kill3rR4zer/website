/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fredoka-one': ['Fredoka One', 'cursive'],
      },
      height: theme => ({

        "just95": "95%",
        "just5": "5%",
      }),
    },
  },
  plugins: [],
}