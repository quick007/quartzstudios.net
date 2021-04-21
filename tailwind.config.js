
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{tsx}", "./components/**/*.{tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          600: "#48444c",
          700: "#383c3c",
          800: "#202424",
          900: "#151b1e",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  colors: {},
};