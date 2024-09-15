/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato':' "Lato", sans-serif',
      'josefin':' "Josefin Sans", sans-serif'
       
      }
    },
  },
  plugins: [],
}
