// https://umijs.org/config/
import { defineConfig } from 'umi';

export default defineConfig({
  apollo: {
    // url: 'http://localhost:8080/graphql',
    // wsUrl: 'ws://localhost:8080/subscriptions',
    url: 'https://api.asany.cn/graphql',
    wsUrl: 'wss://api.asany.cn/subscriptions',
  },
  define: {
    'process.env.APOLLO_URL': 'http://localhost:8080/graphql',
    'process.env.APOLLO_WS': 'ws://localhost:8080/subscriptions',
    'process.env.WEBSITE_URL': '//localhost:8001',
    'process.env.STORAGE_URL': 'https://api.asany.cn',
    'process.env.MOBILE_URL': '//localhost:8001',
    'process.env.OPEN_IM_API_URL': 'http://10.226.116.180:10002',
    'process.env.OPEN_IM_WS_URL': 'ws://10.226.116.180:10001',
  },
  plugins: [
    // https://github.com/zthxxx/react-dev-inspector
    'react-dev-inspector/plugins/umi/react-inspector',
  ],
  // https://github.com/zthxxx/react-dev-inspector#inspector-loader-props
  inspectorConfig: {
    exclude: [],
    babelPlugins: [],
    babelOptions: {},
  },
});
