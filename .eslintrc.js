module.exports = {
    root: true,
    extends: ['@react-native', 'prettier'],
    plugins: ['prettier', '@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },

    rules: {
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
        'prettier/prettier': [
            'warn',
            {
                arrowParens: 'always',
                semi: true,
                trailingComma: 'none',
                tabWidth: 4,
                endOfLine: 'auto',
                useTabs: false,
                singleQuote: true,
                printWidth: 150,
                jsxSingleQuote: true
            }
        ]
    },

    overrides: [
        {
            files: ['**/*.{js,jsx,ts,tsx}'],
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': 'off'
            }
        }
    ]
};
