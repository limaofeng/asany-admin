import TagsInput from '@asany/tags-input';
import { TreeSelect } from 'antd';

import { Card, Form, Select2, Upload } from '@/metronic';

type ArticleFormSidebarProps = {
  onChangeCategory: (category: string) => void;
  categoryTreeData: { value: string; title: string }[];
};

function ArticleFormSidebar(props: ArticleFormSidebarProps) {
  const { categoryTreeData, onChangeCategory } = props;
  return (
    <div className="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7">
      <Card flush className="py-4" title="封面图" bodyClassName="text-center pt-0">
        <Form.Item name="image">
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
              onChange={onChangeCategory}
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
  );
}

export default ArticleFormSidebar;
