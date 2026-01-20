import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
    rollupOptions: {
      plugins: [
        {
          name: "copy-redirects",
          writeBundle() {
            copyFileSync("public/_redirects", "dist/_redirects")
          }
        }
      ]
    }
  }
})
