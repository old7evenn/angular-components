/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        backgroundBlue: "#2F80ED",
        colorgrey: "#E5E5E5",
        colorgray: "#4F4F4F",
        red: "ff0000",
        yellow: "#FFD700",
        blue: "#0000FF",
        green: "#008000",
        gray: "#F2F2F2",
        grayDark: "#E0E0E0",
      },
      boxShadow: {
        "blue-shadow": "2px 1px 8px 2px rgba(0,100,255,0.3)",
        "gray-shadow": "0px 3px 5px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};

