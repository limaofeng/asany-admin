module.exports = {
  extends: require.resolve('@umijs/max/eslint'),
  plugins: ['import'],
  rules: {
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { allowShortCircuit: true },
    ],
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'sibling',
          'parent',
          'index',
          'unknown',
        ],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: [],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        warnOnUnassignedImports: false,
      },
    ],
  },
};
