import TagsInput from '@asany/tags-input';

import { Card, Checkbox, Form, Input } from '@/metronic';

function Advanced() {
  return (
    <div className="d-flex flex-column gap-7 gap-lg-10">
      <Card flush className="py-4">
        <Form.Item name="subtitle" className="mb-8 mw-400px" label="副标题">
          <Input />
        </Form.Item>
        <Form.Item className="mb-3" label="标签" name="tags">
          <TagsInput />
        </Form.Item>
        <Form.Item name="source" className="mb-8 mw-400px" label="来源">
          <Input />
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
  );
}

export default Advanced;
