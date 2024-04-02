import TagsInput from '@asany/tags-input';

import { Card, Form, Input, QuillEditor } from '@/metronic';

function Metadata() {
  return (
    <div className="d-flex flex-column gap-7 gap-lg-10">
      <Card flush className="py-4" title="SEO" bodyClassName="pt-0">
        <Form.Item
          name={['meta', 'seo', 'title']}
          className="mb-8"
          label="标题"
          help="设置元数据标题, 建议关键词要简单, 准确"
        >
          <Input className="mw-400px" />
        </Form.Item>

        <Form.Item
          name={['meta', 'seo', 'description']}
          className="mb-8"
          label="描述"
          help="设置元数据描述, 以提高排名"
        >
          <QuillEditor className="h-300px" />
        </Form.Item>
        <Form.Item
          name={['meta', 'seo', 'keywords']}
          label="关键字"
          help={
            <>
              设置栏目相关的关键字列表。通过在每个关键字之间添加<code>,</code>
              来分隔关键字
            </>
          }
        >
          <TagsInput className="form-control" />
        </Form.Item>
      </Card>
    </div>
  );
}

export default Metadata;
