import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';

import { Affix } from 'antd';
import classnames from 'classnames';
import type { Moment } from 'moment';
import moment from 'moment';
import type { RouteComponentProps } from 'react-router';
import { Link } from 'umi';

import ArticleFormSidebar from '../components/ArticleFormSidebar';
import { Advanced, General, Metadata, PublishButton } from '../components/bodys/classic';
import type { PublishAction } from '../components/bodys/classic/PublishButton';
import { useArticleQuery, useUpdateArticleMutation } from '../hooks';

import { ContentWrapper } from '@/layouts/components';
import { Breadcrumb, Button, Form, Tabs, Toast } from '@/metronic';
import type { QueueUploadRef } from '@/metronic/typings';
import type { Article, ArticleCategory } from '@/types';
import { delay, tree } from '@/utils';

import '../style/ArticleForm.scss';

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

  const temp = useRef<{
    publishedAt: Moment;
    action?: PublishAction;
    article?: Article;
  }>({
    publishedAt: moment(),
  });
  const [, forceRender] = useReducer((s) => s + 1, 0);

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
    (cid: string) => {
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

  const handleSubmit = useCallback(
    async (action: PublishAction) => {
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
      } else if (action == 'schedule' || action == 'reschedule') {
        input.status = 'SCHEDULED';
        input.publishedAt = _publishedAt;
      } else if (action == 'unpublish' || action == 'revert_to_draft') {
        input.status = 'DRAFT';
      } else if (action == 'update') {
        input.status = article?.status;
        input.publishedAt = _publishedAt;
      }

      const updateArticleAwait = updateArticle({
        variables: {
          id,
          input,
        },
      });
      const _data = await Toast.promise(
        delay(updateArticleAwait, 350),
        {
          pending: '提交中...',
          success: `“${values.title}” 保存成功`,
          error: '提交出错',
        },
        {
          duration: 2000,
          placement: 'top-center',
        },
      );
      // if (!history.length) {
      //   history.replace(`${baseUrl}/cms/categories/${category.id}/articles`);
      // } else {
      //   history.goBack();
      // }
      console.log('submit result set', _data);
    },
    [form, updateArticle, id, article?.status],
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

  useEffect(() => {
    if (!article) {
      return;
    }
    if (article.publishedAt) {
      temp.current.publishedAt = moment(article.publishedAt);
    }
    temp.current.article = article as Article;
    form.setFieldsValue({
      ...article,
      publishedAt: temp.current.publishedAt,
      image: article.image?.id,
    });
  }, [article, form]);

  const handleSaveDraft = useCallback(() => {
    handleSubmit('update');
  }, [handleSubmit]);

  const handlePublish = useCallback(
    (action: PublishAction) => {
      handleSubmit(action);
    },
    [handleSubmit],
  );

  const handlePublishCancel = useCallback(() => {
    const _article = temp.current.article;
    const _publishedAt = _article?.publishedAt ? moment(_article.publishedAt) : moment();
    temp.current.publishedAt = _publishedAt;
    forceRender();
    form.setFieldsValue({ publishedAt: _publishedAt });
  }, [form]);

  console.log('storeTemplate', storeTemplate, publishedAt);

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
                'd-flex bg-body-color p-5 mx-4 tw-rounded-2xl align-items-center',
              )}
            >
              <div className="text-primary flex-row-fluid">
                {article?.status == 'SCHEDULED' && (
                  <>将于 {moment(article.publishedAt).format('YYYY 年 MM 月 DD 日 HH:mm')} 发布</>
                )}
              </div>
              {article?.status == 'DRAFT' && (
                <Button
                  variant="light"
                  loading={temp.current.action == 'update' && submitting}
                  onClick={handleSaveDraft}
                  className="me-5"
                >
                  {temp.current.action == 'update' && submitting ? '保存中...' : '保存草稿'}
                </Button>
              )}
              <PublishButton
                article={article as any}
                onPublish={handlePublish}
                publishedAt={publishedAt}
                submitting={submitting}
                setPublishedAt={handlePublishedAtChange}
                onCancel={handlePublishCancel}
              />
            </div>
          </Affix>
        </div>
        <ArticleFormSidebar
          baseUrl={baseUrl}
          article={article as any}
          categoryTreeData={categoryTreeData}
          onChangeCategory={handleChangeCategory}
        />
      </Form>
    </ContentWrapper>
  );
}

export default ArticleEdit;
