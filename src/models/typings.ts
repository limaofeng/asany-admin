import type { LayoutState } from './layout';

import type { GlobalState } from '@/.umi/app/models/global';

export interface RootState {
  global: GlobalState;
  layout: LayoutState;
}
