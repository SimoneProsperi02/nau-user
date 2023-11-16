import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-login": "/IMG_login_unica.fw.png",
      },
      colors: {
        "green-cdl": "#65b230",
        inputColor: "#e8f3e2",
        blueNavy: "#0d3b60",
      },
    },
  },
  plugins: [],
};
export default config;
