module.exports = {
  purge: ["./src/styles/main.css", "./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    //! anything here overrides tailwinds defaults //
    boxShadow: {
      outline: '0 0 0 3px rgba(0,0,0, 0.5)'
    },
    colors: {
      white: "#efefef",
      black: "#111111",
      red: "#A50022",
      darkRed: "#640A13",
      orange: "#FF7800"
    },
    fontFamily: {
      heading: "'Merienda One', cursive",
      body: "'Advent Pro', sans-serif",
    },
    extend: {
      //! anything here extends tailwind defaults //
      height: {
        96: "24rem",
        100: "25rem",
        125: "32rem",
        200: "58rem",
      },
    },
  },
  variants: {
    //! add in variants that don't come in by default //
    //! order is important //
    backgroundColor: ["responsive", "hover", "focus", "active"],
    borderWidth: ['responsive', 'hover', 'focus', 'active', 'group-hover']
  },
  plugins: [],
}
