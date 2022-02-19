import type { LayoutState } from './layout';

import type { AuthModelState } from '@/.umi/app/models/auth';
import type { GlobalState } from '@/.umi/app/models/global';

export interface RootState {
  global: GlobalState;
  auth: AuthModelState;
  layout: LayoutState;
}
