import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

  // defining backend server port so no need to hard code routes in client 
  export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: mode === 'development' 
          ? 'http://localhost:3000'  // Local backend during development
          : 'https://react-gi-2-bsoiq9nvp-yonjous-projects.vercel.app', // Deployed backend for production
        changeOrigin: true,
        secure: false,
      }
    }
  }
}))
