tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1193d4",
        "background-light": "#f6f7f8",
        "background-dark": "#121212",
        "card-light": "#FFFFFF",
        "card-dark": "#1E1E1E",
        "text-light-primary": "#121212",
        "text-dark-primary": "#FFFFFF",
        "text-light-secondary": "#5A5A5A",
        "text-dark-secondary": "#A0A0A0",
        "border-light": "#E0E0E0",
        "border-dark": "#333333",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
};
