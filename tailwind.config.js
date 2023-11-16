module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 200: "#ededed", 500: "#999999" },
        black: { 900: "#000000" },
        blue_gray: { 400: "#888888", "400_66": "#88888866" },
        white: { A700: "#ffffff" },
        orange: { 300: "#efbf42" },
      },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
