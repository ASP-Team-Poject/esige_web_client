import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary_color: "#1578d6",
        primary_color_hover: "#0c4981",
        secondary_color: "#0b132b",
        blue_dark: "#070b1a",
        blue_light: "#ecf0f4",
      },
    },
  },
  plugins: [],
};
export default config;
