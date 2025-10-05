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

const buttons = document.querySelectorAll(".filter-btn");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");

    contents.forEach((c) => c.classList.add("hidden"));

    document.getElementById(filter).classList.remove("hidden");

    buttons.forEach((b) => {
      b.classList.remove("text-text-primary", "border-primary");
      b.classList.add("text-text-secondary", "border-transparent");
    });

    btn.classList.remove("text-text-secondary", "border-transparent");
    btn.classList.add("text-text-primary", "border-primary");
  });
});
