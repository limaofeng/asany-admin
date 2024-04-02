import { useCallback } from 'react';
import { useReactFlow } from 'react-flow-renderer';

function useDelete() {
  const { getNodes, setNodes } = useReactFlow();

  const removeNode = useCallback(
    (id: string) => {
      const nodes = getNodes();
      setNodes(nodes.filter((n) => n.id !== id));
    },
    [getNodes, setNodes],
  );

  return { removeNode };
}

export default useDelete;
