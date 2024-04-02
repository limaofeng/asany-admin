import { EditorLibrary } from '@asany/sunmao';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import { history, sunmao } from 'umi';

import { loadCurrentuser } from './hooks';
import type { CurrentUser } from './types';

sunmao.addLibrary(new EditorLibrary() as any);

moment.locale('zh-cn', {
  meridiem: function (hour) {
    if (hour < 12) {
      return '上午';
    } else {
      return '下午';
    }
  },
});

const loginPath = '/login';

export async function getInitialState(): Promise<{
  settings?: Partial<any>;
  currentUser?: CurrentUser;
}> {
  // 如果是登录页面，不执行
  if (!history.location.pathname.endsWith(loginPath)) {
    try {
      const currentUser = await loadCurrentuser();
      return {
        currentUser,
        settings: {},
      };
    } catch (e) {
      console.error(e);
      return {
        currentUser: undefined,
        settings: {},
      };
    }
  }
  return {
    currentUser: undefined,
    settings: {},
  };
}

// export const layout = () => {
//   return {
//     logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
//     menu: {
//       locale: false,
//     },
//   };
// };
