module.exports = {
  root: true,
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'standard',
    'plugin:vue/essential'
  ],
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    'vue/require-v-for-key': 0
  }
}
