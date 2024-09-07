import { defineConfig } from '@umijs/max';

export default defineConfig({
  apollo: {
    url: process.env.GRAPHQL_URL,
    wsUrl: process.env.GRAPHQL_WS_URL,
  },
  app: {
    id: process.env.APP_ID,
    loading: false,
  },
});
