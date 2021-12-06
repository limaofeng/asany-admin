import { useCallback, useEffect, useMemo, useState } from 'react';

import Icon from '@asany/icons';

import { useArticleChannelAllQuery } from '../hooks';

import { NewArticleChannelModal } from './ArticleChannelNew';

import { Button, Menu } from '@/pages/Metronic/components';
import { tree } from '@/utils';
import type { ArticleChannel } from '@/types';

import './style/ArticleSidebar.scss';

function renderChannel(item: any) {
  if (item.children && item.children.length) {
    return (
      <Menu.SubMenu bullet key={item.id} icon={item.icon} title={item.name}>
        {(item.children || []).map(renderChannel)}
      </Menu.SubMenu>
    );
  }
  return (
    <Menu.Item url={`/cms/channels/${item.id}`} bullet key={item.id} icon={item.icon}>
      {item.name}
    </Menu.Item>
  );
}

function ArticleSidebar() {
  const {
    data = { channels: [] },
    refetch,
    loading,
  } = useArticleChannelAllQuery({
    fetchPolicy: 'no-cache',
  });

  const [selectedKey, setSelectedKey] = useState<string>('draft');

  const channels: ArticleChannel[] = useMemo(() => {
    if (!data.channels || !data.channels.length) {
      return [];
    }
    return tree(
      data.channels.map((item: any) => ({ ...item })),
      {
        idKey: 'id',
        childrenKey: 'children',
        pidKey: 'parent.id',
        sort: (left: any, right: any) => left.index - right.index,
      },
    );
  }, [data.channels]);

  const [openKeys, setOpenKeys] = useState<string[]>(channels.map((item) => item.id));

  const handleSelect = useCallback((e) => {
    setSelectedKey(e.key);
  }, []);

  const handleOpenChange = useCallback((keys) => {
    setOpenKeys(keys);
  }, []);

  const [visible, setVisible] = useState(false);

  const handleNewChannel = useCallback(() => {
    setVisible(true);
  }, []);

  const handleCloseNewChannel = useCallback(() => {
    setVisible(false);
  }, []);

  useEffect(() => {
    setOpenKeys(channels.map((item) => item.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channels.map((item) => item.id).join(',')]);

  return (
    <>
      <div className="m-0">
        <h1 className="text-gray-800 fw-bold mb-6 mx-5">内容管理</h1>
      </div>
      <Menu
        className="cms-menu-sider menu-fit menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 px-3 my-5 my-lg-0"
        onSelect={handleSelect}
        openKeys={openKeys}
        selectedKeys={selectedKey ? [selectedKey] : []}
        onOpenChange={handleOpenChange}
        accordion={false}
        selectable="AllMenu"
      >
        <Menu.Section>我的</Menu.Section>
        <Menu.Item url="/cms/my/drafts" icon="Duotune/art008" key="draft">
          草稿箱
        </Menu.Item>
        <Menu.Item url="/cms/my/published" icon="Duotune/art006" key="published">
          已发布
        </Menu.Item>
        <Menu.Section className="d-flex align-items-center">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1 flex-row-fluid">
            信息栏目 {loading && ' - loading...'}
          </span>
          <Button
            icon={<Icon style={{ marginRight: '.2rem' }} name="Duotune/arr087" className="" />}
            size="sm"
            variant="white"
            className="py-1 px-3"
            onClick={handleNewChannel}
          >
            新增
          </Button>
        </Menu.Section>
        {channels.map(renderChannel)}
        <Menu.Section>其他</Menu.Section>
        <Menu.Item icon="Duotune/elc001" key="banner">
          大图管理
        </Menu.Item>
        <Menu.Item url="/cms/authors" icon="Duotune/cod002" key="authors">
          作者
        </Menu.Item>
        <Menu.Item icon="Duotune/art002" key="tags">
          标签
        </Menu.Item>
        <Menu.Section>全局设置</Menu.Section>
        <Menu.Item icon="Duotune/abs008" key="settings">
          设置
        </Menu.Item>
      </Menu>
      <NewArticleChannelModal
        onSuccess={refetch}
        visible={visible}
        onCancel={handleCloseNewChannel}
      />
    </>
  );
}

export default ArticleSidebar;
