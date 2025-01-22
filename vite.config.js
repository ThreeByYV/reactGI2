import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


  export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    proxy: {
        // defining backend server port so no need to hard code routes in client or server.js file
      '/api': {
        target: mode === 'development' 
          ? 'http://localhost:3000'  // Local backend during development
          : 'https://react-gi-2.vercel.app', // Deployed backend for production
        changeOrigin: true,
        secure: false,
      }
    }
  }
}))
