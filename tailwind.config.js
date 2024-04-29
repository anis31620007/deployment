/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-light": "#E1EFFE", // this is the color of the background
        "main-dark": "#111928",
        // The color of the buttons is primary/700 and it's a tailwind class
        "headings-l": "#111D22",
        "lighter-l": "#6B7280",
        "normal-l": "#212529", // this is the color of general text in light mode
        "headings-d": "#FFFFFF",
        "lighter-d": "#9CA3AF",
        "normal-d": "#DEE2E6" // this is the color of general text in dark mode
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"]
      }
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
  },
  plugins: [],
}