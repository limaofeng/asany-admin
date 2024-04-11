import { useCallback, useEffect, useMemo, useState } from 'react';

import Icon from '@asany/icons';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { AsideWorkspace } from '@/layouts/Demo7';
import { Button, Menu } from '@/metronic';
import type { ArticleCategory } from '@/types';
import { tree } from '@/utils';

import './style/ArticleSidebar.scss';

function renderChannel(item: any) {
  if (item.children && item.children.length) {
    return (
      <Menu.SubMenu
        url={`/cms/categories/${item.id}/articles`}
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
    <Menu.Item
      url={`/cms/categories/${item.id}/articles`}
      bullet
      key={item.id}
      icon={item.icon}
    >
      {item.name}
    </Menu.Item>
  );
}

type ArticleSidebarProps = {
  loading: boolean;
  menuKey: {
    key: string;
    params: any;
  };
  categories: ArticleCategory[];
};

function ArticleSidebar(props: ArticleSidebarProps) {
  const { menuKey } = props;

  const categories: ArticleCategory[] = useMemo(() => {
    if (!props.categories || !props.categories.length) {
      return [];
    }
    return tree(
      props.categories.map((item: any) => ({ ...item })),
      {
        idKey: 'id',
        childrenKey: 'children',
        pidKey: 'parent.id',
        sort: (left: any, right: any) => left.index - right.index,
      },
    );
  }, [props.categories]);

  const [openKeys, setOpenKeys] = useState<string[]>(
    categories.map((item) => item.id),
  );

  const handleOpenChange = useCallback((keys: string[]) => {
    setOpenKeys(keys);
  }, []);

  useEffect(() => {
    setOpenKeys(categories.map((item) => item.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories.map((item) => item.id).join(',')]);

  const selectedKey = useMemo(() => {
    switch (menuKey.key) {
      case 'category':
        return menuKey.params.cid;
      default:
        return menuKey.key;
    }
  }, [menuKey]);

  console.log('selectedKey', selectedKey, menuKey);

  return (
    <AsideWorkspace>
      <div className="mt-5 px-5 pt-5">
        <h1 className="text-gray-800 fw-bold mb-6 mx-5">内容管理</h1>
      </div>
      <OverlayScrollbarsComponent
        className="custom-scrollbar flex-column-fluid px-10 mb-5"
        options={{
          scrollbars: { autoHide: 'scroll' },
        }}
      >
        <Menu
          className="cms-menu-sider menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 my-5 my-lg-0"
          openKeys={openKeys}
          selectedKeys={selectedKey ? [selectedKey] : []}
          onOpenChange={handleOpenChange}
          accordion={false}
          selectable="AllMenu"
          fit={true}
        >
          <Menu.Section>我的</Menu.Section>
          <Menu.Item url="/cms/my/drafts" icon="Duotune/art008" key="draft">
            草稿箱
          </Menu.Item>
          <Menu.Item
            url="/cms/my/published"
            icon="Duotune/art006"
            key="published"
          >
            已发布
          </Menu.Item>
          <Menu.Section
            className="d-flex align-items-center"
            contentClassName="w-100"
            sectionClassName="w-100 d-flex align-items-center justify-content-between"
          >
            <span className="menu-section text-muted text-uppercase fs-8 ls-1 flex-row-fluid">
              信息栏目 {props.loading && ' - loading...'}
            </span>
            <Button
              icon={
                <Icon
                  style={{ marginRight: '.2rem' }}
                  name="Duotune/arr087"
                  className=""
                />
              }
              size="sm"
              variant="white"
              className="py-1 px-3 me-n4"
            >
              新增
            </Button>
          </Menu.Section>
          {categories.map(renderChannel)}
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
      </OverlayScrollbarsComponent>
    </AsideWorkspace>
  );
}

export default ArticleSidebar;
