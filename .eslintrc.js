module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['plugin:vue/vue3-recommended', 'standard', 'prettier'],
  parserOptions: {},
  rules: {
    'no-console': import.meta.env.MODE === 'production' ? 'warn' : 'off',
    'no-debugger': import.meta.env.MODE === 'production' ? 'warn' : 'off'
  }
}
