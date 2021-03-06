import { useEffect, useMemo } from 'react';

import { ComponentPicker } from 'sunmao-editor';
import type { ComponentTreeNode } from 'sunmao';

import {
  useLoadComponentsQuery,
  useLoadRoutesQuery,
  useRouteDelete,
  useRouteSubmit,
} from '../hooks';
import { initTag } from '../utils';

import { Button, Col, Drawer, Form, Input, Radio, Row, Select2, Switch } from '@/metronic';
import type { FormInstance } from '@/metronic/Form';
import type { Route } from '@/types';
import { flat, tree } from '@/utils';

type RouteFormProps = {
  appId: string;
  visible?: boolean;
  form: FormInstance;
  data: any;
  libraryId: string;
  submitting: boolean;
  submit: () => void;
  onDeleteSuccess: (data: any) => void;
};

function RouteForm(props: RouteFormProps) {
  const { form, appId, libraryId } = props;

  const { data: routesData } = useLoadRoutesQuery({ variables: { id: appId } });
  const { data: componentsData } = useLoadComponentsQuery({
    variables: { id: libraryId },
    fetchPolicy: 'cache-and-network',
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const routes = routesData?.app?.routes || [];

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

  const library = componentsData?.library;

  const componentTreeData = useMemo(() => {
    const rootTags: ComponentTreeNode[] = [];
    for (const _component of library?.components || []) {
      for (const tag of _component.tags) {
        initTag(tag, rootTags, _component as any);
      }
    }
    return rootTags;
  }, [library]);

  useEffect(() => {
    const { children, _rect, pos, parent, ...values } = props.data;
    if (!props.data.id) {
      form.resetFields();
    }
    form.setFieldsValue({ ...values, parentRoute: parent ? parent.id : undefined });
  }, [form, props.data]);

  console.log('componentTreeData', componentTreeData);

  return (
    <Form form={form}>
      <Row>
        <Col span={6}>
          <Form.Item
            name="name"
            className="d-flex flex-column mb-7"
            required
            label="??????"
            rules={[{ required: true, message: '??????????????????' }]}
          >
            <Input solid />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Form.Item name="parentRoute" className="d-flex flex-column mb-7" label="????????????">
            <Select2
              solid
              options={[
                {
                  value: '',
                  label: '?????????',
                },
                ...treeData.map((item) => ({ value: item.id, label: item.title! })),
              ]}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Form.Item name="type" className="d-flex flex-column mb-7" label="??????">
          <Radio.Group
            solid
            options={[
              { value: 'MENU', label: '??????' },
              { value: 'HEADER', label: '??????' },
              { value: 'DIVIDER', label: '?????????' },
              { value: 'ROUTE', label: '??????' },
            ]}
          />
        </Form.Item>
      </Row>
      <Row>
        <Col span={6}>
          <Form.Item name="icon" className="d-flex flex-column mb-7" label="??????">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item className="d-flex flex-column mb-7" name="index" label="????????????">
            <Input solid />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={4}>
          <Form.Item valuePropName="checked" className="d-flex flex-column mb-7" name="authorized">
            <Switch solid label="???????????????" />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item valuePropName="checked" className="d-flex flex-column mb-7" name="enabled">
            <Switch solid label="??????" />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item
            valuePropName="checked"
            className="d-flex flex-column mb-7"
            name="hideInBreadcrumb"
          >
            <Switch solid label="????????????????????????" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={4}>
          <Form.Item
            valuePropName="checked"
            className="d-flex flex-column mb-7"
            name={['layout', 'pure']}
          >
            <Switch solid label="?????????????????????" />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item
            valuePropName="checked"
            className="d-flex flex-column mb-7"
            name={['layout', 'hideMenu']}
          >
            <Switch solid label="???????????????" />
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
                label="????????????????????????"
              >
                <ComponentPicker treeDate={componentTreeData} placeholder="?????????????????????" />
              </Form.Item>
            </Row>
          );
        }}
      </Form.Item>
      <Row>
        <Form.Item className="d-flex flex-column mb-7" name="access" label="????????????">
          <Input solid />
        </Form.Item>
      </Row>
      <Row>
        <Form.Item
          rules={[{ required: true, message: '????????????????????????' }]}
          className="d-flex flex-column mb-7"
          name="path"
          label="??????"
        >
          <Input solid />
        </Form.Item>
      </Row>
      <Row>
        <Form.Item className="d-flex flex-column mb-7" name="redirect" label="?????????">
          <Input solid />
        </Form.Item>
      </Row>
      <Row>
        <Form.Item className="d-flex flex-column mb-7" name="component" label="??????">
          <ComponentPicker treeDate={componentTreeData} placeholder="??????????????????" />
        </Form.Item>
      </Row>
    </Form>
  );
}

type RouteDrawerProps = {
  route?: Route;
  visible: boolean;
  libraryId: string;
  onClose: () => void;
  onSuccess: (data: Route) => void;
  onDeleteSuccess: (data: Route) => void;
};

function RouteDrawer(props: RouteDrawerProps) {
  const { route, visible, onClose, onSuccess, onDeleteSuccess, libraryId } = props;

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
      title={!!route?.id ? `????????????` : `????????????`}
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
              ??????
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
                ??????
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
          libraryId={libraryId}
          submit={submit}
          onDeleteSuccess={onDeleteSuccess}
        />
      )}
    </Drawer>
  );
}

export default RouteDrawer;
