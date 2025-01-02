module.exports = {
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/layouts/**/*.tsx',
  ],
  content: ['./src/**/*.tsx'],
  corePlugins: {
    preflight: false,
  },
  prefix: 'tw-',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
