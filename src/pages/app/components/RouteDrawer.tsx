import { useEffect, useMemo } from 'react';

import { useLoadRoutesQuery, useRouteDelete, useRouteSubmit } from '../hooks';

import { Button, Col, Drawer, Form, Input, Radio, Row, Select2, Switch } from '@/metronic';
import type { FormInstance } from '@/metronic/Form';
import type { Route } from '@/types';
import { flat, tree } from '@/utils';

type RouteFormProps = {
  appId: string;
  visible?: boolean;
  form: FormInstance;
  data: any;
  submitting: boolean;
  submit: () => void;
  onDeleteSuccess: (data: any) => void;
};

function RouteForm(props: RouteFormProps) {
  const { form, appId } = props;
  const { data } = useLoadRoutesQuery({ variables: { id: appId } });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const routes = data?.app?.routes || [];

  const treeData = useMemo(
    () =>
      flat(
        tree(
          (routes || []).map((item) => ({ ...item })),
          {
            pidKey: 'parent.id',
            sort: (l, r) => l.index - r.index,
            converter: (item, {}) => ({
              ...item,
              key: item.id,
              routeType: item.type,
              title: item.path,
            }),
          },
        ),
      ),
    [routes],
  );

  useEffect(() => {
    const { children, _rect, pos, parent, ...values } = props.data;
    // console.log('info', values, props.data);
    if (!props.data.id) {
      form.resetFields();
    }
    form.setFieldsValue({ ...values, parentRoute: parent ? parent.id : undefined });
  }, [form, props.data]);

  return (
    <Form form={form}>
      <Row>
        <Col span={6}>
          <Form.Item
            name="name"
            className="d-flex flex-column mb-7"
            required
            label="名称"
            rules={[{ required: true, message: '名称不能为空' }]}
          >
            <Input solid />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Form.Item name="parentRoute" className="d-flex flex-column mb-7" label="上级路由">
            <Select2
              solid
              options={[
                {
                  value: '',
                  label: '根节点',
                },
                ...treeData.map((item) => ({ value: item.id, label: item.title! })),
              ]}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Form.Item name="type" className="d-flex flex-column mb-7" label="类型">
          <Radio.Group
            solid
            options={[
              { value: 'MENU', label: '菜单' },
              { value: 'HEADER', label: '标题' },
              { value: 'DIVIDER', label: '分隔符' },
              { value: 'ROUTE', label: '路由' },
            ]}
          />
        </Form.Item>
      </Row>
      <Row>
        <Col span={6}>
          <Form.Item name="icon" className="d-flex flex-column mb-7" label="图标">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item className="d-flex flex-column mb-7" name="index" label="排序位置">
            <Input solid />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={4}>
          <Form.Item valuePropName="checked" className="d-flex flex-column mb-7" name="authorized">
            <Switch solid label="授权后访问" />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item valuePropName="checked" className="d-flex flex-column mb-7" name="enabled">
            <Switch solid label="启用" />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item
            valuePropName="checked"
            className="d-flex flex-column mb-7"
            name="hideInBreadcrumb"
          >
            <Switch solid label="不在面包屑中显示" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item dependencies={['hideInBreadcrumb']} noStyle={true}>
        {() => {
          if (form.getFieldValue('hideInBreadcrumb')) {
            return <></>;
          }
          return (
            <Row>
              <Form.Item
                className="d-flex flex-column mb-7"
                name="breadcrumb"
                label="自定义面包屑组件"
              >
                <Input solid />
              </Form.Item>
            </Row>
          );
        }}
      </Form.Item>
      <Row>
        <Form.Item className="d-flex flex-column mb-7" name="access" label="访问权限">
          <Input solid />
        </Form.Item>
      </Row>
      <Row>
        <Form.Item
          rules={[{ required: true, message: '访问路径不能为空' }]}
          className="d-flex flex-column mb-7"
          name="path"
          label="路径"
        >
          <Input solid />
        </Form.Item>
      </Row>
      <Row>
        <Form.Item className="d-flex flex-column mb-7" name="redirect" label="重定向">
          <Input solid />
        </Form.Item>
      </Row>
      <Row>
        <Form.Item className="d-flex flex-column mb-7" name="component" label="组件">
          <Input solid />
        </Form.Item>
      </Row>
    </Form>
  );
}

type RouteDrawerProps = {
  route?: Route;
  visible: boolean;
  onClose: () => void;
  onSuccess: (data: Route) => void;
  onDeleteSuccess: (data: Route) => void;
};

function RouteDrawer(props: RouteDrawerProps) {
  const { route, visible, onClose, onSuccess, onDeleteSuccess } = props;

  const [submit, { form, submitting }] = useRouteSubmit(route!, onSuccess);

  const defaultData = useMemo(() => {
    if (!route) {
      return { type: 'URL', index: 0 };
    }
    return {
      ...route,
      breadcrumb: route.breadcrumb?.id,
      component: route.component?.id,
    };
  }, [route]);

  const [handleDelete] = useRouteDelete(route!, onDeleteSuccess);

  return (
    <Drawer
      title={!!route?.id ? `编辑路由` : `新增路由`}
      placement="right"
      width={640}
      mask={false}
      onClose={onClose}
      visible={visible}
      footer={
        <Row>
          <Col span={6}>
            <Button
              style={{ letterSpacing: '1rem' }}
              className="w-100"
              loading={submitting}
              onClick={submit}
            >
              保存
            </Button>
          </Col>
          <Col span={6}>
            {route?.id && (
              <Button
                style={{ letterSpacing: '1rem' }}
                className="w-100"
                variant="danger"
                variantStyle="light"
                onClick={handleDelete}
              >
                删除
              </Button>
            )}
          </Col>
        </Row>
      }
    >
      {route && (
        <RouteForm
          submitting={submitting}
          data={defaultData}
          appId={route.application.id}
          form={form}
          submit={submit}
          onDeleteSuccess={onDeleteSuccess}
        />
      )}
    </Drawer>
  );
}

export default RouteDrawer;
