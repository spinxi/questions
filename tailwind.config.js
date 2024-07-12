/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 3px 10px 0 rgb(48 46 56 / 6%)",
        "soft-dark": "0 3px 10px 0 rgb(25 33 50 / 30%)",
      },
      colors: {
        customred: {
          50: '#FF93A6',
          100: '#FF2C52',
        },
        maincolor: {
          50: '#2D7ED0',
          100: '#1C3969',
        },
      }
    },
  },
  plugins: [],
}
