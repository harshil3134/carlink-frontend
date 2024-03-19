/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'my_bg':"#FFFCF7",
        'my_orange': "#FEB06E",
        'font_clr':"#ab4f02"
      },
      backgroundImage: {
        'my_bg_1': "url('/images/signup_bg.png')",
        
      }
    },
  },
  
  plugins: [],
}

