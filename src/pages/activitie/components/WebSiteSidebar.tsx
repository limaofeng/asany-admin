import type { MenuData } from '@/.umi/app/typings';
import { AsideWorkspace } from '@/layouts/Demo7';

type WebSiteSidebarProps = {
  menu: MenuData;
};

function WebSiteSidebar(props: WebSiteSidebarProps) {
  const { menu } = props;

  return (
    <AsideWorkspace width={280}>
      <div className="mt-5 p-5">
        <h1 className="text-gray-800 fw-bold mx-5">活动管理</h1>
      </div>
      <AsideWorkspace.MenuBar menus={menu?.routes} />
    </AsideWorkspace>
  );
}

export default WebSiteSidebar;
