/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-green": "bg-green-700",
      },
      backgroundImage: {
        saleBanner: "url('./src/assets/girl.jpg')",
      },
    },
  },
  plugins: [],
};