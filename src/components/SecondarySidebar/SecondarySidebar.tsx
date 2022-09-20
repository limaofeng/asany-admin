import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';

import { debounce } from 'lodash';
import classnames from 'classnames';
import { Resizer } from '@asany/sunmao';

import './SecondarySidebar.scss';

const DEFAULT_MIN_WIDTH = 260;
const DEFAULT_MAX_WIDTH = 768;

type SecondarySidebarState = {
  width: number;
  minimized: boolean;
};

type SecondarySidebarProps = {
  width: number;
  className: string;
  minWidth?: number;
  maxWidth?: number;
  collapsible?: boolean;
  children?: React.ReactNode;
  onWidthChange?: (width: number) => void;
};

function SecondarySidebar(props: SecondarySidebarProps) {
  const {
    minWidth = DEFAULT_MIN_WIDTH,
    maxWidth = DEFAULT_MAX_WIDTH,
    collapsible = true,
    children,
    className,
    onWidthChange,
  } = props;
  const state = useRef<SecondarySidebarState>({
    minimized: false,
    width: props.width,
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const forceResize = useMemo(
    () =>
      debounce(() => {
        forceRender();
      }, 10),
    [],
  );

  const hasMinimize = useCallback(
    (_width: number) => {
      return (collapsible && minWidth - _width > minWidth / 2) || _width <= 30;
    },
    [collapsible, minWidth],
  );

  const handleResizeStart = useCallback(() => {
    if (state.current.minimized && state.current.width > 0) {
      state.current.width = 0;
    }
  }, []);

  const handleResize = useCallback(
    (x: number) => {
      state.current.width += x;
      if (hasMinimize(state.current.width)) {
        state.current.minimized = true;
      } else {
        state.current.minimized = false;
      }
      forceResize();
    },
    [forceResize, hasMinimize],
  );

  const handleResizeEnd = useCallback(() => {
    state.current.width = hasMinimize(state.current.width)
      ? 0
      : Math.min(maxWidth, Math.max(minWidth, state.current.width));
  }, [hasMinimize, maxWidth, minWidth]);

  const handleToggleDisplay = useCallback(() => {
    state.current.minimized = !state.current.minimized;
    if (!state.current.width) {
      state.current.width = minWidth;
    }
    forceResize();
  }, [forceResize, minWidth]);

  const { minimized, width: originalWidth } = state.current;

  const width = useMemo(
    () => Math.min(maxWidth, Math.max(minWidth, originalWidth)),
    [maxWidth, minWidth, originalWidth],
  );

  useEffect(() => {
    onWidthChange && onWidthChange(minimized ? 0 : width);
  }, [onWidthChange, minimized, width]);

  return (
    <>
      <div style={{ width: minimized ? undefined : width }} />
      <Resizer
        className={classnames(
          'secondary_sidebar-resizer d-flex flex-column flex-lg-row',
          className,
          {
            'secondary_sidebar-resizer-minimized': minimized,
          },
        )}
        style={{ width: minimized ? undefined : width }}
        onResizeStart={handleResizeStart}
        onResize={handleResize}
        onResizeEnd={handleResizeEnd}
      >
        {collapsible && (
          <button
            onClick={handleToggleDisplay}
            className={classnames('secondary_sidebar-resize-button', {
              collapsed: minimized,
              expanded: !minimized,
            })}
            type="button"
          >
            <div className="invisible-area" />
            <span className="homemade-button" role="presentation">
              <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation">
                <path
                  d="M10.294 9.698a.988.988 0 0 1 0-1.407 1.01 1.01 0 0 1 1.419 0l2.965 2.94a1.09 1.09 0 0 1 0 1.548l-2.955 2.93a1.01 1.01 0 0 1-1.42 0 .988.988 0 0 1 0-1.407l2.318-2.297-2.327-2.307z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
            </span>
          </button>
        )}
        <div className="secondary_sidebar-inner flex-column flex-lg-row-auto w-100 mb-10 mb-lg-0">
          {children}
        </div>
      </Resizer>
    </>
  );
}

export default SecondarySidebar;
