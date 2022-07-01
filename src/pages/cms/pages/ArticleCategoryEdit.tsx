import { useCallback, useEffect, useMemo } from 'react';

import { Affix } from 'antd';
import classnames from 'classnames';
import type { RouteComponentProps } from 'react-router';

import { Advanced, General, Metadata } from '../components/category';
import CategoryFormSidebar from '../components/category/CategoryFormSidebar';
import { useArticleCategoryQuery, useUpdateArticleCategoryMutation } from '../hooks';

import { ContentWrapper } from '@/layouts/components';
import { Button, Form, Tabs, Toast } from '@/metronic';
import type { ArticleCategory } from '@/types';
import { tree } from '@/utils';

type ArticleChannelSettingsProps = RouteComponentProps<
  { id: string },
  any,
  { rootCategoryId: string; categories: ArticleCategory[] }
>;

function ArticleChannelSettings(props: ArticleChannelSettingsProps) {
  const { match } = props;

  const {
    location: {
      state: { rootCategoryId, categories },
    },
  } = props;

  console.log('rootCategoryId', rootCategoryId);

  const { data, loading } = useArticleCategoryQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      id: match.params.id,
    },
  });

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

  const [updateCategory, { loading: submitting }] = useUpdateArticleCategoryMutation();
  const form = Form.useForm();

  const handleSubmit = useCallback(async () => {
    const { meta, page, ...values } = await form.validateFields();

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
      page: {
        enabled: page.enabled,
        path: page.route?.path,
        template: page.component?.template,
        blocks: page.component?.blocks,
      },
      metafields,
    };

    await updateCategory({ variables: { id: match.params.id, input } });

    Toast.success(`栏目 “${values.name}” 修改成功`, 2000, {
      placement: 'bottom-start',
      progressBar: true,
    });
  }, [form, match.params.id, updateCategory]);

  const category = data?.category;

  useEffect(() => {
    if (!category) {
      return;
    }
    form.setFieldsValue({
      ...category,
      storeTemplate: category.storeTemplate?.id,
      image: category.image?.id,
      parent: category.parent?.id == rootCategoryId ? null : category.parent?.id,
    });
  }, [category, form, rootCategoryId]);

  const handleGoBack = useCallback(() => {
    history.back();
  }, []);

  return (
    <ContentWrapper
      loading={loading}
      header={{
        title: '编辑栏目',
      }}
    >
      <Form form={form} className="form d-flex flex-column flex-lg-row">
        <CategoryFormSidebar categoryTreeData={categoryTreeData} />
        <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
          <Tabs
            defaultActiveKey="general"
            renderContainer={false}
            className="border-0 fs-4 fw-bold mb-n2 nav-line-tabs-2x"
          >
            <Tabs.TabPane key="general" tab="基本信息" forceRender>
              <General />
            </Tabs.TabPane>
            <Tabs.TabPane key="advanced" tab="高级设置" forceRender>
              <Advanced category={category as any} />
            </Tabs.TabPane>
            <Tabs.TabPane key="metadata" tab="元数据" forceRender>
              <Metadata />
            </Tabs.TabPane>
          </Tabs>
          <Affix style={{ zIndex: 9 }} offsetBottom={16}>
            <div
              className={classnames(
                'd-flex bg-body-color p-5 mx-4 tw-rounded-2xl justify-content-end',
              )}
            >
              <Button onClick={handleGoBack} variant="light" className="me-5">
                取消
              </Button>
              <Button onClick={handleSubmit} loading={submitting}>
                {false ? '保存中...' : '保存更改'}
              </Button>
            </div>
          </Affix>
        </div>
      </Form>
    </ContentWrapper>
  );
}

export default ArticleChannelSettings;
