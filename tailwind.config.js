/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        tint: "#e91e63",
        background: "#f4f4f4",
        primaryText: "#1E1E1E",
        secondaryText: "#ffffff",
        border: "#CCCCCC",
        borderLight: "#E8E8E8",
        warning: "#F2C94C",
        success: "#27AE60",
        error: "#EB5757",
      },
    },
  },
  plugins: [],
};
