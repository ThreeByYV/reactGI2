import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: mode === 'development'
          ? process.env.VITE_API_URL || 'http://localhost:3000'  // Local backend during development
          : process.env.VITE_API_URL || 'https://react-gi-2-4ezum8dcm-yonjous-projects.vercel.app', // Deployed backend for production
        changeOrigin: true,
        secure: false,
      }
    }
  }
}));
