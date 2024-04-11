import { useCallback, useMemo, useReducer, useRef } from 'react';

import { useNavigate, useOutletContext, useParams } from '@umijs/max';
import classnames from 'classnames';
import type { Moment } from 'moment';
import moment from 'moment';

import { ContentWrapper } from '@/layouts/components';
import { Breadcrumb, Button, Form, Modal, Tabs, Toast } from '@/metronic';
import type { QueueUploadRef } from '@/metronic/typings';
import type { Article } from '@/types';
import { delay, tree } from '@/utils';

import ArticleBreadcrumb from '../article/ArticleBreadcrumb';
import ArticleFormSidebar from '../components/ArticleFormSidebar';
import {
  Advanced,
  General,
  Metadata,
  PublishButton,
} from '../components/bodys/classic';
import type { PublishAction } from '../components/bodys/classic/PublishButton';
import { useArticleCategoryQuery, useCreateArticleMutation } from '../hooks';
import { ArticleOutletContextParams } from '../typings';

import '../style/ArticleForm.scss';

type ArticleNewParams = { cid: string; id: string };

function ArticleNew() {
  const { cid: categoryId } = useParams<ArticleNewParams>();

  const { categories, baseUrl } =
    useOutletContext<ArticleOutletContextParams>();

  const navigate = useNavigate();

  const { data } = useArticleCategoryQuery({
    variables: {
      id: categoryId,
    },
    fetchPolicy: 'network-only',
  });

  const category = data?.category;

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
      categories.map((item: any) => ({
        ...item,
        value: item.id,
        title: item.name,
      })),
      {
        idKey: 'id',
        childrenKey: 'children',
        pidKey: 'parent.id',
        sort: (left: any, right: any) => left.index - right.index,
      },
    );
  }, [categories]);

  const [createArticle, { loading: submitting }] = useCreateArticleMutation();

  const handleChangeCategory = useCallback(
    async (cid: string) => {
      const newCategory = categories.find((item) => item.id === cid);
      if (
        newCategory?.storeTemplate?.contentType !==
        category?.storeTemplate?.contentType
      ) {
        const result = await Modal.confirm({
          title: '修改栏目确认',
          content: '目标栏目的正文类型不一致，是否确定切换 ？',
        });
        if (!result.isConfirmed) {
          form.setFieldValue(['category', 'id'], category?.id);
          return;
        }
      }
      navigate(`${baseUrl}/categories/${newCategory?.id}/articles/new`, {
        replace: true,
      });
    },
    [categories, category],
  );

  const handleSubmit = useCallback(
    async (action: PublishAction | 'draft') => {
      temp.current.action = action;

      await queueUpload.current?.uploadAll();
      const {
        meta,
        category,
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
      };

      if (action === 'publish') {
        input.status = 'PUBLISHED';
      } else if (action === 'schedule') {
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
      navigate(
        `${baseUrl}/categories/${category.id}/articles/${_data.data.article.id}`,
        {
          replace: true,
        },
      );
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

  console.log('storeTemplate', category?.storeTemplate?.contentType);

  return (
    <ContentWrapper
      header={{
        title: '新增文章',
      }}
      breadcrumb={
        <ArticleBreadcrumb
          categoryId={categoryId}
          append={
            <Breadcrumb.Item className="text-dark">新增文章</Breadcrumb.Item>
          }
        />
      }
    >
      <Form
        form={form}
        initialValues={{
          status: 'DRAFT',
          publishedAt,
          category: { id: categoryId },
        }}
        className="form d-flex flex-column flex-lg-row"
      >
        <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10  me-lg-10">
          <Tabs
            type="line-tabs"
            defaultActiveKey="general"
            contentContainer={false}
            className="border-0 fs-4 fw-bold mb-n2 nav-line-tabs-2x"
          >
            <Tabs.TabPane key="general" tab="基本信息" forceRender>
              <General
                contentType={category?.storeTemplate?.contentType}
                queueUpload={queueUpload}
              />
            </Tabs.TabPane>
            <Tabs.TabPane key="advanced" tab="高级设置" forceRender>
              <Advanced />
            </Tabs.TabPane>
            <Tabs.TabPane key="meta" tab="元数据" forceRender>
              <Metadata />
            </Tabs.TabPane>
          </Tabs>
          <div
            className={classnames(
              'd-flex bg-body-color p-5 mx-4 tw-rounded-2xl justify-content-end',
            )}
          >
            <Button
              variant="light"
              loading={temp.current.action === 'draft' && submitting}
              onClick={handleSaveDraft}
              className="me-5"
            >
              {!temp.current.action && submitting ? '保存中...' : '保存草稿'}
            </Button>
            <PublishButton
              onPublish={handlePublish}
              publishedAt={publishedAt}
              submitting={temp.current.action !== 'draft' && submitting}
              setPublishedAt={handlePublishedAtChange}
              onCancel={handlePublishCancel}
            />
          </div>
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

export default ArticleNew;
// const OldArticleNew =  require('../article/ArticleEditor').ArticleNew;
// export default () => {
//   return <OldArticleNew />;
// };
