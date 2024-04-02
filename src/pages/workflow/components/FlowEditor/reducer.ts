import type { AsanyAction } from '@asany/sunmao';
import { IPluginActionType } from '@asany/sunmao';

import type { ReactFlowData } from '../../type';

export enum FlowEditorType {
  SET_ELEMENTS = 'FLOW_SET_ELEMENTS',
}

export type IFlowEditorAction = {
  setState: (data: ReactFlowData) => void;
  undo: () => void;
  redo: () => void;
};

type IFlowEditorState = any;

export default function reducer(
  state: IFlowEditorState,
  action: AsanyAction<FlowEditorType | IPluginActionType>,
): IFlowEditorState {
  if (action.type === IPluginActionType.PluginStateInit) {
    return {};
  }
  if (action.type === FlowEditorType.SET_ELEMENTS) {
    return { ...state, ...action.payload };
  }
  // if (action.type === SketchActionType.BLOCK_MOUSE_ENTER) {
  //   const key = action.payload.key;
  //   const stack = state.stack;
  //   stack.push(key);
  //   return {
  //     ...state,
  //     stack: [...stack],
  //   };
  // }
  // if (action.type === SketchActionType.BLOCK_ACTIVE_KEY) {
  //   return {
  //     ...state,
  //     activeKey: action.payload,
  //   };
  // }
  // if (action.type === SketchActionType.BLOCK_MOUSE_LEAVE) {
  //   const stack = state.stack;
  //   stack.pop();
  //   return {
  //     ...state,
  //     stack: [...stack],
  //   };
  // }
  // if (action.type === SketchActionType.USER_CUSTOMIZER) {
  //   const { customizer } = action.payload;
  //   return { ...state, customizer };
  // }
  return state;
}
