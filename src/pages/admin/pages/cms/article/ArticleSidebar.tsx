import { useCallback, useMemo, useState } from 'react';

import { useQuery } from '@apollo/client';
import { history } from 'umi';

import { QUEERY_ARTICLE_CHANNEL_ALL } from './gql/article.gql';

import { Menu } from '@/pages/Metronic/components';
import type { SelectEvent } from '@/pages/Metronic/components/base/Menu/typings';
import { tree } from '@/utils';

function renderChannel(item: any) {
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
}

function ArticleSidebar() {
  const { data = { channels: [] }, loading } = useQuery(QUEERY_ARTICLE_CHANNEL_ALL);

  const channels = useMemo(() => {
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

  const handleSelect = useCallback((event: SelectEvent) => {
    if (/^[\d]+$/.test(event.key)) {
      history.push(`/cms/channels/${event.key}`);
    }
  }, []);

  const handleOpenChange = useCallback((keys) => {
    setOpenKeys(keys);
  }, []);

  return (
    <>
      <div className="m-0">
        <h1 className="text-gray-800 fw-bold mb-6 mx-5">内容管理</h1>
      </div>
      {!loading && (
        <Menu
          className="menu-fit menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-5 px-6 my-5 my-lg-0"
          onSelect={handleSelect}
          openKeys={openKeys}
          onOpenChange={handleOpenChange}
          accordion={false}
          selectable="AllMenu"
        >
          <Menu.Section>我的</Menu.Section>
          <Menu.Item icon="Duotune/art008" key="draft">
            草稿箱
          </Menu.Item>
          <Menu.Item icon="Duotune/art006" key="published">
            已发布
          </Menu.Item>
          <Menu.Section>信息栏目</Menu.Section>
          {channels.map(renderChannel)}
          <Menu.Section>其他</Menu.Section>
          <Menu.Item icon="Duotune/elc001" key="banner">
            大图管理
          </Menu.Item>
          <Menu.Item icon="Duotune/cod002" key="authors">
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
      )}
    </>
  );
}

export default ArticleSidebar;
