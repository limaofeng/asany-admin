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
    try {
      const currentUser = await loadCurrentuser();
      return {
        currentUser,
        settings: {},
      };
    } catch (e) {
      console.log(e);
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
