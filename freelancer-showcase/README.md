# Freelancer Showcase Template Documentation

**Version:** 1.0
**Author:** Fardee Useang
**Created:** October 2025

---

## 📘 Introduction

**Freelancer Showcase** is a modern and fully responsive landing page template made for freelancers, designers, and creative professionals.
Built using **HTML5**, **Tailwind CSS**, and lightweight JavaScript — it’s fast, flexible, and easy to customize.

Each demo is designed with unique layouts and visual styles.
Some demos include both **Standard** and **Animate** versions, while others have only one version depending on the design purpose.

---

## 🧩 Available Demos

| Demo       | Versions           | Description                                              |
| ---------- | ------------------ | -------------------------------------------------------- |
| **Demo 1** | Standard & Animate | Clean and professional look with subtle motion.          |
| **Demo 2** | Animate only       | Modern showcase with smooth transitions and effects.     |
| **Demo 3** | Standard & Animate | Gradient-based style, suitable for creative freelancers. |
| **Demo 4** | Standard & Animate | Dark layout with bold, minimalist typography.            |
| **Demo 5** | Animate only       | Dynamic presentation with interactive scrolling.         |
| **Demo 6** | Animate only       | Simple, minimal design focused on readability.           |

---

## ⚙️ Folder Structure

```
freelancer-showcase/
│
├── demo-1/
│   ├── standard/
│   └── animate/
├── demo-2/
│   └── animate/
├── demo-3/
│   ├── standard/
│   └── animate/
├── demo-4/
│   └── standard/
│   └── animate/
├── demo-5/
└── demo-6/
│
│
├── tailwind.config.js
├── README.md
└── documentation/
    └── index.html
```

---

## 🚀 Getting Started

1. **Unzip** the downloaded package.
2. Navigate to the demo folder you want to use (for example, `demo-2/animate/`).
3. Open the `index.html` file in your browser.

> 💡 No installation or build step required — everything works directly in the browser.

---

## 🎨 Customization

### Colors

Modify colors inside `tailwind.config.js` under the `theme.extend.colors` section.

### Fonts

All fonts are imported via **Google Fonts** inside the `<head>` tag of each demo’s `index.html`.

### Images

Replace images inside `/assets/images/` with your own. Keep the filenames to avoid broken paths.

### Animations

Animate versions use libraries such as **AOS (Animate On Scroll)** or custom CSS transitions.
You can customize animation duration, easing, and trigger offsets inside `/assets/js/` or `/assets/css/`.

---

## 🧱 Optional: Tailwind Rebuild

If you edit Tailwind CSS, you can rebuild it with:

```bash
npx tailwindcss -i ./assets/css/input.css -o ./assets/css/output.css --watch
```

---

## 📱 Responsive Design

Freelancer Showcase is optimized for:

* Desktop (≥1280px)
* Tablet (≥768px)
* Mobile (<768px)

---

## 🧾 Credits

* **Tailwind CSS** – [https://tailwindcss.com](https://tailwindcss.com)
* **AOS (Animate On Scroll)** – [https://michalsnik.github.io/aos/](https://michalsnik.github.io/aos/)
* **Google Fonts** – [https://fonts.google.com](https://fonts.google.com)
* **Unsplash / Pexels** – Stock images

---

## 📄 License

This template is for **personal and commercial use** under Envato Market’s standard license.

---

## 🙏 Thank You

Thank you for purchasing **Freelancer Showcase Template**!
If you enjoy this product, please support it with a ⭐⭐⭐⭐⭐ rating — it really helps us improve future versions.
