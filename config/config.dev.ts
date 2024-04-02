import { defineConfig } from '@umijs/max';

export default defineConfig({
  apollo: {
    url: 'http://192.168.5.7:8080/graphql',
    wsUrl: 'ws://192.168.5.7:8080/subscriptions',
  },
  define: {
    'process.env.NODE_ENV': process.env.NODE_ENV,
    'process.env.WEBSITE_URL': '//localhost:8001',
    'process.env.STORAGE_URL': 'http://192.168.5.7:8080',
    'process.env.MOBILE_URL': '//localhost:8001',
    'process.env.OPEN_IM_API_URL': 'https://im.asany.cn/api/',
    'process.env.OPEN_IM_WS_URL': 'wss://im.asany.cn/msg_gateway/',
  },
});
