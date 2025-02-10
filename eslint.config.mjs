import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import nextPlugin from '@next/eslint-plugin-next';
import prettier from 'eslint-config-prettier';
import storybookPlugin from 'eslint-plugin-storybook';
import unusedImports from 'eslint-plugin-unused-imports';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

export default [
  {
    ignores: ['__tests__/lib/__snapshots__'],
  },
  eslint.configs.recommended,
  ...compat.config({
    extends: ['next/core-web-vitals'],
  }),
  prettier,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'unused-imports': unusedImports,
    },
    rules: {
      'import/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
          },
        },
      ],
      '@typescript-eslint/no-unused-vars': 'error',
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      ...tseslint.configs['recommended-type-checked'].rules,
      ...tseslint.configs['stylistic-type-checked'].rules,
      ...storybookPlugin.configs.recommended.rules,
    },
  },
];
