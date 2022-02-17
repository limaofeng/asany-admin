import { history, loadCurrentuser } from 'umi';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'overlayscrollbars/css/OverlayScrollbars.css';

import type { CurrentUser } from './.umi/app/typings';

import PageLoading from '@/components/PageLoading';

moment.locale('zh-cn', {
  meridiem: function (hour) {
    if (hour < 12) {
      return '上午';
    } else {
      return '下午';
    }
  },
});

// const isDev = process.env.NODE_ENV === 'development';

const loginPath = '/login';

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<any>;
  currentUser?: CurrentUser;
}> {
  // 如果是登录页面，不执行
  if (!history.location.pathname.endsWith(loginPath)) {
    const currentUser = await loadCurrentuser();
    return {
      currentUser,
      settings: {},
    };
  }
  return {
    currentUser: undefined,
    settings: {},
  };
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
// export const layout: RunTimeLayoutConfig = ({ initialState }) => {
//   return {
//     rightContentRender: () => <RightContent />,
//     disableContentMargin: false,
//     waterMarkProps: {
//       content: initialState?.currentUser?.name,
//     },
//     footerRender: () => <Footer />,
//     onPageChange: () => {
//       const { location } = history;
//       // 如果没有登录，重定向到 login
//       if (!initialState?.currentUser && location.pathname !== loginPath) {
//         history.push(loginPath);
//       }
//     },
//     links: isDev
//       ? [
//           <Link to="/umi/plugin/openapi" target="_blank">
//             <LinkOutlined />
//             <span>OpenAPI 文档</span>
//           </Link>,
//           <Link to="/~docs">
//             <BookOutlined />
//             <span>业务组件文档</span>
//           </Link>,
//         ]
//       : [],
//     menuHeaderRender: undefined,
//     // 自定义 403 页面
//     // unAccessible: <div>unAccessible</div>,
//     ...initialState?.settings,
//   };
// };
