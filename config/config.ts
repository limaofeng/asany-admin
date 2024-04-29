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
    url: 'https://api.mh-procoffeemachine.com/graphql',
    wsUrl: 'wss://api.mh-procoffeemachine.com/subscriptions',
  },
  app: {
    id: 'jdc7t953mea633v9mzkc',
    loading: false,
  },
  define: {
    'process.env.NODE_ENV': process.env.NODE_ENV,
    'process.env.WEBSITE_URL': '//localhost:8001',
    'process.env.STORAGE_URL': 'https://storage-api.mh-procoffeemachine.com',
    'process.env.SHORT_DOMAIN_NAME': 'https://s.mh-procoffeemachine.com',
    'process.env.MOBILE_URL': '//wxb.app.mh-procoffeemachine.com',
    'process.env.OPEN_IM_API_URL': 'https://im.mh-procoffeemachine.com/api/',
    'process.env.OPEN_IM_WS_URL':
      'wss://im.mh-procoffeemachine.com/msg_gateway/',
  },
  styles: [
    '/assets/plugins/custom/datatables/datatables.bundle.css',
    '/assets/plugins/global/google.font.css',
    '/assets/plugins/global/plugins.bundle.css',
    '/assets/css/style.bundle.css',
  ],
  scripts: ['/wasm_exec.js'],
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
