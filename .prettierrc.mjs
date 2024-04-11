export default {
  tailwindConfig: "./tailwind.config.mjs",
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  tabWidth: 2,
  semi: false,
  singleQuote: false,
  singleAttributePerLine: false,
  bracketSameLine: true,
  bracketSpacing: true,
  trailingComma: "all",
}
