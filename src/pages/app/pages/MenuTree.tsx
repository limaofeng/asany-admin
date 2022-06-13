import { useCallback, useMemo, useState } from 'react';

import Icon from '@asany/icons';
import type { RouteComponentProps } from 'react-router';

import { EditMenuModal, NewMenuModal } from '../components/MenuModal';
import { useDeleteMenuMutation, useLoadMenusQuery } from '../hooks';

import { Badge, Button, Card, Dropdown, Menu, Modal, TreeList } from '@/metronic';
import type { Menu as IMenu } from '@/types';
import { tree } from '@/utils';

type MenuTreeProps = RouteComponentProps<{ id: string }>;

interface MenuActionsProps {
  data: IMenu;
  refetch: () => void;
  onEdit: (data: IMenu) => void;
}

function MenuActions(props: MenuActionsProps) {
  const { data: menu, refetch, onEdit } = props;
  const [visible, setVisible] = useState(false);

  const [deleteMenu] = useDeleteMenuMutation({
    variables: { id: menu.id },
  });

  const handleClick = useCallback(
    async ({ key, domEvent }) => {
      domEvent.preventDefault();
      domEvent.stopPropagation();
      setVisible(false);
      if (key === 'update') {
        onEdit(menu);
      } else if (key === 'delete') {
        const result = await Modal.confirm({
          title: `你确定要删除该菜单吗？`,
          content: `您即将删除“<strong>${menu.name}</strong>”。删除操作不可逆转，请谨慎操作，您确定删除吗？`,
          okText: '删 除',
          cancelClassName: 'btn btn-secondary btn-sm',
          okClassName: 'btn btn-danger btn-sm',
        });
        if (result.isConfirmed) {
          await deleteMenu();
          await refetch();
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [menu],
  );

  return (
    <div className="d-flex justify-content-end">
      <div className="ms-2">
        <Dropdown
          overlay={
            <Menu
              onClick={handleClick}
              className="menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4"
            >
              {/* <Menu.Item key="rename" className="px-3">
                重命名
              </Menu.Item>
              <Menu.Item key="moveToFolder" className="px-3">
                移动
              </Menu.Item> */}
              <Menu.Item key="update" className="px-3">
                编辑
              </Menu.Item>
              <Menu.Item key="delete" className="px-3 actions-delete">
                删除
              </Menu.Item>
            </Menu>
          }
          placement="bottomRight"
          onVisibleChange={setVisible}
          visible={visible}
        >
          <Button
            as="button"
            size="sm"
            variant="light"
            activeColor="light-primary"
            className="me-2"
            icon={<Icon className="svg-icon-5 m-0" name="Duotune/gen052" />}
          />
        </Dropdown>
      </div>
    </div>
  );
}

function MenuTree(props: MenuTreeProps) {
  const {
    match: {
      params: { id },
    },
  } = props;

  const [modal, setModal] = useState<{ visible: boolean; data?: IMenu }>({
    visible: false,
  });

  const { data, refetch } = useLoadMenusQuery({ variables: { id } });

  const routes = data?.app?.menus;

  const treeData = useMemo(
    () =>
      tree(
        (routes || []).map((item) => ({ ...item })),
        {
          pidKey: 'parent.id',
          sort: (l, r) => l.index - r.index,
          converter: (item) => ({
            ...item,
            key: item.id,
            title: item.name!,
            menuType: item.type,
            type: 'directory',
          }),
        },
      ),
    [routes],
  );

  const handleOpenMenuModal = useCallback(() => {
    setModal({ visible: true });
  }, []);

  const handleCloseMenuModal = useCallback(() => {
    setModal({ visible: false });
  }, []);

  const handleEdit = useCallback((_data) => {
    setModal({ visible: true, data: _data });
  }, []);

  return (
    <>
      <Card flush className="mt-6 mt-xl-9" headerClassName="mt-5">
        <Card.Header className="pt-8">
          <Card.Title />
          <Card.Toolbar>
            <div className="d-flex justify-content-end">
              <Button size="sm" variant="danger" className="me-3">
                删除
              </Button>
              <Button onClick={handleOpenMenuModal} size="sm" variant="primary">
                新建菜单
              </Button>
            </div>
          </Card.Toolbar>
        </Card.Header>
        <Card.Body className="pt-0">
          <TreeList
            className="app-treelist"
            rowKey="id"
            draggable={false}
            columns={[
              {
                key: 'title',
                title: '名称',
                render: (_, record) => {
                  const menuTypes = {
                    SECTION: { color: 'info' },
                    URL: { color: 'primary' },
                    MENU: { color: 'success' },
                    SCRIPT: { color: 'dark' },
                  };
                  return (
                    <div className="d-flex flex-column py-5">
                      <span className="title text-gray-800 text-hover-primary mb-1 fs-6">
                        {record.title}
                      </span>
                      <div className="d-flex flex-row col-stacked">
                        <Badge color={menuTypes[record.menuType].color}>{record.menuType}</Badge>
                        <span className="tw-pl-2">{record.path}</span>
                      </div>
                    </div>
                  );
                },
              },
              {
                key: 'index',
                title: '排序',
                className: 'w-100px',
              },
              {
                key: 'enabled',
                title: '启用状态',
                className: 'w-100px',
                render(value) {
                  return !!value ? '启用' : '禁用';
                },
              },
              {
                key: 'component',
                title: '子面板渲染组件',
                className: 'w-150px',
                render(_, record) {
                  return !!record.component ? '有组件' : '无组件';
                },
              },
              {
                key: 'actions',
                title: '操作',
                className: 'min-w-125px',
                render(_, record) {
                  return <MenuActions onEdit={handleEdit} data={record as any} refetch={refetch} />;
                },
              },
            ]}
            dataSource={treeData}
          />
        </Card.Body>
      </Card>
      {modal.data ? (
        <EditMenuModal
          onSuccess={refetch}
          data={modal.data}
          appId={id}
          visible={modal.visible}
          onCancel={handleCloseMenuModal}
        />
      ) : (
        <NewMenuModal
          onSuccess={refetch}
          appId={id}
          data={modal.data}
          visible={modal.visible}
          onCancel={handleCloseMenuModal}
        />
      )}
    </>
  );
}

export default MenuTree;
