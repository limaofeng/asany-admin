import { useCallback, useReducer, useRef } from 'react';

import Icon from '@asany/icons';

import useDelete from '@/hooks/useDelete';
import {
  Button,
  Dropdown,
  Empty,
  Form,
  Input,
  Menu,
  Modal,
  Table,
  Toast,
} from '@/metronic';
import { SelectEvent } from '@/metronic/Menu/typings';
import { WarrantyPolicy } from '@/types';

import {
  useCreateWarrantyPolicyMutation,
  useDeleteManyWarrantyPoliciesMutation,
  useUpdateWarrantyPolicyMutation,
} from '../hooks';

type WarrantyPolicieListProps = {
  productId: string;
  warrantyPolicies?: WarrantyPolicy[];
  refetch: () => void;
};

function WarrantyPolicieList(props: WarrantyPolicieListProps) {
  const { productId, warrantyPolicies = [], refetch } = props;

  const form = Form.useForm();
  const state = useRef<{
    mode: 'create' | 'update';
    data?: WarrantyPolicy;
    visible: boolean;
    submitting: boolean;
  }>({
    mode: 'create',
    visible: false,
    submitting: false,
  });
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const [createWarrantyPolicy] = useCreateWarrantyPolicyMutation();
  const [updateWarrantyPolicy] = useUpdateWarrantyPolicyMutation();
  const [deleteManyWarrantyPolicies] = useDeleteManyWarrantyPoliciesMutation();

  const setVisible = useCallback((visible: boolean) => {
    state.current.visible = visible;
    forceUpdate();
  }, []);

  const handleOpenNewWarrantyPolicieModal = useCallback(() => {
    state.current.mode = 'create';
    form.resetFields();
    setVisible(true);
  }, []);

  const handleOpenEditWarrantyPolicieModal = useCallback(
    (data: WarrantyPolicy) => {
      state.current.mode = 'update';
      form.setFieldsValue({
        name: data.name,
        duration: data.duration,
      });
      setVisible(true);
    },
    [],
  );

  const [handleDelete] = useDelete<{ name: string; ids: string[] }>(
    {
      title: '你确定要删除吗？',
      content: (data) => (
        <>
          您即将删除“<strong>{data.name}</strong>
          ”。删除操作不可逆转，请谨慎操作，您确定删除吗？
        </>
      ),
    },
    async (data) => {
      await deleteManyWarrantyPolicies({
        variables: {
          where: { id_in: data?.ids },
        },
      });
      refetch();
    },
  );

  const handleItemClick = useCallback(
    (data: WarrantyPolicy) => (e: SelectEvent) => {
      if (e.key === 'edit') {
        handleOpenEditWarrantyPolicieModal(data);
      } else if (e.key === 'delete') {
        handleDelete({
          name: data.name!,
          ids: [data.id],
        });
      }
    },
    [handleDelete],
  );

  const handleDeleteInBatch = useCallback(
    (ids: string[]) => () => {
      handleDelete({
        name: '选中的报修策略',
        ids,
      });
    },
    [],
  );

  const handleSubmit = useCallback(async () => {
    const values = await form.validateFields();

    if (state.current.mode === 'create') {
      await createWarrantyPolicy({
        variables: {
          input: { productId, ...values },
        },
      });
      Toast.success('新建成功', 2000, {
        placement: 'top-center',
        progressBar: true,
      });
      refetch();
      setVisible(false);
    } else {
      await updateWarrantyPolicy({
        variables: {
          id: state.current.data?.id,
          input: values,
        },
      });
      Toast.success('编辑成功', 2000, {
        placement: 'top-center',
        progressBar: true,
      });
      refetch();
      setVisible(false);
    }
  }, [refetch]);

  const submitting = state.current.submitting;
  const visible = state.current.visible;
  const mode = state.current.mode;

  return (
    <div>
      <Modal
        width={640}
        centered
        onOk={handleSubmit}
        confirmLoading={submitting}
        okText="保存"
        visible={visible}
        onCancel={() => setVisible(false)}
      >
        <Modal.Header closable className="ms-5 border-0">
          <h1 className="modal-title pt-6 pb-4">
            {mode ? '新建报修策略' : '编辑报修策略'}
          </h1>
        </Modal.Header>
        <Modal.Body>
          <Form form={form}>
            <Form.Item
              className="d-flex flex-column mb-7"
              name="name"
              label="名称"
              rules={[{ required: true, message: '请输入名称' }]}
            >
              <Input solid />
            </Form.Item>
            <Form.Item
              className="d-flex flex-column mb-7"
              name="duration"
              label="保修时长"
              rules={[
                { required: true, message: '请输入保修时长' },
                { pattern: /^[1-9]\d*$/, message: '请输入正整数' },
              ]}
              help="保修时长单位为月"
            >
              <Input solid />
            </Form.Item>
          </Form>
        </Modal.Body>
      </Modal>
      <div className="mt-5 card-header">
        <div className="card-title flex-column"></div>
        <div className="card-toolbar">
          <div className="d-flex justify-content-end">
            <Button
              variant="primary"
              className="me-3"
              icon={<Icon className="svg-icon-2" name="Duotune/arr075" />}
              onClick={handleOpenNewWarrantyPolicieModal}
            >
              新建报修策略
            </Button>
          </div>
        </div>
      </div>

      <Table
        hover
        rowKey="id"
        rowSelection={{
          type: 'checkbox',
          renderTitle: (size) => (
            <>
              已选中<span className="mx-2">{size}</span>个产品
            </>
          ),
          toolbar: (selectedRowKeys: string[]) => {
            return (
              <div>
                <Button
                  color="success"
                  onClick={handleDeleteInBatch(selectedRowKeys)}
                  variant={false}
                >
                  批量删除
                </Button>
              </div>
            );
          },
        }}
        noRowsRenderer={() => (
          <Empty
            description="报修策略为空"
            image="/assets/media/illustrations/sigma-1/5.png"
          />
        )}
        columns={[
          {
            key: 'name',
            title: '保修策略名称',
          },
          {
            key: 'duration',
            title: '保修时长',
            width: 180,
            render: (value) => `${value}月`,
          },
          {
            key: 'createdAt',
            title: '创建时间',
            width: 180,
          },
          {
            title: '操作',
            key: 'action',
            width: 140,
            render: (_, record: any) => {
              return (
                <div>
                  <Dropdown
                    overlay={
                      <Menu
                        onClick={handleItemClick(record)}
                        className="menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4"
                      >
                        <Menu.Item key="edit" className="px-3">
                          编辑
                        </Menu.Item>
                        <Menu.Item key="delete" className="px-3 actions-delete">
                          删除
                        </Menu.Item>
                      </Menu>
                    }
                    placement="bottomRight"
                  >
                    <Button variant="light" activeColor="light-primary">
                      操 作
                      <Icon
                        className="ms-2 svg-icon-5 m-0"
                        name="Duotune/arr072"
                      />
                    </Button>
                  </Dropdown>
                </div>
              );
            },
          },
        ]}
        dataSource={warrantyPolicies}
      />
    </div>
  );
}

export default WarrantyPolicieList;
