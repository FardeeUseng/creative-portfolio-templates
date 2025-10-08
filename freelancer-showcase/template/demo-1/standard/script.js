// ---------------------------------
// Theme Toggle (Dark / Light Mode)
// ---------------------------------
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;
themeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  // Optionally, save the theme preference to localStorage
  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
// Check for saved theme preference on page load
if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
} else {
  html.classList.remove("dark");
}
