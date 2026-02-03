

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./node_modules/react-tailwindcss-select/dist/index.esm.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2B9790",
        status: {
          finalizado: "#40AD8E",
          espera: "#FD9C2B",
          programado: "#0569C2",
          retrasado: "#F43D3C",
          proceso: "#2B2C43",
          cancelado: "#B2B2B2",
        },
        color01: "#F7F6F9",
      }
    }
  },
  plugins: [require('flowbite/plugin')],
}

