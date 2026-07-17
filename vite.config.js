import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Keep heavy 3D libs out of the main chunk (< 200KB gzip target)
          three: ['three', '@react-three/fiber', '@react-three/drei', '@react-three/postprocessing'],
          motion: ['framer-motion', 'gsap'],
        },
      },
    },
  },
})
