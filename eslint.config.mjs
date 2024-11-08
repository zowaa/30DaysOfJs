import globals from 'globals';
import { configs as tsConfigs } from '@typescript-eslint/eslint-plugin';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import { parse } from '@typescript-eslint/parser';

export default [
  {
    files: ["Days/**/*.{js,ts}"],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
      parser: {
        parse,
      },
    },

    rules: {
      ...tsConfigs.recommended.rules,
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },

    plugins: {
      '@typescript-eslint': tsPlugin,
    },
  },
];
