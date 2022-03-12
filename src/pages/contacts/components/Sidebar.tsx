import Tree from '@asany/tree';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { AsideWorkspace, Tabs } from '@/pages/Metronic/components';

const { TabPane } = Tabs;

const data = [
  {
    key: '1',
    title: '荣耀',
    type: 'directory',
    children: [
      { key: '11', title: '鲁班7号', type: 'file' },
      { key: '12', title: '廉颇', type: 'file' },
      { key: '13', title: '凯', type: 'file' },
      {
        key: '14',
        title: '长城守卫军',
        type: 'directory',
        children: [{ key: '15', title: '苏烈', type: 'file' }],
      },
      { key: '121', title: '所得', type: 'file' },
    ],
  },
  { key: '2', title: '老王', type: 'file' },
  { key: '3', title: '老五', type: 'file' },
  { key: '4', title: '张三', type: 'file' },
  { key: '5', title: '赵六', type: 'file' },

  {
    key: '7',
    title: '王者营地',
    type: 'directory',
    children: [],
  },
];

type SidebarFooterProps = {
  onAction: () => void;
};

function SidebarFooter(props: SidebarFooterProps) {
  const { onAction } = props;
  return (
    <div className="app-sidebar-footer">
      <span className="mail-settings" onClick={onAction}>
        偏好设置
      </span>
    </div>
  );
}

function Sidebar() {
  return (
    <AsideWorkspace className="app-sidebar">
      {/* <div className="app-sidebar-body"> */}
      <div className="mt-5 px-5 pt-5">
        <h1 className="text-gray-800 fw-bold mb-6 mx-5">通讯录</h1>
      </div>
      <OverlayScrollbarsComponent
        className="custom-scrollbar flex-column-fluid px-5"
        options={{
          scrollbars: { autoHide: 'scroll' },
        }}
      >
        <div className="contacts-sidebar">
          <Tabs className="nav-line-tabs-2x">
            <TabPane tab="组织架构" key="org">
              <div className="contacts-sidebar-groups">
                <Tree treeData={data} />
              </div>
            </TabPane>
            <TabPane tab="角色" key="role" className="px-5">
              2
            </TabPane>
            <TabPane tab="职务" key="position" className="px-5">
              3
            </TabPane>
          </Tabs>
          <div className="contacts-sidebar-tags" />
        </div>
      </OverlayScrollbarsComponent>
      {/* </div> */}
      <SidebarFooter onAction={() => {}} />
    </AsideWorkspace>
  );
}

export default Sidebar;
