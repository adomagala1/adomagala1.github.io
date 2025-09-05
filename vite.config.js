// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        404: resolve(__dirname, '404.html'),
        esseys: resolve(__dirname, 'esseys.html'),
        essey1: resolve(__dirname, 'przekminki/czy_sa_szanse.html'),
        projektDashboard: resolve(__dirname, 'projekt-dashboard.html')
      }
    }
  }
});
