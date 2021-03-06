import { useCallback, useEffect, useMemo, useState } from 'react';

import Icon from '@asany/icons';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { useArticleCategoriesQuery } from '../hooks';

import { AsideWorkspace } from '@/layouts/Demo7';
import { Button, Menu } from '@/metronic';
import type { ArticleCategory } from '@/types';
import { tree } from '@/utils';

import './style/ArticleSidebar.scss';

function renderChannel(item: any) {
  if (item.children && item.children.length) {
    return (
      <Menu.SubMenu
        url={`/cms/channels/${item.id}`}
        bullet
        key={item.id}
        icon={item.icon}
        title={item.name}
      >
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
  const { data = { categories: [] }, loading } = useArticleCategoriesQuery({
    fetchPolicy: 'cache-and-network',
  });

  const [selectedKey, setSelectedKey] = useState<string>('draft');

  const categories: ArticleCategory[] = useMemo(() => {
    if (!data.categories || !data.categories.length) {
      return [];
    }
    return tree(
      data.categories.map((item: any) => ({ ...item })),
      {
        idKey: 'id',
        childrenKey: 'children',
        pidKey: 'parent.id',
        sort: (left: any, right: any) => left.index - right.index,
      },
    );
  }, [data.categories]);

  const [openKeys, setOpenKeys] = useState<string[]>(categories.map((item) => item.id));

  const handleSelect = useCallback((e: any) => {
    setSelectedKey(e.key);
  }, []);

  const handleOpenChange = useCallback((keys: string[]) => {
    setOpenKeys(keys);
  }, []);

  useEffect(() => {
    setOpenKeys(categories.map((item) => item.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories.map((item) => item.id).join(',')]);

  return (
    <AsideWorkspace>
      <div className="mt-5 px-5 pt-5">
        <h1 className="text-gray-800 fw-bold mb-6 mx-5">????????????</h1>
      </div>
      <OverlayScrollbarsComponent
        className="custom-scrollbar flex-column-fluid px-10 mb-5"
        options={{
          scrollbars: { autoHide: 'scroll' },
        }}
      >
        <Menu
          className="cms-menu-sider menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 my-5 my-lg-0"
          onSelect={handleSelect}
          openKeys={openKeys}
          selectedKeys={selectedKey ? [selectedKey] : []}
          onOpenChange={handleOpenChange}
          accordion={false}
          selectable="AllMenu"
          fit={true}
        >
          <Menu.Section>??????</Menu.Section>
          <Menu.Item url="/cms/my/drafts" icon="Duotune/art008" key="draft">
            ?????????
          </Menu.Item>
          <Menu.Item url="/cms/my/published" icon="Duotune/art006" key="published">
            ?????????
          </Menu.Item>
          <Menu.Section className="d-flex align-items-center">
            <span className="menu-section text-muted text-uppercase fs-8 ls-1 flex-row-fluid">
              ???????????? {loading && ' - loading...'}
            </span>
            <Button
              icon={<Icon style={{ marginRight: '.2rem' }} name="Duotune/arr087" className="" />}
              size="sm"
              variant="white"
              className="py-1 px-3 me-n4"
            >
              ??????
            </Button>
          </Menu.Section>
          {categories.map(renderChannel)}
          <Menu.Section>??????</Menu.Section>
          <Menu.Item icon="Duotune/elc001" key="banner">
            ????????????
          </Menu.Item>
          <Menu.Item url="/cms/authors" icon="Duotune/cod002" key="authors">
            ??????
          </Menu.Item>
          <Menu.Item icon="Duotune/art002" key="tags">
            ??????
          </Menu.Item>
          <Menu.Section>????????????</Menu.Section>
          <Menu.Item icon="Duotune/abs008" key="settings">
            ??????
          </Menu.Item>
        </Menu>
      </OverlayScrollbarsComponent>
    </AsideWorkspace>
  );
}

export default ArticleSidebar;
