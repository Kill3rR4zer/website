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

        "just95": "92%",
        "just5": "8%",
      }),
    },
  },
  plugins: [],
}