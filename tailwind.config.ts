import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0ebff",
          100: "#e2d7ff",
          200: "#c3b3ff",
          300: "#a48fff",
          400: "#856bff",
          500: "#5825D8",
          600: "#471fc7",
          700: "#3a19a6",
          800: "#2e1585",
          900: "#231064",
          950: "#170a44",
        },
        black: "#000000",
      },
      fontFamily: {
        sans: ["DM Sans", "DM Sans Placeholder", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
