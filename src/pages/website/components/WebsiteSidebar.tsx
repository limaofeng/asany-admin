import { useCallback, useEffect, useMemo, useState } from 'react';

import { Icon } from '@asany/icons';
import { matchPath, useHistory } from 'react-router';
import { Link } from 'umi';

import { BlockUI, Button, Menu, Tooltip } from '@/metronic';
import type { ArticleCategory, Website } from '@/types';
import { tree } from '@/utils';

function renderChannel(item: ArticleCategory, sid: string) {
  if (item.children && item.children.length) {
    return (
      <Menu.SubMenu
        url={`/websites/${sid}/cms/categories/${item.id}/articles`}
        bullet
        key={`category_${item.id}`}
        icon={item.icon}
        title={
          <>
            <span className="flex-row-fluid">{item.name}</span>
            <Tooltip title="栏目设置">
              <div>
                <Link
                  onClick={(e) => e.stopPropagation()}
                  className="category-setting me-2 text-primary"
                  to={`/websites/${sid}/cms/categories/${item.id}`}
                >
                  <Icon name="Bootstrap/gear" className="svg-icon-primary" />
                </Link>
              </div>
            </Tooltip>
          </>
        }
      >
        {(item.children || []).map((node) => renderChannel(node, sid))}
      </Menu.SubMenu>
    );
  }
  return (
    <Menu.Item
      key={`category_${item.id}`}
      url={`/websites/${sid}/cms/categories/${item.id}/articles`}
      bullet
      icon={item.icon}
      title={
        <>
          <span className="flex-row-fluid">{item.name}</span>
          <Tooltip title="栏目设置">
            <Link
              onClick={(e) => e.stopPropagation()}
              className="category-setting me-4 text-primary"
              to={`/websites/${sid}/cms/categories/${item.id}`}
            >
              <Icon name="Bootstrap/gear" className="svg-icon-primary" />
            </Link>
          </Tooltip>
        </>
      }
    />
  );
}

type WebsiteSidebarProps = {
  id: string;
  website?: Website;
  loading: boolean;
  location: Location;
  categories: ArticleCategory[];
};

function WebsiteSidebar(props: WebsiteSidebarProps) {
  const { id, location, loading, website } = props;

  const history = useHistory();

  const categories = useMemo(() => {
    return tree<any, ArticleCategory>(
      props.categories.map((item: any) => ({ ...item })),
      {
        idKey: 'id',
        childrenKey: 'children',
        pidKey: 'parent.id',
        sort: (left: any, right: any) => left.index - right.index,
      },
    );
  }, [props.categories]);

  const menuKey = useMemo(() => {
    const channelMatch = matchPath<{ sid: string; cid: string }>(location.pathname, {
      path: '/websites/:sid/cms/categories/:cid',
      exact: false,
      strict: true,
    });
    if (channelMatch) {
      return `category_${channelMatch.params.cid}`;
    }
    const filesMatch = matchPath<{ sid: string; cid: string }>(location.pathname, {
      path: '/websites/:sid/files',
      exact: false,
      strict: true,
    });
    if (filesMatch) {
      return 'files';
    }
    return 'my-drive';
  }, [location.pathname]);

  const [selectedKey, setSelectedKey] = useState<string>(menuKey);
  const [openKeys, setOpenKeys] = useState<string[]>(categories.map((item) => item.id));

  useEffect(() => {
    if (!menuKey) {
      return;
    }
    setSelectedKey(menuKey);
  }, [menuKey]);

  const handleSelect = useCallback((e: any) => {
    console.log('selectedKey', e.key);
    setSelectedKey(e.key);
  }, []);

  const handleNewcategory = useCallback(() => {
    let parent_category_id;
    if (selectedKey.startsWith('category_')) {
      parent_category_id = selectedKey.split('_')[1];
    }
    history.push(
      `/websites/${id}/cms/categories/new` +
        (parent_category_id ? `?parent_category_id=${parent_category_id}` : ''),
    );
  }, [history, id, selectedKey]);

  const handleOpenChange = useCallback((keys: string[]) => {
    setOpenKeys(keys);
  }, []);

  useEffect(() => {
    setOpenKeys(categories.map((item) => `category_${item.id}`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories.map((item) => item.id).join(',')]);

  return (
    <BlockUI
      zIndex={10}
      className="my-5 p-5"
      overlayClassName="bg-white bg-opacity-25"
      loading={false}
    >
      <div>
        <h1 className="text-gray-800 fw-bold mx-5">{website?.name || ' '}</h1>
      </div>
      <Menu
        fit
        accordion={false}
        selectable="AllMenu"
        className="menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 px-6 my-5 my-lg-0"
        selectedKeys={selectedKey ? [selectedKey] : []}
        onSelect={handleSelect}
        openKeys={openKeys}
        onOpenChange={handleOpenChange}
      >
        {/* <Menu.Section className="pt-8 pb-2" key="website-manage-section">网站管理</Menu.Section>
        <Menu.Item bullet={true} key="websites" icon="" title="网站列表" url="" /> */}
        <Menu.Section
          className="pt-8 pb-0 flex-row-fluid align-items-center"
          contentClassName="d-flex flex-row-fluid"
          sectionClassName="d-flex flex-row-fluid"
        >
          <span className="text-muted text-uppercase fs-8 ls-1 align-items-center d-flex flex-row-fluid">
            栏目 {loading && ' - loading...'}
          </span>
          <Button
            icon={<Icon style={{ marginRight: '.2rem' }} name="Duotune/arr087" className="" />}
            size="sm"
            variant="white"
            className="py-1 px-3 me-n4"
            onClick={handleNewcategory}
          >
            新增
          </Button>
        </Menu.Section>
        {categories.map((item) => renderChannel(item, id))}
        <Menu.Section>设置</Menu.Section>
        <Menu.Item
          bullet={true}
          key="settings_general"
          icon=""
          title="通用设置"
          url={`/websites/${id}/settings/general`}
        />
        <Menu.Item
          bullet={true}
          key="files"
          icon=""
          title="文件管理"
          url={`/websites/${id}/files`}
        />
        <Menu.Item
          bullet={true}
          key="settings_navigation"
          icon=""
          title="导航菜单"
          url={`/websites/${id}/settings/navigation`}
        />
      </Menu>
    </BlockUI>
  );
}

export default WebsiteSidebar;
