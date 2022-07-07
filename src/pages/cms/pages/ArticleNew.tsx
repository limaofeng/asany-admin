import { useCallback, useMemo, useReducer, useRef, useState } from 'react';

import { Affix } from 'antd';
import classnames from 'classnames';
import type { Moment } from 'moment';
import moment from 'moment';
import type { RouteComponentProps } from 'react-router';
import { history } from 'umi';

import ArticleFormSidebar from '../components/ArticleFormSidebar';
import { Advanced, General, Metadata, PublishButton } from '../components/bodys/classic';
import type { PublishAction } from '../components/bodys/classic/PublishButton';
import { useCreateArticleMutation } from '../hooks';

import { ContentWrapper } from '@/layouts/components';
import { Button, Form, Tabs, Toast } from '@/metronic';
import type { QueueUploadRef } from '@/metronic/typings';
import type { Article, ArticleCategory } from '@/types';
import { delay, tree } from '@/utils';

import '../style/ArticleForm.scss';

type ArticleCategoryNewProps = RouteComponentProps<
  { cid: string; id: string },
  any,
  { rootCategoryId: string; categories: ArticleCategory[]; baseUrl: string }
>;

function ArticleCategoryNew(props: ArticleCategoryNewProps) {
  const {
    match: {
      params: { cid: categoryId },
    },
    location: {
      state: { categories, baseUrl },
    },
  } = props;

  const temp = useRef<{
    publishedAt: Moment;
    action?: PublishAction | 'draft';
    article?: Article;
  }>({
    action: 'draft',
    publishedAt: moment(),
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const queueUpload = useRef<QueueUploadRef>(null);

  const form = Form.useForm();

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

  const [createArticle, { loading: submitting }] = useCreateArticleMutation();

  const [storeTemplate, setStoreTemplate] = useState<string | undefined>();

  const handleChangeCategory = useCallback(
    (cid: string) => {
      const category = categories.find((item) => item.id == cid);
      setStoreTemplate(category?.storeTemplate?.id);
    },
    [categories],
  );

  // const breadcrumbCategories = useMemo(() => {
  //   const category = categories.find((item) => item.id == categoryId);
  //   return (category?.path?.split('/') || [])
  //     .map((_categoryId) => categories.find((item) => item.id == _categoryId)!)
  //     .filter((item) => item);
  // }, [categories, categoryId]);

  const handleSubmit = useCallback(
    async (action: PublishAction | 'draft') => {
      temp.current.action = action;

      await queueUpload.current?.uploadAll();
      const {
        meta,
        category,
        body,
        publishedAt: _publishedAt,
        ...values
      } = await form.validateFields();

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

      const input = {
        ...values,
        metafields,
        category: category.id,
        body: { type: 'HTML', text: body.text },
      };

      if (action == 'publish') {
        input.status = 'PUBLISHED';
      } else if (action == 'schedule') {
        input.status = 'SCHEDULED';
        input.publishedAt = _publishedAt;
      } else {
        input.status = 'DRAFT';
      }

      const createArticleAwait = createArticle({
        variables: {
          input,
        },
      });
      const _data = await Toast.promise(
        delay(createArticleAwait, 350),
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
      history.replace(`${baseUrl}/cms/categories/${category.id}/articles/${_data.data.article.id}`);
      console.log('submit result set', _data);
    },
    [baseUrl, createArticle, form],
  );

  const handleSaveDraft = useCallback(() => {
    handleSubmit('draft');
  }, [handleSubmit]);

  const handlePublish = useCallback(
    (action: PublishAction) => {
      handleSubmit(action);
    },
    [handleSubmit],
  );

  const publishedAt = temp.current.publishedAt;
  const handlePublishedAtChange = useCallback(
    (_publishedAt: Moment) => {
      temp.current.publishedAt = _publishedAt;
      form.setFieldsValue({ publishedAt: _publishedAt });
      forceRender();
    },
    [form],
  );

  const handlePublishCancel = useCallback(() => {
    temp.current.publishedAt = moment();
    forceRender();
    form.setFieldsValue({ publishedAt: temp.current.publishedAt });
  }, [form]);

  console.log('storeTemplate', storeTemplate, publishedAt);

  return (
    <ContentWrapper
      header={{
        title: '新增文章',
      }}
      // breadcrumb={
      //   <Breadcrumb className="fw-bold fs-base text-muted my-1">
      //     <Breadcrumb.Item key="website">互升官网</Breadcrumb.Item>
      //     <Breadcrumb.Item key="column">栏目</Breadcrumb.Item>
      //     {breadcrumbCategories ? (
      //       <>
      //         {breadcrumbCategories
      //           .filter((item) => item.id != rootCategoryId)
      //           .map((item) =>
      //             item.id == categoryId ? (
      //               <Breadcrumb.Item key={item.id} className="text-dark">
      //                 {item.name}
      //               </Breadcrumb.Item>
      //             ) : (
      //               <Breadcrumb.Item key={item.id}>
      //                 <Link
      //                   to={`${baseUrl}/cms/categories/${item.id}/articles`}
      //                   className="text-muted"
      //                 >
      //                   {item.name}
      //                 </Link>
      //               </Breadcrumb.Item>
      //             ),
      //           )}
      //       </>
      //     ) : (
      //       <Breadcrumb.Item>加载中...</Breadcrumb.Item>
      //     )}
      //   </Breadcrumb>
      // }
    >
      <Form
        form={form}
        initialValues={{ status: 'DRAFT', publishedAt, category: { id: categoryId } }}
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
              <Button
                variant="light"
                loading={temp.current.action == 'draft' && submitting}
                onClick={handleSaveDraft}
                className="me-5"
              >
                {!temp.current.action && submitting ? '保存中...' : '保存草稿'}
              </Button>
              <PublishButton
                onPublish={handlePublish}
                publishedAt={publishedAt}
                submitting={temp.current.action != 'draft' && submitting}
                setPublishedAt={handlePublishedAtChange}
                onCancel={handlePublishCancel}
              />
            </div>
          </Affix>
        </div>
        <ArticleFormSidebar
          baseUrl={baseUrl}
          categoryTreeData={categoryTreeData}
          onChangeCategory={handleChangeCategory}
        />
      </Form>
    </ContentWrapper>
  );
}

export default ArticleCategoryNew;
