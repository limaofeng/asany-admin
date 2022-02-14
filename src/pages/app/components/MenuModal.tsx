import { useCallback, useMemo, useState } from 'react';

import { useCreateMenuMutation, useLoadMenusQuery, useUpdateMenuMutation } from '../hooks';

import type { ClickCallback, FormInstance } from '@/pages/Metronic/components';
import { Form, Input, Modal, Radio, Select2 } from '@/pages/Metronic/components';
import { delay, flat, tree } from '@/utils';

type MenuFormProps = {
  appId: string;
  visible?: boolean;
  form: FormInstance;
  data: any;
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

  return (
    <Form form={form} initialValues={props.data}>
      <Form.Item name="parentMenu" className="d-flex flex-column mb-7" label="所属栏目">
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
      <Form.Item
        name="name"
        className="d-flex flex-column mb-7"
        required
        label="名称"
        rules={[{ required: true, message: '名称不能为空' }]}
      >
        <Input solid />
      </Form.Item>
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
      <Form.Item dependencies={['type']} noStyle={true}>
        {() => {
          return (
            <Form.Item className="d-flex flex-column mb-7" name="path" label="链接">
              <Input solid />
            </Form.Item>
          );
        }}
      </Form.Item>
      <Form.Item dependencies={['type', 'parent']} noStyle={true}>
        {() => {
          if (form.getFieldValue('type') !== 'MENU' || !!form.getFieldValue('parent')) {
            return <></>;
          }
          return (
            <Form.Item className="d-flex flex-column mb-7" name="path" label="组件">
              <Input solid />
            </Form.Item>
          );
        }}
      </Form.Item>
      <Form.Item className="d-flex flex-column mb-7" name="index" label="排序位置">
        <Input solid />
      </Form.Item>
      <Form.Item name="description" className="d-flex flex-column mb-7" label="描述" required>
        <Input.TextArea solid />
      </Form.Item>
    </Form>
  );
}

type EditMenuModalProps = {
  data: any;
  visible?: boolean;
  appId: string;
  onCancel?: ClickCallback;
  onSuccess?: () => void;
};

export function EditMenuModal(props: EditMenuModalProps) {
  const { data, visible, appId, onCancel, onSuccess } = props;

  const form = Form.useForm();
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [updateMenu] = useUpdateMenuMutation({
    fetchPolicy: 'no-cache',
  });

  const handleSubmit = useCallback(async () => {
    setConfirmLoading(true);
    try {
      const input = await form.validateFields();
      await delay(updateMenu({ variables: { id: data.id, input: { ...input } } }), 350);
      setConfirmLoading(false);
      onCancel && onCancel(new Event('look', { bubbles: true, cancelable: false }) as any);
      Modal.success({
        title: '更新成功',
        content: `菜单 <strong>${input.name}</strong> 保存成功`,
        timer: 2000,
        timerProgressBar: true,
      });
      onSuccess && onSuccess();
    } catch (e) {
      setConfirmLoading(false);
    }
  }, [form, updateMenu, data.id, onCancel, onSuccess]);

  const defaultData = useMemo(() => {
    if (!data) {
      return { type: 'URL', index: 0 };
    }
    return { ...data, parentMenu: data.parentKey, type: data.menuType };
  }, [data]);

  console.log('MenuForm', defaultData, data);

  return (
    <Modal
      centered
      maskClosable={false}
      visible={visible}
      onCancel={onCancel}
      onOk={handleSubmit}
      confirmLoading={confirmLoading}
      dialogClassName="mw-650px"
      title="编辑菜单"
    >
      <MenuForm appId={appId} data={defaultData} form={form} />
    </Modal>
  );
}

type NewMenuModalProps = {
  data?: any;
  visible?: boolean;
  appId: string;
  onCancel?: ClickCallback;
  onSuccess?: () => void;
};

export function NewMenuModal(props: NewMenuModalProps) {
  const { data, visible, appId, onCancel, onSuccess } = props;

  const form = Form.useForm();
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [createMenu] = useCreateMenuMutation({
    fetchPolicy: 'no-cache',
  });

  const handleSubmit = useCallback(async () => {
    setConfirmLoading(true);
    try {
      const input = await form.validateFields();
      await delay(createMenu({ variables: { input: { ...input, application: appId } } }), 350);
      setConfirmLoading(false);
      onCancel && onCancel(new Event('look', { bubbles: true, cancelable: false }) as any);
      Modal.success({
        title: '保存成功',
        content: `菜单 <strong>${input.name}</strong> 保存成功`,
        timer: 2000,
        timerProgressBar: true,
      });
      onSuccess && onSuccess();
    } catch (e) {
      setConfirmLoading(false);
    }
  }, [createMenu, onSuccess, onCancel, form, appId]);

  const defaultData = useMemo(() => {
    if (!data) {
      return { type: 'URL', index: 0 };
    }
    return { ...data, parentMenu: data.parentKey, type: data.menuType };
  }, [data]);

  return (
    <Modal
      centered
      maskClosable={false}
      visible={visible}
      onCancel={onCancel}
      onOk={handleSubmit}
      confirmLoading={confirmLoading}
      dialogClassName="mw-650px"
      title="创建菜单"
    >
      <MenuForm data={defaultData} appId={appId} form={form} />
    </Modal>
  );
}
