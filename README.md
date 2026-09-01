<div align="center">

# ⚛️ React `useState` — Interactive Visual Guide

**Learn React state the way it actually works under the hood — by playing with it.**

An animated, game-like educational web app that teaches React state and `useState` from first-principle mental models all the way down to Fiber internals, through live sandboxes, animated diagrams, and a scored mastery quiz.

[**🔗 Live Demo**](https://aladin002dz.github.io/code-craft/) · [Features](#-features) · [Getting Started](#-getting-started) · [Tech Stack](#-tech-stack) · [Contributing](#-contributing)

[![Live Demo](https://img.shields.io/badge/demo-online-22c55e?style=flat-square)](https://aladin002dz.github.io/code-craft/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](#-contributing)

</div>

---

## 📖 About

Most `useState` tutorials stop at `const [count, setCount] = useState(0)`. This project goes further: it's a **7-module interactive course** that turns the trickiest parts of React state — snapshots, batching, the Fiber hooks linked list, immutability — into things you can *click, break, and watch happen* instead of just read about.

Every concept is paired with a live, runnable demo: flip a toggle to watch components flash on every re-render, step through React's internal update queue frame by frame, or intentionally break the Rules of Hooks and see the hook pointers desync in real time. It's built to be the resource you wish existed the first time `setCount(count + 1)` didn't do what you expected.

- 🌍 **Trilingual** — English, Français, and العربية, with full RTL layout support.
- 🎯 **Progress tracking** — completion badges per module, persisted locally, with a scored certification quiz at the end.
- 🎮 **Learn by breaking things** — every chapter includes an interactive sandbox, not just prose and static code blocks.

## 🌐 Live Demo

**[https://aladin002dz.github.io/code-craft/](https://aladin002dz.github.io/code-craft/)**

Deployed automatically to GitHub Pages on every push to `main` (see [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).

## ✨ Features

| # | Module | What you'll play with |
|---|--------|------------------------|
| 1 | **The "Why State?" Dilemma** | Side-by-side sandbox: a plain `let count` variable vs. `useState(0)` — watch one silently fail to re-render while the other doesn't. |
| 2 | **Anatomy of `useState`** | An interactive "syntax microscope" for array destructuring, plus a lazy-initializer benchmark lab (`useState(compute())` vs. `useState(() => compute())`). |
| 3 | **Snapshot & The Queueing Mystery** | A step-by-step time-travel stepper for the classic "3x increment" gotcha, visualizing React's internal update queue frame by frame. |
| 4 | **React Fiber & The Hooks Linked List** | A memory diagram of `fiber.memoizedState`'s singly-linked list, plus a "Break the Rules of Hooks" simulator that shows hook pointers desyncing live. |
| 5 | **Complex State & Immutability** | An `Object.is(prev, next)` visualizer explaining why in-place mutation silently fails, with a hands-on immutable-update playground. |
| 6 | **Interactive Real-World Labs** | Four production-style sandboxes: a shopping cart (derived state), a multi-step form wizard (consolidated state), an undo/redo time machine (state stacks), and custom hooks (`useToggle`, `useCounter`). |
| 7 | **Mastery Quiz & Certification** | 8 interview-style scenario questions with instant feedback, a confetti finish, and a copyable `useState` cheat sheet. |

**Plus, app-wide:**

- ⚡ **Render Flasher** — a toggle that highlights any component with a glowing border the instant it re-renders, making React's render cycle visible.
- 🏆 **Module badges** — a trophy row in the header lights up per chapter as you complete it, and doubles as quick navigation.
- 📊 **Scroll progress bar** — tracks how far you are through the current chapter, tinted to that chapter's accent color.
- ⌨️ **Keyboard navigation** — jump between chapters with the arrow keys.
- 🔊 **Optional sound feedback** — subtle synthesized tones on click/render/success, off by default.

## 🛠️ Tech Stack

| Category | Choice |
|---|---|
| Framework | [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org/) |
| Build tool | [Vite](https://vitejs.dev) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev) |
| Celebration | [canvas-confetti](https://github.com/catdad/canvas-confetti) |
| Linting | [oxlint](https://oxc.rs/docs/guide/usage/linter.html) |
| Deployment | GitHub Actions → GitHub Pages |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20+
- npm (ships with Node)

### Installation

```bash
# Clone the repository
git clone git@github.com:aladin002dz/code-craft.git
cd code-craft

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app is now running at `http://localhost:5173`.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server with hot module reload. |
| `npm run build` | Type-check with `tsc` and build a production bundle to `dist/`. |
| `npm run preview` | Serve the production build locally. |
| `npm run lint` | Run `oxlint` over the project. |

## 📂 Project Structure

```
src/
├── components/
│   ├── chapters/     # One component per learning module (Chapter1..Chapter7)
│   ├── sandboxes/     # The 4 real-world interactive labs used in Chapter 6
│   └── common/         # Header, Footer, Card, CodeBlock, modals, shared UI
├── context/            # ProgressContext (progress/sound/render-flash) & LanguageContext (i18n/RTL)
├── data/               # Quiz questions & cheat sheet content
├── i18n/                # EN / FR / AR translation strings
├── types/               # Shared TypeScript types
└── utils/               # Small helpers (e.g. per-chapter color mapping)
```

## 🤝 Contributing

Contributions are welcome! Whether it's fixing a typo, improving an explanation, adding a new sandbox, or translating to another language:

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/my-improvement`)
3. Commit your changes with a clear message
4. Push to your fork and open a Pull Request

Please run `npm run lint` and make sure `npm run build` passes before opening a PR.

## 📄 License

Licensed under the [MIT License](LICENSE) — free to use, modify, and learn from.

---

<div align="center">

Built by [aladin002dz](https://github.com/aladin002dz) · If this helped you understand `useState`, consider ⭐ starring the repo.

</div>
