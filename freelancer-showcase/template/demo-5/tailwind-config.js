tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-pink": "var(--primary-pink)",
        "primary-purple": "var(--primary-purple)",
        "primary-blue": "var(--primary-blue)",
        "background-dark": "var(--background-dark)",
      },
      fontFamily: {
        display: ["Orbitron", "sans-serif"],
        body: ["VT323", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0",
        lg: "0",
        xl: "0",
        full: "0",
      },
    },
  },
};
