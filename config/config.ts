// https://umijs.org/config/
import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  apollo: {
    url: 'http://localhost:8080/graphql',
    wsUrl: 'ws://localhost:8080/subscriptions',
    logging: process.env.NODE_ENV === 'development',
  },
  app: {
    id: 'dae19885dc94eb73c399',
  },
  define: {
    'process.env.APOLLO_URL': 'http://localhost:8080/graphql',
    'process.env.APOLLO_WS': 'ws://localhost:8080/subscriptions',
    'process.env.WEBSITE_URL': '//localhost:8001',
    'process.env.STORAGE_URL': '//localhost:8080',
    'process.env.MOBILE_URL': '//localhost:8001',
    'process.env.OPEN_IM_API_URL': 'http://10.226.116.180:10002',
    'process.env.OPEN_IM_WS_URL': 'ws://10.226.116.180:10001',
  },
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  layout: false,
  dynamicImport: {
    loading: '@/components/PageLoading',
  },
  targets: {
    ie: 11,
  },
  access: {},
  // umi routes: https://umijs.org/docs/routing
  routes,
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  // esbuild is father build tools
  // https://umijs.org/plugins/plugin-esbuild
  esbuild: {},
  title: false,
  ignoreMomentLocale: true,
  history: {
    type: 'hash',
  },
  base: './',
  publicPath: './',
  runtimePublicPath: false,
  // Fast Refresh 热更新
  fastRefresh: {},
  nodeModulesTransform: {
    type: 'none',
  },
  mfsu: {},
  webpack5: {},
  exportStatic: {},
  extraBabelPlugins: ['babel-plugin-styled-components'],
  extraPostCSSPlugins: [
    require('tailwindcss')({ config: './tailwind.config.js' }),
    require('autoprefixer'),
  ],
  chainWebpack(config, { createCSSRule }) {
    config.module
      .rule('wasm-loader')
      .test(/\.wasm(\.bin)?$/)
      .use('file-loader')
      .loader('file-loader');
    (config as any).experiments = (config as any).experiments || {};
    (config as any).experiments.syncWebAssembly = true;

    config.stats({ children: true });

    createCSSRule({
      lang: 'sass',
      type: 'csr',
      test: /\.(sass|scss)(\?.*)?$/,
      loader: require.resolve('sass-loader'),
      options: {
        implementation: require('sass'),
      },
    });
    return config;
  },
});
