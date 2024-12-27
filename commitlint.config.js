module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [2, 'always', 1000],
    'header-max-length': [2, 'always', 200],
  },
};
