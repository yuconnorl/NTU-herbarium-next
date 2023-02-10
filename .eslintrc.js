module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['simple-import-sort', 'prettier'],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'no-unused-vars': 'warn', // warning if variables not used
    'simple-import-sort/imports': 'error', // sorting imports
    'simple-import-sort/exports': 'error', // sorting exports
    'react/react-in-jsx-scope': 'off', // suppress errors for missing 'import React' in files
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }], // allow jsx syntax in js files
    'react/prop-types': 'off', // props validation
    'prettier/prettier': 'error',
    'tailwindcss/no-custom-classname': 'off',
  },
}
