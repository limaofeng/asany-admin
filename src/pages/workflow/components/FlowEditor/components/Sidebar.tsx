import { useCallback, useReducer, useRef, useState } from 'react';

import classnames from 'classnames';
import Icon from '@asany/icons';
import { Resizer } from '@asany/sunmao';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import BlockLayers from './BlockLayers';
import FlowNode from './FlowNode';

// 折叠面板最小化
const SUBPANEL_MIN_HEIGHT = 36;
// 折叠面板默认高度
const SUBPANEL_DEFAULT_HEIGHT = SUBPANEL_MIN_HEIGHT + 300;

type SidebarProps = any;

function Sidebar(props: SidebarProps) {
  const {} = props;
  const [active, setActive] = useState(false);
  const state = useRef({
    prevOutlinePaneHeight: SUBPANEL_DEFAULT_HEIGHT,
    outlinePaneHeight: SUBPANEL_DEFAULT_HEIGHT,
    outlinePaneExpanded: true,
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const handleClick = useCallback(() => {
    state.current.outlinePaneExpanded = !state.current.outlinePaneExpanded;
    forceRender();
  }, []);

  const handleResizeStart = useCallback(() => {
    // 如果面板已经折叠，将初始位置设置到底部
    if (!state.current.outlinePaneExpanded) {
      state.current.outlinePaneHeight = SUBPANEL_MIN_HEIGHT;
    } else {
      // 记录原来的高度
      state.current.prevOutlinePaneHeight = state.current.outlinePaneHeight;
    }
    setActive(true);
  }, []);
  const handleResize = useCallback((y: number) => {
    state.current.outlinePaneHeight += y;
    state.current.outlinePaneExpanded = state.current.outlinePaneHeight > SUBPANEL_MIN_HEIGHT;
    forceRender();
  }, []);
  const handleResizeEnd = useCallback(() => {
    // 拖拽折叠后，记录原展开高度
    if (!state.current.outlinePaneExpanded) {
      state.current.outlinePaneHeight = state.current.prevOutlinePaneHeight;
    }
    setActive(false);
  }, []);

  const { outlinePaneExpanded, outlinePaneHeight } = state.current;
  // 折叠面板最大高度为: 侧边栏 - 侧边栏标题栏高度
  const SUBPANEL_MAX_HEIGHT = window.innerHeight - 50 - 40;
  let outlinepaneheight = Math.min(
    SUBPANEL_MAX_HEIGHT,
    Math.max(outlinePaneHeight, SUBPANEL_MIN_HEIGHT),
  );
  outlinepaneheight = outlinePaneExpanded ? outlinepaneheight : SUBPANEL_MIN_HEIGHT;

  return (
    <div className={classnames('sidebar-panel', { 'resizer-y-active': active })}>
      <div className="sidebar-screen-panel">
        <div className="sidebar-subpanel">
          <div className="sidebar-subpanel-header">
            <div className="header-left">项目详情</div>
            <div className="header-right" />
          </div>
          <OverlayScrollbarsComponent
            options={{ scrollbars: { autoHide: 'scroll' } }}
            style={{ height: 'calc(100% - 38px)' }}
          >
            <div style={{ padding: '8px 8px 0 8px' }}>
              <aside>
                <div className="description">
                  You can drag these nodes to the pane on the right.
                </div>
                <FlowNode type="input">Input Node</FlowNode>
                <FlowNode type="default">Default Node</FlowNode>
                <FlowNode type="output">Output Node</FlowNode>
              </aside>
            </div>
          </OverlayScrollbarsComponent>
        </div>
      </div>
      <Resizer
        className="sidebar-subpanel"
        direction="y"
        onResizeStart={handleResizeStart}
        onResize={handleResize}
        onResizeEnd={handleResizeEnd}
        style={{ flexBasis: outlinepaneheight }}
      >
        <div className="sidebar-subpanel-header">
          <div className="header-left">大纲</div>
          <div className="header-right">
            <Icon
              onClick={handleClick}
              className={classnames('header-icon', { expanded: outlinePaneExpanded })}
              name="AsanyEditor/Arrow"
            />
          </div>
        </div>
        <div className="sidebar-subpanel-body">
          <BlockLayers />
        </div>
      </Resizer>
    </div>
  );
}

export default Sidebar;
