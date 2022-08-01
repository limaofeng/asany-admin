import React, { useCallback, useMemo } from 'react';
import { useEffect } from 'react';

import { useSketch } from '@asany/sunmao';
import { useEditorDispatch, useEditorSelector } from '@asany/sunmao';

import { SketchActionType } from '../reducer';
import OverviewFlow from '../OverviewFlow';

function Workspace() {
  // const editor = useEditor();
  const sketch = useSketch();

  const dispatch = useEditorDispatch<SketchActionType>();

  const sidebarWidth = useEditorSelector((state) => state.ui.sidebar.width);
  const sidebarMinWidth = useEditorSelector((state) => state.ui.sidebar.minWidth);
  const sidebarMinimizable = useEditorSelector((state) => state.ui.sidebar.minimizable);

  const marginLeft = useMemo(() => {
    let _sidebarWidth = sidebarWidth;
    if (sidebarMinimizable) {
      _sidebarWidth = 0;
    } else {
      _sidebarWidth = Math.max(sidebarMinWidth, _sidebarWidth);
    }
    return _sidebarWidth;
  }, [sidebarWidth, sidebarMinimizable, sidebarMinWidth]);

  // const xx = useEditorSelector((state) => state.workspace);

  // console.log('Workspace', xx);

  // const activeKey = useEditorSelector((state) => state.workspace.sunmao.activeKey);

  // const checkedKeys = useSelector((state) => {
  //   const checkedKeys: string[] = [];
  //   const stack: string[] = state.workspace.sunmao.stack;
  //   const activeKey = state.workspace.sunmao.activeKey;
  //   if (!!activeKey) {
  //     checkedKeys.push(activeKey);
  //   }
  //   if (stack.length) {
  //     checkedKeys.push(stack[stack.length - 1]);
  //   }
  //   return checkedKeys;
  // }, isEqual);

  // const data = useEditorSelector<any>((state) => state.project?.data, isEqual);

  // const component = useReactComponent(data?.template, data?.blocks, {
  //   id: data?.id,
  //   dev: true,
  // });

  const handleBlockClick = useCallback((id: string) => {
    dispatch({ type: SketchActionType.BLOCK_ACTIVE_KEY, payload: id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBlockMouseEnter = useCallback((key: string) => {
    dispatch({ type: SketchActionType.BLOCK_MOUSE_ENTER, payload: { key } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBlockMouseLeave = useCallback((key: string) => {
    dispatch({ type: SketchActionType.BLOCK_MOUSE_LEAVE, payload: { key } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   if (!checkedKeys.length) {
  //     editor.scena.setSelectedTargets([]);
  //     return;
  //   }
  //   const selectedTargets: (HTMLElement | SVGElement)[] = [];
  //   const checkedKeySet = new Set<string>(checkedKeys);
  //   for (const key of checkedKeySet) {
  //     const block = sketch.getBlock(key)!;
  //     if (!block?.id) {
  //       return;
  //     }
  //     const element = document.getElementById(block.id) as any;
  //     if (element) {
  //       selectedTargets.push(element);
  //     }
  //   }
  //   if (!selectedTargets.length) {
  //     return;
  //   }
  //   editor.scena.setSelectedTargets(selectedTargets);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [checkedKeys]);

  // useEffect(() => {
  //   if (!activeKey) {
  //     return;
  //   }
  //   const id = activeKey;
  //   const component = sketch.getComponent(id)!;
  //   const block = sketch.getBlock(id)!;
  //   // 设置属性配置面板
  //   editor.scena.setSelectedTargets([document.getElementById(id)!]);
  //   // 打开属性配置面板
  //   const store = component.store;
  //   editor.aside.open({
  //     customizer: block.customizer!,
  //     value: store.getBlock(block.key)!.props,
  //     update: block.update,
  //     watchValue: (callback: (value: any) => void) => {
  //       const handleChange = () => {
  //         callback(store.getBlock(block.key)?.props);
  //       };
  //       return store.subscribe(handleChange);
  //     },
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [activeKey]);

  useEffect(() => {
    const unbindBlockClick = sketch.on('block-click', handleBlockClick);
    const unbindBlockMouseEnter = sketch.on('block-mouse-enter', handleBlockMouseEnter);
    const unbindBlockMouseLeave = sketch.on('block-mouse-leave', handleBlockMouseLeave);
    return () => {
      unbindBlockClick();
      unbindBlockMouseEnter();
      unbindBlockMouseLeave();
    };
  }, [handleBlockClick, handleBlockMouseEnter, handleBlockMouseLeave, sketch]);

  const handleNodeClick = useCallback((event: any, element: any) => {
    console.log(event, element);
  }, []);

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        marginLeft,
      }}
    >
      <OverviewFlow onNodeClick={handleNodeClick} />
    </div>
  );
}

export default React.memo(Workspace);
