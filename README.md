#  ITZFIZZ — Scroll-Driven Hero Section Animation

A scroll-based hero section animation built as part of the ITZFIZZ frontend assignment. Inspired by the reference demo, this project focuses on motion quality, scroll-driven interactions, and smooth UI behavior.

---

## 🔗 Links

- **Live Demo:** [https://itzfizz-assignment-two.vercel.app/](https://itzfizz-assignment-two.vercel.app/)
- **GitHub Repo:** [https://github.com/subhaushsingh/ITZFIZZ-assignment](https://github.com/subhaushsingh/ITZFIZZ-assignment)

---

## 📋 Features

### Hero Section Layout
- Full-screen hero section occupying the first viewport
- Letter-spaced headline: **W E L C O M E I T Z F I Z Z**
- Impact metrics and statistics displayed below the headline

### Initial Load Animation
- Headline fades in with a smooth staggered reveal on page load
- Statistics animate in one by one with subtle delays
- Premium, fluid feel — no abrupt transitions

### Scroll-Based Animation
- Main visual elements respond to scroll position in real time
- Animation is tied to scroll progress, not time-based autoplay
- Smooth easing and interpolation for natural, fluid motion
- Horizontal scroll section with pinned layout
- Text elements animate in and out based on scroll position

### Performance
- All animations use `transform` properties (`translate`, `scale`, `rotate`) to avoid layout reflows
- GSAP ScrollTrigger used for efficient, performant scroll handling
- No heavy calculations on every scroll event

---

## 🛠 Tech Stack

| Technology | Usage |
|---|---|
| React.js (Vite) | Component structure and rendering |
| Tailwind CSS | Styling and layout |
| GSAP | Animations and scroll interactions |
| GSAP ScrollTrigger | Scroll-driven animation control |
| Vercel | Deployment |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/subhaushsingh/ITZFIZZ-assignment.git

# Navigate into the project
cd ITZFIZZ-assignment

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
ITZFIZZ-assignment/
├── public/
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 🎯 Key Implementation Details

- Used `useLayoutEffect` instead of `useEffect` to ensure DOM is fully ready before GSAP reads element dimensions and refs
- GSAP ScrollTrigger `pin` used to lock the horizontal scroll section in place while the user scrolls vertically
- Horizontal scroll distance calculated dynamically from `scrollWidth - clientWidth`
- Text animations staggered using scroll offsets so each element animates in sequence

---

## 👤 Author

**Subhaush Singh**  
[GitHub](https://github.com/subhaushsingh)
