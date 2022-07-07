import { useEffect, useMemo, useState } from 'react';

import {
  LoadMenusDocument,
  useCreateMenuMutation,
  useLoadMenusQuery,
  useUpdateMenuMutation,
} from '../hooks';
import useMenuDelete from '../hooks/useMenuDelete';

import { Button, Col, Drawer, Form, Input, Radio, Row, Select2, Switch, Toast } from '@/metronic';
import type { FormInstance } from '@/metronic/Form';
import type { Menu } from '@/types';
import { delay, flat, tree } from '@/utils';

type MenuFormProps = {
  appId: string;
  visible?: boolean;
  form: FormInstance;
  data: any;
  submitting: boolean;
  submit: () => void;
  onDeleteSuccess: (data: any) => void;
};

function MenuForm(props: MenuFormProps) {
  const { form, appId } = props;
  const { data } = useLoadMenusQuery({ variables: { id: appId } });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const menus = data?.app?.menus || [];

  const treeData = useMemo(
    () =>
      flat(
        tree(
          (menus || []).map((item) => ({ ...item })),
          {
            pidKey: 'parent.id',
            sort: (l, r) => l.index - r.index,
            converter: (item, { parent }) => ({
              ...item,
              key: item.id,
              menuType: item.type,
              title: parent ? parent.title! + '/' + item.name! : item.name!,
            }),
          },
        ),
      ),
    [menus],
  );

  useEffect(() => {
    const { children, _rect, pos, parent, ...values } = props.data;
    // console.log('info', values, props.data);
    if (!props.data.id) {
      form.resetFields();
    }
    form.setFieldsValue({ ...values, parentMenu: parent ? parent.id : undefined });
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
          <Form.Item name="parentMenu" className="d-flex flex-column mb-7" label="上级菜单">
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
        <Col span={6}>
          <Form.Item name="type" className="d-flex flex-column mb-7" label="类型">
            <Radio.Group
              solid
              options={[
                { value: 'MENU', label: '菜单' },
                { value: 'URL', label: '链接地址' },
                { value: 'SECTION', label: '章节' },
              ]}
            />
          </Form.Item>
        </Col>
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
          <Form.Item valuePropName="checked" className="d-flex flex-column mb-7" name="hideInMenu">
            <Switch solid label="不在菜单中显示" />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item
            valuePropName="checked"
            className="d-flex flex-column mb-7"
            name="hideChildrenInMenu"
          >
            <Switch solid label="不显示子菜单" />
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
      <Row>
        <Form.Item className="d-flex flex-column mb-7" name="authority" label="访问权限">
          <Input solid />
        </Form.Item>
      </Row>
      <Form.Item dependencies={['type']} noStyle={true}>
        {() => {
          return (
            <Row>
              {' '}
              <Form.Item className="d-flex flex-column mb-7" name="path" label="链接">
                <Input solid />
              </Form.Item>
            </Row>
          );
        }}
      </Form.Item>
      <Form.Item dependencies={['type', 'parentMenu']} noStyle={true}>
        {() => {
          if (form.getFieldValue('type') !== 'MENU' || !!form.getFieldValue('parentMenu')) {
            return <></>;
          }
          return (
            <Row>
              <Form.Item className="d-flex flex-column mb-7" name="component" label="组件">
                <Input solid />
              </Form.Item>
            </Row>
          );
        }}
      </Form.Item>
    </Form>
  );
}

function useSubmit(
  data: Menu,
  setData: any,
): [
  () => Promise<void>,
  {
    form: FormInstance;
    submitting: boolean;
  },
] {
  const form = Form.useForm();
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [createMenu] = useCreateMenuMutation({
    fetchPolicy: 'no-cache',
    refetchQueries: [
      {
        query: LoadMenusDocument,
        variables: {
          id: data?.application?.id,
        },
      },
    ],
  });
  const [updateMenu] = useUpdateMenuMutation({
    fetchPolicy: 'no-cache',
    refetchQueries: [
      {
        query: LoadMenusDocument,
        variables: {
          id: data?.application?.id,
        },
      },
    ],
  });

  const handleSubmit = useMemo(() => {
    if (!!data?.id) {
      return async () => {
        setConfirmLoading(true);
        try {
          const input = await form.validateFields();
          const { data: rdata } = await Toast.promise(
            delay(updateMenu({ variables: { id: data.id, input: { ...input } } }), 350),
            {
              pending: '提交中...',
              success: {
                render: () => (
                  <>
                    菜单 <strong>{input.name}</strong> 保存成功
                  </>
                ),
              },
              error: '提交出错',
            },
            {
              duration: 2000,
              placement: 'top-center',
            },
          );
          setData(rdata.updateMenu);
          setConfirmLoading(false);
        } catch (e) {
          setConfirmLoading(false);
        }
      };
    } else {
      return async () => {
        setConfirmLoading(true);
        try {
          const input = await form.validateFields();
          const { data: rdata } = await Toast.promise(
            delay(
              createMenu({ variables: { input: { ...input, application: data.application.id } } }),
              350,
            ),
            {
              pending: '提交中...',
              success: {
                render: () => (
                  <>
                    菜单 <strong>{input.name}</strong> 新增成功
                  </>
                ),
              },
              error: '提交出错',
            },
            {
              duration: 2000,
              placement: 'top-center',
            },
          );
          setData(rdata.createMenu);
          setConfirmLoading(false);
        } catch (e) {
          setConfirmLoading(false);
        }
      };
    }
  }, [createMenu, data?.application?.id, data?.id, form, setData, updateMenu]);

  return [handleSubmit, { form, submitting: confirmLoading }];
}

type MenuDrawerProps = {
  menu?: Menu;
  visible: boolean;
  onClose: () => void;
  onSuccess: (data: Menu) => void;
  onDeleteSuccess: (data: Menu) => void;
};

function MenuDrawer(props: MenuDrawerProps) {
  const { menu, visible, onClose, onSuccess, onDeleteSuccess } = props;

  const [submit, { form, submitting }] = useSubmit(menu!, onSuccess);

  const defaultData = useMemo(() => {
    if (!menu) {
      return { type: 'URL', index: 0 };
    }
    return {
      ...menu,
      component: menu.component?.id,
    };
  }, [menu]);

  const [handleDelete] = useMenuDelete(menu!, onDeleteSuccess);

  return (
    <Drawer
      title={!!menu?.id ? `编辑菜单` : `新增菜单`}
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
            {menu?.id && (
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
      {menu && (
        <MenuForm
          submitting={submitting}
          data={defaultData}
          appId={menu.application.id}
          form={form}
          submit={submit}
          onDeleteSuccess={onDeleteSuccess}
        />
      )}
    </Drawer>
  );
}

export default MenuDrawer;
