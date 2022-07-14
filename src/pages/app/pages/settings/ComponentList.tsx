import { useCallback, useState } from 'react';

import { Icon } from '@asany/icons';
import type { RouteComponentProps } from 'react-router-dom';
import moment from 'moment';

import ComponentModal from '../../components/ComponentModal';
import useComponentDelete from '../../hooks/useComponentDelete';
import { useLoadComponentsQuery } from '../../hooks';

import Controls from '@/components/Controls';
import { ContentWrapper } from '@/layouts/components';
import {
  Badge,
  Button,
  Card,
  Col,
  Dropdown,
  Input,
  Menu,
  Row,
  Select2,
  Symbol,
  Table,
} from '@/metronic';
import type { Component } from '@/types';

type ComponentItemProps = {
  data: Component;
  onEdit: (data: Component) => void;
  onDelete: (data: Component) => Promise<void>;
};

function ComponentItem(props: ComponentItemProps) {
  const { data, onEdit, onDelete } = props;

  const handleEdit = useCallback(() => {
    onEdit(data);
  }, [data, onEdit]);

  const handleDelete = useCallback(() => {
    onDelete(data);
  }, [data, onDelete]);

  return (
    <Col md={3}>
      <Card flush className="h-md-100">
        <Card.Body>
          <div className="d-flex flex-stack mb-3">
            <Badge color="light">{'  '}</Badge>
            <div>
              <Dropdown
                overlay={
                  <Menu className="menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fs-7 fw-bold w-200px py-3">
                    {/* <Menu.Item
                      className="px-3"
                      contentClassName="text-muted pb-2 px-3 fs-7 text-uppercase"
                    >
                      <>xxx</>
                    </Menu.Item> */}
                    <Menu.Item onClick={handleEdit} className="px-3">
                      编辑
                    </Menu.Item>
                    <Menu.Item onClick={handleDelete} className="px-3">
                      删除
                    </Menu.Item>
                  </Menu>
                }
                placement="bottomRight"
              >
                <Button
                  variant={false}
                  color="light-dark"
                  activeColor="light-primary"
                  icon={<Icon className="svg-icon-2" name="Duotune/gen024" />}
                />
              </Dropdown>
            </div>
          </div>
          <div className="mb-3">
            <a>
              <div className="position-relative">
                <div className="overlay overlay-show">
                  <div
                    className="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-200px"
                    style={{ backgroundImage: "url('/assets/media/books/img-72.jpg')" }}
                  />
                  <div className="overlay-layer rounded bg-black" style={{ opacity: 0.4 }} />
                </div>
                <div className="position-absolute text-white mb-4 ms-4 bottom-0">
                  <span className="text-white fs-4 fw-bolder mb-1">{data.title}</span>
                  <div className="fs-6 fw-bold mb-5">{data.description}</div>
                </div>
              </div>
            </a>
          </div>
          <div className="d-flex flex-stack flex-wrapr">
            <Symbol.Avatar shape="circle" size={35} alt="测" />
            <div className="d-flex my-1">
              <div className="py-2 px-3 ms-3">
                <span className="ms-1 fs-7 fw-bolder text-gray-600">
                  {data.createdAt && moment(data.createdAt).format('YYYY-MM-DD HH:mm')}
                </span>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

type ComponentListProps = {
  onEdit: (data: Component) => void;
  onDelete: (data: Component) => Promise<void>;
  components: Component[];
  layout: 'card' | 'table';
};

function ComponentList(props: ComponentListProps) {
  const { layout, components, onEdit, onDelete } = props;

  if (layout == 'table') {
    return (
      <Card>
        <Card.Body>
          <Table
            columns={[
              {
                key: 'name',
                title: '名称',
                width: 'auto',
              },
              {
                key: 'createAt',
                title: '创建人',
                width: 200,
              },
              {
                key: 'actions',
                title: '操作',
                width: 200,
              },
            ]}
            dataSource={components}
          />
        </Card.Body>
      </Card>
    );
  }

  return (
    <Row gutter={{ default: 5, xl: 9 }} cols={{ default: 1, md: 3, xl: 4 }}>
      {components.map((item) => (
        <ComponentItem key={item.id} data={item} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </Row>
  );
}

type ComponentsProps = RouteComponentProps<{ id: string }, any, any>;

function Components(props: ComponentsProps) {
  const { location } = props;

  const app = location.state.app;

  const libraryId = app.dependencies.find((item: any) => item.name == 'component.library').value;

  const [layout, setLayout] = useState<'card' | 'table'>('card');

  const [state, setState] = useState<{ component?: Component; visible: boolean }>({
    visible: false,
  });

  const { data, loading } = useLoadComponentsQuery({ variables: { id: libraryId } });

  const components = data?.library?.components || [];

  const handleSuccess = useCallback(
    (_data: Component) => {
      setState((prevState) => ({
        ...prevState,
        visible: false,
        component: _data,
      }));
    },
    [setState],
  );

  const handleDeleteSuccess = useCallback(
    (_data: Component) => {
      setState((prevState) => {
        if (prevState.component?.id != _data.id) {
          return prevState;
        }
        return {
          ...prevState,
          visible: false,
          component: undefined,
        };
      });
    },
    [setState],
  );

  const [handleDelete] = useComponentDelete(libraryId, handleDeleteSuccess);

  const handleCloseModal = useCallback(() => {
    setState((prevState) => ({ ...prevState, visible: false }));
  }, []);

  const handleNewModal = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      visible: true,
      component: {
        libraryId,
      } as any,
    }));
  }, [libraryId]);

  const handleEdit = useCallback(
    (_data: Component) => {
      setState((prevState) => ({
        ...prevState,
        visible: true,
        component: { ..._data, libraryId },
      }));
    },
    [libraryId],
  );

  return (
    <ContentWrapper
      header={{
        title: '组件设置',
      }}
      loading={loading}
    >
      <div className="d-flex flex-wrap flex-stack pb-7">
        <div className="d-flex flex-wrap align-items-center">
          <h3 className="fw-bolder me-5">组件 ({components.length})</h3>
          <Input.Search placeholder="搜索" className="border-body bg-body w-250px" />
        </div>
        <Controls layout={layout} onLayout={setLayout}>
          <div className="d-flex my-0">
            <Select2
              className="border-body bg-body w-150px me-5"
              placeholder="启用状态"
              options={[
                { label: '全部', value: 'all' },
                { label: '启用', value: 'enable' },
                { label: '禁用', value: 'disable' },
              ]}
            />
            <Button onClick={handleNewModal}>新增组件</Button>
          </div>
        </Controls>
      </div>
      <ComponentList
        layout={layout}
        onEdit={handleEdit}
        onDelete={handleDelete}
        components={components as any}
      />
      <ComponentModal
        component={state.component}
        onClose={handleCloseModal}
        onSuccess={handleSuccess}
        onDeleteSuccess={handleDeleteSuccess}
        visible={state.visible}
      />
    </ContentWrapper>
  );
}

export default Components;
