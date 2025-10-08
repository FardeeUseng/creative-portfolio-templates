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


// ---------------------------------
// Progress Bars Animation
// ---------------------------------
const progressBars = document.querySelectorAll(".progress-bar");

const progressObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.dataset.width;
        let width = 0;
        const interval = setInterval(() => {
          if (width >= parseInt(targetWidth)) {
            clearInterval(interval);
          } else {
            width++;
            bar.style.width = width + "%";
          }
        }, 10);
        obs.unobserve(bar);
      }
    });
  },
  { threshold: 0.5 }
);

progressBars.forEach((bar) => progressObserver.observe(bar));

// Function to animate number counting
function animateCounter(el, target) {
  let current = 0;
  const increment = target / 100; // adjust speed
  const interval = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    el.textContent = Math.floor(current) + "%";
  }, 20); // update every 20ms
}

// Use IntersectionObserver to trigger when visible
const counters = document.querySelectorAll(".animate_counter");
const counterObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.getAttribute("data-target"));
      animateCounter(el, target);
      obs.unobserve(el); // run once
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));