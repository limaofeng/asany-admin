import { IApi } from '@umijs/max';

export default function (api: IApi) {
  api.modifyHTML(($) => {
    $('body').addClass(
      'antd-theme-custom header-fixed header-tablet-and-mobile-fixed aside-fixed aside-secondary-enabled',
    );
    $('#root').addClass('d-flex flex-column flex-root');
    return $;
  });
}
