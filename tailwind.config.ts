import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#06080D", // page bg
          900: "#0B0F17", // section bg
          800: "#121826", // card / panel surface
          700: "#1C2438", // borders, dividers on dark
          600: "#2A3450", // hover borders
        },
        paper: {
          DEFAULT: "#F5F7FA", // primary text on dark
          muted: "#9AA5B8", // secondary text on dark
          faint: "#5B6478", // tertiary / disabled text
        },
        signal: {
          DEFAULT: "#4C82F7", // primary accent (blue)
          light: "#7DA2FA",
          dark: "#2F5FD1",
        },
        aqua: {
          DEFAULT: "#2DD4C8", // secondary accent (teal/cyan)
          light: "#6EE7DE",
        },
        ember: {
          DEFAULT: "#F2A65A", // sparing warm highlight
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
});

export default config;