import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgClr: "var(--bg-clr)",
        textClr: "var(--text-clr)",
        borderClr: "var(--border-clr)",
      },
    },
  },
  plugins: [],
} satisfies Config;
