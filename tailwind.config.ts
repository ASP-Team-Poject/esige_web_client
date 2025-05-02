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
        secondary_color: "#0b132b",
        bleu_dark: "#070b1a",
        bleu_light: "#ecf0f4",
      },
    },
  },
  plugins: [],
};
export default config;
