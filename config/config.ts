import { defineConfig } from '@umijs/max';

import routes from './routes';

export default defineConfig({
  plugins: [
    require.resolve('../plugins/document'),
    '@asany/umi-plugin-apollo',
    '@asany/umi-plugin-app',
  ],
  apollo: {
    url: 'https://api.asany.cn/graphql',
    wsUrl: 'wss://api.asany.cn/subscriptions',
  },
  app: {
    id: '6068485332c5fc853a65',
  },
  define: {
    'process.env.NODE_ENV': process.env.NODE_ENV,
    'process.env.WEBSITE_URL': '//localhost:8001',
    'process.env.STORAGE_URL': 'https://api.asany.cn',
    'process.env.MOBILE_URL': '//localhost:8001',
    'process.env.OPEN_IM_API_URL': 'https://im.asany.cn/api/',
    'process.env.OPEN_IM_WS_URL': 'wss://im.asany.cn/msg_gateway/',
  },
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
      .use('file-loader')
      .loader('file-loader');
    memo.experiments = memo.experiments || {};
    (memo.experiments as any).syncWebAssembly = true;

    memo.stats({ children: true });
  },
  npmClient: 'npm',
});
