import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './__tests__/setup.ts',
    include: ['./__tests__/**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'c8',
      all: true,
      src: ['app'],
      exclude: ['app/**/*.stories.ts'],
    },
  },
});
