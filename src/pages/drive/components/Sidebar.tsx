import { useCallback, useEffect, useMemo } from 'react';

import { useModel, useRouteMatch } from 'umi';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import Icon from '@asany/icons';

import { useCloudDrivesQuery } from '../hooks';

import type { OptionData } from '@/pages/Metronic/components';
import { Menu } from '@/pages/Metronic/components';
import { AsideWorkspace, Select } from '@/pages/Metronic/components';
import type { CloudDrive } from '@/types';

type SidebarFooterProps = {
  drives: CloudDrive[];
  onAction: (key: string) => void;
};

function SidebarFooter(props: SidebarFooterProps) {
  const { drives, onAction } = props;

  const currentBook = useModel('cloud-drive', ({ state }) => state.currentCloudDrive);

  const handleSelect = useCallback(
    (key) => {
      if (key.startsWith('drive-')) {
        console.log(key);
        // setCalendarSet(key.substring('contacts-'.length));
      } else {
        onAction(key);
        return false;
      }
      return true;
    },
    [onAction],
  );

  const options = useMemo(() => {
    return [
      ...drives.map((item) => ({ value: `drive-${item.id}`, label: item.name })),
      { type: 'separator' },
      { value: 'preferences', label: '偏好设置' },
    ] as OptionData[];
  }, [drives]);

  return (
    <div className="app-sidebar-footer">
      <Select
        onChange={handleSelect}
        placement="topCenter"
        value={currentBook ? `drive-${currentBook}` : undefined}
        options={options}
      />
    </div>
  );
}

