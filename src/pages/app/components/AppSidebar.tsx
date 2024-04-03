import { useCallback, useEffect, useMemo, useState } from 'react';
import { matchPath } from 'react-router';

import { Icon } from '@asany/icons';
import { Link } from '@umijs/max';

import { BlockUI, Menu, Symbol, Tooltip } from '@/metronic';
import type { Application, ArticleCategory } from '@/types';
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
        {/* {(item.children || []).map((node) => renderChannel(node, sid))} */}
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

console.log('renderChannel', renderChannel);

type AppSidebarProps = {
  app: Application;
  location: Location;
  categories: ArticleCategory[];
};

function AppSidebar(props: AppSidebarProps) {
  const { location, app } = props;

  // const navigate = useNavigate();

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
    const channelMatch = matchPath(
      '/websites/:sid/cms/categories/:cid',
      location.pathname,
    );
    if (channelMatch) {
      return `category_${channelMatch.params.cid}`;
    }
    return 'my-drive';
  }, [location.pathname]);

  const [selectedKey, setSelectedKey] = useState<string>(menuKey);
  const [openKeys, setOpenKeys] = useState<string[]>(
    categories.map((item) => item.id),
  );

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

  // const handleNewcategory = useCallback(() => {
  //   let parent_category_id;
  //   if (selectedKey.startsWith('category_')) {
  //     parent_category_id = selectedKey.split('_')[1];
  //   }
  //   navigate(
  //     `/websites/${id}/cms/categories/new` +
  //       (parent_category_id ? `?parent_category_id=${parent_category_id}` : ''),
  //   );
  // }, [history, id, selectedKey]);

  const handleOpenChange = useCallback((keys: string[]) => {
    setOpenKeys(keys);
  }, []);

  useEffect(() => {
    setOpenKeys(categories.map((item) => `category_${item.id}`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories.map((item) => item.id).join(',')]);

  console.log('app 21', app);

  return (
    <BlockUI
      zIndex={10}
      className="my-5 p-5"
      overlayClassName="bg-white bg-opacity-25"
      loading={false}
    >
      <div className="mx-5">
        <div className="d-flex align-items-center">
          <Symbol.Avatar alt="啥地方" className="me-5" />
          <div className="flex-grow-1">
            <a className="text-dark fw-bolder text-hover-primary fs-6">
              {app.title}
            </a>
            <span className="text-muted d-block fw-bold">
              {app.description}
            </span>
          </div>
        </div>
        {/* <h1 className="text-gray-800 fw-bold mx-5">{app?.name || ' '}</h1> */}
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
        <Menu.Section contentClassName="pt-6 pb-0">通用</Menu.Section>
        <Menu.Item
          bullet={true}
          icon=""
          title="基本信息"
          url={`/apps/${app.id}/profile`}
        />
        <Menu.Item bullet={true} icon="" title="组织机构" url="" />
        <Menu.Section contentClassName="pt-6 pb-0">外观</Menu.Section>
        <Menu.Item bullet={true} icon="" title="登录设置" url="" />
        <Menu.Item bullet={true} icon="" title="布局" url="" />
        <Menu.Item bullet={true} icon="" title="门户" url="" />
        <Menu.Section contentClassName="pt-6 pb-0">功能集成</Menu.Section>
        <Menu.Item bullet={true} icon="" title="信息" url="" />
        <Menu.Item bullet={true} icon="" title="邮件" url="" />
        <Menu.Item bullet={true} icon="" title="日程" url="" />
        <Menu.Section contentClassName="pt-6 pb-0">第三方集成</Menu.Section>
        <Menu.Item bullet={true} icon="" title="钉钉" url="" />
        <Menu.Item bullet={true} icon="" title="微信" url="" />
        <Menu.Item bullet={true} icon="" title="企业微信" url="" />
        <Menu.Section contentClassName="pt-6 pb-0">开发者设置</Menu.Section>
        <Menu.Item
          bullet={true}
          icon=""
          title="开发信息"
          url={`/apps/${app.id}/api_keys`}
        />
        <Menu.Item
          bullet={true}
          icon=""
          title="会话管理"
          url={`/apps/${app.id}/sessions`}
        />
        <Menu.Item
          bullet={true}
          icon=""
          title="菜单设置"
          url={`/apps/${app.id}/menus`}
        />
        <Menu.Item
          bullet={true}
          icon=""
          title="路由设置"
          url={`/apps/${app.id}/routes`}
        />
        <Menu.Item
          bullet={true}
          icon=""
          title="组件管理"
          url={`/apps/${app.id}/components`}
        />
      </Menu>
    </BlockUI>
  );
}

export default AppSidebar;
