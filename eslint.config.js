import globals from 'globals';
import googleConfig from 'eslint-config-google';

// Googleの設定を展開し、無効なルールを除外
const googleRules = {
  ...googleConfig.rules,
  'valid-jsdoc': 'off',
  'require-jsdoc': 'off',
};

export default [
  {
    files: ['**/*.js'],
    ignores: ['dist/**'],
    languageOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
      globals: globals.browser,
    },
    rules: {
      ...googleRules,
      // 他のカスタムルールをここに追加
    },
  },
];
