import { FlatCompat } from '@eslint/eslintrc';
import pluginImportSort from 'eslint-plugin-simple-import-sort';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
        plugins: {
            'simple-import-sort': pluginImportSort,
            'unused-imports': pluginUnusedImports,
        },
        rules: {
            'simple-import-sort/imports': 'warn',
            'simple-import-sort/exports': 'warn',
            'unused-imports/no-unused-imports': 'warn',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
            '@typescript-eslint/no-require-imports': 'warn',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
            ],
        },
    },

    {
        ignores: ['src/generated/**'],
    },
];

export default eslintConfig;
