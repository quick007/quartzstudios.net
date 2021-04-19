
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        coolGray: {
          700: "#2C2F33",
          800: "#1f2124",
          900: "#121314",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  colors: {},
};