import { useCallback, useEffect, useRef, useState } from 'react';

import classnames from 'classnames';
import type { RouteComponentProps } from 'react-router';

import { PageContent } from '@/layouts/components';
import {
  Alert,
  Button,
  Card,
  Form,
  Input,
  Modal,
  Separator,
  Symbol,
  Toast,
  Upload,
} from '@/metronic';
import {
  useDeleteModuleMutation,
  useModulesLazyQuery,
  useUpdateModuleMutation,
} from '@/pages/module/hooks';
import type { Module } from '@/types';

type DeleteModuleConfirmModalProps = {
  data: Module;
  visible?: boolean;
  onCancel: () => void;
};

function DeleteModuleConfirmModal(props: DeleteModuleConfirmModalProps) {
  const { visible, onCancel, data } = props;

  const [disabled, setDisabled] = useState(true);

  const [deleteModule, {}] = useDeleteModuleMutation();

  const handleValuesChange = useCallback(
    (_: any, values: any) => {
      setDisabled(!(values.verify == data?.name));
    },
    [data?.name],
  );

  const handleDelete = useCallback(async () => {
    await deleteModule({
      variables: {
        id: data.id,
      },
    });
    Toast.success(`模块 “${data.name}” 删除成功`, 2000, {
      placement: 'bottom-end',
      progressBar: true,
    });
  }, [data.id, data.name, deleteModule]);

  return (
    <Modal
      dialogClassName={classnames('asany-confirm-modal w-450px')}
      visible={visible}
      onCancel={onCancel}
      title={'确定删除模块吗？'}
      footer={false}
      bodyClassName="p-0"
    >
      <Alert type="danger" message="请仔细阅读以下事项" />
      <div className="inner-body p-7">
        <p className="fs-7">
          您即将删除 <b>{data?.name}</b>，此操作无法撤销和恢复。
        </p>
        <Separator className="my-5" />
        <Form onValuesChange={handleValuesChange}>
          <Form.Item
            className="mb-5"
            name="verify"
            label={
              <>
                输入“<i>{data?.name}</i>”，已完成验证
              </>
            }
          >
            <Input solid />
          </Form.Item>
        </Form>
        <Button
          onClick={handleDelete}
          className="asany-confirm-modal-button"
          disabled={disabled}
          variant="light-danger"
        >
          删除此模块
        </Button>
      </div>
    </Modal>
  );
}

type InformationProps = RouteComponentProps<
  { id: string },
  any,
  {
    module: Module;
    baseUrl: string;
  }
>;

function Information(props: InformationProps) {
  const form = Form.useForm();

  const { module } = props.location.state;

  const [deleteModuleConfirmModalVisible, setDeleteModuleConfirmModalVisible] = useState(false);

  const [loadModules] = useModulesLazyQuery();
  const abortController = useRef(new AbortController());

  const domain = 'cn.asany';

  const [updateModule, {}] = useUpdateModuleMutation();

  const handleUpdate = useCallback(async () => {
    const values = await form.validateFields();
    console.log('values', values, updateModule);
    Toast.success(`模块 “${values.name}” 更新成功`, 2000, {
      placement: 'bottom-end',
      progressBar: true,
    });
  }, [form, updateModule]);

  const handleCloseDeleteModuleConfirmModal = useCallback(() => {
    setDeleteModuleConfirmModalVisible(false);
  }, []);

  const handleOpenDeleteModuleConfirmModal = useCallback(() => {
    setDeleteModuleConfirmModalVisible(true);
  }, []);

  useEffect(() => {
    form.setFieldsValue({ ...module, code: module.code?.replaceAll(domain + '.', '') });
  }, [form, module]);

  return (
    <PageContent>
      <Card className="mb-5 mb-xl-10">
        <Card.Header>
          <Card.Title>模块信息</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form
            form={form}
            className="mw-800px row d-flex flex-shrink-0 flex-column-reverse flex-md-row"
          >
            <div className="mw-500px col-12 col-md-8">
              <div className="mw-400px">
                <Form.Item
                  required={false}
                  className="mb-5"
                  name="name"
                  label="名称"
                  rules={[{ required: true, message: '名称不能为空' }]}
                >
                  <Input solid />
                </Form.Item>
                <Form.Item
                  required={false}
                  className="my-5"
                  name="code"
                  label="编码"
                  hasFeedback
                  help="请参考编程中命名空间的写法"
                  rules={[
                    { required: true, message: '编码不能为空' },
                    {
                      async validator(rule, value) {
                        if (!value) {
                          return;
                        }
                        const _code = domain + '.' + value;
                        if (abortController.current) {
                          abortController.current.abort();
                        }
                        if (_code == module.code) {
                          return;
                        }
                        abortController.current = new AbortController();
                        const { data: _mdata } = await loadModules({
                          variables: {
                            filter: {
                              code: _code,
                            },
                            limit: 1,
                          },
                          fetchPolicy: 'network-only',
                          context: {
                            fetchOptions: {
                              signal: abortController.current.signal,
                            },
                          },
                        });
                        console.log('validator', rule, value, _mdata?.modules);
                        if (_mdata?.modules.length) {
                          throw new Error(rule.message as string);
                        }
                      },
                      message: '编码不能重复',
                    },
                  ]}
                >
                  <Input solid addonBefore={domain + '.'} placeholder="例如: module.text" />
                </Form.Item>
                <Form.Item className="my-5" name="description" label="描述" requiredMark="optional">
                  <Input.TextArea solid autoSize={{ maxRows: 4, minRows: 2 }} />
                </Form.Item>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="row">
                <Form.Item
                  className="mb-5"
                  name="picture"
                  label="模块图片"
                  help="允许的文件类型:png, jpg, jpeg。"
                >
                  <Upload.Image
                    width={148}
                    height={148}
                    space="7VE4SSrk"
                    crop={{ height: 300, zoomable: false, aspectRatio: 1 }}
                    background={
                      <Symbol
                        autoColor={false}
                        labelClassName="bg-dark text-inverse-info fs-3tx"
                        alt={module.name}
                      />
                    }
                  />
                </Form.Item>
              </div>
            </div>
          </Form>
          <Button loading={false} onClick={handleUpdate}>
            更新模块信息
          </Button>
        </Card.Body>
      </Card>

      <Card className="mb-5 mb-xl-10">
        <Card.Header>
          <Card.Title className="text-danger">删除模块</Card.Title>
        </Card.Header>
        <Card.Body>
          <div className="fs-7 gap-2 d-flex flex-column mb-3">
            <p className="mb-0">删除操作将会清除掉模块中的所有内容，包括：模型/数据等</p>
            <p className="mb-0">帐户删除后，将无法恢复。请谨慎操作。</p>
          </div>
          <Button variant="danger" onClick={handleOpenDeleteModuleConfirmModal}>
            删除模块
          </Button>
          <DeleteModuleConfirmModal
            data={module}
            visible={deleteModuleConfirmModalVisible}
            onCancel={handleCloseDeleteModuleConfirmModal}
          />
        </Card.Body>
      </Card>
    </PageContent>
  );
}

export default Information;
