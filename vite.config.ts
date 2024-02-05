import { defineConfig } from "vite";
import path from 'path';

export default defineConfig({
  css: {

  },
  resolve: {
    alias: {
      '@modules': path.resolve(__dirname, './src/app/modules'),
      '@components': path.resolve(__dirname, './src/app/shared/components'),
      '@lithium': path.resolve(__dirname, './src/app/config/lithium'),
    },
  },
});