import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "670px"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        "amiri": ["Amiri", "sans-serif"]
      },
      colors: {
        "primary-one": "var(--primary-one)",
        "primary-two": "var(--primary-two)",
        "primary-three": "var(--primary-three)",
        "primary-four": "var(--primary-four)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        'link-hover': "var(--link-hover)",
      },
    },
  },
  plugins: [],
};
export default config;
