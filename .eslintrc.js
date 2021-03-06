module.exports = {
  env: {
    'react-native/react-native': true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-native/all',
    'airbnb',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native'],
  rules: {
    'no-unused-vars': 1,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 0,
    'react-native/no-color-literals': 0,
    'react-native/no-raw-text': 1,
    'react-native/no-single-element-style-arrays': 2,
    'react-native/sort-styles': 0,
  },
};
