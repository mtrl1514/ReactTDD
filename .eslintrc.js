module.exports = {
    extends: [
        'eslint:recommended',
    ],
    parser: 'babel-eslint',
    plugins: [
        'cypress',
        'jest',
        'react',
        'jsx-a11y',
        'import',
    ],
    env: {
        'browser': true,
        'jest/globals' : true,
    },
};