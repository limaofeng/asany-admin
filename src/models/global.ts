import type { Reducer, Subscription } from 'umi';

export interface GlobalState {
  x?: number;
}

interface GlobalModelType {
  namespace: 'settings';
  state: GlobalState;
  reducers: Record<string, Reducer<GlobalState>>;
  subscriptions: Record<string, Reducer<Subscription>>;
}

const GlobalModel: GlobalModelType = {
  namespace: 'settings',
  state: {},
  reducers: {},
  subscriptions: {},
};

export default GlobalModel;
