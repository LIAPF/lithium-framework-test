import { defineConfig } from "vite";
import path from 'path';

export default defineConfig({
  css: {

  },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, './src'),
      '@modules': path.resolve(__dirname, './src/app/modules'),
      '@components': path.resolve(__dirname, './src/app/shared/components'),
      '@core': path.resolve(__dirname, './src/app/core'),
      '@lithium': path.resolve(__dirname, './src/app/config/main.ts'),
    },
  },
});