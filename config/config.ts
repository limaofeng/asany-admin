import { defineConfig } from '@umijs/max';

import routes from './routes';

export default defineConfig({
  esbuildMinifyIIFE: true,
  plugins: [
    require.resolve('./document'),
    '@asany/umi-plugin-apollo',
    '@asany/umi-plugin-app',
  ],
  apollo: {
    options: '../config/apollo-options.ts',
  },
  app: {
    loading: false,
  },
  define: {
    'process.env.NODE_ENV': process.env.NODE_ENV,
    'process.env.WEBSITE_URL': process.env.WEBSITE_URL,
    'process.env.MOBILE_URL': process.env.MOBILE_URL,
    'process.env.SHORT_DOMAIN_NAME': process.env.SHORT_DOMAIN_NAME,
    'process.env.STORAGE_URL': process.env.STORAGE_URL,
    'process.env.OPEN_IM_API_URL': process.env.OPEN_IM_API_URL,
    'process.env.OPEN_IM_WS_URL': process.env.OPEN_IM_WS_URL,
  },
  styles: [
    '/assets/plugins/custom/datatables/datatables.bundle.css',
    '/assets/plugins/global/google.font.css',
    '/assets/plugins/global/plugins.bundle.css',
    '/assets/css/style.bundle.css',
  ],
  scripts: ['/wasm_exec.js'],
  metas: [
    {
      'http-equiv': 'Cache-Control',
      content: 'no-cache',
    },
    {
      'http-equiv': 'Pragma',
      content: 'no-cache',
    },
    {
      'http-equiv': 'Expires',
      content: '0',
    },
  ],
  hash: true,
  dva: {},
  antd: {},
  access: {},
  model: {},
  tailwindcss: {},
  initialState: {},
  request: {},
  routes,
  sassLoader: {
    implementation: require('sass'),
  },
  chainWebpack(memo) {
    memo.module
      .rule('wasm-loader')
      .test(/\.wasm(\.bin)?$/)
      .type('asset/resource');
    memo.experiments = memo.experiments || {};
    (memo.experiments as any).syncWebAssembly = true;

    const { styles } = require('@ckeditor/ckeditor5-dev-utils');
    const svgReg = /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/;
    const cssReg = /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/;

    memo.module.rule('cke5-svg').test(svgReg).type('asset/source');
    // svg exclude
    ['svg', 'svgr'].forEach((rule) => {
      memo.module.rule(rule).exclude.add(svgReg);
    });
    // css rule
    memo.module
      .rule('cke5-css')
      .test(cssReg)
      .use('style-loader')
      .loader(require.resolve('style-loader'))
      .end()
      .use('css-loader')
      .loader(require.resolve('css-loader'))
      .end()
      .use('postcss-loader')
      .loader(require.resolve('postcss-loader'))
      .options({
        postcssOptions: styles.getPostCssConfig({
          themeImporter: {
            themePath: require.resolve('@ckeditor/ckeditor5-theme-lark'),
          },
          minify: true,
        }),
      });
    // css exclude
    memo.module.rule('css').exclude.add(cssReg);
    // assets exclude
    memo.module.rule('asset').oneOf('fallback').exclude.add(svgReg).add(cssReg);

    memo.stats({ children: true });
  },
  npmClient: 'npm',
});
