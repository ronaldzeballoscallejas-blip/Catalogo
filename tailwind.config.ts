import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0D0D0D",
        paper: "#FFFFFF",
        bone: "#F5F5F7",
        mist: "#F8F9FA",
        line: "#E3E0D9",
        ash: "#6D6A64",
        gold: "#C5A059",
        deepgold: "#9D7B39"
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "Plus Jakarta Sans", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        boutique: "0 28px 70px rgba(13,13,13,.13)",
        float: "0 18px 45px rgba(13,13,13,.10)"
      }
    }
  },
  plugins: []
};

export default config;
