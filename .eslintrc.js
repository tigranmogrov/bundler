module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        "eslint:recommended",
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },

    rules: {
        'no-console': 'warn',
        'indent': [
            'error',
            'tab',
            {'SwitchCase': 2}
        ],
        'no-use-before-define': 'error',
        'func-names': ['error', 'always'],
        'max-len': ['error', {'code': 280,}],
        'no-plusplus': ['error', {'allowForLoopAfterthoughts': true}],
        'prefer-destructuring': ['error', {'object': true, 'array': false}],
        'no-tabs': ['error', {'allowIndentationTabs': true}],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'no-multiple-empty-lines': ['error', {'max': 2, 'maxEOF': 0}],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'camelcase': 'warn',
        'no-undef': 'error',
        'no-unused-vars': 'error'
    },
};
