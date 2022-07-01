import { useCallback } from 'react';

import { Button, Card, Checkbox, Form, Input, Select2 } from '@/metronic';
import type { ArticleCategory } from '@/types';

type AdvancedProps = {
  category?: ArticleCategory;
};

function Advanced(props: AdvancedProps) {
  const handleDesignPage = useCallback(() => {
    window.open(
      process.env.WEBSITE_URL + '/designer?id=' + props.category?.page?.component?.id,
      '_blank',
    );
  }, [props.category?.page?.component?.id]);

  const handleChange = useCallback((e: any) => {
    console.log(e.target.checked);
  }, []);

  const prevComponentTemplate = props.category?.page?.component?.template;

  return (
    <div className="d-flex flex-column gap-7 gap-lg-10">
      <Card flush className="py-4" title="更多功能" bodyClassName="pt-0">
        <Form.Item valuePropName="checked" className="mb-8" name="xx">
          <Checkbox value="1" solid label="启用评论" />
        </Form.Item>
        <Form.Item valuePropName="checked" className="mb-8" name="x2">
          <Checkbox value="1" solid label="允许收藏" />
        </Form.Item>
        <Form.Item valuePropName="checked" className="mb-8" name={['page', 'enabled']}>
          <Checkbox
            onChange={handleChange}
            value="1"
            solid
            className="align-items-start"
            inputClassName="mt-1"
          >
            <div className="d-flex flex-column">
              <div>自定义栏目页</div>
              <div className="form-item-help">配置单独的展示页面</div>
            </div>
          </Checkbox>
        </Form.Item>
      </Card>
      <Form.Item dependencies={[['page', 'enabled']]} noStyle>
        {(form) => {
          const pageEnabled = form.getFieldValue(['page', 'enabled']);
          if (!pageEnabled) {
            return <></>;
          }
          return (
            <Card flush className="py-4" title="自定义栏目页" bodyClassName="pt-0">
              <Form.Item
                className="mb-6 mw-400px"
                name={['page', 'route', 'path']}
                label="访问地址"
              >
                <Input />
              </Form.Item>
              <Form.Item className="mb-6" name={['page', 'component', 'template']} label="页面模版">
                <Select2
                  width={400}
                  options={[
                    { value: 'cn.asany.ui.theme.canvas.Page', label: '普通栏目页' },
                    { value: 'cn.asany.ui.theme.canvas.Page1', label: '定制模版' },
                  ]}
                />
              </Form.Item>
              <Form.Item dependencies={[['page', 'component', 'template']]} noStyle>
                {() => {
                  const componentTemplate = form.getFieldValue(['page', 'component', 'template']);
                  const disabled = !componentTemplate || prevComponentTemplate != componentTemplate;
                  return (
                    <>
                      <Button onClick={handleDesignPage} disabled={disabled}>
                        去配置页面
                      </Button>
                      {disabled && <div className="form-item-help">切换模版后，需要先保存</div>}
                    </>
                  );
                }}
              </Form.Item>
            </Card>
          );
        }}
      </Form.Item>
    </div>
  );
}

export default Advanced;
