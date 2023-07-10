import { useCallback, useMemo } from 'react';

import { Icon } from '@asany/icons';
import TagsInput from '@asany/tags-input';
import { Affix, TreeSelect } from 'antd';
import classnames from 'classnames';
import type { RouteComponentProps } from 'react-router';

import { useArticleStoreTemplatesQuery, useCreateArticleCategoryMutation } from '../hooks';

import { ContentWrapper } from '@/layouts/components';
import {
  Button,
  Card,
  Form,
  Input,
  QuillEditor,
  Radio,
  Select2,
  Separator,
  Tabs,
  Upload,
} from '@/metronic';
import type { ArticleCategory } from '@/types';
import { tree } from '@/utils';

type ArticleChannelNewProps = RouteComponentProps<
  { id: string },
  any,
  { rootCategoryId: string; categories: ArticleCategory[] }
>;

function ArticleChannelNew(props: ArticleChannelNewProps) {
  const {
    location: {
      state: { categories },
    },
  } = props;

  const { data: storeTemplatesData } = useArticleStoreTemplatesQuery();

  const storeTemplates = storeTemplatesData?.articleStoreTemplates || [];

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

  const [createChannel] = useCreateArticleCategoryMutation();

  const handleFinish = useCallback(
    (values: any) => {
      console.log('finish', values, createChannel);
    },
    [createChannel],
  );

  console.log('ArticleChannelNew -> ', categories);

  return (
    <ContentWrapper
      header={{
        title: '新增栏目',
      }}
    >
      <Form
        onFinish={handleFinish}
        initialValues={{
          storeTemplate: '1',
          parent: (props.location as any).query.parent_category_id,
        }}
        className="form d-flex flex-column flex-lg-row"
      >
        <div className="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10">
          <Card flush className="py-4" title="缩略图" bodyClassName="text-center pt-0">
            <Form.Item name="cover">
              <Upload.Image
                width={150}
                height={150}
                className="mb-3"
                space="orX8kLOV"
                accept=".png, .jpg, .jpeg"
                crop={{ height: 300, zoomable: false, aspectRatio: 1 }}
                background="/assets/media/svg/files/blank-image.svg"
              />
            </Form.Item>
            <div className="text-muted fs-7">
              设置栏目缩略图。仅接受 *.png、*.jpg 和 *.jpeg 格式的图片
            </div>
          </Card>
          <Card flush className="py-4" title="上级栏目">
            <Card.Body className="pt-0">
              <Form.Item className="mb-3" name="parent">
                <TreeSelect
                  style={{ width: '100%' }}
                  dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                  treeData={categoryTreeData}
                  placeholder="选择上级栏目"
                  treeDefaultExpandAll
                  allowClear
                  transitionName=""
                />
              </Form.Item>
              <div className="text-muted fs-7">选择上级栏目,未选择将添加到根目录</div>
              {/* <div className="d-none mt-10">
                <label className="form-label">Select publishing date and time</label>
                <input
                  className="form-control"
                  id="kt_ecommerce_add_category_status_datepicker"
                  placeholder="Pick date &amp; time"
                />
              </div> */}
            </Card.Body>
          </Card>
          <Card flush className="py-4" title="存储模板" bodyClassName="pt-0">
            <Form.Item className="mb-3" name="storeTemplate" label="选择存储模板">
              <Select2
                options={storeTemplates.map((item) => ({ value: item.id, label: item.name }))}
              />
            </Form.Item>
            <div className="text-muted fs-7">
              从您当前的主题中分配一个模板来定义栏目文章的显示方式
            </div>
          </Card>
        </div>
        <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
          <Tabs
            defaultActiveKey="general"
            contentContainer={false}
            className="border-0 fs-4 fw-bold mb-n2 nav-line-tabs-2x"
          >
            <Tabs.TabPane key="general" tab="基本信息" forceRender>
              <div className="d-flex flex-column gap-7 gap-lg-10">
                <Card flush className="py-4" title="通用" bodyClassName="pt-0">
                  <Form.Item
                    className="mb-8"
                    name="name"
                    label="名称"
                    required
                    help="名称是必需的，建议是唯一的"
                    rules={[{ required: true, message: '名称不能为空' }]}
                  >
                    <Input placeholder="栏目名称" className="mw-400px" />
                  </Form.Item>
                  <Form.Item
                    name="description"
                    label="描述"
                    help="为栏目设置描述以获得更好的可见性。"
                  >
                    <QuillEditor className="h-300px" />
                  </Form.Item>
                </Card>
                <Card flush className="py-4" title="自动化" bodyClassName="pt-0">
                  <Form.Item name="assignmentMethod" labelClassName="mb-5" label="文章分配方法">
                    <Radio.Group>
                      <Radio solid inputClassName="me-3" value="manual">
                        <div className="fw-bolder text-gray-800">手动控制</div>
                        <div className="form-item-help">
                          在文章创建或更新期间手动选择此栏目，将文章逐个添加到此栏目。
                        </div>
                      </Radio>
                      <Separator style="dashed" className="my-4" />
                      <Radio solid inputClassName="me-3" value="manual">
                        <div className="fw-bolder text-gray-800">自动</div>
                        <div className="form-item-help">符合以下条件的文章将自动分配到该栏目。</div>
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                  <div className="mt-8" data-kt-ecommerce-catalog-add-category="auto-options">
                    <label className="form-label">条件</label>
                    <div className="d-flex flex-wrap align-items-center text-gray-600 gap-5 mb-4">
                      <span>文章必须匹配:</span>
                      <Radio.Group
                        className="d-flex"
                        solid
                        options={[
                          { value: 'all_conditions', label: '所有条件' },
                          { value: 'any_conditions', label: '任何条件' },
                        ]}
                      />
                    </div>
                    <Form.Repeater>
                      {({ remove, size }) => (
                        <>
                          {/* condition_type */}
                          <div className="w-100 w-md-200px">
                            <Form.Item name="type" noStyle>
                              <Select2
                                options={[
                                  { value: 'title', label: '标题' },
                                  { value: 'tag', label: '标签' },
                                ]}
                              />
                            </Form.Item>
                          </div>
                          <div className="w-100 w-md-200px">
                            <Form.Item name="equals" noStyle>
                              <Select2
                                options={[
                                  { value: 'equal', label: '等于' },
                                  { value: 'notequal', label: '不等于' },
                                  { value: 'greater', label: '大于' },
                                  { value: 'less', label: '小于' },
                                  { value: 'starts', label: '以开始' },
                                  { value: 'ends', label: '结束以' },
                                ]}
                              />
                            </Form.Item>
                          </div>
                          <Form.Item name="value" noStyle>
                            <Input className="mw-100 w-200px" />
                          </Form.Item>
                          {size > 1 && (
                            <Button
                              size="sm"
                              variant="light-danger"
                              onClick={remove}
                              icon={<Icon className="svg-icon-2" name="Duotune/arr088" />}
                            />
                          )}
                        </>
                      )}
                    </Form.Repeater>
                  </div>
                </Card>
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane key="seo" tab="SEO" forceRender>
              <Card flush className="py-4" title="元数据" bodyClassName="pt-0">
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
      </Form>
    </ContentWrapper>
  );
}

export default ArticleChannelNew;
