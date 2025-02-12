import { ContentWrapper } from '@/layouts/components';
import { Card } from '@/metronic';

function NoContacts() {
  return (
    <ContentWrapper style={{ paddingLeft: 0 }} footer={false} header={true}>
      <Card flush className="border-0 rounded-0 w-100">
        <Card.Body className="p-0">
          <div className="card-px text-center py-20 my-10">
            <h2 className="fs-2x fw-bolder mb-10">欢迎使用联系人应用程序</h2>
            <p className="text-gray-400 fs-4 fw-bold mb-10">
              是时候扩大我们的联系了。
              <br />
              通过添加您的下一个联系人，来启动您的联系人。
            </p>
            <a className="btn btn-primary">添加新联系人</a>
          </div>
          <div className="text-center px-4">
            <img
              className="mw-100 mh-300px"
              alt=""
              src="/assets/media/illustrations/sigma-1/5.png"
            />
          </div>
        </Card.Body>
      </Card>
    </ContentWrapper>
  );
}

export default NoContacts;
