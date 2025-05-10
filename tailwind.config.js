/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      colors: {
        'light-gold': '#FFECB3', // Soft golden yellow
        'soft-pink': '#FFB6C1',  // Soft pink
        'light-yellow': '#FFF9C4', // Soft yellow
        'dark-bg': '#2C2C2C', // Dark background for dark mode
        'dark-text': '#E0E0E0', // Lighter text color for dark mode
      },
      backgroundColor: {
        'light-mode-bg': '#FFF8E1', // Light background
        'dark-mode-bg': '#121212',  // Dark background for dark mode
      },
      textColor: {
        'gold': '#FFD700', // Golden text
        'light-text': '#4A4A4A', // Dark text color for light mode
      },
    },
  },
  darkMode: 'class', // Enables dark mode with a class
},
  plugins: [],
}

