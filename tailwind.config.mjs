/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        glow: "glow 1.5s ease-in-out infinite alternate",
        fadeIn: "fadeIn 1.5s ease-in-out",
      },
      keyframes: {
        glow: {
          "0%": { textShadow: "0 0 5px #0FF0FC, 0 0 10px #0FF0FC" },
          "100%": { textShadow: "0 0 10px #0FF0FC, 0 0 20px #0FF0FC" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
