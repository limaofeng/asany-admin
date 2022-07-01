import { Card, Form, Input, QuillEditor } from '@/metronic';

function General() {
  return (
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
        <Form.Item name="description" label="描述" help="为栏目设置描述以获得更好的可见性。">
          <QuillEditor className="h-300px" />
        </Form.Item>
      </Card>
      {/* <Card flush className="py-4" title="自动化" bodyClassName="pt-0">
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
                variantStyle="light"
                variant="danger"
                onClick={remove}
                icon={<Icon className="svg-icon-2" name="Duotune/arr088" />}
              />
            )}
          </>
        )}
      </Form.Repeater>
    </div>
  </Card> */}
    </div>
  );
}

export default General;
