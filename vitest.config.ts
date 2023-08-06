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
      all: true,
      include: ['app'],
      exclude: ['app/**/*.stories.ts'],
    },
  },
});
