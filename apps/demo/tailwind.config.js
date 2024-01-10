import {defineShadcn} from "@creightive/tailwind-systems";

/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html','./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [defineShadcn({
    base: 'slate'
  })],
}

