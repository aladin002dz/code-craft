import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/code-craft/', // Set base path for GitHub Pages repo: https://aladin002dz.github.io/code-craft/
})
