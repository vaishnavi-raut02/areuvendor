/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
<<<<<<< HEAD
      fontFamily:{
        fontbody:["Nunito Sans"]
        }

=======
      backgroundColor: {
        'back': '#9b51e0', 
      }
>>>>>>> 0dfc1e9d4ff1034dc5710fd05ea5a7cd908c8b9b
    },
  },
  plugins: [require("daisyui")],
};
