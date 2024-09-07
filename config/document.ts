import { join } from 'path';

import { IApi } from '@umijs/max';

export default function (api: IApi) {
  api.modifyHTML(($) => {
    $('head').append([
      `<script> window.APP_CONFIG = { APPID: 'REPLACE_APPID', GRAPHQL_URL: 'REPLACE_GRAPHQL_URL', GRAPHQL_WS_URL: 'REPLACE_GRAPHQL_WS_URL', WEBSITE_URL: 'REPLACE_WEBSITE_URL', MOBILE_URL: 'REPLACE_MOBILE_URL', SHORT_DOMAIN_NAME: 'REPLACE_SHORT_DOMAIN_NAME', STORAGE_URL: 'REPLACE_STORAGE_URL', OPEN_IM_API_URL: 'REPLACE_OPEN_IM_API_URL', OPEN_IM_WS_URL: 'REPLACE_OPEN_IM_WS_URL' }; </script>`,
    ]);
    $('body').addClass('antd-theme-custom custom-theme-metronic');
    $('#root').addClass('d-flex flex-column flex-root');
    return $;
  });

  api.describe({
    key: 'document',
  });

  api.onGenerateFiles(() => {
    api.writeTmpFile({
      path: 'runtime.tsx',
      content: `
import React from 'react';
import { ThemeModeProvider } from '@/layouts/components/theme-mode/ThemeModeProvider';
import { Helmet, HelmetProvider } from 'react-helmet-async';
export function rootContainer(container: React.ReactNode) {
  return <HelmetProvider>
    <ThemeModeProvider>
        <Helmet>
          <html lang="zh-CN"/>
        </Helmet>
        {container}
    </ThemeModeProvider>
  </HelmetProvider>;
}
      `,
    });
  });

  api.addRuntimePlugin({
    fn: () => join(api.paths.absTmpPath!, 'plugin-document/runtime'),
  });
}
