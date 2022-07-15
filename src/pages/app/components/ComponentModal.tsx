import { useEffect, useMemo } from 'react';

import { ComponentPicker } from 'sunmao-editor';
import TagsInput from '@asany/tags-input';

import useComponentSubmit from '../hooks/useComponentSubmit';

import { Col, Form, Input, Modal, Row, Upload } from '@/metronic';
import type { FormInstance } from '@/metronic/typings';
import type { Component } from '@/types';

type ComponentFormProps = {
  libraryId: string;
  visible?: boolean;
  form: FormInstance;
  data: Component;
  submitting: boolean;
  submit: () => void;
  onDeleteSuccess: (data: any) => void;
};

function ComponentForm(props: ComponentFormProps) {
  const { form } = props;

  useEffect(() => {
    const { ...values } = props.data;
    if (!props.data.id) {
      form.resetFields();
    }
    form.setFieldsValue({ ...values });
  }, [form, props.data]);

  return (
    <Form form={form}>
      <Row>
        <Col span={8}>
          <Form.Item
            rules={[{ required: true, message: '名称不能为空' }]}
            className="d-flex flex-column mb-7"
            name="title"
            label="名称"
          >
            <Input solid />
          </Form.Item>
          <Form.Item className="d-flex flex-column mb-7" name="description" label="描述">
            <Input.TextArea solid />
          </Form.Item>
          <Form.Item className="d-flex flex-column mb-7" name="tags" label="描述">
            <TagsInput />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: '组件模版' }]}
            className="d-flex flex-column mb-7"
            name="template"
            label="模版"
          >
            <ComponentPicker placeholder="选择组件模版" />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item
            className="mb-5"
            name="image"
            label="封面图"
            help="允许的文件类型:png, jpg, jpeg。"
          >
            <Upload.Image
              width={125}
              height={125}
              space="Ohc2OaZ4" // TODO: 需要通过 app 中的配置动态获取
              crop={{ height: 300, zoomable: false, aspectRatio: 1 }}
              backgroundImage="/assets/media/svg/avatars/blank.svg"
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

type ComponentModalProps = {
  component?: Component;
  visible: boolean;
  onClose: () => void;
  onSuccess: (data: Component) => void;
  onDeleteSuccess: (data: Component) => void;
};

function ComponentModal(props: ComponentModalProps) {
  const { component, visible, onClose, onSuccess, onDeleteSuccess } = props;

  const [submit, { form, submitting }] = useComponentSubmit(component!, onSuccess);

  const defaultData = useMemo(() => {
    if (!component) {
      return { type: 'URL', index: 0 };
    }
    return {
      ...component,
      template: component?.template,
    };
  }, [component]);

  return (
    <Modal
      width={640}
      centered
      onOk={submit}
      confirmLoading={submitting}
      okText="保存"
      visible={visible}
      onCancel={onClose}
    >
      <Modal.Header closable>{component?.id ? <>编辑组件</> : <>新增组件</>}</Modal.Header>
      <Modal.Body>
        {component && (
          <ComponentForm
            submitting={submitting}
            data={defaultData as any}
            libraryId={component?.libraryId}
            form={form}
            submit={submit}
            onDeleteSuccess={onDeleteSuccess}
          />
        )}
      </Modal.Body>
    </Modal>
  );
}

export default ComponentModal;
