import { join } from 'path';

import { IApi } from '@umijs/max';

export default function (api: IApi) {
  api.modifyHTML(($) => {
    $('body').addClass('antd-theme-custom');
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
