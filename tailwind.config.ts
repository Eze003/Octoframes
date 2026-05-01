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
          50: "#fdf3ec",
          100: "#fae4d0",
          200: "#f5c9a1",
          300: "#f0ad72",
          400: "#ec9252",
          500: "#EA7436",
          600: "#d45e22",
          700: "#b04b1c",
          800: "#8c3b17",
          900: "#682c11",
          950: "#3d190a",
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
