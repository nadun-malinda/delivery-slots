/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#26263a",
        text: "#666",
        highlight: "#26263a",
        heading: "#373535",
        background: "#f5f9f9",
        accent: "#ffecc7",
        white: "#fff",
        lightGray: "#e5e5e5",
        success: "#38a163",
        lightGreen: "#e6f3eb",
      },
    },
  },
  plugins: [],
};
