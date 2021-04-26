module.exports = {
  mode: "jit",
  purge: {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    options: {
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          600: "#48444c",
          700: "#263137",
          800: "#202424",
          900: "#111618",
        },
        red: {
          600: "#991919",
          700: "#981414",
        },
        green: {
          600: "#0a9160",
        },
      },
      screens: {
        "xs" : "362px",
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