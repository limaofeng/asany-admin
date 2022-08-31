import React from 'react';

import useUndoable from 'use-undoable';

import type { ReactFlowData } from '../../type';

type IFlowTools = {
  canUndo: boolean;
  canRedo: boolean;
  undo: () => void;
  redo: () => void;
  reset: (data: ReactFlowData) => void;
  resetInitialState: (data: ReactFlowData) => void;
};

type SetStateCallback = (prev: ReactFlowData) => ReactFlowData;
type SetState = (data: ReactFlowData | SetStateCallback) => void;

type IFlowStoreContext = {
  state: ReactFlowData;
  setState: SetState;
  tools: IFlowTools;
};

export const FlowContext = React.createContext<IFlowStoreContext>({
  tools: {
    canUndo: false,
    canRedo: false,
    undo: () => {},
    redo: () => {},
    reset: () => {},
    resetInitialState: () => {},
  },
  setState: () => {},
  state: {
    nodes: [],
    edges: [],
  },
});

export type FlowStateProviderProps = {
  children?: JSX.Element;
};

type IFlowState = [ReactFlowData, SetState];

export const useFlowState = (): IFlowState => {
  const context = React.useContext(FlowContext);
  return [context.state, context.setState];
};

export const useFlowTools = (): IFlowTools => {
  const context = React.useContext(FlowContext);
  return context.tools;
};

export const FlowStateProvider = ({ children }: FlowStateProviderProps) => {
  const [state, setState, { undo, canUndo, redo, canRedo, reset, resetInitialState }] =
    useUndoable<ReactFlowData>({
      nodes: [],
      edges: [],
    });

  console.log('FlowStateProvider', state, canUndo, canRedo);

  return (
    <FlowContext.Provider
      value={{
        state,
        setState,
        tools: {
          undo,
          canRedo,
          redo,
          canUndo,
          reset,
          resetInitialState,
        },
      }}
    >
      {children}
    </FlowContext.Provider>
  );
};
