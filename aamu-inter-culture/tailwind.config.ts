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
        primary: {
          blue: "#3b82f6",
          green: "#10b981",
        },
        accent: {
          red: "#ef4444",
          yellow: "#f59e0b",
          orange: "#f97316",
        },
        neutral: {
          light: "#f3f4f6",
          medium: "#d1d5db",
          dark: "#4b5563",
        },
        text: {
          primary: "#000000",
          secondary: "#4b5563",
        },
        background: "#ffffff",
      },
    },
  },
  plugins: [],
};

export default config;
