// ---------------------------------
// Theme Toggle (Dark / Light Mode)
// ---------------------------------
// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");

// Mobile menu toggle
menuToggle.setAttribute("aria-expanded", "false");
menuToggle.setAttribute("aria-controls", "sidebar");

menuToggle.addEventListener("click", () => {
  sidebar.classList.add("header__sidebar--open");
  menuToggle.setAttribute("aria-expanded", "true");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("header__sidebar--open");
  menuToggle.setAttribute("aria-expanded", "false");
});

// Theme toggle (optional - requires dark mode implementation)
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

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
// Skill bars animation
const skillBars = document.querySelectorAll(".about__skill-progress");

const animateSkills = () => {
  skillBars.forEach((bar) => {
    const targetWidth = bar.getAttribute("data-width");
    bar.style.width = targetWidth;
  });
};

// Trigger animation on page load or when section is visible
const progressBarObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateSkills();
      progressBarObserver.disconnect();
    }
  });
});

const aboutSection = document.querySelector(".about__skills");
if (aboutSection) {
  progressBarObserver.observe(aboutSection);
}
// ---------------------------------
// Project Data
// ---------------------------------
const projectsData = [
  {
    title: "E-commerce Website",
    category: "web",
    description: "Web Development",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCGOGo-YUVJv114qJyiwe-1ZCwZ-Rtzfe2SwstY7Q67avYtNSqHFNikc59VsbgWomdMR_8KZhpWAnAo4amRryVTWQQIoyeBb_ShRL8miZblglbw7RE2_H2WoRswX8-OEi851tonloaBI1BdNHPYHvT5_XU7v820f--gAe3doHSE1Z7-BSXKiJO8V71Ippeh5ug7qkFeCvVRz11Jx8BZMYXadQSxC19OIOvOtbDZBlkL8aptFITbB8IwRr0FsvmTtbAhgbUjLlhq0BGq",
    link: "#",
  },
  {
    title: "Mobile App for Fitness",
    category: "app",
    description: "App Development",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBZpVVeLVuOpRMGDAU0POuKXxJkRqZbY0SpBtn_cxG1BJ9_6ISk8b-rYX3cVETWX-xrd8lBMjCRnBE7KaTWpGhTfoiqDwH56YyLI94BEyw6CANpxyRXqk-LfXcjHZ6EqJpKa8C-A6FB2o68DSxXW6ZFI7c2c5AVys_Q0Im_-wfAgqnPDd58ijFEDmpjDTCl4hzFQd42zi0j4VjsF8rryVk1QHEjqcQtcBV2pNZTa-O_6r8eO-TX75SY-XkDQPHHjkZd39nK_Ms9eCbT",
    link: "#",
  },
  {
    title: "UI/UX Design for Travel",
    category: "design",
    description: "UI/UX Design",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBbLKR9rqFaK5veqdtrjuz6fzrS6kXGS-RqstwdkyNqPJSG657V5awiOq1tpQ0DjjKk8tJCIFpNqdF6d4GplYJVVlqfmUQXUA16m5C1haT7pHUOMceVeLo0OzlMJC297c_wbGdNtd2DCAbxC1S8FyrmlBkVkKfe1O7IzGE0phxGcPlozDG9H_jACnp3jGwJBkbPqNDFoLlY2St9zk45XpuOds_gBcS6m3shZ9i68N9X7x3vdwtrYcrilRJruI-_BvhgAEKY2wgSv1ik",
    link: "#",
  },
  {
    title: "Portfolio Website",
    category: "web",
    description: "Web Development",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoP4Z_Uzg-0tP9SJYnCqMHwNr3n4KkX865jWwN-DAn7_iQvf4U3kQAA_GYzbQeQ1rvst5dNmQ3FKCOvo-ruRQTwpPD55BWiN_m1YiqaRBAqry0Kj2CyVt-wHAwxe-QGklK1k6baZ_AXHd1knM4DHKgji5nZRrdVF_8PnMr0Ec52dCkqyEJfiSTJ-N4RDsK72qUzKO28g4Cip8DJogrz-TzR59QDlRRxsPrQxUt5vBBl0OAUN3wNSPNNmWlS29E0uJ2rcdhszzjgcFQ",
    link: "#",
  },
  {
    title: "Dashboard for Analytics",
    category: "web",
    description: "Web Development",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBfAhu3_aB4wElaix25OoAeb0DWrfUb65xMRlYlaegme-iYmBGoVuxystxwgJcZlr_FyW_6GDiPaoxWIMbaazsHHLrWKEA1ipRz_2JQSxUD534lQlN8dzrsdo5VpgGVXSYiAdrPJPgAX8PBQF6qsH42euU6sOJiLgmyW-kkNMhoFuJ5duNsZiI7aCxIfciU7dLBpzxU6wZnBdj8HkDXzUyq-CTlhUOxv8rCN_y7SJE1JFTc37JwiB0fKDzNG4GDwYgcgfzNS7hgxo_4",
    link: "#",
  },
  {
    title: "Landing Page for a Tech Startup",
    category: "web",
    description: "Web Development",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDc7PxNkTbgI7grKONhCqB1y4Qbbhn8UE_PDT5wRQTVuBVM8fATCcGfKpq9OpSHUyotwtzRp_sfw2pNsL9ja0N_73iEWzVoG0k_hzDJnOa_h94BAdCPQFhifzTBjxFybqeGZb3sUv1R53XnIMNw9uMCxMEZ7SLCLPJf94dzOZUTfJK_Ba9KNoC6xzZIt3fjeA7pM-rCdAAdlvR1Ks0TcpRZycftZv0qAshVQrQbmnCINbmmJbSux14b7NrnGeRjWVZOAokiOMGSrtHO",
    link: "#",
  },
];

// ---------------------------------
// Render Projects
// ---------------------------------
const projectsContainer = document.getElementById("projects-grid");
projectsContainer.innerHTML = projectsData
  .map(
    (project) => `
    <a
      href="${project?.link}"
      data-category="${project?.category}"
      class="projects__card"
    >
      <img 
        src="${project?.image}" 
        alt="${project?.title}" 
        class="projects__card-image"
      >
      <div class="projects__card-content">
        <span class="projects__card-category">${project?.category}</span>
        <h3 class="projects__card-title">${project?.title}</h3>
        <p class="projects__card-description">${project?.description}</p>
      </div>
    </a>
  `
  )
  .join("");

// ---------------------------------
// Render Filter Buttons
// ---------------------------------
const categories = ["all", ...new Set(projectsData.map((p) => p.category))];
const filterContainer = document.getElementById("projects-filters");
filterContainer.innerHTML = categories
  .map(
    (cate) => `
    <button
      data-animate="animate__zoomIn"
      data-filter="${cate}"
      class="
        projects__filter-btn animate__animated
        ${cate === "all" ? "projects__filter-btn--active" : ""}
      "
    >
      ${cate}
    </button>
  `
  )
  .join("");

// ---------------------------------
// Filter Projects by Category
// ---------------------------------
const filterBtns = document.querySelectorAll(".projects__filter-btn");
const projectCards = document.querySelectorAll(".projects__card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");

    // Remove active class from all buttons
    filterBtns.forEach((b) =>
      b.classList.remove("projects__filter-btn--active")
    );

    // Add active class to clicked button
    btn.classList.add("projects__filter-btn--active");

    // Filter projects
    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category");

      if (filter === "all" || category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
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
