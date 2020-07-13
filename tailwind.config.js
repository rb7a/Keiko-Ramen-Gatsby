module.exports = {
  purge: ["./src/styles/main.css", "./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    //! anything here overrides tailwinds defaults //
    colors: {
      white: '#ffffff',
      lightGray: '#fefefe',
      black: "#111111",
      red: "#A50022",
      darkRed: "#640A13",
      orange: "#FF7800",
      darkOrange: "#e97711"
    },
    fontFamily: {
      heading: "'Merienda One', cursive",
      body: "'Advent Pro', sans-serif",
    },
    extend: {
      //! anything here extends tailwind defaults //
      boxShadow: {
        outline: '0 0 0 3px rgba(0,0,0, 0.5)',
        inset: 'inset 0px 5px 10px rgba(0, 0, 0, 0.25)',
        none: 'none'
      },
      fontSize: {
        80: '8rem'
      },
      height: {
        100: "100px",
        125: "125px",
        200: "58rem",
        300: "300px"
      },
      maxHeight: {
        525: "525px"
      },
      opacity: {
        90: '0.9'
      },
      screens: {
        lg: '930px',
        xxl: '1700px'
      },
    },
  },
  variants: {
    //! add in variants that don't come in by default //
    //! order is important //
    backgroundColor: ["responsive", "hover", "focus", "active"],
    borderWidth: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover']
  },
  plugins: [],
}