function Sidebar() {
  const currentBook = useModel('cloud-drive', ({ state }) => state.currentCloudDrive);

  const oneMatch = useRouteMatch<{ type: string; value?: string }>({
    path: '/drive/:type/:value',
    strict: true,
    sensitive: true,
  });

  const twoMatch = useRouteMatch<{ type: string }>({
    path: '/drive/:type',
    strict: true,
    sensitive: true,
  });

  const { data } = useCloudDrivesQuery({ fetchPolicy: 'cache-and-network' });

  const currentCloudDrive = useModel('cloud-drive', ({ state }) => state.currentCloudDrive);
  const setCloudDrive = useModel('cloud-drive', (model) => model.setCloudDrive);

  useEffect(() => {
    if (!data?.cloudDrives) {
      return;
    }
    const cloudDrives = data?.cloudDrives;
    if (!cloudDrives.some((item) => item.id == currentCloudDrive)) {
      setCloudDrive(cloudDrives[0].id);
    }
  }, [data?.cloudDrives, setCloudDrive, currentCloudDrive]);

  const cloudDrive = useMemo(() => {
    if (!data?.cloudDrives || !currentBook) {
      return;
    }
    return data.cloudDrives.find((item) => item.id == currentBook);
  }, [data?.cloudDrives, currentBook]);

  const type = useMemo(() => oneMatch?.params.type || twoMatch?.params.type, [oneMatch, twoMatch]);
  const value = useMemo(() => oneMatch?.params.value, [oneMatch]);

  const selectedKeys = useMemo(() => {
    if (!value) {
      return [type!];
    }
    if ('folders' == type) {
      return ['my-drive'];
    }
    if ('mime-types' == type) {
      return [value!];
    }
    return [type!];
  }, [type, value]);

  // console.log('match', type, value, selectedKeys);

  return (
    <AsideWorkspace width={280} className="app-sidebar app-drive-sidebar">
      <div className="mt-5 px-5 pt-5">
        <h1 className="text-gray-800 fw-bold mb-6 mx-5">云盘</h1>
      </div>
      <OverlayScrollbarsComponent
        className="app-sidebar-body flex-column-fluid d-flex flex-column px-8 custom-scrollbar"
        options={{
          scrollbars: { autoHide: 'scroll' },
        }}
      >
        <Menu
          className="menu-title-gray-600 menu-icon-gray-400 menu-state-bg menu-state-primary menu-state-icon-primary menu-state-bullet-primary"
          accordion={false}
          rounded
          selectable="AllMenu"
          openKeys={['my-drive']}
          selectedKeys={selectedKeys}
        >
          <Menu.SubMenu
            key="my-drive"
            url="/drive/my-drive"
            titleClassName="fw-bolder"
            icon={<Icon className="svg-icon-2 me-3" name="Duotune/abs040" />}
            title="我的文件"
          >
            <Menu.Item
              className="mb-2 mt-2"
              url="/drive/mime-types/image"
              titleClassName="fw-bolder"
              icon={<Icon className="svg-icon-2 me-3" name="Duotune/gen006" />}
              key="image"
            >
              图片
            </Menu.Item>
            <Menu.Item
              className="mb-2"
              url="/drive/mime-types/document"
              titleClassName="fw-bolder"
              icon={<Icon className="svg-icon-2 me-3" name="Duotune/fil003" />}
              key="document"
            >
              文档
            </Menu.Item>
            <Menu.Item
              className="mb-2"
              url="/drive/mime-types/video"
              titleClassName="fw-bolder"
              icon={<Icon className="svg-icon-2 me-3" name="Duotune/arr027" />}
              key="video"
            >
              视频
            </Menu.Item>
            <Menu.Item
              className="mb-2"
              url="/drive/mime-types/audio"
              titleClassName="fw-bolder"
              icon={<Icon className="svg-icon-2 me-3" name="Duotune/elc008" />}
              key="audio"
            >
              音频
            </Menu.Item>
            <Menu.Item
              url="/drive/mime-types/other"
              titleClassName="fw-bolder"
              icon={<Icon className="svg-icon-2 me-3" name="Duotune/gen052" />}
              key="other"
            >
              其他
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Separator />
          <Menu.Item
            className="mb-2"
            url="/drive/shared"
            titleClassName="fw-bolder"
            icon={<Icon className="svg-icon-2 me-3" name="Duotune/arr078" />}
            key="shared"
          >
            我共享的
          </Menu.Item>
          <Menu.Item
            className="mb-2"
            url="/drive/recent"
            titleClassName="fw-bolder"
            icon={<Icon className="svg-icon-2 me-3" name="Duotune/gen013" />}
            key="recent"
          >
            最近用过
          </Menu.Item>
          <Menu.Item
            className="mb-2"
            url="/drive/starred"
            titleClassName="fw-bolder"
            icon={<Icon className="svg-icon-2 me-3" name="Duotune/abs024" />}
            key="starred"
          >
            已加星标
          </Menu.Item>
          <Menu.Item
            url="/drive/trash"
            titleClassName="fw-bolder"
            icon={<Icon className="svg-icon-2 me-3" name="Duotune/gen027" />}
            key="trash"
          >
            回收站
          </Menu.Item>
          {/* <Menu.Section>快捷访问</Menu.Section> */}
          {/* {mailboxes.private.map((item) => {
              const lightStyle = DEFAULT_MAILBOXES[item.name]?.badge;
              return (
                <Menu.Item
                  className="mb-2"
                  url={`/mail/${item.key}`}
                  titleClassName="fw-bolder"
                  icon={<Icon className="svg-icon-2 me-3" name={item.icon!} />}
                  badge={
                    !!lightStyle &&
                    !!item.count && (
                      <Badge size="sm" lightStyle={lightStyle as any}>
                        {item.count}
                      </Badge>
                    )
                  }
                  key={item.key}
                >
                  {item.title}
                </Menu.Item>
              );
            })} */}
          {/* {mailboxes.custom.length && (
              <>
                <Menu.Section>自定义</Menu.Section>
                {mailboxes.custom.map((item) => (
                  <Menu.Item
                    className="mb-2"
                    url={`/mail/${item.key}`}
                    titleClassName="fw-bolder"
                    key={item.key}
                  >
                    {item.title}
                  </Menu.Item>
                ))}
              </>
            )} */}
          <Menu.Separator />
          <Menu.Item
            key="quota"
            url="/drive/quota"
            titleClassName="fw-bolder"
            icon={<Icon className="svg-icon-2 me-3" name="Duotune/fil020" />}
          >
            存储空间
          </Menu.Item>
        </Menu>
        <div className="drive-quota d-flex align-items-center flex-column mb-10">
          <div className="h-5px mx-3 w-100 bg-light mb-2">
            <div
              className="bg-success rounded h-5px"
              role="progressbar"
              style={{ width: `${(cloudDrive?.quota.usage / cloudDrive?.quota.size) * 100}%` }}
            />
          </div>
          <div className="d-flex justify-content-between w-100 mt-auto mb-2">
            <span className="fw-bold fs-7 text-gray-400">
              已使用&nbsp;{cloudDrive?.quota.usageStr}, &nbsp;共&nbsp;{cloudDrive?.quota.sizeStr}
            </span>
            <a className="fw-bolder fs-7 text-success">扩容</a>
          </div>
        </div>

        {/* <Menu rounded={true} className="menu-state-bg menu-state-title-primary">
            <Menu.Section>标签</Menu.Section>
            <Menu.Item
              className="mb-2"
              titleClassName="fw-bold"
              icon={<Icon className="svg-icon-6 svg-icon-danger me-3" name="Duotune/abs009" />}
              badge={<Badge lightStyle="danger">6</Badge>}
            >
              工作项
            </Menu.Item>
            <Menu.Item
              className="mb-2"
              titleClassName="fw-bold"
              icon={<Icon className="svg-icon-2 me-3" name="Duotune/arr087" />}
            >
              添加标签
            </Menu.Item>
          </Menu> */}
      </OverlayScrollbarsComponent>
      <SidebarFooter drives={(data?.cloudDrives || []) as any} onAction={() => {}} />
    </AsideWorkspace>
  );
}

export default Sidebar;