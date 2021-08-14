module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 8,
  },
  env: {
    browser: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  globals: {
    __static: true,
  },
  rules: {
    semi: 0,
    'global-require': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/newline-after-import': 0,
    'no-console': 0,
    'linebreak-style': 0,
    'no-underscore-dangle': 0,
    // allow debugger during development
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
}
