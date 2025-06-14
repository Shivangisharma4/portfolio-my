/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "#0f141f",       // deep grayish blue (like rinkit.tech)
        surface: "#1a202c",          // card-like surfaces
        text: "#e0e0e0",             // dull white
        muted: "#8a8f99",            // soft gray for secondary text
        accent: "#ffffff",           // hover bright white
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'], // if you're using it in sections
      },
    },
  },
  plugins: [],
};
