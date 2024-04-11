import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';
import { useNavigate, useOutletContext, useParams } from 'react-router';

import classnames from 'classnames';
import type { Moment } from 'moment';
import moment from 'moment';

import { ContentWrapper } from '@/layouts/components';
import { Breadcrumb, Button, Form, Modal, Tabs, Toast } from '@/metronic';
import type { QueueUploadRef } from '@/metronic/typings';
import type { Article, ArticleCategory } from '@/types';
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
import { useArticleQuery, useUpdateArticleMutation } from '../hooks';
import { ArticleOutletContextParams } from '../typings';
type ArticleEditParams = { cid: string; id: string };

import '../style/ArticleForm.scss';

function ArticleEdit() {
  const { cid: categoryId, id } = useParams<ArticleEditParams>();

  const { categories, baseUrl } =
    useOutletContext<ArticleOutletContextParams>();

  const navigate = useNavigate();

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

  const [updateArticle, { loading: submitting }] = useUpdateArticleMutation();

  const [category, setCategory] = useState<ArticleCategory>();

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
      navigate(`${baseUrl}/categories/${newCategory?.id}/articles/${id}`, {
        replace: true,
      });
    },
    [categories, category],
  );

  useEffect(() => {
    if (!categories || !categories.length || !categoryId) {
      return;
    }
    setCategory(categories.find((item) => item.id === categoryId));
  }, [categories, categoryId]);

  const handleSubmit = useCallback(
    async (action: PublishAction) => {
      temp.current.action = action;

      await queueUpload.current?.uploadAll();
      const {
        meta,
        category,
        publishedAt: _publishedAt,
        content,
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

      if (content.hasOwnProperty('__typename')) {
        delete content.__typename;
      }

      if (content.hasOwnProperty('documentType')) {
        if (!content.type && content.documentType) {
          content.type = content.documentType;
        }
        delete content.documentType;
      }

      const input = {
        ...values,
        content,
        metafields,
        category: category.id,
      };

      if (action === 'publish') {
        input.status = 'PUBLISHED';
      } else if (action === 'schedule' || action === 'reschedule') {
        input.status = 'SCHEDULED';
        input.publishedAt = _publishedAt;
      } else if (action === 'unpublish' || action === 'revert_to_draft') {
        input.status = 'DRAFT';
      } else if (action === 'update') {
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
    const _publishedAt = _article?.publishedAt
      ? moment(_article.publishedAt)
      : moment();
    temp.current.publishedAt = _publishedAt;
    forceRender();
    form.setFieldsValue({ publishedAt: _publishedAt });
  }, [form]);

  const contentType = category?.storeTemplate?.contentType;

  return (
    <ContentWrapper
      loading={loading}
      header={{
        title: '编辑文章',
      }}
      breadcrumb={
        <ArticleBreadcrumb
          categoryId={category?.id}
          append={
            <Breadcrumb.Item className="text-dark">
              {article?.title}
            </Breadcrumb.Item>
          }
        />
      }
    >
      <Form
        form={form}
        initialValues={{ status: 'DRAFT', channel: categoryId }}
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
                article={article as Article}
                contentType={contentType}
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
              'd-flex bg-body-color p-5 mx-4 tw-rounded-2xl align-items-center',
            )}
          >
            <div className="text-primary flex-row-fluid">
              {article?.status === 'SCHEDULED' && (
                <>
                  将于{' '}
                  {moment(article.publishedAt).format(
                    'YYYY 年 MM 月 DD 日 HH:mm',
                  )}{' '}
                  发布
                </>
              )}
            </div>
            {article?.status === 'DRAFT' && (
              <Button
                variant="light"
                loading={temp.current.action === 'update' && submitting}
                onClick={handleSaveDraft}
                className="me-5"
              >
                {temp.current.action === 'update' && submitting
                  ? '保存中...'
                  : '保存草稿'}
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
