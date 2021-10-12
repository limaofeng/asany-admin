import { useCallback, useMemo, useState } from 'react';

import { useQuery } from '@apollo/client';
import { history } from 'umi';

import { QUEERY_ARTICLE_CHANNEL_ALL } from './gql/article.gql';

import Menu from '@/pages/Metronic/components/Aside/Secondary/Menu';
import type { SelectEvent } from '@/pages/Metronic/components/Aside/Secondary/Menu/typings';
import { tree } from '@/utils';

function renderChannel(item: any) {
  if (item.children && item.children.length) {
    return (
      <Menu.SubMenu key={item.id} icon={item.icon} title={item.name}>
        {(item.children || []).map(renderChannel)}
      </Menu.SubMenu>
    );
  }
  return (
    <Menu.Item key={item.id} icon={item.icon}>
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
          onSelect={handleSelect}
          openKeys={openKeys}
          onOpenChange={handleOpenChange}
          accordion={false}
          selectable="AllMenu"
        >
          <Menu.Section>信息栏目</Menu.Section>
          {channels.map(renderChannel)}
          <Menu.Section>其他</Menu.Section>
          <Menu.Item key="CMS_BANNER">大图管理</Menu.Item>
          <Menu.Section>设置</Menu.Section>
          <Menu.Item key="CHANNEL_SETTINGS">设置</Menu.Item>
        </Menu>
      )}
    </>
  );
}

export default ArticleSidebar;
