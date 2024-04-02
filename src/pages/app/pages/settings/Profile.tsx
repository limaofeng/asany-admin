import { useOutletContext } from 'react-router';

import { ContentWrapper } from '@/layouts/components';
import { Card, Form, Input, Switch, Upload } from '@/metronic';

import { AppViewLayoutOutletProps } from '../../types';

function Profile() {
  const {} = useOutletContext<AppViewLayoutOutletProps>();

  const form = Form.useForm();

  return (
    <ContentWrapper>
      <Card className="mb-5 mb-xl-10">
        <Card.Header>
          <Card.Title>基本信息</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form
            form={form}
            className="mw-800px row d-flex flex-shrink-0 flex-column-reverse flex-md-row"
          >
            <div className="mw-500px col-12 col-md-8">
              <div className="mw-400px">
                <Form.Item
                  className="mb-5"
                  name="name"
                  label="名称"
                  help="推荐使用全字母或者英文, 全局唯一"
                >
                  <Input solid />
                </Form.Item>
                <Form.Item
                  className="mb-5"
                  name="title"
                  label="显示名称"
                  help="显示的名称"
                >
                  <Input solid />
                </Form.Item>
                <Form.Item
                  className="mb-5"
                  name="description"
                  label="简介"
                  help="简单说明应用的基本功能"
                >
                  <Input.TextArea
                    solid
                    autoSize={{ minRows: 4, maxRows: 8 }}
                    showCount
                    maxLength={250}
                  />
                </Form.Item>
                <Form.Item
                  className="mb-5"
                  name="name"
                  label="是否启用"
                  help="禁用后,应用将不能访问"
                >
                  <Switch solid label="启用" />
                </Form.Item>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="row">
                <Form.Item
                  className="mb-5"
                  name="logo"
                  label="图标"
                  help="允许的文件类型:png, jpg, jpeg。"
                >
                  <Upload.Image
                    width={125}
                    height={125}
                    space="7VE4SSrk"
                    crop={{ height: 300, zoomable: false, aspectRatio: 1 }}
                    background="/assets/media/svg/avatars/blank.svg"
                  />
                </Form.Item>
              </div>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </ContentWrapper>
  );
}

export default Profile;
