import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-black": "#0A090C",
        "primary-white": "#F0EDEE",
        "primary-dark": "#07393C",
        primary: "#2C666E",
        "primary-light":"#90DDF0",
        "gray-dark": "#7D7B7D",
        gray: "#9A989A",
        "gray-light": "#B7B4B6"

      }
    },
  },
  plugins: [],
};
export default config;
