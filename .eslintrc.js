module.exports = {
  env: {
    browser: true,
    es6: true,
    amd: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:prettier/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  plugins: ['vue'],
  rules: {
    // 'no-unused-vars': 'off',
    'vue/no-multiple-template-root': 'off'
  }
};
