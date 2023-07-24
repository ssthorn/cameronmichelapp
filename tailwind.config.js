/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#1c4f82",
        
"secondary": "#7d919b",
        
"accent": "#eb6b47",
        
"neutral": "#23282f",
        
"base-100": "#ffffff",
        
"info": "#0092d6",
        
"success": "#6cb288",
        
"warning": "#daad58",
        
"error": "#ab3d30",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      custom: ['Helvetica', 'sans-serif']
  },

  
}}
