import type { Reducer, Subscription } from 'umi';

type Aside = {
  width: number;
};

export interface LayoutState {
  aside: Aside;
}

interface LayoutModelType {
  namespace: 'layout';
  state: LayoutState;
  reducers: Record<string, Reducer<LayoutState>>;
  subscriptions?: Record<string, Subscription>;
}

const LayoutModel: LayoutModelType = {
  namespace: 'layout',
  state: {
    aside: { width: 200 },
  },
  reducers: {
    saveCurrentApplication(state: any, { payload: app }: any) {
      return { ...state, application: app, organization: app.organization };
    },
  },
  // subscriptions: {
  //   setup({ dispatch }) {
  //     console.log('dispatch', dispatch);
  //   },
  // },
};

export default LayoutModel;
