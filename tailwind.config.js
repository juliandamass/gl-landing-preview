const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        "space-grotesk": ["Space Grotesk", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        21: "5.25rem",
        22: "5.5rem",
        23: "5.75rem",
        25: "6.25rem",
        26: "6.5rem",
        28: "6.75rem",
        29: "7.25rem",
        30: "7.5rem",
        31: "7.75rem",
        33: "8.25rem",
        34: "8.5rem",
        35: "8.75rem",
        37: "9.25rem",
        38: "9.5rem",
        39: "9.75rem",
      },
      colors: {
        "gl-1": "#292929",
        "gl-2": "#2384F8",
        "gl-3": "#B3B3B3",
        "gl-4": "#F5F5F5",
        "gl-5": "#E3F0FF",
        "gl-6": "#141B22",
      },
    },
  },
  plugins: [],
};
