import type { MenuData } from '@/.umi/app/typings';
import { AsideWorkspace } from '@/layouts/Demo7';
import { Menu } from '@/metronic';

type WebSiteSidebarProps = {
  menu: MenuData;
};

function WebSiteSidebar(props: WebSiteSidebarProps) {
  const { menu } = props;

  return (
    <AsideWorkspace width={280}>
      <div className="mt-5 p-5">
        <h1 className="text-gray-800 fw-bold mx-5">网站</h1>
      </div>
      <AsideWorkspace.MenuBar menus={menu?.routes} />
      <Menu className="menu-fit menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 px-6 my-5 my-lg-0">
        <Menu.Section key="website-manage-section" title="网站管理" />
        <Menu.Item bullet={true} key="websites" icon="" title="网站列表" url="" />
      </Menu>
    </AsideWorkspace>
  );
}

export default WebSiteSidebar;
