import { useCallback } from 'react';

import { Icon } from '@asany/icons';
import classnames from 'classnames';

import type { ThemeModeType } from './ThemeModeProvider';
import { useThemeMode } from './ThemeModeProvider';

import { Dropdown, Menu } from '@/metronic';
import type { Placement } from '@/metronic/typings';

type Props = {
  toggleBtnClass?: string;
  toggleBtnIconClass?: string;
  menuPlacement?: Placement;
  menuTrigger?: 'click' | 'hover';
};

const ThemeModeSwitcher = ({
  toggleBtnClass = '',
  toggleBtnIconClass = 'svg-icon-2',
  menuPlacement = 'bottomRight',
  menuTrigger = 'hover', // "{default: 'click', lg: 'hover'}",
}: Props) => {
  const { mode, menuMode, updateMode, updateMenuMode } = useThemeMode();
  const switchMode = useCallback(
    (_mode: ThemeModeType) => {
      updateMenuMode(_mode);
      updateMode(_mode);
    },
    [updateMenuMode, updateMode],
  );

  return (
    <Dropdown
      trigger={menuTrigger}
      placement={menuPlacement}
      overlay={
        <Menu
          dropdown
          rounded
          className="menu-title-gray-700 menu-icon-muted menu-active-bg menu-state-primary fw-semibold py-4 fs-base w-175px"
        >
          <Menu.Item
            className="px-3 my-0"
            linkClassName={classnames('px-3 py-2', {
              active: menuMode === 'light',
            })}
            icon={<Icon name="Duotune/gen060" className="svg-icon-3" />}
            onClick={() => switchMode('light')}
          >
            浅色
          </Menu.Item>
          <Menu.Item
            className="px-3 my-0"
            linkClassName={classnames('px-3 py-2', {
              active: menuMode === 'dark',
            })}
            icon={<Icon name="Duotune/gen061" className="svg-icon-3" />}
            onClick={() => switchMode('dark')}
          >
            深色
          </Menu.Item>
          <Menu.Item
            className="px-3 my-0"
            linkClassName={classnames('px-3 py-2', {
              active: menuMode === 'system',
            })}
            icon={<Icon name="Duotune/gen062" className="svg-icon-3" />}
            onClick={() => switchMode('system')}
          >
            跟随系统
          </Menu.Item>
        </Menu>
      }
    >
      <a
        className={classnames('btn btn-icon', toggleBtnClass)}
        style={{ width: 'calc(1.5em + 1.55rem + 2px)' }}
      >
        {mode === 'dark' && (
          <Icon
            name="Duotune/gen061"
            className={classnames('theme-light-hide', toggleBtnIconClass)}
          />
        )}

        {mode === 'light' && (
          <Icon
            name="Duotune/gen060"
            className={classnames('theme-dark-hide', toggleBtnIconClass)}
          />
        )}
      </a>
    </Dropdown>
  );
};

export { ThemeModeSwitcher };
