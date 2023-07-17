/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#163369",
        secondary: "#47B5FF",
        gray: {
          50: "#909CB2",
          100: "#6B7280",
          200: "#232323",
        },
        blue: {
          50: "#EEF2FF",
          100: "#F0F9FF",
          200: "#0EA5E9",
          300: "#465E8B",
          400: "#C7D2FE",
        },
        purple: {
          50: "#8B5CF6",
          100: "#6366F1",
          300: "#EDE9FE",
        },
        yellow: {
          50: "#FFF7ED",
          200: "#F59E0B",
        },
        green: {
          50: "#F0FDFA",
          100: "#ECFEFF",
          200: "#10B981",
          300: "#14B8A6",
          400: "#06B6D4",
        },
        orange: {
          50: "#FFFBEB",
          100: "#ECFDF5",
          200: "#FF3366",
        },
        red: {
          50: "#FEF2F2",
          100: "#EF4444",
        },
        white: "#FFFFFF",
      },
      fontFamily: {
        "inter-black": ["inter-black", "sans-serif"],
        "inter-bold": ["inter-bold", "sans-serif"],
        "inter-extra-bold": ["inter-extra-bold", "sans-serif"],
        "inter-extra-light": ["inter-extra-light", "sans-serif"],
        "inter-light": ["inter-light", "sans-serif"],
        "inter-medium": ["inter-medium", "sans-serif"],
        "inter-regular": ["inter-regular", "sans-serif"],
        "inter-semi-bold": ["inter-semi-bold", "sans-serif"],
        "inter-thin": ["inter-thin", "sans-serif"],
      },
      fontSize: {
        xs: "14px",
        sm: "16px",
        base: "18px",
        lg: "20px",
        xl: "30px",
        "2xl": "36px",
        "3xl": "48px",
      },
      zIndex: {
        1: "1",
        2: "2",
        100000: "100000",
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // Other plugins
  ],
};
