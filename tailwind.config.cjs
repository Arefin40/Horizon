/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            sans: ["Mulish", "sans-serif"],
            serif: ["Pacifico", "cursive"],
         },
         colors: {
            primary: colors.emerald,
         },
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
         },
         keyframes: {
            "scale-in": {
               "0%": { opacity: 0, transform: "scale(0.5)" },
               "100%": { opacity: 1, transform: "scale(1)" },
            },
            "scale-bounce": {
               "0%": { opacity: 0, transform: "scale(0)" },
               "60%": { opacity: 1, transform: "scale(1.125)" },
               "100%": { transform: "scale(1)" },
            },
            "scale-check": {
               "0%": { visibility: "hidden", transform: "scale(0)" },
               "100%": { visibility: "visible", transform: "scale(1)" },
            },
            checkmark: {
               to: { "stroke-dashoffset": "0" },
            },
         },
         animation: {
            "scale-in":
               "scale-in 150ms cubic-bezier(0.2, 0, 0.13, 1.5) forwards",
            "scale-check": "scale-check 250ms forwards",
            "scale-bounce": "scale-bounce 350ms forwards",
         },
      },
   },
   plugins: [],
};
