import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router';

import { ContentWrapper } from '@/layouts/components';
import {
  BlockUI,
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  Select,
  Tabs,
  Toast,
} from '@/metronic';
import { Article, WarrantyPolicy } from '@/types';

import ProductArticleList from '../components/ProductArticleList';
import ProductImages from '../components/ProductImages';
import WarrantyPolicieList from '../components/WarrantyPolicieList';
import {
  useBrandsQuery,
  useProductQuery,
  useUpdateProductMutation,
} from '../hooks';

function ProductEditView() {
  const params = useParams();

  const form = Form.useForm();

  const { data: brandData } = useBrandsQuery({
    variables: {
      pageSize: 1000,
    },
    fetchPolicy: 'network-only',
  });
  const { loading, data, refetch } = useProductQuery({
    variables: {
      id: params.id,
    },
  });
  const [updateProduct] = useUpdateProductMutation();

  const brands = brandData?.result.edges.map((item) => item.node);

  const product = data?.result;
  const warrantyPolicies = product?.warrantyPolicies;
  const articleListMap = {
    knowledgebase: product?.knowledgebase,
    videos: product?.videos,
    tutorials: product?.tutorials,
    notebook: product?.notebook,
  };

  useEffect(() => {
    if (!product) {
      return;
    }
    form.setFieldsValue({
      brandId: product?.brand?.id,
      name: product.name,
      images: product.images,
    });
  }, [product]);

  const handleSave = useCallback(async () => {
    const values = await form.validateFields();
    console.log('values', values);

    values.images = values.images.map((item: any) => {
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
    await updateProduct({
      variables: {
        id: params.id,
        input: values,
      },
    });
    Toast.success('保存成功', 2000, {
      placement: 'top-center',
      progressBar: true,
    });
    refetch();
  }, [product, refetch]);

  return (
    <ContentWrapper
      loading={loading}
      header={{
        title: '编辑产品',
      }}
    >
      <Card className="mb-5 mb-xl-10">
        <Card.Header title="产品信息" />
        <Card.Body>
          <BlockUI overlayClassName="bg-white bg-opacity-25" loading={loading}>
            <Tabs
              type="line-tabs"
              defaultActiveKey="general"
              contentContainer={false}
              className="border-0 fs-4 fw-bold mb-n2 nav-line-tabs-2x"
            >
              <Tabs.TabPane key="general" tab="基本信息" forceRender>
                <div className="py-4">
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
                </div>
              </Tabs.TabPane>
              <Tabs.TabPane key="bx" tab="保修策略">
                <div className="py-4">
                  <WarrantyPolicieList
                    productId={params.id!}
                    warrantyPolicies={warrantyPolicies as WarrantyPolicy[]}
                    refetch={refetch}
                  />
                </div>
              </Tabs.TabPane>
              <Tabs.TabPane key="product-maintenance-video" tab="维护视频">
                <div className="py-4">
                  <ProductArticleList
                    productId={params.id!}
                    refetch={refetch}
                    categoryId="product-maintenance-video"
                    articles={articleListMap.videos as Article[]}
                  />
                </div>
              </Tabs.TabPane>
              <Tabs.TabPane key="product-knowledge-base" tab="知识库">
                <div className="py-4">
                  <ProductArticleList
                    productId={params.id!}
                    refetch={refetch}
                    categoryId="product-knowledge-base"
                    articles={articleListMap.knowledgebase as Article[]}
                  />
                </div>
              </Tabs.TabPane>
              <Tabs.TabPane key="product-manual" tab="产品手册">
                <div className="py-4">
                  <ProductArticleList
                    productId={params.id!}
                    refetch={refetch}
                    categoryId="product-manual"
                    articles={articleListMap.notebook as Article[]}
                  />
                </div>
              </Tabs.TabPane>
              <Tabs.TabPane key="product-maintenance-manual" tab="维护手册">
                <div className="py-4">
                  <ProductArticleList
                    productId={params.id!}
                    refetch={refetch}
                    categoryId="product-maintenance-manual"
                    articles={articleListMap.tutorials as Article[]}
                  />
                </div>
              </Tabs.TabPane>
            </Tabs>
          </BlockUI>
        </Card.Body>
      </Card>
    </ContentWrapper>
  );
}

export default ProductEditView;
