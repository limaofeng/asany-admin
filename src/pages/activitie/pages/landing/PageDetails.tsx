import { useCallback, useEffect, useMemo } from 'react';

import type { RouteComponentProps } from 'react-router';
// import Frame from 'react-frame-component';

import {
  useCreatePageMutation,
  useLandingPageLazyQuery,
  useLandingPostersQuery,
  useLandingStoresQuery,
  useUpdatePageMutation,
} from '../../hooks';

import { ContentWrapper } from '@/layouts/components';
import {
  BlockUI,
  Button,
  Card,
  DatePicker,
  Device,
  Form,
  Input,
  Modal,
  Select2,
  Separator,
  Toast,
  Upload,
} from '@/metronic';

type PageDetailsProps = RouteComponentProps<{ id: string }>;

function PageDetails(props: PageDetailsProps) {
  const { match, history } = props;

  const { data: storeData } = useLandingStoresQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      pageSize: 1000,
    },
  });
  const { data: posterData } = useLandingPostersQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      pageSize: 1000,
    },
  });

  const [loadPage, { data: viewData, loading: getLoading }] = useLandingPageLazyQuery({
    fetchPolicy: 'cache-and-network',
  });
  const [createPage, { loading: createSubmiting }] = useCreatePageMutation({});
  const [updatePage, { loading: updateSubmiting }] = useUpdatePageMutation({});

  const isNew = match.params.id == 'new';

  const form = Form.useForm();

  const handleSave = useCallback(async () => {
    const values = await form.validateFields();
    if (isNew) {
      await createPage({
        variables: {
          input: values,
        },
      });
    } else {
      await updatePage({
        variables: {
          id: match.params.id,
          input: values,
        },
      });
    }

    Toast.success(`活动 “${values.name}” ${isNew ? '新增' : '修改'}成功`, 2000, {
      placement: 'bottom-start',
      progressBar: true,
    });

    if (!history.length || isNew) {
      history.replace('/website/landing/pages');
    } else {
      history.go(-2);
    }
  }, [createPage, match.params.id, form, history, isNew, updatePage]);

  useEffect(() => {
    if (match.params.id == 'new') {
      return;
    }
    const abortController = new AbortController();
    loadPage({
      variables: { id: match.params.id },
      context: {
        fetchOptions: {
          signal: abortController.signal,
        },
      },
    }).then(async ({ data }) => {
      const page = data?.page;
      if (!page) {
        await Modal.error({
          content: '活动不存在,可能已经被删除了',
          timer: 3000,
          timerProgressBar: true,
        });
        if (!!history.length) {
          history.goBack();
        } else {
          history.replace('/website/landing/pages');
        }
        return;
      }
      form.setFieldsValue({
        ...page,
        metadata: { ...page.metadata, thumb: page.metadata?.thumb?.id },
        poster: page.poster?.id,
        stores: page.stores?.map((it) => it.id),
      });
    });
    return () => {
      abortController.abort();
    };
  }, [form, loadPage, history, match.params.id]);

  const stores = useMemo(() => {
    return storeData?.landingStores.edges.map(({ node }) => ({ value: node.id, label: node.name }));
  }, [storeData]);

  const posters = useMemo(() => {
    return posterData?.landingPosters.edges.map(({ node }) => ({
      value: node.id,
      label: node.name,
    }));
  }, [posterData]);

  const handleSelectStoresAll = useCallback(() => {
    if (!stores) {
      return;
    }
    form.setFieldsValue({ stores: stores.map((node) => node.value) });
  }, [form, stores]);

  return (
    <ContentWrapper header={isNew ? { title: '新增活动' } : undefined} footer={false}>
      <Card className="mb-5 mb-xl-10">
        <Card.Header>
          <Card.Title>{isNew ? '新增活动' : viewData?.page?.name}</Card.Title>
        </Card.Header>
        <Card.Body>
          <BlockUI zIndex={10} overlayClassName="bg-white bg-opacity-25" loading={getLoading}>
            <Form form={form}>
              <div className="mw-800px row d-flex flex-shrink-0 flex-column-reverse flex-md-row">
                <div className="col-12 col-md-8">
                  <Form.Item
                    className="mb-5"
                    name="name"
                    label="名称"
                    rules={[{ required: true, message: '名称不能为空' }]}
                  >
                    <Input solid className="w-400px" />
                  </Form.Item>
                  <Form.Item className="my-5" name="poster" label="海报">
                    <Select2 solid className="w-400px" options={posters} />
                  </Form.Item>
                  <Form.Item
                    className="my-5"
                    name="stores"
                    label={
                      <>
                        参加活动的门店
                        <a onClick={handleSelectStoresAll} className="ps-2 cursor-pointer">
                          添加全部门店
                        </a>
                      </>
                    }
                  >
                    <Select2 solid multiple className="w-400px" options={stores} />
                  </Form.Item>
                  <Form.Item className="my-5" name="start" label="开始时间">
                    <DatePicker solid className="w-400px" />
                  </Form.Item>
                  <Form.Item dependencies={['start']} noStyle={true}>
                    {() => {
                      return (
                        <Form.Item className="my-5" name="end" label="截止时间">
                          <DatePicker
                            solid
                            minDate={form.getFieldValue('start')}
                            className="w-400px"
                          />
                        </Form.Item>
                      );
                    }}
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
                  <Device.iPhoneX>
                    <Form.Item dependencies={['poster', 'stores']} noStyle>
                      {(_form) => {
                        const _poster = _form.getFieldValue('poster');
                        const _stores = _form.getFieldValue('stores');
                        return (
                          <iframe
                            src={
                              process.env.MOBILE_URL +
                              `/lps/0?&poster=${_poster}&stores=${_stores?.join(',')}`
                            }
                            style={{ width: '100%', height: '100%' }}
                          />
                        );
                      }}
                    </Form.Item>
                  </Device.iPhoneX>
                </div>
              </div>
              <div className="row">
                <h4 className="mt-10">HTML 页面元数据</h4>
                <Separator className="mt-4 mb-8" />
                <div className="mw-800px row d-flex flex-shrink-0 flex-column-reverse flex-md-row">
                  <div className="col-12 col-md-8">
                    <Form.Item
                      className="my-5 w-400px"
                      name={['metadata', 'title']}
                      label="标题"
                      help="可作为微信分享时,的标题"
                    >
                      <Input solid className="" />
                    </Form.Item>
                    <Form.Item
                      className="my-5 w-400px"
                      name={['metadata', 'description']}
                      label="描述"
                      help="请用少于250字符描述,可作为微信分享时的副标题"
                    >
                      <Input.TextArea
                        solid
                        autoSize={{ minRows: 4, maxRows: 8 }}
                        showCount
                        maxLength={250}
                      />
                    </Form.Item>
                  </div>
                  <div className="col-12 col-md-4">
                    <Form.Item
                      className="mb-5"
                      name={['metadata', 'thumb']}
                      label="缩略图"
                      help="可作为微信分享时的图片"
                    >
                      <Upload.Image
                        width={250}
                        height={250}
                        space="orX8kLOV"
                        crop={{ height: 300, zoomable: false, aspectRatio: 1 }}
                      />
                    </Form.Item>
                  </div>
                </div>
              </div>
            </Form>
          </BlockUI>
          <Button loading={getLoading || createSubmiting || updateSubmiting} onClick={handleSave}>
            {isNew ? <>添加活动</> : <>修改活动</>}
          </Button>
        </Card.Body>
      </Card>
    </ContentWrapper>
  );
}

export default PageDetails;
