import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { ContentWrapper } from '@/layouts/components';
import {
  BlockUI,
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  RegionPicker,
  Row,
  Select,
  Tabs,
  Toast,
} from '@/metronic';
import { Customer, CustomerStore } from '@/types';

import {
  useCustomerStoresQuery,
  useCustomersQuery,
  useDeviceQuery,
  useProductAllQuery,
  useUpdateDeviceMutation,
} from '../hooks';

function DeviceDetailsView() {
  const params = useParams<{ id: string }>();

  const form = Form.useForm();
  const [state, setState] = useState<{
    customerId?: string;
  }>({});

  const { data: productsData, refetch } = useProductAllQuery({
    fetchPolicy: 'network-only',
  });

  const [updateDevice] = useUpdateDeviceMutation();

  const { data, loading } = useDeviceQuery({
    fetchPolicy: 'network-only',
    variables: {
      id: params.id,
    },
  });

  const { data: customersData } = useCustomersQuery({
    fetchPolicy: 'network-only',
  });
  const { data: customerStoresData } = useCustomerStoresQuery({
    fetchPolicy: 'network-only',
    skip: !state.customerId,
    variables: {
      where: {
        customer: state.customerId,
      },
    },
  });

  const device = data?.result;
  const product = device?.product;
  const store = device?.owner as CustomerStore;
  const customer = store?.customer as Customer;
  const warrantyPolicies =
    productsData?.products.find((p) => p.id === product?.id)
      ?.warrantyPolicies || [];
  const customers = customersData?.result || [];
  const stores = customerStoresData?.result || [];

  const handleSave = useCallback(async () => {
    const values = await form.validateFields();

    if (values.address) {
      delete values.address.provinceName;
      delete values.address.cityName;
      delete values.address.districtName;
      delete values.address.streetName;
      delete values.address.__typename;
    } else {
      values.address = {};
    }

    if (values.detailedAddress) {
      values.address['detailedAddress'] = values.detailedAddress;
      delete values.detailedAddress;
    }

    delete values.customer;

    values.owner = {
      id: values.customerStore.id,
      name: stores.find((store) => store.id === values.customerStore.id)?.name,
      type: 'CUSTOMER_STORE',
    };

    delete values.customerStore;
    delete values.productName;

    try {
      await Toast.promise(
        updateDevice({
          variables: {
            id: params.id,
            input: values,
          },
        }),
        {
          pending: '更新中...',
          success: `设备 “${values.name}” 更新成功`,
          error: '更新出错',
        },
        {
          duration: 2000,
          placement: 'top-center',
        },
      );
      refetch();
    } catch (error) {
      Toast.error('保存失败');
    }
  }, [stores]);

  const handleCustomerStoreChange = useCallback(
    (value?: string) => {
      if (!value) {
        return;
      }
      const store = stores.find((store) => store.id === value)!;
      if (!store) {
        return;
      }
      const clonedAddress = { ...store.address };
      delete clonedAddress.__typename;
      form.setFieldValue('address', clonedAddress);
      form.setFieldValue('detailedAddress', store.address?.detailedAddress);
      form.setFieldValue('contactInfo', store.contactInfo);
    },
    [stores],
  );

  const handleValuesChange = useCallback((changedValues: any) => {
    if (!changedValues.customer) {
      return;
    }
    setState({ customerId: changedValues.customer });
  }, []);

  useEffect(() => {
    if (loading) {
      return;
    }
    form.setFieldsValue({
      no: device?.no,
      sn: device?.sn,
      name: device?.name,
      purchaseDate: device?.purchaseDate,
      productName: product?.name,
      warrantyPolicyId: device?.warrantyCards?.reduce((max, player) => {
        return player.endDate > max.endDate ? player : max;
      }, device?.warrantyCards[0]).policy.id,
      warrantyStartDate: device?.warrantyStartDate,
      warrantyEndDate: device?.warrantyEndDate,
      customer: customer.id,
      customerStore: {
        id: String(store.id),
      },
      address: device?.address,
      detailedAddress: device?.address?.detailedAddress,
      contactInfo: device?.contactInfo,
    });
    setState((state) => {
      state.customerId = customer.id;
      return state;
    });
  }, [device, product, loading]);

  return (
    <ContentWrapper
      loading={loading}
      header={{
        title: '编辑设备',
      }}
    >
      <Card className="mb-5 mb-xl-10">
        <Card.Body>
          <BlockUI overlayClassName="bg-white bg-opacity-25" loading={loading}>
            <Form
              onValuesChange={handleValuesChange}
              form={form}
              className="form d-flex flex-column"
            >
              <Tabs
                type="line-tabs"
                tabContentClassName="mw-800px"
                defaultActiveKey="general"
                contentContainer={false}
                className="border-0 fs-4 fw-bold mb-n2 nav-line-tabs-2x"
              >
                <Tabs.TabPane key="general" tab="设备信息" forceRender>
                  <div className="py-4">
                    <Row className="mt-5">
                      <Col span={6}>
                        <Form.Item
                          className="mb-5"
                          name="productName"
                          label="产品"
                        >
                          <Input solid readOnly />
                        </Form.Item>
                      </Col>
                      <Col span={6}>
                        <Form.Item
                          className="mb-5"
                          name="name"
                          label="名称"
                          rules={[{ required: true, message: '请输入名称' }]}
                        >
                          <Input solid />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row className="mt-5">
                      <Col span={6}>
                        <Form.Item className="mb-5" name="no" label="资产编号">
                          <Input solid />
                        </Form.Item>
                      </Col>
                      <Col span={6}>
                        <Form.Item
                          className="mb-5"
                          name="sn"
                          label="产品序列号"
                          rules={[{ required: true, message: '请输入序列号' }]}
                        >
                          <Input solid />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row className="mt-5">
                      <Col span={6}>
                        <Form.Item
                          className="mb-5"
                          name="purchaseDate"
                          label="购买日期"
                        >
                          <DatePicker />
                        </Form.Item>
                      </Col>
                      <Col span={6} />
                    </Row>
                  </div>
                </Tabs.TabPane>
                <Tabs.TabPane key="bx" tab="保修信息" forceRender>
                  <div className="py-4">
                    <Row className="mt-5">
                      <Col span={6}>
                        <Form.Item
                          className="mb-5"
                          name="warrantyPolicyId"
                          label="保修策略"
                        >
                          <Select
                            solid
                            options={warrantyPolicies.map((p) => ({
                              label: p.name!,
                              value: p.id,
                            }))}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={6} />
                    </Row>
                    <Row className="mt-5">
                      <Col span={6}>
                        <Form.Item
                          className="mb-5"
                          name="warrantyStartDate"
                          label="保修开始日期"
                        >
                          <DatePicker />
                        </Form.Item>
                      </Col>
                      <Col span={6}>
                        <Form.Item
                          className="mb-5"
                          name="warrantyEndDate"
                          label="保修结束日期"
                        >
                          <DatePicker />
                        </Form.Item>
                      </Col>
                    </Row>
                  </div>
                </Tabs.TabPane>
                <Tabs.TabPane
                  key="product-maintenance-video"
                  tab="门店信息"
                  forceRender
                >
                  <div className="py-4">
                    <Row className="mt-5">
                      <Col span={6}>
                        <Form.Item
                          className="mb-5"
                          name="customer"
                          label="客户"
                          rules={[
                            { required: true, message: '请选择一个客户' },
                          ]}
                        >
                          <Select
                            solid
                            options={customers.map((c) => ({
                              label: c.name!,
                              value: c.id,
                            }))}
                            onChange={handleCustomerStoreChange}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={6}>
                        <Form.Item
                          className="mb-5"
                          name={['customerStore', 'id']}
                          label="门店"
                          rules={[
                            { required: true, message: '请选择一个门店' },
                          ]}
                        >
                          <Select
                            solid
                            options={stores.map((c) => ({
                              label: c.name!,
                              value: c.id,
                            }))}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row className="mt-5">
                      <Col span={12}>
                        <Form.Item
                          className="mb-5"
                          name="address"
                          label="所在地区"
                        >
                          <RegionPicker ends="district" resultType="object" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={12}>
                        <Form.Item
                          className="mb-5"
                          name="detailedAddress"
                          label="详细地址"
                        >
                          <Input.TextArea />
                        </Form.Item>
                      </Col>
                    </Row>
                  </div>
                </Tabs.TabPane>
                <Tabs.TabPane
                  key="product-knowledge-base"
                  tab="联系方式"
                  forceRender
                >
                  <div className="py-4">
                    <Row className="mt-5">
                      <Col span={6}>
                        <Form.Item
                          className="mb-5"
                          name={['contactInfo', 'name']}
                          label="联系人"
                        >
                          <Input solid />
                        </Form.Item>
                      </Col>
                      <Col span={6}>
                        <Form.Item
                          className="mb-5"
                          name={['contactInfo', 'phone']}
                          label="联系电话"
                        >
                          <Input solid />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row className="mt-5">
                      <Col span={6}>
                        <Form.Item
                          className="mb-5"
                          name={['contactInfo', 'email']}
                          label="电子邮箱"
                        >
                          <Input solid />
                        </Form.Item>
                      </Col>
                      <Col span={6} />
                    </Row>
                  </div>
                </Tabs.TabPane>
              </Tabs>
              <Button className="w-100px" onClick={handleSave}>
                保存
              </Button>
            </Form>
          </BlockUI>
        </Card.Body>
      </Card>
    </ContentWrapper>
  );
}

export default DeviceDetailsView;
