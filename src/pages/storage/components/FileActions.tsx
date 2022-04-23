import { useCallback, useEffect, useState } from 'react';

import Icon from '@asany/icons';

import { Button, Card, Dropdown, Input, Menu, Spin } from '@/components/Metronic';
import type { FileObject } from '@/types';

type ShareLinkProps = {
  children: React.ReactElement;
};

function ShareGen() {
  const [generating, setGenerating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setGenerating(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card flush>
      <Card.Body className="p-5">
        {generating ? (
          <div className="d-flex">
            <div className="me-5">
              <Spin />
            </div>
            <div className="fs-6 text-dark">生成分享链接...</div>
          </div>
        ) : (
          <div
            className="d-flex flex-column text-start"
            data-kt-filemanger-table="copy_link_result"
          >
            <div className="d-flex mb-3">
              <Icon name="Duotune/arr085" className="svg-icon-2 svg-icon-success me-3" />
              <div className="fs-6 text-dark">分享链接已生成</div>
            </div>
            <Input size="sm" value="https://path/to/file/or/folder/" />
            <div className="text-muted fw-normal mt-2 fs-8 px-3">
              只读的.
              <a href="#" className="ms-2">
                更改权限
              </a>
            </div>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

function ShareLink(props: ShareLinkProps) {
  const { children } = props;

  const [visible, setVisible] = useState(false);

  return (
    <Dropdown
      overlay={
        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-300px">
          <ShareGen />
        </div>
      }
      placement="bottomRight"
      onVisibleChange={setVisible}
      visible={visible}
    >
      {children}
    </Dropdown>
  );
}

type FileActionsProps = {
  data: FileObject;
  onRename: (data: FileObject) => void;
};

function FileActions(props: FileActionsProps) {
  const { data, onRename } = props;
  const [visible, setVisible] = useState(false);

  const handleClick = useCallback(
    ({ key }) => {
      if (key === 'rename') {
        onRename && onRename(data);
      }
      setVisible(false);
    },
    [data, onRename],
  );
  return (
    <div className="d-flex justify-content-end">
      {!data.isDirectory && (
        <div className="ms-2" data-kt-filemanger-table="copy_link">
          <ShareLink>
            <Button
              as="button"
              size="sm"
              variant="light"
              activeColor="light-primary"
              icon={<Icon className="svg-icon-5 m-0" name="Duotune/cod007" />}
            />
          </ShareLink>
        </div>
      )}
      {/*--begin::More--*/}
      <div className="ms-2">
        <Dropdown
          overlay={
            <Menu
              onClick={handleClick}
              className="menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4"
            >
              {!data.isDirectory && (
                <Menu.Item key="download" className="px-3">
                  下载文件
                </Menu.Item>
              )}
              <Menu.Item key="rename" className="px-3">
                重命名
              </Menu.Item>
              <Menu.Item key="moveToFolder" className="px-3">
                移动
              </Menu.Item>
              <Menu.Item key="delete" className="px-3 actions-delete">
                删除
              </Menu.Item>
            </Menu>
          }
          placement="bottomRight"
          onVisibleChange={setVisible}
          visible={visible}
        >
          <Button
            as="button"
            size="sm"
            variant="light"
            activeColor="light-primary"
            className="me-2"
            icon={<Icon className="svg-icon-5 m-0" name="Duotune/gen052" />}
          />
        </Dropdown>
      </div>
    </div>
  );
}

export default FileActions;
