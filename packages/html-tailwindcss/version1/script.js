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
const projectsData = [
  {
    title: "E-commerce Website",
    category: "web",
    description: "Web Development",
    image:
      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCGOGo-YUVJv114qJyiwe-1ZCwZ-Rtzfe2SwstY7Q67avYtNSqHFNikc59VsbgWomdMR_8KZhpWAnAo4amRryVTWQQIoyeBb_ShRL8miZblglbw7RE2_H2WoRswX8-OEi851tonloaBI1BdNHPYHvT5_XU7v820f--gAe3doHSE1Z7-BSXKiJO8V71Ippeh5ug7qkFeCvVRz11Jx8BZMYXadQSxC19OIOvOtbDZBlkL8aptFITbB8IwRr0FsvmTtbAhgbUjLlhq0BGq')",
    link: "#",
  },
  {
    title: "Mobile App for Fitness",
    category: "app",
    description: "App Development",
    image:
      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBZpVVeLVuOpRMGDAU0POuKXxJkRqZbY0SpBtn_cxG1BJ9_6ISk8b-rYX3cVETWX-xrd8lBMjCRnBE7KaTWpGhTfoiqDwH56YyLI94BEyw6CANpxyRXqk-LfXcjHZ6EqJpKa8C-A6FB2o68DSxXW6ZFI7c2c5AVys_Q0Im_-wfAgqnPDd58ijFEDmpjDTCl4hzFQd42zi0j4VjsF8rryVk1QHEjqcQtcBV2pNZTa-O_6r8eO-TX75SY-XkDQPHHjkZd39nK_Ms9eCbT')",
    link: "#",
  },
  {
    title: "UI/UX Design for Travel",
    category: "design",
    description: "UI/UX Design",
    image:
      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbLKR9rqFaK5veqdtrjuz6fzrS6kXGS-RqstwdkyNqPJSG657V5awiOq1tpQ0DjjKk8tJCIFpNqdF6d4GplYJVVlqfmUQXUA16m5C1haT7pHUOMceVeLo0OzlMJC297c_wbGdNtd2DCAbxC1S8FyrmlBkVkKfe1O7IzGE0phxGcPlozDG9H_jACnp3jGwJBkbPqNDFoLlY2St9zk45XpuOds_gBcS6m3shZ9i68N9X7x3vdwtrYcrilRJruI-_BvhgAEKY2wgSv1ik')",
    link: "#",
  },
  {
    title: "Portfolio Website",
    category: "web",
    description: "Web Development",
    image:
      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAoP4Z_Uzg-0tP9SJYnCqMHwNr3n4KkX865jWwN-DAn7_iQvf4U3kQAA_GYzbQeQ1rvst5dNmQ3FKCOvo-ruRQTwpPD55BWiN_m1YiqaRBAqry0Kj2CyVt-wHAwxe-QGklK1k6baZ_AXHd1knM4DHKgji5nZRrdVF_8PnMr0Ec52dCkqyEJfiSTJ-N4RDsK72qUzKO28g4Cip8DJogrz-TzR59QDlRRxsPrQxUt5vBBl0OAUN3wNSPNNmWlS29E0uJ2rcdhszzjgcFQ')",
    link: "#",
  },
  {
    title: "Dashboard for Analytics",
    category: "web",
    description: "Web Development",
    image:
      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBfAhu3_aB4wElaix25OoAeb0DWrfUb65xMRlYlaegme-iYmBGoVuxystxwgJcZlr_FyW_6GDiPaoxWIMbaazsHHLrWKEA1ipRz_2JQSxUD534lQlN8dzrsdo5VpgGVXSYiAdrPJPgAX8PBQF6qsH42euU6sOJiLgmyW-kkNMhoFuJ5duNsZiI7aCxIfciU7dLBpzxU6wZnBdj8HkDXzUyq-CTlhUOxv8rCN_y7SJE1JFTc37JwiB0fKDzNG4GDwYgcgfzNS7hgxo_4')",
    link: "#",
  },
  {
    title: "Landing Page for a Tech Startup",
    category: "web",
    description: "Web Development",
    image:
      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDc7PxNkTbgI7grKONhCqB1y4Qbbhn8UE_PDT5wRQTVuBVM8fATCcGfKpq9OpSHUyotwtzRp_sfw2pNsL9ja0N_73iEWzVoG0k_hzDJnOa_h94BAdCPQFhifzTBjxFybqeGZb3sUv1R53XnIMNw9uMCxMEZ7SLCLPJf94dzOZUTfJK_Ba9KNoC6xzZIt3fjeA7pM-rCdAAdlvR1Ks0TcpRZycftZv0qAshVQrQbmnCINbmmJbSux14b7NrnGeRjWVZOAokiOMGSrtHO')",
    link: "#",
  },
];


// ---------------------------------
// Render Projects
// ---------------------------------
const projectsContainer = document.querySelector(".projects-grid"); // div grid
projectsContainer.innerHTML = projectsData
  .map((project) => `
    <a
      href="${project.link}"
      data-category="${project.category}"
      class="
        group flex flex-col
        bg-white dark:bg-gray-800/50 
        rounded-lg overflow-hidden 
        shadow-sm hover:shadow-lg transition-shadow duration-300 
        border border-gray-200 dark:border-gray-700/50
      "
    >
      <div
        class="aspect-video w-full bg-cover bg-center"
        style="background-image: ${project.image};"
      ></div>
        <div class="p-4 flex flex-col flex-grow">
        <h3 class="text-base font-bold text-gray-900 dark:text-white">
          ${project.title}
        </h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          ${project.description}
        </p>
      </div>
    </a>
  `).join("");


// ---------------------------------
// Render Filter Buttons
// ---------------------------------
const categories = ["all", ...new Set(projectsData.map((p) => p.category))];
const filterContainer = document.querySelector(".filter-button");
filterContainer.innerHTML = categories
  .map((cate) => `
    <button
      data-animate="animate__zoomIn"
      data-filter="${cate}"
      class="
        filter-btn animate__animated
        text-sm font-medium 
        px-4 py-2 rounded-full
        ${cate === "all" ? "bg-primary text-white" : "bg-gray-200"}
        dark:bg-gray-800 hover:bg-primary/20 dark:hover:bg-primary/30 
        text-gray-800 dark:text-gray-200 transition-colors
      "
    >
      ${cate}
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
