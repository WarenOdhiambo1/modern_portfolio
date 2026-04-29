import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#2b1b13",
        ink: "#1f1410",
        slate: "#c6c9d9",
        mist: "#f6efe7",
        bone: "#efe2d4",
        accent: "#FF8C00",
        orange: "#FF8C00",
        deepblue: "#001F3F",
        navy: "#001F3F"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"]
      },
      letterSpacing: {
        tightest: "-0.04em"
      },
      boxShadow: {
        soft: "0 20px 50px -30px rgba(0, 0, 0, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
