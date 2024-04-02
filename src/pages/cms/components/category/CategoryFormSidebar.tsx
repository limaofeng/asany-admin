import { TreeSelect } from 'antd';

import { useArticleStoreTemplatesQuery } from '../../hooks';

import { Card, Form, Select2, Upload } from '@/metronic';

type CategoryFormSidebarProps = {
  categoryTreeData: { value: string; title: string }[];
};

function CategoryFormSidebar(props: CategoryFormSidebarProps) {
  const { categoryTreeData } = props;

  const { data: storeTemplatesData } = useArticleStoreTemplatesQuery();

  const storeTemplates = storeTemplatesData?.articleStoreTemplates || [];

  return (
    <div className="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10">
      <Card
        flush
        className="py-4"
        title="缩略图"
        bodyClassName="text-center pt-0"
      >
        <Form.Item name="image">
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
              placeholder="选择上级栏目, 默认根栏目"
              treeDefaultExpandAll
              allowClear
              transitionName=""
            />
          </Form.Item>
          <div className="text-muted fs-7">
            选择上级栏目,未选择将添加到根目录
          </div>
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
            options={storeTemplates.map((item) => ({
              value: item.id,
              label: item.name,
            }))}
          />
        </Form.Item>
        <div className="text-muted fs-7">
          从您当前的主题中分配一个模板来定义栏目文章的显示方式
        </div>
      </Card>
    </div>
  );
}

export default CategoryFormSidebar;
