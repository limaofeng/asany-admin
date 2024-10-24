import { useState } from 'react';
import { useParams } from 'react-router';

import { APP_CONFIG } from '@umijs/max';
import FsLightbox from 'fslightbox-react';
import moment from 'moment';

import { ContentWrapper } from '@/layouts/components';
import { Badge, Card, Col, Color, Row } from '@/metronic';

import { useTicketQuery } from '../hooks';

import './TicketDetailsView.scss';

const warrantyStatusTexts: {
  [key: string]: string;
} = {
  INACTIVE: '未生效',
  ACTIVE: '在保',
  EXPIRED: '已过期',
  CANCELED: '已作废',
};

export const warrantyStatusColor = (
  status?: keyof typeof warrantyStatusTexts,
): Color => {
  if (!status) {
    return 'secondary';
  }
  return {
    INACTIVE: 'warning',
    ACTIVE: 'success',
    EXPIRED: 'danger',
    CANCELED: 'secondary',
  }[status] as any;
};

export const warrantyStatusText = (status?: any) => {
  return warrantyStatusTexts[status] || '未知';
};

function TicketDetailsView() {
  const params = useParams();
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const { data, loading } = useTicketQuery({
    variables: {
      id: params.id,
    },
    fetchPolicy: 'network-only',
  });

  const ticket = data?.result;
  const device = ticket?.device;
  const store = ticket?.store;

  return (
    <ContentWrapper
      header={{
        title: '服务单详情',
      }}
      loading={loading}
    >
      <div className="d-flex flex-column flex-xl-row p-7">
        <div className="flex-lg-row-fluid me-xl-15 mb-20 mb-xl-0">
          <div className="mb-0">
            {/*--begin::Heading--*/}
            <div className="d-flex align-items-center mb-12">
              {/*--begin::Icon--*/}
              <i className="ki-duotone ki-file-added fs-4qx text-success ms-n2 me-3">
                <span className="path1"></span>
                <span className="path2"></span>
              </i>
              {/*--end::Icon--*/}

              {/*--begin::Content--*/}
              <div className="d-flex flex-column">
                {/*--begin::Title--*/}
                <h1 className="text-gray-800 fw-semibold">
                  {ticket?.description}
                </h1>
                {/*--end::Title--*/}

                {/*--begin::Info--*/}
                <div className="">
                  {/*--begin::Label--*/}
                  <span className="fw-semibold text-muted me-6">
                    设备:
                    <a href="#" className="text-muted text-hover-primary">
                      {ticket?.device?.name}
                    </a>
                  </span>
                  {/*--end::Label--*/}

                  {/*--begin::Label--*/}
                  <span className="fw-semibold text-muted me-6">
                    报告人:
                    <a href="#" className="ms-2 text-muted text-hover-primary">
                      {ticket?.contactInfo?.name}
                    </a>
                  </span>
                  {/*--end::Label--*/}

                  {/*--begin::Label--*/}
                  <span className="fw-semibold text-muted">
                    创建时间:
                    <span className="ms-2 fw-bold text-gray-600 me-1">
                      {ticket?.createdAt
                        ? moment(ticket.createdAt).fromNow()
                        : 'unknown'}
                    </span>
                    ({moment(ticket?.createdAt).format('YYYY-MM-DD HH:mm:ss')})
                  </span>
                  {/*--end::Label--*/}
                </div>
                {/*--end::Info--*/}
              </div>
              {/*--end::Content--*/}
            </div>
            {/*--end::Heading--*/}

            {/*--begin::Details--*/}
            <div className="mb-15">
              {/*--begin::Description--*/}
              <div className="mb-15 fs-5 fw-normal text-gray-800">
                <div className="d-flex flex-wrap gap-2">
                  {ticket?.attachments?.map((item, i) => (
                    <a
                      key={item.id}
                      className="d-block overlay w-25"
                      href="javascript:;"
                      onClick={() => {
                        setLightboxController({
                          toggler: true,
                          slide: i + 1,
                        });
                      }}
                    >
                      <div
                        className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px"
                        style={{
                          backgroundImage: `url(${APP_CONFIG.STORAGE_URL}/preview/${item.id})`,
                        }}
                      ></div>
                      <div className="overlay-layer card-rounded bg-dark bg-opacity-25 shadow">
                        <i className="bi bi-eye-fill text-white fs-3x"></i>
                      </div>
                    </a>
                  ))}
                </div>
                <FsLightbox
                  toggler={lightboxController.toggler}
                  sources={ticket?.attachments?.map(
                    (item) => `${APP_CONFIG.STORAGE_URL}/preview/${item.id}`,
                  )}
                  slide={lightboxController.slide}
                />

                <Row
                  className="mt-6"
                  gutter={{
                    default: 5,
                    xxl: 8,
                  }}
                >
                  <Col xl={6}>
                    <Card className="h-250px">
                      <Card.Header>
                        <Card.Title>设备信息</Card.Title>
                      </Card.Header>
                      <Card.Body>
                        <div className="d-flex align-items-center mb-5">
                          <div className="d-flex align-items-center flex-grow-1">
                            {/* <div className="symbol symbol-45px me-5">
                              <img
                                src="/assets/media/avatars/300-23.jpg"
                                alt=""
                              />
                            </div> */}
                            <div className="d-flex flex-column">
                              <a
                                href="#"
                                className="text-gray-900 text-hover-primary fs-6 fw-bold"
                              >
                                {device?.brand?.name} - {device?.name}
                              </a>

                              <span className="text-gray-500 fw-bold">
                                SN: {device?.sn}
                              </span>
                            </div>
                          </div>
                          <div className="my-0">
                            <Badge
                              color={warrantyStatusColor(
                                device?.warrantyStatus,
                              )}
                            >
                              {warrantyStatusText(device?.warrantyStatus)}
                            </Badge>
                          </div>
                        </div>
                        <div className="mb-5">
                          <div className="text-gray-800 fw-normal mb-5">
                            <br />
                            启用时间: {device?.warrantyStartDate}
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xl={6}>
                    <Card className="h-250px">
                      <Card.Header>
                        <Card.Title>门店信息</Card.Title>
                      </Card.Header>
                      <Card.Body>
                        <div className="d-flex align-items-center mb-5">
                          <div className="d-flex align-items-center flex-grow-1">
                            <div className="d-flex flex-column">
                              <a
                                href="#"
                                className="text-gray-900 text-hover-primary fs-6 fw-bold"
                              >
                                {store?.name}
                              </a>

                              <span className="text-gray-500 fw-bold">
                                NO: {store?.no}
                              </span>
                            </div>
                          </div>
                          <div className="my-0"></div>
                        </div>
                        <div className="mb-5">
                          <div className="text-gray-800 fw-normal mb-5">
                            门店地址: {store?.address?.fullAddress} <br />
                            门店电话: {store?.phone} <br />
                            开业时间：{store?.openingDate} <br />
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row
                  gutter={{
                    default: 5,
                    xxl: 8,
                  }}
                >
                  <Col xl={6}>
                    <Card className="h-250px">
                      <Card.Header>
                        <Card.Title>报修联系方式</Card.Title>
                      </Card.Header>
                      <Card.Body>
                        <div className="d-flex align-items-center mb-5">
                          <div className="d-flex align-items-center flex-grow-1">
                            <div className="d-flex flex-column">
                              <a
                                href="#"
                                className="text-gray-900 text-hover-primary fs-6 fw-bold"
                              >
                                {ticket?.contactInfo?.name}
                              </a>

                              <span className="text-gray-500 fw-bold">
                                {ticket?.contactInfo?.phone}
                              </span>
                            </div>
                          </div>
                          <div className="my-0"></div>
                        </div>
                        <div className="mb-5">
                          <div className="text-gray-800 fw-normal mb-5">
                            {ticket?.contactInfo?.address?.fullAddress}
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xl={6}>
                    <Card className="h-250px">
                      <Card.Header>
                        <Card.Title>维修信息</Card.Title>
                      </Card.Header>
                      <Card.Body>
                        <div className="d-flex align-items-center mb-5">
                          <div className="d-flex align-items-center flex-grow-1">
                            <div className="d-flex flex-column">
                              <a
                                href="#"
                                className="text-gray-900 text-hover-primary fs-6 fw-bold"
                              >
                                {ticket?.assignee?.name}
                              </a>
                              <span className="text-gray-500 fw-bold">
                                {ticket?.assignee?.phone?.number}
                              </span>
                            </div>
                          </div>
                          <div className="my-0"></div>
                        </div>
                        <div className="mb-5">
                          <div className="text-gray-800 fw-normal mb-5">
                            完成维修时间: {ticket?.completedAt} <br />
                            延期时间: {ticket?.suspendedAt}
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
            {/*--end::Details--*/}
          </div>
        </div>

        <div className="flex-column flex-lg-row-auto w-100 mw-lg-300px mw-xxl-350px">
          <div className="card card-flush ">
            {/*--begin::Header--*/}
            <div className="card-header pt-5">
              {/*--begin::Title--*/}
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold text-gray-900">
                  状态流转情况
                </span>
                <span className="text-gray-500 pt-2 fw-semibold fs-6">
                  最新活动
                </span>
              </h3>
              {/*--end::Title--*/}

              {/*--begin::Toolbar--*/}
              <div className="card-toolbar">
                {/*--begin::Menu--*/}
                <button
                  type="button"
                  className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-end"
                  data-kt-menu-overflow="true"
                >
                  <i className="ki-duotone ki-dots-square fs-1 text-gray-500 me-n1">
                    <span className="path1"></span>
                    <span className="path2"></span>
                    <span className="path3"></span>
                    <span className="path4"></span>
                  </i>
                </button>

                {/*--end::Menu--*/}
              </div>
              {/*--end::Toolbar--*/}
            </div>
            {/*--end::Header--*/}

            {/*--begin::Body--*/}
            <div className="card-body pt-6">
              {/*--begin::Timeline--*/}
              <div className="timeline-label timeline-label-ticket-status">
                {/*--begin::Item--*/}

                {ticket?.statusHistory.map((item) => (
                  <div key={item.id} className="timeline-item">
                    {/*--begin::Label--*/}
                    <div className="timeline-label-ticket-status timeline-label fw-bold w-75px text-gray-800 fs-6">
                      {moment(item.logTime).fromNow()}
                    </div>
                    {/*--end::Label--*/}

                    {/*--begin::Badge--*/}
                    <div className="timeline-badge">
                      <i className="ki-duotone ki-abstract-8 text-gray-600 fs-3">
                        <span className="path1"></span>
                        <span className="path2"></span>
                      </i>
                    </div>
                    {/*--end::Badge--*/}

                    {/*--begin::Text--*/}
                    <div className="fw-semibold text-gray-700 ps-3 fs-7">
                      {item.status} {item.loggedBy?.name} {item.note}
                      <br />
                      {moment(item.logTime).format('YYYY-MM-DD HH:mm:ss')}
                    </div>
                    {/*--end::Text--*/}
                  </div>
                ))}
              </div>
              {/*--end::Timeline--*/}
            </div>
            {/*--end: Card Body--*/}
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default TicketDetailsView;
