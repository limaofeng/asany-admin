import { defineConfig } from '@umijs/max';

export default defineConfig({
  apollo: {
    url: 'http://10.7.5.4:8080/graphql',
    wsUrl: 'ws://10.7.5.4:8080/subscriptions',
  },
  define: {
    'process.env.NODE_ENV': process.env.NODE_ENV,
    'process.env.WEBSITE_URL': '//localhost:8001',
    'process.env.SHORT_DOMAIN_NAME': 'http://10.7.5.4:30881',
    'process.env.STORAGE_URL': 'http://10.7.5.4:30881',
    'process.env.MOBILE_URL': '//localhost:8001',
    'process.env.OPEN_IM_API_URL': 'https://im.asany.cn/api/',
    'process.env.OPEN_IM_WS_URL': 'wss://im.asany.cn/msg_gateway/',
  },
});
