import { useCallback } from 'react';
import { useNavigate } from 'react-router';

import { ContentWrapper } from '@/layouts/components';
import { Button, Card, Col, Form, Input, Row, Select, Toast } from '@/metronic';

import ProductImages from '../components/ProductImages';
import { useBrandsQuery, useCreateProductMutation } from '../hooks';

function ProductNewView() {
  const navigate = useNavigate();
  const form = Form.useForm();

  const { data: brandData } = useBrandsQuery({
    variables: {
      pageSize: 1000,
    },
    fetchPolicy: 'network-only',
  });
  const [createProduct] = useCreateProductMutation();

  const handleSave = useCallback(async () => {
    const values = await form.validateFields();

    values.images = (values.images || []).map((item: any) => {
      const img = { ...item };
      if (img.hasOwnProperty('__typename')) {
        delete img.__typename;
      }
      if (img.data_state === 'new') {
        delete img.id;
      }
      delete img.data_state;
      if (img.hasOwnProperty('image') && !!img.image) {
        if (typeof img.image === 'object') {
          img.image = img.image.id;
        }
        delete img.url;
      }
      return img;
    });
    const { data } = await createProduct({
      variables: {
        input: values,
      },
    });
    Toast.success('保存成功', 2000, {
      placement: 'top-center',
      progressBar: true,
    });
    navigate('/pim/products/' + data!.result.id, {
      replace: true,
    });
  }, []);

  const brands = brandData?.result.edges.map((item) => item.node) || [];

  // useEffect(() => {
  //   if (brands.length === 0) {
  //     return;
  //   }
  //   form.setFieldsValue({
  //     brandId: brands[0].id,
  //   });
  // }, [brands.length]);

  return (
    <ContentWrapper
      header={{
        title: '新建产品',
      }}
    >
      <Card>
        <Card.Header>
          <Card.Title>新建产品</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form form={form} className="form d-flex flex-column">
            <Row className="mt-5">
              <Col span={6}>
                <Form.Item
                  className="mb-5"
                  name="brandId"
                  label="品牌"
                  rules={[{ required: true, message: '品牌不能为空' }]}
                >
                  <Select
                    className="w-400px"
                    options={
                      brands?.map((item) => ({
                        label: item.name!,
                        value: item.id!,
                      })) || []
                    }
                  />
                </Form.Item>
                <Form.Item
                  className="mb-5"
                  name="name"
                  label="名称"
                  rules={[{ required: true, message: '名称不能为空' }]}
                >
                  <Input solid className="w-400px" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  className="mb-5"
                  name="images"
                  label="产品图片"
                  noStyle
                >
                  <ProductImages />
                </Form.Item>
              </Col>
            </Row>
            <Button className="w-100px" onClick={handleSave}>
              保存
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </ContentWrapper>
  );
}

export default ProductNewView;
