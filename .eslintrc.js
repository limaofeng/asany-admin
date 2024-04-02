module.exports = {
  extends: require.resolve('@umijs/max/eslint'),
  rules: {
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { allowShortCircuit: true },
    ],
  },
};
