import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-grayish-violet": "hsl(270, 20%, 96%)", // app background
        "very-dark-desaturated-violet": "hsl(271, 36%, 24%)", // main heading, submit button background
        "very-light-magenta": "hsl(289, 100%, 72%)", // radio button outline
        "pale-violet": "hsl(276, 100%, 81%)", // sub-heading at the top of the app UI
        "moderate-violet": "hsl(276, 55%, 52%)", // chat on the left
        "desaturated-dark-violet": "hsl(271, 15%, 43%)", // chat on the right
        "grayish-blue": "hsl(206, 6%, 79%)", // placeholder text
        "dark-grayish-violet": "hsl(270, 7%, 64%)", // paragraph
        "light-magenta": "hsl(293, 100%, 63%)",
        "light-violet":"hsl(264, 100%, 61%)",
      },
      boxShadow: {
        "rightMessage": "-2px 5px 10px #00000022",
        "cellphone": "0 10px 30px #00000055"
      }
    },
  },
  plugins: [],
};
export default config;
