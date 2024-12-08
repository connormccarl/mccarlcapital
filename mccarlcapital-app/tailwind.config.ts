import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
        colors: {
          gold: {
            50: '#f7f5ef',
            100: '#ece6d5',
            200: '#dacdae',
            300: '#c5ae7f',
            400: '#af8c52',
            500: '#a4804e',
            600: '#8d6741',
            700: '#724e36',
            800: '#604333',
            900: '#543b2f',
            950: '#301e18',
          },
          green: '#3d8627',
          icon: 'rgb(70, 205, 221)',
          orange: 'rgb(246, 83, 26)',

      },
      fontFamily: {
        funnel: ['var(--font-barlow)', 'sans-serif']
      }
    },
    
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
export default config;
