module.exports = {
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
   },
   extends: [
      'plugin:@typescript-eslint/recommended',
   ],
   rules: {
      quotes: [1, 'single'],
      '@typescript-eslint/ban-types': 'off',
   },
}
