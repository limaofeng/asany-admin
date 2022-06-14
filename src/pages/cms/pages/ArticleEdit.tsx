import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { Affix } from 'antd';
import classnames from 'classnames';
import type { RouteComponentProps } from 'react-router';
import { history, Link } from 'umi';

import ArticleFormSidebar from '../components/ArticleFormSidebar';
import { Advanced, General, Metadata } from '../components/bodys/classic';
import { useArticleQuery, useUpdateArticleMutation } from '../hooks';

import { ContentWrapper } from '@/layouts/components';
import { Breadcrumb, Button, Form, Tabs, Toast } from '@/metronic';
import type { QueueUploadRef } from '@/metronic/typings';
import type { ArticleCategory } from '@/types';
import { tree } from '@/utils';

type ArticleEditProps = RouteComponentProps<
  { cid: string; id: string },
  any,
  { rootCategoryId: string; categories: ArticleCategory[]; baseUrl: string }
>;

function ArticleEdit(props: ArticleEditProps) {
  const {
    match: {
      params: { cid: channelId, id },
    },
    location: {
      state: { rootCategoryId, categories, baseUrl },
    },
  } = props;

  const queueUpload = useRef<QueueUploadRef>(null);

  const form = Form.useForm();

  const { data, loading } = useArticleQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      id,
    },
  });

  const article = data?.article;

  const categoryTreeData = useMemo(() => {
    if (!categories || !categories.length) {
      return [];
    }
    return tree<any, { value: string; title: string }>(
      categories.map((item: any) => ({ ...item, value: item.id, title: item.name })),
      {
        idKey: 'id',
        childrenKey: 'children',
        pidKey: 'parent.id',
        sort: (left: any, right: any) => left.index - right.index,
      },
    );
  }, [categories]);

  const [updateArticle, { loading: submitting }] = useUpdateArticleMutation();

  const [storeTemplate, setStoreTemplate] = useState<string | undefined>();

  const handleChangeCategory = useCallback(
    (cid) => {
      const category = categories.find((item) => item.id == cid);
      setStoreTemplate(category?.storeTemplate?.id);
    },
    [categories],
  );

  useEffect(() => {
    if (!categories || !categories.length || !article) {
      return;
    }
    setStoreTemplate(categories.find((item) => item.id == article.category?.id)?.storeTemplate?.id);
  }, [article, categories]);

  const handleFinish = useCallback(async () => {
    await queueUpload.current?.uploadAll();
    const { meta, category, body, ...values } = await form.validateFields();

    const types: any = {
      seo_title: 'single_line_text_field',
      seo_description: 'multi_line_text_field',
      seo_keywords: 'list.single_line_text_field',
    };

    const metafields = [];
    for (const namespace of Object.keys(meta)) {
      for (const key of Object.keys(meta[namespace])) {
        metafields.push({
          namespace,
          key,
          value: meta[namespace][key],
          type: types[namespace + '_' + key],
        });
      }
    }

    console.log('submit params', values, metafields);
    const updateArticleAwait = updateArticle({
      variables: {
        id,
        input: {
          ...values,
          metafields,
          category: category.id,
          body: { type: 'HTML', text: body.text },
        },
      },
    });
    const _data = await Toast.promise(
      updateArticleAwait,
      {
        pending: '提交中...',
        success: `“${values.title}” 修改成功`,
        error: '提交出错',
      },
      {
        duration: 2000,
        placement: 'top-center',
      },
    );
    if (!history.length) {
      history.replace(`${baseUrl}/cms/categories/${category.id}/articles`);
    } else {
      history.goBack();
    }
    console.log('submit result set', _data);
  }, [form, updateArticle, id, baseUrl]);

  useEffect(() => {
    if (!article) {
      return;
    }
    form.setFieldsValue({
      ...article,
    });
  }, [article, form]);

  console.log('storeTemplate', storeTemplate);

  return (
    <ContentWrapper
      loading={loading}
      header={{
        title: '编辑文章',
      }}
      breadcrumb={
        <Breadcrumb className="fw-bold fs-base text-muted my-1">
          {article ? (
            <>
              {article.categories
                .filter((item) => item.id != rootCategoryId)
                .map((item) => (
                  <Breadcrumb.Item key={item.id}>
                    <Link
                      to={`${baseUrl}/cms/categories/${item.id}/articles`}
                      className="text-muted"
                    >
                      {item.name}
                    </Link>
                  </Breadcrumb.Item>
                ))}
              <Breadcrumb.Item className="text-dark">{article?.title}</Breadcrumb.Item>
            </>
          ) : (
            <Breadcrumb.Item>加载中...</Breadcrumb.Item>
          )}
        </Breadcrumb>
      }
    >
      <Form
        onFinish={handleFinish}
        form={form}
        initialValues={{ status: 'DRAFT', channel: channelId }}
        className="form d-flex flex-column flex-lg-row"
      >
        <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10  me-lg-10">
          <Tabs
            defaultActiveKey="general"
            renderContainer={false}
            className="border-0 fs-4 fw-bold mb-n2 nav-line-tabs-2x"
          >
            <Tabs.TabPane key="general" tab="基本信息" forceRender>
              <General queueUpload={queueUpload} />
            </Tabs.TabPane>
            <Tabs.TabPane key="advanced" tab="高级设置" forceRender>
              <Advanced />
            </Tabs.TabPane>
            <Tabs.TabPane key="meta" tab="元数据" forceRender>
              <Metadata />
            </Tabs.TabPane>
          </Tabs>
          <Affix offsetBottom={16}>
            <div
              className={classnames(
                'd-flex bg-body-color p-5 mx-4 tw-rounded-2xl justify-content-end',
              )}
            >
              <Button variant="light" className="me-5">
                取消
              </Button>
              <Button as="button" htmlType="submit" loading={submitting}>
                {false ? '保存中...' : '保存更改'}
              </Button>
            </div>
          </Affix>
        </div>
        <ArticleFormSidebar
          categoryTreeData={categoryTreeData}
          onChangeCategory={handleChangeCategory}
        />
      </Form>
    </ContentWrapper>
  );
}

export default ArticleEdit;
