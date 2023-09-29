import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        test: resolve(__dirname, 'whats-in-season/index.html'),
        reviewIt: resolve(__dirname, 'review-it/index.html'),
        privacy: resolve(__dirname, 'privacy/index.html'),
      },
    },
    outDir: 'build'
  },
  plugins: [react()],
})
