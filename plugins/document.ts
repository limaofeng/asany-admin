import { IApi } from 'umi';

export default function (api: IApi) {
  api.modifyHTML(($) => {
    $('head').append([
      `<link rel="stylesheet" href="/assets/plugins/custom/datatables/datatables.bundle.css" />`,
      `<link rel="stylesheet" href="/assets/plugins/global/google.font.css" />`,
      `<link rel="stylesheet" href="/assets/plugins/global/plugins.bundle.css" />`,
      `<link rel="stylesheet" href="/assets/css/style.bundle.css" />`,
      `<script type="text/javascript" src="/wasm_exec.js"></script>`,
    ]);
    $('body').addClass(
      'antd-theme-custom header-fixed header-tablet-and-mobile-fixed aside-fixed aside-secondary-enabled',
    );
    $('#root').addClass('d-flex flex-column flex-root');
    return $;
  });

  api.onGenerateFiles(() => {
    api.writeTmpFile({
      path: 'runtime.tsx',
      content: `
import { ConfigProvider } from 'antd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import zhCN from 'antd/es/locale/zh_CN';

export const rootContainer = (container: React.ReactNode) => {
  return <ConfigProvider locale={zhCN}>
    <DndProvider backend={HTML5Backend}>
    {container}
    </DndProvider>
  </ConfigProvider>
}
    `,
    });
  });
}
