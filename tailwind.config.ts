import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--line)",
        ivory: "var(--ivory)",
        navy: "var(--navy)",
        accent: "var(--accent)",
        teal: "var(--teal)"
      },
      boxShadow: {
        card: "0 18px 55px -25px rgba(8, 22, 58, 0.28)",
        soft: "0 12px 40px -28px rgba(15, 42, 97, 0.3)"
      },
      borderRadius: {
        xl2: "1.2rem"
      },
      backgroundImage: {
        "hero-grid": "radial-gradient(circle at top right, rgba(190, 149, 76, 0.28), transparent 38%), radial-gradient(circle at 18% 12%, rgba(67, 135, 160, 0.2), transparent 30%)"
      },
      keyframes: {
        floatUp: {
          "0%": { transform: "translateY(18px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        }
      },
      animation: {
        floatUp: "floatUp 0.7s ease-out both"
      }
    }
  },
  plugins: []
};

export default config;
