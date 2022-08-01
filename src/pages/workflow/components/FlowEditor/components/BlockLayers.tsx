import React from 'react';

// const formatTreeData = (items: IBlockCoreData[]) => {
//   return tree(items, {
//     idKey: 'key',
//     pidKey: 'parentKey',
//   });
// };

function BlockLayers() {
  // const sketch = useSketch();
  // const dispatch = useEditorDispatch<SketchActionType>();

  // const activeKey = useEditorSelector((state) => {
  //   const activeKey = state.workspace.sunmao.activeKey;
  //   if (!activeKey) {
  //     return undefined;
  //   }
  //   return activeKey.split(':')[1];
  // });

  // const id = useEditorSelector((state) => state.project?.data?.id);

  // const blocks = sketch.useSelector(id, (state) => {
  //   if (!state.blocks) {
  //     return [];
  //   }
  //   return toBlockCoreDatas(state.blocks);
  // });

  // const treeData = useMemo(() => {
  //   return formatTreeData(blocks);
  // }, [blocks]);

  // const handleSelect = useCallback((e: any) => {
  //   dispatch({
  //     type: SketchActionType.BLOCK_ACTIVE_KEY,
  //     payload: e.node.component + ':' + e.node.key,
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div className="sidebar-block-layers">
      {/* <Tree
        treeData={treeData}
        expandedKeys={treeData.filter((item) => !!item.children?.length).map((item) => item.key)}
        onSelect={handleSelect}
        selectedKeys={activeKey ? [activeKey] : []}
      /> */}
    </div>
  );
}

export default React.memo(BlockLayers);
