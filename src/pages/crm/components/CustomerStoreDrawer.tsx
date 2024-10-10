import { useEffect, useMemo } from 'react';

import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  RegionPicker,
  Row,
} from '@/metronic';
import type { FormInstance } from '@/metronic/Form';
import type { CustomerStore } from '@/types';

import useCustomerStoreDelete from '../hooks/useCustomerStoreDelete';
import useCustomerStoreSubmit from '../hooks/useCustomerStoreSubmit';

type CustomerStoreFormProps = {
  visible?: boolean;
  form: FormInstance;
  data: CustomerStore;
  submitting: boolean;
  submit: () => void;
  onDeleteSuccess: (data: any) => void;
};

function CustomerStoreForm(props: CustomerStoreFormProps) {
  const { form } = props;

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { address: { ...address } = {}, ...values } = props.data;
    if (!values.id) {
      form.resetFields();
    }
    delete address.fullAddress;
    form.setFieldsValue({
      ...values,
      address,
      detailedAddress: address?.detailedAddress,
    });
  }, [form, props.data]);

  return (
    <Form form={form}>
      <Row>
        <Col span={6}>
          <Form.Item
            name="no"
            className="d-flex flex-column mb-7"
            required
            label="门店编号"
            rules={[{ required: true, message: '请输入门店编号' }]}
          >
            <Input solid />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            name="name"
            className="d-flex flex-column mb-7"
            required
            label="门店名称"
            rules={[{ required: true, message: '请输入门店名称' }]}
          >
            <Input solid />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Form.Item
            name="openingDate"
            className="d-flex flex-column mb-7"
            required
            label="开业时间"
            rules={[{ required: true, message: '请输入门店开业时间' }]}
          >
            <DatePicker className="w-100" solid />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item
            name="phone"
            className="d-flex flex-column mb-7"
            required
            label="门店电话"
          >
            <Input solid />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Form.Item
            name="address"
            className="d-flex flex-column mb-7"
            required
            label="门店地址"
          >
            <RegionPicker
              solid
              resultType="object"
              className="w-400px"
              ends="district"
              placeholder="--请选择--"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Form.Item
            name="detailedAddress"
            className="d-flex flex-column mb-7"
            required
            label="详细地址"
          >
            <Input.TextArea solid autoSize={{ minRows: 6 }} />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
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
            label="联系人电话"
          >
            <Input solid />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            name={['contactInfo', 'email']}
            className="d-flex flex-column mb-7"
            required
            label="联系人邮箱"
          >
            <Input solid />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

type CustomerStoreDrawerProps = {
  data?: CustomerStore;
  visible: boolean;
  onClose: () => void;
  onSuccess: (data: CustomerStore) => void;
  onDeleteSuccess: (data: CustomerStore) => void;
};

function CustomerStoreDrawer(props: CustomerStoreDrawerProps) {
  const { data, visible, onClose, onSuccess, onDeleteSuccess } = props;

  const customerId = data?.customer;

  const [submit, { form, submitting }] = useCustomerStoreSubmit(data!, {
    transform({ detailedAddress, address, ...data }, type) {
      delete address.__typename;

      const values = {
        ...data,
        address: {
          ...address,
          detailedAddress,
        },
      };

      if (type === 'create') {
        values.customer = customerId;
      }

      return values;
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

  const { delete: handleDelete } = useCustomerStoreDelete((data) =>
    onDeleteSuccess(data),
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
        <CustomerStoreForm
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

export default CustomerStoreDrawer;
