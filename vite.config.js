import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 1143,
    allowedHosts: ['.ngrok-free.dev'],
    hmr: {
      clientPort: 443
    }
  }
})

