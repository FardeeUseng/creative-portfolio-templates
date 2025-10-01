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
// Project Data
// ---------------------------------
const categoriesData = [
  {
    name: "All",
    type: "all"
  },
  {
    name: "Web E-commerce",
    type: "e-commerce"
  },
  {
    name: "UX/UI Design",
    type: "ux-ui"
  },
  {
    name: "Branding",
    type: "banding"
  },
]

// ---------------------------------
// Project Data
// ---------------------------------
const projectsData = [
  {
    title: "E-commerce Platform",
    category: "e-commerce",
    description: "A complete redesign and development of a modern e-commerce website.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXn_fQSp_sEnV_rJkcsHFUm71KMHda9mLrVYwimgsiiPl3JyxF6lAnEJcsH3OMdIEVNsIuYyu1PKFWcbRxiFHM6ke2EW26MRzFSKjj5dLwliRN0Lcqr74UbYoW5hOa3aLU6ImaIcJLUP5zOGeNygwVHvGW8QHavq8snfG67XNjCyHeIx9iXvD_TED2yA3ALmApKewVKMRlj1SLpkmp0NBTg8vvHRQ3yNz4C8UFvFSkPkSsK4KUZaCsQ5WHjIUNkNlsU8oco-GzSg3E",
    link: "#",
  },
  {
    title: "SaaS Dashboard",
    category: "ux-ui",
    description:
      "An intuitive and powerful dashboard for a data analytics SaaS.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDobJbLd33MGB7BPuXxkYJbyfM17BuUJNkwg9xhQvckGkVKryKzXzggXdnJgXcrcQHeBf2FmIG4lnON_IsYJYrcYmznUUP-3N_FhI9LfNREohZWZQGkyI-f5MfesolPqcOgY7DUe5bAIM2VrRFX7ysaSYvrnHQcdl5hnt-Ry2hVtXhkUJb5U7tTjhl4vGkspn72fAC5Gmrt9lVCAC_Q1YQHbB5hmISEJoREiVGTr5IdjkDgZAMSmh4TXVs_4wOTPmYsXA19TvrxgL1F",
    link: "#",
  },
  {
    title: "Mobile Banking App",
    category: "banding",
    description: "A secure and user-friendly mobile app for a new digital bank.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBSWIe6BdNZldcRR4tWp5oSNAXuN09SzQOXPKUAYcZwfEcVOTnxPSlilrc_wDL6ADYdS3goWGmHSnpylfb15AJu4Zq4I6jhWOiyqogrE2pO1gl8xdbxaDStI8e9uLS3s_y_f3NYS_WgmCpKxGAK1TZVQEkngGuGM9fsFXZF9lmcZzCyrhMljCfmvWQ2IWKZfMb4mA8Z2pkYQTtplmOhQVViOhbF49ZzC5BXMiofkEq3EoHd5E8uD0_sJ9d9YdSbxQPCT3u9l0Egiq4P",
    link: "#",
  },
];

// ---------------------------------
// Render Projects
// ---------------------------------
const projectsContainer = document.querySelector(".projects-grid"); // div grid
projectsContainer.innerHTML = projectsData
  .map((project) => `
    <div
      data-category="${project.category}"
      class="
        group relative overflow-hidden 
        rounded-xl shadow-lg hover:shadow-2xl
        transition-all duration-300
      "
    >
      <img
        alt="${project.title}"
        class="
          h-64 w-full object-cover 
          transition-transform duration-500 group-hover:scale-110
        "
        src="${project.image}"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
      ></div>
      <div class="absolute bottom-0 left-0 p-6 text-white">
        <h3 class="text-2xl font-bold">${project.title}</h3>
        <p class="mt-1 text-white/80">
          ${project.description}
        </p>
      </div>
    </div>
  `).join("");

// ---------------------------------
// Render Filter Buttons
// ---------------------------------

const filterContainer = document.querySelector(".filter-button");
filterContainer.innerHTML = categoriesData
  .map((cate) => `
    <button
      data-filter="${cate.type}"
      class="
        filter-btn px-4 py-2 
        text-sm font-semibold 
        ${cate.type === "all" ? "bg-primary text-white" : "bg-gray-200"}
        rounded-full bg-gray-200 dark:bg-background-dark 
        hover:bg-primary/20 dark:hover:bg-primary/20
        text-subtext-light dark:text-subtext-dark 
      "
    >
      ${cate.name}
    </button>
  `).join("");

// ---------------------------------
// Filter Projects by Category
// ---------------------------------
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll("[data-category]");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");

    projects.forEach((project) => {
      const category = project.getAttribute("data-category");

      if (filter === "all" || category === filter) {
        project.classList.remove("hidden");
      } else {
        project.classList.add("hidden");
      }
    });

    // toggle active style
    filterButtons.forEach((b) =>
      b.classList.remove("bg-primary", "text-white")
    );
    btn.classList.add("bg-primary", "text-white");
  });
});


// ---------------------------------
// Contact Form (mailto)
// ---------------------------------
const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  // create mailto link
  const subject = encodeURIComponent(`Message from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`
  );
  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

  // open Email client
  window.location.href = mailtoLink;
});