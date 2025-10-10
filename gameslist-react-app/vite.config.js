import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/freetogame': {
        target: "https://www.freetogame.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/freetogame/, ''),
      }
    }
  }
})
