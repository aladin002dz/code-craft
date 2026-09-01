# ⚛️ Mastering React State & `useState` (Interactive Visual Guide)

An interactive, animated educational web application designed to teach **React State & `useState`** from first principles to deep internals (Snapshots, Queues, Fiber Linked Lists, and Immutability).

---

## 🌐 Live Online Preview

🔗 **Live Demo**: [https://aladin002dz.github.io/code-craft/](https://aladin002dz.github.io/code-craft/)

*(To enable the live preview on GitHub, go to your repository **Settings** → **Pages** → under **Source**, select **GitHub Actions**)*.

---

## ✨ Features & Interactive Modules

1. **Chapter 1: The "Why State?" Dilemma**
   - Interactive side-by-side comparison between regular JavaScript variables (`let count = 0`) vs React `useState(0)`.
   - Live memory inspection vs Virtual DOM execution trace.

2. **Chapter 2: Anatomy of `useState` & Lazy Initialization**
   - Interactive syntax microscope dissecting array destructuring and snapshot binding.
   - Lazy initial state benchmark lab comparing `useState(compute())` vs `useState(() => compute())`.

3. **Chapter 3: State as a Snapshot & The Queueing Mystery**
   - Interactive time-travel queue stepper for the 3x increment dilemma (`setCount(count + 1)` vs `setCount(prev => prev + 1)`).
   - Real-time internal update queue evaluation visualizer.

4. **Chapter 4: Under the Hood — React Fiber & The Hooks Linked List**
   - Memory diagram of `fiber.memoizedState` singly-linked list (`Hook 1 -> Hook 2 -> Hook 3`).
   - Interactive *"Break the Rules of Hooks"* simulator to conditionally skip a hook and observe pointer corruption in real-time.

5. **Chapter 5: Managing Complex State (Objects & Arrays)**
   - `Object.is(prev, next)` shallow equality visualizer showing why in-place mutations fail.
   - Interactive immutable playground for object spread syntax and array operations (`.filter`, `.map`, `[...prev]`).

6. **Chapter 6: Interactive Real-World Sandboxes**
   - **Shopping Cart**: Derived state patterns without redundant state.
   - **Multi-Step Form Wizard**: Consolidated state management with dynamic input keys.
   - **Undo / Redo Time Machine**: Managing past, present, and future state history arrays.
   - **Custom Hook Lab**: Reusable state logic with `useToggle` and `useCounter`.

7. **Chapter 7: Mastery Quiz & Pro Certification**
   - 8 tricky interview scenarios with instant visual feedback and deep explanations.
   - Confetti celebration and downloadable/copyable `useState` cheat sheet.

8. **Global Render Flasher & Web Audio Feedback**
   - Top-bar toggle that pulses a bright cyan glow around any component that re-renders, paired with subtle Web Audio API synthesized tones.

---

## 🛠️ Tech Stack

- **React 19** + **TypeScript**
- **Vite**
- **Tailwind CSS v4**
- **Framer Motion** & **Lucide React**
- **Canvas-Confetti**
- **GitHub Actions & GitHub Pages**

---

## 🚀 Local Development

```bash
# Clone the repository
git clone git@github.com:aladin002dz/code-craft.git

# Navigate to project directory
cd code-craft

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## 📄 License

MIT License. Feel free to use and learn from this project!
