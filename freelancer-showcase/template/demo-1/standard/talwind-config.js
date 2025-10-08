tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0d7ff2",
        "background-light": "#f5f7f8",
        "background-dark": "#101922",
      },
      fontFamily: {
        display: ["Space Grotesk"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },
      keyframes: {
        "subtle-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.2" },
          "50%": { transform: "scale(1.5)", opacity: "0.3" },
        },
        "subtle-float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "chart-fill": {
          from: { "stroke-dashoffset": "251.2" },
          to: { "stroke-dashoffset": "var(--chart-offset)" },
        },
        "icon-float": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-5px) rotate(5deg)" },
        },
      },
      animation: {
        "subtle-pulse":
          "subtle-pulse 15s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "subtle-float": "subtle-float 12s ease-in-out infinite",
        "chart-fill": "chart-fill 2s ease-out forwards",
        "icon-float": "icon-float 4s ease-in-out infinite",
      },
    },
  },
};
