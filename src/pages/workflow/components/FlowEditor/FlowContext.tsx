import type { Dispatch, SetStateAction } from 'react';
import { useRef } from 'react';
import { useLayoutEffect } from 'react';
import { createContext, useCallback, useContext } from 'react';

import type { Edge, EdgeChange, Node, NodeChange } from 'react-flow-renderer';
import {
  useEdgesState as useOriginalEdgesState,
  useNodesState as useOriginalNodesState,
} from 'react-flow-renderer';
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

export const FlowContext = createContext<IFlowStoreContext>({
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
  const context = useContext(FlowContext);
  return [context.state, context.setState];
};

export const useNodesState = <NodeData = any,>(): [
  Node<NodeData>[],
  Dispatch<SetStateAction<Node<NodeData>[]>>,
  OnChange<NodeChange>,
] => {
  const context = useContext(FlowContext);
  const { state, setState } = context;
  const [nodes, setNodes, onNodesChange] = useOriginalNodesState(state.nodes);
  const tmp = useRef<ReactFlowData>(state);
  tmp.current = state;

  const handleSetNodes: Dispatch<SetStateAction<Node<NodeData>[]>> = useCallback(
    (s) => {
      // console.log('handleSetNodes', s);
      if (typeof s === 'function') {
        const newState = s(tmp.current.nodes);
        setState({ ...tmp.current, nodes: newState });
      } else {
        setState({ ...tmp.current, nodes: s });
      }
    },
    [setState],
  );

  useLayoutEffect(() => {
    setNodes(state.nodes);
  }, [state.nodes, setNodes]);

  return [nodes, handleSetNodes, onNodesChange];
};

type OnChange<ChangesType> = (changes: ChangesType[]) => void;

export const useEdgesState = <EdgeData = any,>(): [
  Edge<EdgeData>[],
  Dispatch<SetStateAction<Edge<EdgeData>[]>>,
  OnChange<EdgeChange>,
] => {
  const context = useContext(FlowContext);
  const { state, setState } = context;
  const [edges, setEdges, onEdgesChange] = useOriginalEdgesState(state.edges);
  const tmp = useRef<ReactFlowData>(state);
  tmp.current = state;

  const handleSetEdges: Dispatch<SetStateAction<Edge<EdgeData>[]>> = useCallback(
    (callback) => {
      // console.log('handleSetEdges', callback);
      if (typeof callback === 'function') {
        const newState = callback(tmp.current.edges);
        setState({ ...tmp.current, edges: newState });
      } else {
        setState({ ...tmp.current, edges: callback });
      }
    },
    [setState],
  );

  useLayoutEffect(() => {
    setEdges(state.edges);
  }, [state.edges, setEdges]);

  return [edges, handleSetEdges, onEdgesChange];
};

export const useFlowTools = (): IFlowTools => {
  const context = useContext(FlowContext);
  return context.tools;
};

export const FlowStateProvider = ({ children }: FlowStateProviderProps) => {
  const [state, setState, { undo, canUndo, redo, canRedo, reset, resetInitialState }] =
    useUndoable<ReactFlowData>(
      {
        nodes: [],
        edges: [],
      },
      {
        behavior: 'keepFuture',
      },
    );

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
