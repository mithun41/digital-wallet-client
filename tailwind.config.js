/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
    "./src/Layouts/**/*.{js,ts,jsx,tsx}",
    "./src/Pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sazzad: "var(--color-sazzad)", // now you can use text-sazzad
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"], // make sure your themes are listed here
  },
};

