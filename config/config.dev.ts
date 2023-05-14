// https://umijs.org/config/
import { defineConfig } from 'umi';

export default defineConfig({
  apollo: {
    url: 'http://localhost:8080/graphql',
    wsUrl: 'ws://localhost:8080/subscriptions',
  },
  define: {
    'process.env.WEBSITE_URL': '//localhost:8001',
    'process.env.STORAGE_URL': '//localhost:8080',
    'process.env.MOBILE_URL': '//localhost:8001',
    'process.env.OPEN_IM_URL': 'ws://47.103.119.188:10003',
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
