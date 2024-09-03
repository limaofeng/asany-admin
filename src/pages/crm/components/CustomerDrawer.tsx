import { useEffect, useMemo } from 'react';

import TagsInput from '@asany/tags-input';

import { Button, Col, DatePicker, Drawer, Form, Input, Row } from '@/metronic';
import type { FormInstance } from '@/metronic/Form';
import type { Customer } from '@/types';

import useCustomerDelete from '../hooks/useCustomerDelete';
import useCustomerSubmit from '../hooks/useCustomerSubmit';

type CustomerFormProps = {
  visible?: boolean;
  form: FormInstance;
  data: Customer;
  submitting: boolean;
  submit: () => void;
  onDeleteSuccess: (data: any) => void;
};

function CustomerForm(props: CustomerFormProps) {
  const { form } = props;

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const values = props.data;
    if (!values.id) {
      form.resetFields();
    }
    form.setFieldsValue({
      ...values,
    });
  }, [form, props.data]);

  return (
    <Form form={form}>
      <Row>
        <Col span={6}>
          <Form.Item
            name="title"
            className="d-flex flex-column mb-7"
            required
            label="CMMF CODE"
            rules={[{ required: true, message: 'CMMF CODE不能为空' }]}
          >
            <Input solid />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Form.Item
            name="tags"
            className="d-flex flex-column mb-7"
            required
            label="WMF CODE"
          >
            <TagsInput className="form-control form-control-solid" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Form.Item
            name="content"
            className="d-flex flex-column mb-7"
            required
            label="文件路径"
            rules={[{ required: true, message: '文件路径不能为空' }]}
          >
            <Input.TextArea
              solid
              autoSize={{
                minRows: 2,
                maxRows: 2,
              }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Form.Item
            name="scheduledAt"
            className="d-flex flex-column mb-7"
            label="发布时间"
            rules={[{ required: true, message: '发布时间不能为空' }]}
          >
            <DatePicker solid className="w-100" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Form.Item
            name="expirationAt"
            className="d-flex flex-column mb-7"
            label="过期时间"
            rules={[{ required: true, message: '过期时间不能为空' }]}
          >
            <DatePicker solid className="w-100" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Form.Item
            className="d-flex flex-column mb-7"
            name="summary"
            label="备注"
          >
            <Input.TextArea
              solid
              autoSize={{
                minRows: 4,
                maxRows: 6,
              }}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

type CustomerDrawerProps = {
  data?: Customer;
  visible: boolean;
  onClose: () => void;
  onSuccess: (data: Customer) => void;
  onDeleteSuccess: (data: Customer) => void;
};

function CustomerDrawer(props: CustomerDrawerProps) {
  const { data, visible, onClose, onSuccess, onDeleteSuccess } = props;

  const [submit, { form, submitting }] = useCustomerSubmit(data!, {
    transform(data) {
      return {
        ...data,
      };
    },
    onSubmitted: onSuccess,
  });

  const defaultData = useMemo(() => {
    if (!data) {
      return {} as any;
    }
    return {
      ...data,
    };
  }, [data]);

  const { delete: handleDelete } = useCustomerDelete(onDeleteSuccess);

  return (
    <Drawer
      title={!!data?.id ? `编辑` : `新增`}
      placement="right"
      width={640}
      mask={true}
      closable={true}
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
            {data?.id && (
              <Button
                style={{ letterSpacing: '1rem' }}
                className="w-100"
                variant="light-danger"
                onClick={() => handleDelete(data)}
              >
                删除
              </Button>
            )}
          </Col>
        </Row>
      }
    >
      {data && (
        <CustomerForm
          submitting={submitting}
          data={defaultData}
          form={form}
          submit={submit}
          onDeleteSuccess={onDeleteSuccess}
        />
      )}
    </Drawer>
  );
}

export default CustomerDrawer;
