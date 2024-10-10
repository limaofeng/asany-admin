import { useParams } from 'react-router';

import { ContentWrapper } from '@/layouts/components';
import { Card, Col, Row } from '@/metronic';

import { useCustomerQuery } from '../hooks';

function CustomerInformationView() {
  const params = useParams<{ id: string }>();

  const { data, loading } = useCustomerQuery({
    variables: {
      id: params.id,
    },
    skip: !params.id,
    fetchPolicy: 'network-only',
  });
  const customer = data?.result;
  return (
    <ContentWrapper
      header={{
        title: '客户详情',
      }}
      loading={loading}
    >
      <Card className="mb-5 mb-xl-10">
        <Card.Header className="pt-8">
          <Card.Title className="flex-column">
            <div className="card-title fs-3 fw-bold">基础信息</div>
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col span={3}>
              <div className="fs-6 fw-semibold mt-2 mb-3">名称</div>
            </Col>
            <Col span={9} className="d-flex align-items-center">
              <span className="fs-6 mt-2 mb-3">{customer?.name}</span>
            </Col>
          </Row>
          <Row>
            <Col span={3}>
              <div className="fs-6 fw-semibold mt-2 mb-3">地址</div>
            </Col>
            <Col span={9} className="d-flex align-items-center">
              <span className="fs-6 mt-2 mb-3">
                {customer?.contactInfo?.address?.fullAddress}{' '}
                {customer?.contactInfo?.address?.detailedAddress}
              </span>
            </Col>
          </Row>
          <Row>
            <Col span={3}>
              <div className="fs-6 fw-semibold mt-2 mb-3">联系人</div>
            </Col>
            <Col span={9} className="d-flex align-items-center">
              <span className="fs-6 mt-2 mb-3">
                {customer?.contactInfo?.name}
              </span>
            </Col>
          </Row>
          <Row>
            <Col span={3}>
              <div className="fs-6 fw-semibold mt-2 mb-3">联系电话</div>
            </Col>
            <Col span={9} className="d-flex align-items-center">
              <span className="fs-6 mt-2 mb-3">
                {customer?.contactInfo?.phone}
              </span>
            </Col>
          </Row>
          <Row>
            <Col span={3}>
              <div className="fs-6 fw-semibold mt-2 mb-3">邮箱</div>
            </Col>
            <Col span={9} className="d-flex align-items-center">
              <span className="fs-6 mt-2 mb-3">
                {customer?.contactInfo?.email}
              </span>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </ContentWrapper>
  );
}

export default CustomerInformationView;
