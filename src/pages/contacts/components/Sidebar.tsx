import Tree from '@asany/tree';

import { Tabs } from '@/pages/Metronic/components';

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

function Sidebar() {
  return (
    <>
      <div className="m-0 px-5">
        <h1 className="text-gray-800 fw-bold mb-6 mx-5">通讯录</h1>
      </div>
      <div className="contacts-sidebar">
        <Tabs>
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
    </>
  );
}

export default Sidebar;