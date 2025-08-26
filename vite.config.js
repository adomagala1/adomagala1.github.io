// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/adomagala1.github.io/',

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        404: resolve(__dirname, '404.html'),
        esseys: resolve(__dirname, 'esseys.html'),
        projektDashboard: resolve(__dirname, 'projekt-dashboard.html')
      }
    }
  }
});
