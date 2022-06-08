import { useCallback, useEffect } from 'react';

import type { RouteComponentProps } from 'react-router';

import {
  useCreateStoreMutation,
  useGeocodeLazyQuery,
  useLandingStoreLazyQuery,
  useUpdateStoreMutation,
} from '../../hooks';

import { ContentWrapper } from '@/layouts/components';
import {
  BlockUI,
  Button,
  Card,
  Form,
  Input,
  Modal,
  RegionPicker,
  Spin,
  Toast,
  Upload,
} from '@/metronic';
import { useAreas } from '@/metronic/hooks';

type StoreDetailsProps = RouteComponentProps<{ id: string }>;

function StoreDetails(props: StoreDetailsProps) {
  const { match, history } = props;

  const [, { loadRegion }] = useAreas();

  const [loadStore, { data: viewData, loading: getLoading }] = useLandingStoreLazyQuery({
    fetchPolicy: 'cache-and-network',
  });
  const [loadGeocode, { loading: geoLoading }] = useGeocodeLazyQuery({
    fetchPolicy: 'cache-and-network',
  });
  const [createStore, { loading: createSubmiting }] = useCreateStoreMutation({});
  const [updateStore, { loading: updateSubmiting }] = useUpdateStoreMutation({});

  const isNew = match.params.id == 'new';

  const form = Form.useForm();

  const handleSave = useCallback(async () => {
    const { detailedAddress, address, ...values } = await form.validateFields();

    if (isNew) {
      await createStore({
        variables: {
          input: {
            ...values,
            address: { ...address, detailedAddress },
          },
        },
      });
    } else {
      await updateStore({
        variables: {
          id: match.params.id,
          input: {
            ...values,
            address: { ...address, detailedAddress },
          },
        },
      });
    }

    Toast.success(`门店 “${values.name}” ${isNew ? '新增' : '修改'}成功`, 2000, {
      placement: 'bottom-start',
      progressBar: true,
    });

    if (!!history.length) {
      history.goBack();
    } else {
      history.replace('/website/landing/stores');
    }
  }, [createStore, match.params.id, form, history, isNew, updateStore]);

  useEffect(() => {
    if (match.params.id == 'new') {
      return;
    }
    const abortController = new AbortController();
    loadStore({
      variables: { id: match.params.id },
      context: {
        fetchOptions: {
          signal: abortController.signal,
        },
      },
    }).then(async ({ data }) => {
      console.log('loadStore', data?.store);
      const store = data?.store;
      if (!store) {
        await Modal.error({
          content: '门店不存在,可能已经被删除了',
          timer: 3000,
          timerProgressBar: true,
        });
        if (!history.length || isNew) {
          history.replace('/website/landing/stores');
        } else {
          history.goBack();
        }
        return;
      }
      const { __typename: x, ...location } = store.location || {};
      const { __typename: y, detailedAddress, ...address } = store.address || {};
      form.setFieldsValue({
        ...store,
        address,
        location,
        detailedAddress,
        qrCode: store.qrCode?.id,
      });
    });
    return () => {
      abortController.abort();
    };
  }, [form, loadStore, history, match.params.id, isNew]);

  const handlePasteAddress = useCallback(
    async (e: React.ClipboardEvent) => {
      const address = form.getFieldValue('address');
      const location = form.getFieldValue('location');
      if (!!address) {
        return;
      }
      let detailedAddress = e.clipboardData.getData('text/plain');

      if (!['省', '市', '区', '县'].some((k) => detailedAddress.includes(k))) {
        return;
      }

      const { data: _data } = await loadGeocode({
        variables: {
          address: detailedAddress,
        },
      });

      const geocode = _data!.amapOpenAPI!.geocodes[0];

      const _address = await loadRegion(geocode.adcode!);

      const index = detailedAddress.indexOf(geocode.district!);
      if (index != -1) {
        detailedAddress = detailedAddress.substring(index + geocode.district!.length);
      }

      if (location == null) {
        const [longitude, latitude] = geocode.location!.split(',');
        form.setFieldsValue({
          address: _address,
          detailedAddress,
          location: { longitude, latitude },
        });
      } else {
        form.setFieldsValue({ address: _address, detailedAddress });
      }
    },
    [form, loadRegion, loadGeocode],
  );

  const handleGeolocation = useCallback(async () => {
    const values = form.getFieldsValue();
    if (!values.address || !values.detailedAddress) {
      Modal.warning({
        content: '请确保地区与详细地址已经录入',
        timer: 3000,
        timerProgressBar: true,
      });
      return;
    }
    const { data: _data } = await loadGeocode({
      variables: {
        city: values.address[values.address.length - 1],
        address: values.detailedAddress,
      },
    });
    const [longitude, latitude] = _data!.amapOpenAPI!.geocodes[0].location!.split(',');
    form.setFieldsValue({ location: { longitude, latitude } });
  }, [form, loadGeocode]);

  return (
    <ContentWrapper header={isNew ? { title: '新增门店' } : undefined} footer={false}>
      <Card className="mb-5 mb-xl-10">
        <Card.Header>
          <Card.Title>{isNew ? '新增门店' : viewData?.store?.name}</Card.Title>
        </Card.Header>
        <Card.Body>
          <BlockUI overlayClassName="bg-white bg-opacity-25" loading={getLoading}>
            <Form
              form={form}
              className="w-800px row d-flex flex-shrink-0 flex-column-reverse flex-md-row"
            >
              <div className="col-12 col-md-8">
                <Form.Item
                  className="mb-5"
                  name="code"
                  label="店号"
                  rules={[{ required: true, message: '店号不能为空' }]}
                  help="请尽量保证店铺编号的唯一性"
                >
                  <Input solid className="w-400px" />
                </Form.Item>
                <Form.Item
                  className="mb-5"
                  name="name"
                  label="名称"
                  rules={[{ required: true, message: '名称不能为空' }]}
                >
                  <Input solid className="w-400px" />
                </Form.Item>
                <Form.Item className="my-5" name="address" label="所在地区">
                  <RegionPicker
                    solid
                    resultType="object"
                    className="w-400px"
                    ends="district"
                    placeholder="--请选择--"
                  />
                </Form.Item>
                <Form.Item
                  className="my-5"
                  name="detailedAddress"
                  label="详细地址"
                  help="直接粘贴完整地址,会自动识别所在地区与地理位置"
                >
                  <Input.TextArea solid className="w-400px" onPaste={handlePasteAddress} />
                </Form.Item>
                <Form.Item
                  className="my-5"
                  labelClassName="d-inline-flex align-items-center"
                  label={
                    <>
                      地理位置
                      <a
                        onClick={geoLoading ? undefined : handleGeolocation}
                        className="ps-2 cursor-pointer"
                      >
                        {geoLoading ? '识别中,请稍等...' : '通过地址识别'}
                      </a>
                      <Spin
                        className="text-primary d-inline-flex align-items-center ms-2"
                        size="small"
                        spinning={geoLoading}
                      />
                    </>
                  }
                  help="高德坐标系经纬度，且不超过6位小数，均不填则自动识别"
                >
                  <Input.Group solid className="w-400px">
                    <Input.Group.Text>经度</Input.Group.Text>
                    <Form.Item noStyle name={['location', 'longitude']}>
                      <Input />
                    </Form.Item>
                    <Input.Group.Text>纬度</Input.Group.Text>
                    <Form.Item noStyle name={['location', 'latitude']}>
                      <Input />
                    </Form.Item>
                  </Input.Group>
                </Form.Item>
                <Form.Item className="my-5" name="leader" label="负责人">
                  <Input solid className="w-400px" />
                </Form.Item>
                <Form.Item
                  className="my-5"
                  name="description"
                  label="描述"
                  help="请用少于250字符描述"
                >
                  <Input.TextArea
                    solid
                    autoSize={{ minRows: 4, maxRows: 8 }}
                    showCount
                    maxLength={250}
                    className="w-400px"
                  />
                </Form.Item>
              </div>
              <div className="col-12 col-md-4">
                <Form.Item className="mb-5" name="qrCode" label="门店二维码">
                  <Upload.Image
                    width={250}
                    height={250}
                    space="orX8kLOV"
                    crop={{ height: 450, zoomable: false, aspectRatio: 1 }}
                    backgroundImage="/assets/media/background/qrcode_icon.png"
                  />
                </Form.Item>
              </div>
            </Form>
          </BlockUI>
          <Button loading={getLoading || createSubmiting || updateSubmiting} onClick={handleSave}>
            {isNew ? <>添加门店</> : <>修改门店信息</>}
          </Button>
        </Card.Body>
      </Card>
    </ContentWrapper>
  );
}

export default StoreDetails;
