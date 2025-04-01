/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      animation: {
        'scale-hover': 'scale-up 0.3s ease-in-out forwards',
      },
      keyframes: {
        'scale-up': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        }
      },
      colors: {
        blk: "#0F0F0F",
        ylw: "#FFD966",
        rd: "#FF0000",
        gry:"#1A1A1B",
        // accent: "#FACC15", 
        // background: "#2D2D2D", //black
        wte: "#F9F9F9", //white
        // textSecondary: "#FFD966",//yellow
        // textthird: "#FF0000",  //red
      },
    },
  },
  plugins: [],
}

