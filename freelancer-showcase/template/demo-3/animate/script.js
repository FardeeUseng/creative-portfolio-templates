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

// ---------------------------------
// Animate On Scroll (One-time play)
// ---------------------------------
const animatedElements = document.querySelectorAll(".animate__animated");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const animationClass = entry.target.dataset.animate;
        entry.target.classList.add(animationClass);
        observer.unobserve(entry.target); // เล่นครั้งเดียว
      }
    });
  },
  { threshold: 0.2 }
);

animatedElements.forEach((el) => {
  el.classList.remove(
    "animate__flash",
    "animate__fadeInUp",
    "animate__jackInTheBox",
    "animate__zoomInUp"
  );
  observer.observe(el);
});