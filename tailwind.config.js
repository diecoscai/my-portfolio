/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      colors: {
        light: {
          background: '#fdfdfd',  
          text: '#333333',         
          primary: '#007acc',      
          secondary: '#4a90e2',    
          accent: '#ffdd57',       
        },
        dark: {
          background: '#1F2937',   
          text: '#f5f5f7',         
          primary: '#007acc',      
          secondary: '#4a90e2',    
          accent: '#ffdd57',       
        },
        primary: '#007acc',         
        secondary: '#4a90e2',       
      },
      fontFamily: {
        sans: ['Poppins', 'Montserrat', 'Helvetica', 'Arial', 'sans-serif'],  
        mono: ['Source Code Pro', 'Monaco', 'Courier New', 'monospace'],      
      },
    },
  },
  plugins: [],
}
