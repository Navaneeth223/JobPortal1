# Job Portal – React + Tailwind CSS

A fully responsive, production-ready **Job Portal & Company Dashboard** built with **React (Vite)** and **Tailwind CSS v3.3**, based on the provided Figma design.

This project follows **mobile-first principles**, clean architecture, reusable components, and scalable routing — suitable for real-world SaaS applications.

---

## ✨ Features

- Mobile-first responsive design (matches Figma mobile screens)
- Desktop layout redesigned (not stretched mobile UI)
- Clean and scalable folder structure
- Reusable UI components
- Route-based navigation
- Sticky navbar (desktop)
- Hamburger menu (mobile)
- Lucide React icons
- Smooth hover & transition effects
- Production-ready code quality

---

## 🧑‍💻 Tech Stack

- **React** (Vite)
- **Tailwind CSS v3.3**
- **React Router DOM**
- **Lucide React Icons**

---

## 📁 Folder Structure

```

src/
│
├── components/
│ ├── Navbar.jsx
│ ├── MobileMenu.jsx
│ ├── HeroSection.jsx
│ ├── FeatureCard.jsx
│ ├── FeatureGrid.jsx
│ ├── PricingCard.jsx
│ ├── CTASection.jsx
│ ├── Footer.jsx
│ ├── Button.jsx
│ ├── IconText.jsx
│ ├── SectionWrapper.jsx
│
├── pages/
│ ├── Home.jsx
│ ├── About.jsx
│ ├── Features.jsx
│ ├── Components.jsx
│ ├── Pricing.jsx
│ ├── Contact.jsx
│ └── NotFound.jsx
│
├── routes/
│ └── AppRoutes.jsx
│
├── assets/
│ └── images/
│
├── App.jsx
├── main.jsx
└── index.css


```


---

## 🧭 Pages (Routes)

| Route | Page |
|-----|------|
| `/` | Home |
| `/about` | About / Overview |
| `/features` | Features |
| `/components` | Components Showcase |
| `/pricing` | Pricing / Plans |
| `/contact` | Contact / CTA |
| `*` | 404 – Not Found |

---

## 🧩 Component Philosophy

- **Reusable components only**
- No page-specific UI logic inside components
- Icons passed as props (Lucide)
- No inline styles
- Tailwind utility classes only
