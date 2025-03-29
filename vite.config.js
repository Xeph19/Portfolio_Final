import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    host: true,
    allowedHosts: [
      'portfolio-final-1-zy5t.onrender.com',
      '.onrender.com'
    ]
  }
}) 