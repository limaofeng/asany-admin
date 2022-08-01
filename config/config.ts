// https://umijs.org/config/
import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  apollo: {
    uri: '//47.103.119.188:8000/graphql',
    logging: process.env.NODE_ENV === 'development',
  },
  app: {
    id: '6068485332c5fc853a65',
  },
  define: {
    'process.env.STORAGE_URL': '//47.103.119.188:8000',
    'process.env.MOBILE_URL': '//47.103.119.188:8002',
    'process.env.WEBSITE_URL': '//47.103.119.188:8001',
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
  manifest: {
    basePath: '/',
  },
  runtimePublicPath: true,
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
      // exclude: /(node_modules)/,
      loader: require.resolve('sass-loader'),
      options: {
        implementation: require('sass'),
      },
    });
    return config;
  },
});
