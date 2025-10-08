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

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("aside nav a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const link = document.querySelector(`aside nav a[href="#${id}"]`);
        if(entry.isIntersecting) {
          navLinks.forEach(l => l.classList.remove("bg-primary/10", "dark:bg-primary/20"));
          link.classList.add("bg-primary/10", "dark:bg-primary/20");
        }
      });
    },
    {
      root: null, // viewport
      rootMargin: "-50% 0px -50% 0px", // active เมื่อ section อยู่ตรงกลาง viewport
      threshold: 0
    }
  );

  sections.forEach(section => observer.observe(section));