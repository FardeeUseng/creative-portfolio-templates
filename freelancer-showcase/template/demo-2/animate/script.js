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