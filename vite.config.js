// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/OlehVerse/', // 👈 это обязательно!
  plugins: [react()],
})
