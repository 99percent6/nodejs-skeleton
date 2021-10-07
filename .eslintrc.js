module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    semi: [2, 'never'],
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'no-tabs': 0,
    indent: 0,
    'no-unused-vars': 1,
    'object-curly-newline': 0,
    'class-methods-use-this': 0,
    camelcase: 0,
    'import/prefer-default-export': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'no-restricted-syntax': 0,
    'no-continue': 0,
    'no-case-declarations': 0,
    'no-plusplus': 0,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 1,
  },
}
