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
          gold: '#AF8C52',
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
  ],
};
export default config;
