import { useEffect, useMemo } from 'react';

import { Radio } from 'antd';

import {
  Button,
  Col,
  Drawer,
  Form,
  Input,
  RegionPicker,
  Row,
} from '@/metronic';
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

const TicketStrategyOptions = [
  {
    label: '不处理',
    value: 'NONE',
  },
  {
    label: '自动分配',
    value: 'AUTO',
  },
  {
    label: '客户分配',
    value: 'ASSIGN',
  },
];

function CustomerForm(props: CustomerFormProps) {
  const { form } = props;

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const values = props.data;
    if (!values.id) {
      form.resetFields();
    }
    console.log('CustomerForm', values);
    form.setFieldsValue({
      ...values,
    });
  }, [form, props.data]);

  return (
    <Form form={form}>
      <Row>
        <Col span={9}>
          <Form.Item
            name="name"
            className="d-flex flex-column mb-7"
            required
            label="名称"
            rules={[{ required: true, message: '请输入客户名称' }]}
          >
            <Input solid />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={9}>
          <Form.Item
            name={['contactInfo', 'address']}
            className="d-flex flex-column mb-7"
            required
            label="地址"
          >
            <RegionPicker
              solid
              resultType="object"
              ends="district"
              placeholder="--请选择--"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={9}>
          <Form.Item
            name="detailedAddress"
            className="d-flex flex-column mb-7"
            required
            label="详细地址"
          >
            <Input.TextArea solid autoSize={{ minRows: 1 }} />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={9}>
          <Form.Item
            name={['contactInfo', 'name']}
            className="d-flex flex-column mb-7"
            required
            label="联系人"
          >
            <Input solid />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Form.Item
            name={['contactInfo', 'phone']}
            className="d-flex flex-column mb-7"
            required
            label="电话"
          >
            <Input solid />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            name={['contactInfo', 'email']}
            className="d-flex flex-column mb-7"
            required
            label="邮箱"
          >
            <Input solid />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={9}>
          <Form.Item
            name="ticketStrategy"
            className="d-flex flex-column mb-7"
            required
            label="服务单处理策略"
            rules={[{ required: true, message: '请选择服务单处理策略' }]}
          >
            <Radio.Group options={TicketStrategyOptions} />
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
    transform({ detailedAddress, contactInfo, ...data }) {
      console.log('transform', data);
      return {
        ...data,
        contactInfo: {
          ...contactInfo,
          address: {
            ...contactInfo.address,
            detailedAddress,
          },
        },
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
      detailedAddress: data.contactInfo?.address?.detailedAddress,
    };
  }, [data]);

  const { delete: handleDelete } = useCustomerDelete(() =>
    onDeleteSuccess(data!),
  );

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
