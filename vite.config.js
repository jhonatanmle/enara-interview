import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const getPath = route => path.resolve(__dirname, route);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@src': getPath('./src/'),
      '@components': getPath('./src/Components/'),
      '@shared': getPath('./src/Shared/'),
      '@styles': getPath('./src/styles/'),
      '@data': getPath('./data/'),
    },
  },
});
