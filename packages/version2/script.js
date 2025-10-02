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
    name: "Web App",
    type: "web"
  },
]

// ---------------------------------
// Project Data
// ---------------------------------
const projectsData = [
  {
    title: "E-commerce Platform",
    category: "e-commerce",
    description: "A full-featured e-commerce site with a custom CMS.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrPPYIzBtO-w1vWcCDEYqVSYHvmbiMkD7MpwbHg_GpWBGAWFm2rRkEze_T3egVptbjTmTlLF4jvA2f93MxiJ-1go2BKnVuLE-VQi8yjiEJVWNDdEXwg5IR-Ja1afPM5G7Cf8zX-D8P3H7JQDrULglWF9AkoYGV4jl3Ng4zCA6eAK2R9yn-1__TcLJDlzA9CSbGZFKrFrkxUY518YeWz3hpbDXKanG4VUpeVOYX4vUid7hlZmbQosHe-dUqohzoqzvBzhkIwwEXn84a",
    link: "#",
  },
  {
    title: "Analytics Dashboard",
    category: "ux-ui",
    description:
      "Data visualization and analytics dashboard for a SaaS product.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2h4oIUY3QVvKg7EseuhS4uq7y33U4CJBLCYs3BH-hcQ2L2E186Uw1BMwpoz81r0sXY8tiF1W0JNgpUviOT-aHJxizxJn1y2SDV25GNd_3a0Q3evhYtSqiBT-mBA38kCZ4pdLPcHyFH5yDru4XD4SKTcXufsed2ETNcW315df7SO1DfL02W4n9ByFQey2cUgLzYcb9ToI7bVpa_rhQFSpwfwC1UwvLh-3kxLAayjehZvYV83HO8vgw1_N38IVNQpCGcGK1uMdBeWdv",
    link: "#",
  },
  {
    title: "Portfolio Website",
    category: "web",
    description: "A personal portfolio for a professional photographer.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsUpFbUbSpUFZQfuWzfGnL9exRAoMyMHdKAlvvHIgGOGbMZALVBobKwIVn3TTyrsw54SIetKAsNlMUUv42gTm9iQsAERf4Ahtmoy6W45GbysKWevnns-bhVUSgfo_ifVNbBDU8LdarjUAaloBwqrvnZnsV0RfyDUFbc1MD3xumFj6J82B9lDRhcd6EAB3VQ4c7jiwExVR5ROKG2VMRaScuWb6isNe8A8pDjJYPS25iQq1yFpVndZVYR1xqtW00Br2iVBiWCdeb6Ox-",
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
        group
        bg-background-light dark:bg-background-dark 
        rounded-xl shadow-lg overflow-hidden
      "
    >
      <div class="overflow-hidden">
        <img
          alt="${project.title}"
          class="
            w-full h-56 object-cover 
            group-hover:scale-110 transition-transform duration-500
          "
          src="${project.image}"
        />
      </div>
      <div class="p-6">
        <h3 class="text-xl font-semibold mb-2 text-text-light dark:text-text-dark">
          ${project.title}
        </h3>
        <p class="text-subtext-light dark:text-subtext-dark mb-4 line-clamp-2">
          ${project.description}
        </p>
        <a class="font-semibold text-primary hover:underline" href="${project.link}">
          View Project
          <span class="material-symbols-outlined text-base align-middle">
            arrow_forward
          </span>
        </a>
      </div>
    </div>
  `).join("");

// ---------------------------------
// Render Filter Buttons
// ---------------------------------

// ---------------------------------
// Render Filter Buttons
// ---------------------------------
const filterContainer = document.querySelector(".filter-button");

filterContainer.innerHTML = categoriesData
  .map((cate) => `
    <button
      data-filter="${cate.type}"
      class="
        filter-btn
        text-sm font-medium 
        px-4 py-2 rounded-full
        ${cate.type === "all" ? 
          "bg-primary dark:bg-primary/50 text-white" : 
          "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
        }
        hover:bg-primary/20 dark:hover:bg-primary/30
        transition-colors
      "
    >
      ${cate.name}
    </button>
  `)
  .join("");

// ---------------------------------
// Filter Projects by Category
// ---------------------------------
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll("[data-category]");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter") ?? "all";

    // show/hide projects
    projects.forEach((project) => {
      const category = project.getAttribute("data-category");
      project.classList.toggle("hidden", !(filter === "all" || category === filter));
    });

    // toggle active button style
    filterButtons.forEach((b) => {
      const isActive = b.getAttribute("data-filter") === filter;

      if (isActive) {
        b.classList.add("bg-primary", "dark:bg-primary/50", "text-white");
        b.classList.remove("bg-gray-200", "text-gray-800", "dark:bg-gray-800", "dark:text-gray-200");
      } else {
        b.classList.remove("bg-primary", "dark:bg-primary/50", "text-white");
        b.classList.add("bg-gray-200", "text-gray-800", "dark:bg-gray-800", "dark:text-gray-200");
      }
    });
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