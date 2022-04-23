import { useCallback, useState } from 'react';

import { useQuery } from '@apollo/client';
import Icon from '@asany/icons';

import { QUEERY_MODELS } from './gql/model.gql';

import { Button, Menu, Modal } from '@/components/Metronic';
import type { SelectEvent } from '@/components/Metronic/components/base/Menu/typings';
import { AsideWorkspace } from '@/layouts/Demo7';

import './style/MenuSidebar.scss';

/* function renderChannel(item: any) {
  if (item.children && item.children.length) {
    return (
      <Menu.SubMenu bullet key={item.id} icon={item.icon} title={item.name}>
        {(item.children || []).map(renderChannel)}
      </Menu.SubMenu>
    );
  }
  return (
    <Menu.Item bullet key={item.id} icon={item.icon}>
      {item.name}
    </Menu.Item>
  );
} */

function ArticleSidebar() {
  const { data = { models: [] }, loading } = useQuery(QUEERY_MODELS);

  const models = data;

  console.log(models);

  const handleSelect = useCallback((event: SelectEvent) => {
    if (/^[\d]+$/.test(event.key)) {
    } else if ('draft' === event.key) {
    } else if ('draft' === event.key) {
    } else if ('authors' === event.key) {
    }
  }, []);

  // const handleOpenChange = useCallback((keys) => {
  //   setOpenKeys(keys);
  // }, []);

  const [visible, setVisible] = useState(false);

  const handleNewModel = useCallback(() => {
    setVisible(true);
  }, []);

  const handleCloseNewModel = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <AsideWorkspace>
      <div className="m-0">
        <h1 className="text-gray-800 fw-bold mb-6 mx-5">自定义建模</h1>
      </div>
      {!loading && (
        <Menu
          className="menu-sidebar model-menu-sidebar menu-fit menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 px-6 my-5 my-lg-0"
          onSelect={handleSelect}
          accordion={false}
          selectable="AllMenu"
        >
          <Menu.Section className="d-flex align-items-center">
            <span className="menu-section text-muted text-uppercase fs-8 ls-1 flex-row-fluid">
              模型
            </span>
            <Button
              icon={<Icon style={{ marginRight: '.1rem' }} name="Duotune/arr087" className="" />}
              size="sm"
              variant="white"
              className="py-1 px-3"
              onClick={handleNewModel}
            >
              新增
            </Button>
          </Menu.Section>
          <Menu.Item bullet key="draft">
            草稿箱
          </Menu.Item>
          <Menu.Item bullet key="published">
            已发布
          </Menu.Item>
          <Menu.Section>枚举</Menu.Section>
          <Menu.Item bullet key="draft1">
            草稿箱
          </Menu.Item>
          <Menu.Item bullet key="draft2">
            草稿箱
          </Menu.Item>
          <Menu.Section>设置</Menu.Section>
          <Menu.Item icon="Duotune/cod001" key="settings">
            设置
          </Menu.Item>
        </Menu>
      )}
      <Modal
        centered
        visible={visible}
        onCancel={handleCloseNewModel}
        dialogClassName="mw-650px"
        bodyClassName="mx-5 mx-xl-18 pt-0 pb-15"
        title="创建模型"
      >
        sdfsdf
      </Modal>
    </AsideWorkspace>
  );
}

export default ArticleSidebar;
