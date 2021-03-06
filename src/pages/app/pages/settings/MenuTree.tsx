import { useCallback, useMemo, useState } from 'react';

import Icon from '@asany/icons';
import type { RouteComponentProps } from 'react-router';

import MenuDrawer from '../../components/MenuDrawer';
import { LoadMenusDocument, useLoadMenusQuery, useUpdateMenuMutation } from '../../hooks';
import useMenuDelete from '../../hooks/useMenuDelete';

import { ContentWrapper } from '@/layouts/components';
import { Badge, Button, Card, Toast, TreeList } from '@/metronic';
import type { Menu as IMenu } from '@/types';
import { tree } from '@/utils';

type MenuTreeProps = RouteComponentProps<{ id: string }, any, any>;

interface MenuActionsProps {
  data: IMenu;
  onDeleteSuccess: (data: IMenu) => void;
}

function MenuActions(props: MenuActionsProps) {
  const { data: menu, onDeleteSuccess } = props;

  const [handleDelete] = useMenuDelete(menu, onDeleteSuccess);

  return (
    <div
      className="d-flex flex-row-fluid justify-content-center"
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <div className="ms-2">
        <Button
          variant="danger"
          variantStyle="light"
          icon={<Icon className="svg-icon-2" name="Duotune/arr088" />}
          onClick={handleDelete}
        />
      </div>
    </div>
  );
}

function MenuTree(props: MenuTreeProps) {
  const {
    match: {
      params: { id },
    },
    location: {
      state: { app },
    },
  } = props;

  const libraryId = app.dependencies.find((item: any) => item.name == 'component.library').value;

  const [state, setState] = useState<{ menu?: IMenu; visible: boolean }>({
    visible: false,
  });

  const [updateMenu] = useUpdateMenuMutation({
    fetchPolicy: 'no-cache',
    refetchQueries: [
      {
        query: LoadMenusDocument,
        variables: {
          id,
        },
      },
    ],
  });

  const { data, loading } = useLoadMenusQuery({ variables: { id } });

  const menus = data?.app?.menus;

  const treeData = useMemo(
    () =>
      tree(
        (menus || []).map((item) => ({ ...item, children: [] })),
        {
          pidKey: 'parent.id',
          sort: (l, r) => l.index - r.index,
          converter: (item) => ({
            ...item,
            key: item.id,
            title: item.name!,
            menuType: item.type,
            type: 'directory',
            application: {
              id,
            },
          }),
        },
      ),
    [id, menus],
  );

  const handleCloseDrawer = useCallback(() => {
    setState((prevState) => ({ ...prevState, visible: false }));
  }, []);

  const handleNewMenu = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      visible: true,
      menu: {
        index: 0,
        icon: 'Duotune/abs005',
        type: 'MENU',
        application: { id },
      } as any,
    }));
  }, [id]);

  const handleSelect = useCallback((e: any) => {
    setState((prevState) => {
      if (prevState.menu?.id == e.node.id && prevState.visible) {
        return {
          ...prevState,
          visible: false,
        };
      }
      return {
        ...prevState,
        visible: true,
        menu: { ...e.node, type: e.node.menuType, parentMenu: e.node.parentKey },
      };
    });
  }, []);

  const handleDrop = useCallback(
    async (e: any) => {
      console.log(e);
      if (e.dragNode.parent?.id == e.node.parent?.id && e.dragNode.index == e.toIndex) {
        return;
      }
      await Toast.promise(
        updateMenu({
          variables: {
            id: e.dragNode.id,
            input: {
              parentMenu: e.node.parent?.id,
              index: e.toIndex,
            },
          },
        }),
        {
          pending: '????????????...',
          success: '??????????????????',
          error: '????????????',
        },
        {
          duration: 2000,
          placement: 'top-center',
        },
      );
    },
    [updateMenu],
  );

  const handleDeleteSuccess = useCallback(
    (_data: IMenu) => {
      setState((prevState) => {
        if (prevState.menu?.id != _data.id) {
          return prevState;
        }
        return {
          ...prevState,
          visible: false,
          menu: undefined,
        };
      });
    },
    [setState],
  );

  const handleSuccess = useCallback(
    (_data: IMenu) => {
      setState((prevState) => ({
        ...prevState,
        menu: _data,
      }));
    },
    [setState],
  );

  return (
    <ContentWrapper
      header={{
        title: '????????????',
      }}
      loading={loading}
    >
      <Card flush>
        <Card.Header className="pt-8">
          <Card.Title />
          <Card.Toolbar>
            <div className="d-flex justify-content-end">
              <Button onClick={handleNewMenu} variant="primary">
                ????????????
              </Button>
            </div>
          </Card.Toolbar>
        </Card.Header>
        <Card.Body className="pt-0">
          <TreeList
            className="app-treelist"
            rowKey="id"
            draggable={true}
            onSelect={handleSelect}
            selectedKeys={state.menu?.id ? [state.menu.id] : []}
            onDrop={handleDrop}
            columns={[
              {
                key: 'title',
                title: '??????',
                width: 'auto',
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
                        <Badge color={menuTypes[record.menuType]?.color}>{record.menuType}</Badge>
                        <span className="tw-pl-2">{record.path}</span>
                      </div>
                    </div>
                  );
                },
              },
              {
                key: 'index',
                title: '??????',
                className: 'w-100px',
              },
              {
                key: 'enabled',
                title: '????????????',
                className: 'w-100px',
                render(value) {
                  return !!value ? '??????' : '??????';
                },
              },
              {
                key: 'component',
                title: '?????????????????????',
                className: 'w-150px',
                render(_, record) {
                  return !!record.component ? '?????????' : '?????????';
                },
              },
              {
                key: 'actions',
                title: '??????',
                className: 'min-w-125px text-center',
                render(_, record) {
                  return <MenuActions data={record as any} onDeleteSuccess={handleDeleteSuccess} />;
                },
              },
            ]}
            dataSource={treeData}
          />
        </Card.Body>
      </Card>
      <MenuDrawer
        menu={state.menu}
        libraryId={libraryId}
        onClose={handleCloseDrawer}
        onSuccess={handleSuccess}
        onDeleteSuccess={handleDeleteSuccess}
        visible={state.visible}
      />
    </ContentWrapper>
  );
}

export default MenuTree;
