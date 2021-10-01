import type { CSSProperties } from 'react';
import React, { forwardRef, useImperativeHandle, useReducer, useRef } from 'react';

import classnames from 'classnames';
import Icon from '@asany/icons';

import { sleep } from '../../utils';

import './SettingsMenu.scss';

export interface TabPane {
  id?: string;
  title: string;
  content: React.ReactElement;
}

interface Extra {
  title: string;
  summary?: string;
  content: React.ReactElement;
}

export interface SettingsMenuProps {
  className?: string;
  footer?: React.ReactElement;
  onClose?: (e: React.MouseEvent) => void;
  title?: string;
  content?: React.ReactElement;
  extras?: Extra[];
  children?: React.ReactElement;
  style?: CSSProperties;
}

interface SettingsMenuState {
  next?: boolean;
  nextIndex: number;
  panels: Extra[];
}

export interface ISettings {
  width: number;
  back: () => Promise<void>;
  next: (title: string, content: React.ReactElement) => void;
}

function SettingsMenu(props: SettingsMenuProps, ref: React.ForwardedRef<ISettings>) {
  const container = useRef<HTMLDivElement>(null);
  const { onClose, title, children, extras = [], content, style, className, footer } = props;
  const state = useRef<SettingsMenuState>({ next: false, nextIndex: -1, panels: extras });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const handleOpenNextAside = (index: number) => () => {
    state.current.nextIndex = index;
    forceRender();
  };

  const handleCloseNextAside = async () => {
    if (state.current.nextIndex == -1) {
      return;
    }
    state.current.nextIndex--;
    forceRender();
    await sleep(250);
    state.current.panels.pop();
    forceRender();
  };

  useImperativeHandle(
    ref,
    () => ({
      back: async () => {
        await handleCloseNextAside();
      },
      next: async (_title: string, _content: React.ReactElement<any>) => {
        state.current.panels.push({
          title: _title,
          content: _content,
        });
        forceRender();
        // 为了让动画更流畅, 延时 50ms 让元素先渲染到页面
        await sleep(50);
        state.current.nextIndex++;
        forceRender();
      },
      get width() {
        return container.current?.getBoundingClientRect().width || 0;
      },
    }),
    [],
  );

  const { nextIndex, panels } = state.current;
  const hasNextPanel = nextIndex != -1;
  return (
    <div ref={container} className={classnames('settings-menu-container', className)} style={style}>
      <div id="entry-controls">
        <div
          className={classnames('settings-menu settings-menu-pane', {
            'settings-menu-pane-in': !hasNextPanel,
            'settings-menu-pane-out-left': hasNextPanel,
          })}
        >
          <div className="settings-menu-header">
            <h4>{title}</h4>
            <button type="button" className="close" onClick={onClose}>
              <Icon name="CloseOutlined" />
            </button>
          </div>
          <div className="settings-menu-content relative w-100 vh-100 overflow-x-hidden hover-scroll-overlay-y px-5 z-0">
            {content || children}
            {!!extras.length && (
              <ul className="nav-list-block">
                {extras.map(({ title: extTitle, summary }, i) => {
                  const lis = [
                    <li
                      key={String(`${i}-${title}`)}
                      className="nav-list-item"
                      onClick={handleOpenNextAside(i)}
                      role="none"
                    >
                      <button type="button">
                        <b>{extTitle}</b>
                        <span>{summary}</span>
                      </button>
                      <Icon name="CloseOutlined" />
                    </li>,
                  ];
                  if (i !== extras.length - 1) {
                    lis.push(<li key={String(`${i}-${title}-divider`)} className="divider" />);
                  }
                  return lis;
                })}
              </ul>
            )}
          </div>
        </div>
        {panels.map(({ title: _title, content: _content }, index) => (
          <div
            key={_title}
            className={classnames('settings-menu settings-menu-pane', {
              'settings-menu-pane-in': index === nextIndex,
              'settings-menu-pane-out-right': index > nextIndex,
              'settings-menu-pane-out-left': index < nextIndex,
            })}
          >
            <div className="ember-view active">
              <div className="settings-menu-header subview">
                <button className="back settings-menu-header-action" onClick={handleCloseNextAside}>
                  <Icon name="CloseOutlined" />
                </button>
                <h4>{_title}</h4>
                <div />
              </div>
              <div className="settings-menu-content">{_content}</div>
            </div>
          </div>
        ))}
      </div>
      {footer}
    </div>
  );
}

const SettingsMenuWrapper = React.memo(forwardRef(SettingsMenu));

export default SettingsMenuWrapper;
