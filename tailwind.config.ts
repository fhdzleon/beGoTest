import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgBody: "#080C0F",
        textColor: "#EDEDED",
        textGray: "#969798",
        button: "#FFEE00",
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
