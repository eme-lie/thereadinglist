/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      "2xl": "1400px",
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },

      fontSize: {
        h1: ["36px", { lineHeight: "43.2px", fontWeight: "700" }],
        h2: ["21px", { lineHeight: "25px", fontWeight: "700" }],
        t1: ["16px", { lineHeight: "24px", fontWeight: "700" }],
        t2: ["16px", { lineHeight: "24px", fontWeight: "500" }],
        t3: ["14px", { lineHeight: "17px", fontWeight: "700" }],
        t4: ["14px", { lineHeight: "17px", fontWeight: "300" }],
        b1: ["16px", { lineHeight: "24px", fontWeight: "300" }],
        b2: ["16px", { lineHeight: "24px", fontWeight: "300" }],
        b3: ["14px", { lineHeight: "17px", fontWeight: "700" }],
        b4: ["14px", { lineHeight: "17px", fontWeight: "400" }],
        b5: ["14px", { lineHeight: "17px", fontWeight: "300" }],
        sb1: ["12px", { lineHeight: "16px", fontWeight: "300" }],
        sb2: ["12px", { lineHeight: "16px", fontWeight: "500" }],
      },

      width: {
        25: "25%",
        30: "30%",
        35: "35%",
        55: "55%",
        65: "65%",
        75: "75%",
        45: "45%",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
