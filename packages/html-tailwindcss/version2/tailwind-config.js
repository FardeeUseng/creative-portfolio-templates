tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        "background-light": "#f8fafc",
        "background-dark": "#0b1120",
        "card-light": "#ffffff",
        "card-dark": "#1e293b",
        "text-light": "#0f172a",
        "text-dark": "#e2e8f0",
        "subtext-light": "#64748b",
        "subtext-dark": "#94a3b8",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        full: "9999px",
      },
      transitionProperty: {
        "transform-shadow": "transform, box-shadow",
      },
      transitionDuration: {
        300: "300ms",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
};
