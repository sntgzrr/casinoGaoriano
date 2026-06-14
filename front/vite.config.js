import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    minify: 'esbuild',
    esbuildOptions: {
      drop: ['console'],
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-gsap': ['gsap', '@gsap/react'],
          'vendor-ui': ['lucide-react', 'qrcode.react'],
          'vendor-http': ['axios'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
})
