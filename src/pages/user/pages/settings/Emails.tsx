import { ContentWrapper } from '@/layouts/components';
import { Card, Input } from '@/pages/Metronic/components';

function Emails() {
  return (
    <ContentWrapper footer={false}>
      <Card className="mb-5 mb-xl-10">
        <Card.Header>
          <Card.Title>电子邮件</Card.Title>
        </Card.Header>
        <Card.Body>
          <div className="rounded border">
            <ul>
              <li>
                <div className="d-flex flex-justify-between">
                  <div className="d-flex flex-items-center">
                    <h4>limaofeng@msn.com</h4>
                    <span className="color-fg-muted mx-2">–</span>
                    <span>
                      <span className="color-fg-success text-bold">主邮件</span>
                      <span title="此电子邮件将用于与帐户相关的通知，也可用于密码重置。">xx</span>
                    </span>
                  </div>
                  <span className="text-right">xx</span>
                </div>
                <ul className="mt-2 ml-4 color-fg-muted">
                  <li>
                    <span>在电子邮件中可见</span>
                    <span className="tooltipped tooltipped-multiline tooltipped-s">x</span>
                  </li>
                  <li>
                    <span>接收通知</span>
                    <span className="tooltipped tooltipped-multiline tooltipped-s">x</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <label>添加电子邮件</label>
            <div>
              <Input />
            </div>
          </div>
          <div>
            <label>主要电子邮件地址</label>
            <span>limaofeng@msn.com将用于与帐户相关的通知，并可用于密码重置。</span>
            <div>
              <Input />
            </div>
          </div>
          <div>
            <label>备用电子邮件地址</label>
            <span>您的备用电子邮件地址将用作与安全相关的帐户通知，也可用于密码重置。</span>
            <div>
              <Input />
            </div>
          </div>
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
    </ContentWrapper>
  );
}

export default Emails;
