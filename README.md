# 🚀 Ahmed Anany - Portfolio

> A modern, animated portfolio showcasing full-stack development expertise with smooth scroll effects and engaging animations.

[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Material-UI](https://img.shields.io/badge/MUI-5.11-007FFF?logo=mui&logoColor=white)](https://mui.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.11-88CE02?logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## ✨ Overview

A sleek, performance-optimized portfolio built with React featuring custom skew-scroll mechanics, dynamic animations, and a premium dark theme. This project showcases professional work experience, selected projects, and technical expertise with an emphasis on smooth user experience and visual design.

**Live Demo:** [Your deployment URL]

---

## 🎯 Key Features

- **🎬 Custom Scroll System** - Advanced skew-scroll effect powered by GSAP for smooth, momentum-based scrolling
- **⚡ Responsive Design** - Fully adaptive layout from mobile (320px) to 4K displays
- **🎨 Premium Animations** - Staggered reveals, parallax effects, and micro-interactions using GSAP and Framer Motion
- **🎭 Interactive Cursor** - Custom cursor with hover states and click animations
- **📱 Progressive Enhancement** - Native scrolling on mobile, enhanced scroll on desktop
- **🌙 Dark Theme** - Carefully crafted dark mode with vibrant accent colors (#Fe6601)
- **🧩 Modular Architecture** - Component-based structure for maintainability and scalability

---

## 🛠️ Tech Stack

### Core

- **React 18.2** - UI library
- **React Router DOM 6.4** - Client-side routing
- **Redux Toolkit** - State management

### Styling

- **Material-UI (MUI) 5.11** - Component library
- **Emotion** - CSS-in-JS
- **SASS** - Advanced styling

### Animation

- **GSAP 3.11 + ScrollTrigger** - Advanced animations and scroll effects
- **Framer Motion 8.1** - Spring-based animations
- **Lottie React** - JSON-based animations

### Other

- **React Icons** - Icon library
- **Split Type** - Text splitting for animations

---

## 📂 Project Structure

```
src/
├── Components/
│   ├── AboutComponents/       # About page components
│   │   └── AboutContent.js    # Bio, experience, tech stack
│   ├── Global/                # Shared components
│   │   ├── Header.js          # Navigation header
│   │   ├── Footer.js          # Footer section
│   │   ├── FootLine.js        # Copyright footer
│   │   └── Cursor.js          # Custom cursor
│   └── HomeComponents/        # Home page components
│       ├── HeadSection.js     # Hero section
│       ├── WorkSection.js     # Projects list
│       └── WorkLink.js        # Individual project card
├── Views/
│   ├── Home.js                # Landing page
│   ├── About.js               # About/Resume page
│   └── ProjectRoute.js        # Project detail page
├── Data/
│   └── ProjectsData.js        # Projects content
├── Utilities/
│   ├── Theme.js               # Theme configuration
│   ├── WindowSize.js          # Responsive hook
│   └── TopScroll.js           # Scroll to top utility
├── Style/
│   └── app.scss               # Global styles
├── LoaderSlice.js             # Redux slice for loading state
├── Store.js                   # Redux store
└── App.js                     # Root component
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 14+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**
   ```bash
   npm run build
   ```
   The optimized build will be in the `build/` folder.

---

## 🎨 Customization

### Update Personal Information

Edit `src/Components/AboutComponents/AboutContent.js` to update:

- Professional summary
- Work experience
- Tech stack
- Contact information

### Add/Edit Projects

Modify `src/Data/ProjectsData.js` to add or edit project entries:

```javascript
{
  id: 1,
  nam: "project-name",
  tag: "Project Title",
  cate: "Category",
  date: "2024"
}
```

### Modify Theme

Update colors and fonts in `src/Utilities/Theme.js`:

```javascript
export const CustomTheme = {
  fonts: {
    font5: "'Playfair Display', serif",
    hom: "'Poppins', sans-serif",
    // ...
  },
};
```

---

## 🌐 Deployment

### Build

```bash
npm run build
```

### Deploy to:

- **Vercel**: `vercel --prod`
- **Netlify**: Connect your repo or drag & drop the `build/` folder
- **GitHub Pages**: Use `gh-pages` package

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Ahmed Anany**

- Full Stack Developer with 3+ years of experience
- Specializing in .NET, Angular, Next.js, and React
- [LinkedIn](https://www.linkedin.com/in/ahm-anany/)
- [WhatsApp](https://wa.link/gto20p)

---

## 🙏 Acknowledgments

- **GSAP** - For the incredible animation library
- **Material-UI** - For the comprehensive component library
- **React Community** - For continuous inspiration and support

---

<div align="center">
  <sub>Built with ❤️ by Ahmed Anany</sub>
</div>
