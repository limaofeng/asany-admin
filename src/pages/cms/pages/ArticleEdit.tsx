import { useCallback, useEffect, useMemo, useRef } from 'react';

import { Icon } from '@asany/icons';
import TagsInput from '@asany/tags-input';
import { Affix, TreeSelect } from 'antd';
import classnames from 'classnames';
import type { RouteComponentProps } from 'react-router';
import { Link } from 'umi';

import { useArticleQuery, useCreateArticleMutation } from '../hooks';

import { ContentWrapper } from '@/layouts/components';
import {
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  Form,
  Input,
  QuillEditor,
  Select2,
  Tabs,
  Upload,
} from '@/metronic';
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

  const handleUploadAttachment = useCallback((e: React.MouseEvent<HTMLElement>) => {
    queueUpload.current?.browse(e);
  }, []);

  const form = Form.useForm();

  const { data } = useArticleQuery({
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

  const [createArticle] = useCreateArticleMutation();

  const handleFinish = useCallback(async () => {
    await queueUpload.current?.uploadAll();
    const { channel, ...values } = await form.validateFields();
    const _data = await createArticle({
      variables: {
        input: { ...values, channels: [channel] },
      },
    });
    console.log(_data);
  }, [createArticle, form]);

  useEffect(() => {
    if (!article) {
      return;
    }
    form.setFieldsValue({
      ...article,
    });
  }, [article, form]);

  return (
    <ContentWrapper
      header={{
        title: '新增编辑',
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
              <div className="d-flex flex-column gap-7 gap-lg-10">
                <Card flush className="py-4">
                  <Form.Item
                    className="mb-8"
                    name="title"
                    label="标题"
                    required
                    help="标题是必需的"
                    rules={[{ required: true, message: '标题不能为空' }]}
                  >
                    <Input placeholder="文章标题" className="mw-400px" />
                  </Form.Item>
                  <Form.Item name="content" label="正文" help="您可以选择适合自己的，编辑方式">
                    <QuillEditor className="h-300px" />
                  </Form.Item>
                </Card>
                <Card flush className="py-4" title="附件" bodyClassName="pt-0">
                  <Form.Item name="attachments" noStyle>
                    <Upload.Queue ref={queueUpload} namespace="email" />
                  </Form.Item>
                  <Button
                    variantStyle="light"
                    variant="primary"
                    className="me-3 mt-4"
                    onClick={handleUploadAttachment}
                    icon={<Icon className="svg-icon-2" name="Duotune/com008" />}
                  >
                    添加附件
                  </Button>
                  {/* <span
                      onClick={handleUploadAttachment}
                      className="btn btn-icon btn-sm btn-clean btn-active-light-primary me-2 dz-clickable"
                    >
                      <Icon className="svg-icon-2 m-0" name="Duotune/com008" />
                    </span> */}
                </Card>
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane key="advanced" tab="高级设置" forceRender>
              <div className="d-flex flex-column gap-7 gap-lg-10">
                <Card flush className="py-4">
                  <Form.Item name="subtitle" className="mb-8 mw-400px" label="副标题">
                    <Input />
                  </Form.Item>
                  <Form.Item name="source" className="mb-8 mw-400px" label="来源">
                    <Input />
                  </Form.Item>
                  <Form.Item name="summary" className="mb-8 mw-400px" label="摘要">
                    <Input.TextArea autoSize={{ minRows: 2 }} />
                  </Form.Item>
                </Card>
                <Card flush className="py-4" title="更多功能" bodyClassName="pt-0">
                  <Form.Item className="mb-8" name="xx">
                    <Checkbox value="1" solid label="启用评论" />
                  </Form.Item>
                  <Form.Item className="mb-8" name="x2">
                    <Checkbox value="1" solid label="允许收藏" />
                  </Form.Item>
                </Card>
                <Card flush className="py-4" title="元数据" bodyClassName="pt-0">
                  123145
                </Card>
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane key="meta" tab="元数据" forceRender>
              <Card flush className="py-4" title="SEO" bodyClassName="pt-0">
                <Form.Item
                  name={['meta', 'title']}
                  className="mb-8"
                  label="标题"
                  help="设置元数据标题, 建议关键词要简单, 准确"
                >
                  <Input className="mw-400px" />
                </Form.Item>

                <Form.Item
                  name={['meta', 'description']}
                  className="mb-8"
                  label="描述"
                  help="设置元数据描述, 以提高排名"
                >
                  <QuillEditor className="h-300px" />
                </Form.Item>
                <Form.Item
                  name={['meta', 'keywords']}
                  label="关键字"
                  help={
                    <>
                      设置栏目相关的关键字列表。通过在每个关键字之间添加<code>,</code>来分隔关键字
                    </>
                  }
                >
                  <TagsInput className="form-control" />
                </Form.Item>
              </Card>
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
              <Button as="button" htmlType="submit" loading={false}>
                {false ? '保存中...' : '保存更改'}
              </Button>
            </div>
          </Affix>
        </div>
        <div className="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7">
          <Card flush className="py-4" title="封面图" bodyClassName="text-center pt-0">
            <Form.Item name="cover">
              <Upload.Image
                width={150}
                height={150}
                className="mb-3"
                space="orX8kLOV"
                accept=".png, .jpg, .jpeg"
                crop={{ height: 300, zoomable: false, aspectRatio: 1 }}
                backgroundImage="/assets/media/svg/files/blank-image.svg"
              />
            </Form.Item>
            <div className="text-muted fs-7">
              设置文章封面图。仅接受 *.png、*.jpg 和 *.jpeg 格式的图片
            </div>
          </Card>
          <Card flush className="py-4">
            <Card.Body>
              <Form.Item
                className="mb-3"
                label="所属栏目"
                name={['category', 'id']}
                rules={[{ required: true, message: '所属栏目不能为空' }]}
              >
                <TreeSelect
                  style={{ width: '100%' }}
                  dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                  treeData={categoryTreeData}
                  placeholder="选择栏目"
                  treeDefaultExpandAll
                  transitionName=""
                />
              </Form.Item>
              <div className="text-muted fs-7 mb-8">您的文章必须发布在一个栏目中</div>
              <Form.Item className="mb-3" label="标签" name="tags">
                <TagsInput />
              </Form.Item>
              <div className="text-muted fs-7">选择上级栏目,未选择将添加到根目录</div>
            </Card.Body>
          </Card>
          <Card flush className="py-4" title="状态">
            <Card.Body className="pt-0">
              <Form.Item className="mb-3" name="status">
                <Select2
                  options={[
                    { value: 'PUBLISHED', label: '发布' },
                    { value: 'DRAFT', label: '草稿' },
                    { value: 'SCHEDULED', label: '定时发布' },
                    { value: 'INACTIVE', label: '无效的' },
                  ]}
                />
              </Form.Item>
              <div className="text-muted fs-7">选择上级栏目,未选择将添加到根目录</div>
              <div className="mt-8">
                <label className="form-label">选择发布日期和时间</label>
                <input
                  className="form-control"
                  id="kt_ecommerce_add_category_status_datepicker"
                  placeholder="Pick date &amp; time"
                />
              </div>
            </Card.Body>
          </Card>
        </div>
      </Form>
    </ContentWrapper>
  );
}

export default ArticleEdit;
