module.exports = {
  env: {
    es2020: true,
    node: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'standard',
    'plugin:security/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'security'],
  rules: {
    semi: [2, 'always'],
    'space-before-function-paren': ['error', 'never'],
    anonymous: 'always',
    named: 'never',
    asyncArrow: 'always'
  }
};
