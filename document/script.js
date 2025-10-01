const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  html.classList.add(savedTheme);
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  html.classList.add("dark");
}
themeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    html.classList.contains("dark") ? "dark" : "light"
  );
});
