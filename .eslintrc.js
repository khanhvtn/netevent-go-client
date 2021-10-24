module.exports = {
    settings: {
        react: {
            version: 'detect'
        }
    },
    env: {
        browser: true,
        es2021: true
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['react', 'prettier'],
    rules: {
        'no-undef': 0,
        'no-unused-vars': 0,
        'no-useless-escape': 0,
        'no-case-declarations': 0,
        'prettier/prettier': 2
    }
};
