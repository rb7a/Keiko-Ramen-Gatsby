module.exports = {
  purge: ["./src/styles/main.css", "./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    //! anything here overrides tailwinds defaults //
    fontFamily: {
      sans: "'Merienda One', cursive",
      poppins: "'Advent Pro', sans-serif",
    },
    extend: {
      //! anything here extends tailwind defaults //
    },
  },
  variants: {},
  plugins: [],
}
