module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    page: true,
    REACT_APP_ENV: true,
  },
  plugins: ['import'],
  rules: {
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
      },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '{.,..}/**/*.+(css|sass|less|scss|pcss|styl)',
            unnamed: true,
            group: 'unknown',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        warnOnUnassignedImports: true,
      },
    ],
  },
};
