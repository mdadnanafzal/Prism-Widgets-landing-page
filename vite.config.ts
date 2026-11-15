import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' so the built site works from any folder or GitHub Pages sub-path
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
