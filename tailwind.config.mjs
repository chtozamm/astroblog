/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    extend: {
      backgroundColor: {
        dark: "#13151a",
      },
      fontFamily: {
        inter: "inter, sans-serif",
        merriweather: "Merriweather, serif",
      },
      fontSize: {
        xs: "12px",
      },
      aspectRatio: {
        wide: "21/9",
      },
    },
  },
  plugins: [],
}
