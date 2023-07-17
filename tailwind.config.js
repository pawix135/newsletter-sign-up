/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(4, 100%, 67%)",
        "dark-slate": "hsl(235, 18%, 26%)",
        charcoal: "hsl(231, 7%, 60%)",
      },
    },
  },
  plugins: [],
};

// - Mobile: 375px
// - Desktop: 1440px
