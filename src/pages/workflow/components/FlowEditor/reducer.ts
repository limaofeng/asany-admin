import type { ICustomizer } from '@asany/sunmao';
import type { AsanyAction } from '@asany/sunmao';
import { IPluginActionType } from '@asany/sunmao';

export enum SketchActionType {
  /**
   * 更新 Block 定制器
   */
  USER_CUSTOMIZER = 'USER_CUSTOMIZER',

  BLOCK_ACTIVE_KEY = 'BLOCK_ACTIVE_KEY',

  BLOCK_MOUSE_ENTER = 'BLOCK_MOUSE_ENTER',

  BLOCK_MOUSE_LEAVE = 'BLOCK_MOUSE_LEAVE',
}

export interface ISketchState {
  value?: any;
  customizer?: ICustomizer;
  activeKey?: string;
  stack: string[];
  change?: (value: any) => void;
}

const defaultState: ISketchState = {
  stack: [],
};

export default function reducer(
  state: ISketchState,
  action: AsanyAction<SketchActionType | IPluginActionType>,
): ISketchState {
  if (action.type === IPluginActionType.PluginStateInit) {
    return defaultState;
  }
  if (action.type === SketchActionType.BLOCK_MOUSE_ENTER) {
    const key = action.payload.key;
    const stack = state.stack;
    stack.push(key);
    return {
      ...state,
      stack: [...stack],
    };
  }
  if (action.type === SketchActionType.BLOCK_ACTIVE_KEY) {
    return {
      ...state,
      activeKey: action.payload,
    };
  }
  if (action.type === SketchActionType.BLOCK_MOUSE_LEAVE) {
    const stack = state.stack;
    stack.pop();
    return {
      ...state,
      stack: [...stack],
    };
  }
  if (action.type === SketchActionType.USER_CUSTOMIZER) {
    const { customizer } = action.payload;
    return { ...state, customizer };
  }
  return state;
}
