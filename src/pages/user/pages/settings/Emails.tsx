import Icon from '@asany/icons';

import { ContentWrapper } from '@/layouts/components';
import {
  Button,
  Card,
  Form,
  Input,
  Radio,
  Select,
  Separator,
  Tooltip,
} from '@/metronic';

type EmailListItemProps = {
  state: string;
};

function EmailListItem(props: EmailListItemProps) {
  const { state } = props;
  return (
    <li className="p-5 border-bottom border-secondary">
      <div className="email-title d-flex flex-justify-between">
        <div className="d-flex flex-column-fluid align-items-center">
          <h4 className="mb-0">limaofeng@msn.com</h4>
          <span className="text-muted mx-2">–</span>
          <span>
            <span className="text-success fw-bolder">主邮件</span>
            <Tooltip title="此电子邮件将用于与帐户相关的通知，也可用于密码重置。">
              <Icon
                className="text-gray-800 svg-icon-4 ms-1"
                name="Bootstrap/info-circle"
              />
            </Tooltip>
          </span>
        </div>
        <a className="remove-email">
          <Icon
            className="text-danger svg-icon-4 svg-icon"
            name="Bootstrap/trash"
          />
        </a>
      </div>
      <ul className="mt-2 ms-4">
        {state === '1' ? (
          <>
            <li className="text-gray-700">
              <div className="d-flex align-items-center">
                <span>在电子邮件中可见</span>
                <Tooltip title="此电子邮件将用于与帐户相关的通知，也可用于密码重置。">
                  <Icon
                    className="text-gray-800 svg-icon-4 ms-1"
                    name="Bootstrap/info-circle"
                  />
                </Tooltip>
              </div>
            </li>
            <li className="text-gray-700">
              <div className="d-flex align-items-center">
                <span>接收通知</span>
                <Tooltip title="此电子邮件将用于与帐户相关的通知，也可用于密码重置。">
                  <Icon
                    className="text-gray-800 svg-icon-4 ms-1"
                    name="Bootstrap/info-circle"
                  />
                </Tooltip>
              </div>
            </li>
          </>
        ) : (
          <>
            <li className="text-gray-700">
              <div className="d-flex align-items-center">
                <span className="text-warning fw-bolder">未经验证</span>
                <Tooltip title="此电子邮件将用于与帐户相关的通知，也可用于密码重置。">
                  <Icon
                    className="text-gray-800 svg-icon-4 mx-1"
                    name="Bootstrap/info-circle"
                  />
                </Tooltip>
                <Button type="link" variant={false}>
                  重新发送验证邮件
                </Button>
              </div>
            </li>
            <li className="text-gray-700">
              <div className="d-flex align-items-center">
                <span>在电子邮件中可见</span>
                <Tooltip title="此电子邮件将用于与帐户相关的通知，也可用于密码重置。">
                  <Icon
                    className="text-gray-800 svg-icon-4 ms-1"
                    name="Bootstrap/info-circle"
                  />
                </Tooltip>
              </div>
            </li>
          </>
        )}
      </ul>
    </li>
  );
}

function EmailList() {
  return (
    <div className="w-800px rounded border border-secondary">
      <ul className="settings-emails-list">
        <EmailListItem state="1" />
        <EmailListItem state="0" />
      </ul>
    </div>
  );
}

function Emails() {
  return (
    <ContentWrapper className="page-settings-emails" footer={false}>
      <Card className="mb-5 mb-xl-10">
        <Card.Header>
          <Card.Title>电子邮件</Card.Title>
        </Card.Header>
        <Card.Body>
          <EmailList />
          <Form className="new-email-form my-5">
            <Form.Item shouldUpdate label="添加电子邮件">
              {() => (
                <div className="d-flex align-items-center">
                  <Form.Item noStyle name="email">
                    <Input solid className="w-250px me-4" />
                  </Form.Item>
                  <Button>添加</Button>
                </div>
              )}
            </Form.Item>
          </Form>
          <Separator className="my-5" />
          <Form className="set-primary-email-form my-5">
            <Form.Item shouldUpdate label="主要电子邮件">
              {() => (
                <>
                  <p className="mt-3 mb-4">
                    <code>limaofeng@msn.com</code>
                    将用于与帐户相关的通知，并可用于密码重置。
                  </p>
                  <div className="d-flex align-items-center">
                    <Form.Item noStyle name="email">
                      <Select
                        solid
                        className="w-250px me-4"
                        options={[
                          {
                            value: 'limaofeng@msn.com',
                            label: 'limaofeng@msn.com',
                          },
                          {
                            value: 'limf@zbsg.com.cn',
                            label: 'limf@zbsg.com.cn',
                          },
                        ]}
                      />
                    </Form.Item>
                    <Button>保存</Button>
                  </div>
                </>
              )}
            </Form.Item>
          </Form>
          {/* <div>
            <label>电子邮件首选项</label>
            <span>您的备用电子邮件地址将用作与安全相关的帐户通知的附加目的地，也可用于密码重置。</span>
            <div>
            接收所有电子邮件，除了我退订的那些。
            我们会不定期与您联系，提供来自 GitHub Universe 的最新消息和事件。
            只接收与帐户相关的电子邮件，以及我订阅的电子邮件。
            我们只会向您发送法律或行政电子邮件，以及您专门订阅的任何电子邮件。
              <Input/>
            </div>
          </div> */}
        </Card.Body>
      </Card>
      <Card className="mb-5 mb-xl-10 settings-email-preferences">
        <Card.Header>
          <Card.Title>电子邮件首选项</Card.Title>
        </Card.Header>
        <Card.Body>
          <div className="form-checkbox">
            <Radio solid value="1">
              接收所有电子邮件，但取消订阅的电子邮件除外。
            </Radio>
            <p className="note">
              我们偶尔会与您联系，已便您了解我们最新消息和事件。
            </p>
          </div>
          <div className="form-checkbox">
            <Radio solid value="2">
              仅接收与帐户相关的电子邮件，以及我订阅的电子邮件。
            </Radio>
            <p className="note">
              我们只会向您发送管理电子邮件，以及您专门订阅的任何电子邮件。
            </p>
          </div>
          <Button disabled>保存电子邮件首选项</Button>
        </Card.Body>
      </Card>
    </ContentWrapper>
  );
}

export default Emails;
