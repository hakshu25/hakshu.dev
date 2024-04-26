import eslintConfigPrettier from 'eslint-config-prettier';
import unusedImports from 'eslint-plugin-unused-imports';
import typeScriptESLint from '@typescript-eslint/eslint-plugin';
import typeScriptESLintParser from '@typescript-eslint/parser';

export default [
  eslintConfigPrettier,
  {
    ignores: ['__tests__/lib/__snapshots__'],
  },
  {
    plugins: {
      unusedImports,
      typeScriptESLint,
    },
    languageOptions: {
      parser: typeScriptESLintParser,
      parserOptions: {
        project: './tsconfig.json',
      },
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
    },
  },
];
