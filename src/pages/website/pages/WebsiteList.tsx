import { useCallback, useMemo, useState } from 'react';

import { Icon } from '@asany/icons';
import type { History } from 'history';
import { QRCodeCanvas } from 'qrcode.react';
import qs from 'qs';
import type { RouteComponentProps } from 'react-router';
import { Link } from 'umi';

import { useWebsitesQuery } from '../hooks';

import Controls from '@/components/Controls';
import { ContentWrapper } from '@/layouts/components';
import {
  Badge,
  Button,
  Card,
  Col,
  Dropdown,
  Empty,
  Input,
  Menu,
  Modal,
  Progress,
  Row,
  Symbol,
  Table,
  Toast,
  Tooltip,
} from '@/metronic';
import type { Sorter } from '@/metronic/typings';
import type { LandingPage, LandingStore } from '@/types';

type ActionsProps = {
  history: History;
  data: LandingPage;
  onShowQRCode: (url: string) => void;
  onDelete: (...ids: string[]) => Promise<void>;
};

function Actions({ data, history, onDelete, onShowQRCode }: ActionsProps) {
  const handleDelete = useCallback(
    async (_data: LandingPage) => {
      const message = `确定删除活动 “${_data.name}” 吗？`;

      const result = await Modal.confirm({
        title: '确定删除',
        content: (
          <>
            <p className="tip-confirm">{message}</p>
            <p>删除的操作不可逆,请谨慎操作</p>
          </>
        ),
        okClassName: 'btn-danger',
        okText: '删除',
      });
      if (!result.isConfirmed) {
        return;
      }
      await onDelete(_data.id);
      Toast.success(`活动 “${_data.name}” 删除成功`, 2000, {
        placement: 'bottom-start',
        progressBar: true,
      });
    },
    [onDelete],
  );

  const handleMenuClick = useCallback(
    (event) => {
      if (event.key == 'view') {
        history.push(`/website/landing/pages/${data.id}`);
      } else if (event.key == 'delete') {
        handleDelete(data);
      } else if (event.key == 'preview') {
        onShowQRCode(location.protocol + process.env.MOBILE_URL + '/lps/' + data.id);
      }
    },
    [data, handleDelete, history, onShowQRCode],
  );

  return (
    <Dropdown
      overlay={
        <Menu
          onClick={handleMenuClick}
          className="menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold fs-8 w-125px py-4"
        >
          <Menu.Item key="view" className="px-3">
            编辑
          </Menu.Item>
          <Menu.Separator />
          {/* {data.status == 'DRAFT' && (
            <Menu.Item key="publish" className="px-3">
              发布
            </Menu.Item>
          )}
          {data.status == 'PUBLISHED' && (
            <Menu.Item key="cancel" className="px-3">
              取消活动
            </Menu.Item>
          )} */}
          <Menu.Item key="preview" className="px-3">
            预览
          </Menu.Item>
          <Menu.Separator />
          <Menu.Item key="delete" className="px-3 actions-delete">
            删除
          </Menu.Item>
        </Menu>
      }
      placement="bottomRight"
    >
      <Button className="fs-8" variant="light" activeColor="light-primary">
        操作
        <Icon className="svg-icon-5 ms-2 me-n1" name="Duotune/arr072" />
      </Button>
    </Dropdown>
  );
}

// const allStatus = [
//   { label: '草稿', value: 'DRAFT', color: 'secondary' },
//   { label: '进行中', value: 'PUBLISHED', color: 'success' },
//   { label: '取消', value: 'SUSPEND', color: 'light' },
//   { label: '结束', value: 'COMPLETED', color: 'light' },
// ];

type WebsiteListProps = RouteComponentProps<any>;

function WebsiteList(props: WebsiteListProps) {
  const { history, location } = props;

  const [qrCode, setQrCode] = useState<string>();

  const handleOpenQRCode = useCallback((url: string) => {
    setQrCode(url);
  }, []);

  const handleCloseQRCode = useCallback(() => {
    setQrCode(undefined);
  }, []);

  const [layout, setLayout] = useState('card');

  const variables = useMemo(() => {
    const { q, ...query } = (props.location as any).query;
    if (q) {
      query.filter = { name_contains: q };
    }
    return query;
  }, [props.location]);

  const sorter = useMemo<Sorter>(() => {
    if (!variables.orderBy) {
      return {
        order: 'descend',
        field: 'createdAt',
      };
    }
    const [field, order] = variables.orderBy.split('_');
    return {
      order: order == 'desc' ? 'descend' : 'ascend',
      field,
    };
  }, [variables.orderBy]);

  /*   const [deletePage] = useDeletePageMutation({
    refetchQueries: [LandingPagesDocument],
  }); */

  const { data, loading, previousData } = useWebsitesQuery({
    fetchPolicy: 'cache-and-network',
    variables,
  });

  const total = useMemo(() => {
    if (loading) {
      return previousData?.websites.length || 0;
    }
    return data?.websites.length || 0;
  }, [data?.websites.length, loading, previousData?.websites.length]);
  const websites = data?.websites || [];

  const handleSearch = useCallback(
    (text) => {
      history.replace(location.pathname + '?' + qs.stringify({ q: text }));
    },
    [history, location.pathname],
  );

  /*   const handleChange = useCallback(
    (_pagination, _filters, _sorter) => {
      const _query: any = {};
      if (variables.filter?.name_contains) {
        _query.q = variables.filter?.name_contains;
      }
      if (!!_sorter) {
        _query.orderBy = _sorter.field + '_' + (_sorter.order == 'ascend' ? 'asc' : 'desc');
      }
      _query.page = _pagination.current;
      history.replace(location.pathname + '?' + qs.stringify(_query));
    },
    [history, location.pathname, variables.filter?.name_contains],
  ); */

  const handleDelete = useCallback(async (...ids: string[]) => {
    console.log(ids);
    //   const { data: dresult } = await deletePage({
    //     variables: {
    //       ids,
    //     },
    //   });
    //   return dresult?.deleteLandingPage || 0;
  }, []);

  const handleDeleteInBatch = useCallback(
    (selectedRowKeys: string[]) => async () => {
      const message = `确定删除选中的, 共 ${selectedRowKeys.length} 个活动吗？`;
      const result = await Modal.confirm({
        title: '确定删除',
        content: (
          <>
            <p className="tip-confirm">{message}</p>
            <p>删除的操作不可逆,请谨慎操作</p>
          </>
        ),
        okClassName: 'btn-danger',
        okText: '删除',
      });
      if (!result.isConfirmed) {
        return;
      }
      await handleDelete(...selectedRowKeys);
      Toast.success(`活动批量删除成功`, 2000, {
        placement: 'bottom-start',
        progressBar: true,
      });
    },
    [handleDelete],
  );

  const tableToolbar = useMemo(() => {
    return (selectedRowKeys: string[]) => {
      return (
        <div>
          <Button color="success" onClick={handleDeleteInBatch(selectedRowKeys)} variant={false}>
            批量删除
          </Button>
        </div>
      );
    };
  }, [handleDeleteInBatch]);

  console.log('layout', layout);

  return (
    <ContentWrapper header={{}} loading={loading} footer={false}>
      <div className="d-flex flex-wrap flex-stack pb-7">
        <div className="d-flex flex-wrap align-items-center">
          <Input.Search
            onSearch={handleSearch}
            defaultValue={variables.filter?.name_contains}
            placeholder="搜索"
            className="border-body bg-body w-250px"
          />
        </div>
        <Controls onLayout={setLayout as any} layout={layout as any}>
          <div className="d-flex my-0">
            {/* <Select2
              className="border-body bg-body w-150px me-5"
              placeholder="状态"
              options={[{ label: '全部', value: 'all' }, ...allStatus]}
            />
            <Button as={Link} variant="primary" to="/website/landing/pages/new">
              新增活动
            </Button> */}
          </div>
        </Controls>
      </div>
      {!total && !loading ? (
        <Card className="mb-5 mb-xl-10">
          <Empty
            title="还没有活动"
            description="马上添加一个活动试试"
            image="/assets/media/illustrations/sigma-1/4.png"
          >
            <Button as={Link} variant="primary" to="/website/landing/pages/new">
              新建活动
            </Button>
          </Empty>
        </Card>
      ) : (
        <>
          {layout == 'card' ? (
            <Row gutter={{ default: 6, xl: 9 }}>
              {websites.map((item) => (
                <Col key={item.id} md={6} xl={4}>
                  {/*----begin::Card--*/}
                  <Card as="a" to={`/websites/${item.id}`} className="border-hover-primary">
                    <Card.Header border={false} className="pt-9">
                      <Card.Title className="m-0">
                        <Symbol.Avatar
                          size={50}
                          labelClassName="fs-2"
                          className="bg-light"
                          src="/assets/media/svg/brand-logos/plurk.svg"
                          gap={3}
                        />
                      </Card.Title>
                      <Card.Toolbar>
                        <Badge lightStyle="primary" className="fw-bolder me-auto px-4 py-3">
                          In Progress
                        </Badge>
                      </Card.Toolbar>
                    </Card.Header>
                    <Card.Body className="p-9">
                      <div className="fs-3 fw-bolder text-dark">{item.name}</div>
                      <p className="text-gray-400 fw-bold fs-5 mt-1 mb-7">{item.description}</p>
                      <div className="d-flex flex-wrap mb-5">
                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                          <div className="fs-6 text-gray-800 fw-bolder">Sep 22, 2021</div>
                          <div className="fw-bold text-gray-400">Due Date</div>
                        </div>
                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                          <div className="fs-6 text-gray-800 fw-bolder">$284,900.00</div>
                          <div className="fw-bold text-gray-400">Budget</div>
                        </div>
                      </div>
                      <Tooltip title="This project 50% completed">
                        <div className="h-4px w-100 bg-light mb-5">
                          <Progress percent={50} />
                        </div>
                      </Tooltip>
                      <Symbol.Group maxCount={5}>
                        <Symbol.Avatar
                          labelClassName="fs-2"
                          size={35}
                          shape="circle"
                          src="/assets/media/avatars/150-1.jpg"
                        />
                        <Symbol.Avatar
                          labelClassName="fs-2"
                          size={35}
                          shape="circle"
                          src="/assets/media/avatars/150-2.jpg"
                        />
                        <Symbol.Avatar
                          labelClassName="fs-2"
                          size={35}
                          shape="circle"
                          alt="Susan Redwood"
                        />
                      </Symbol.Group>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <Card className="mb-5 mb-xl-10">
              <Card.Body>
                <Table
                  hover
                  rowKey="id"
                  noRowsRenderer={() => (
                    <Empty
                      description="列表数据为空"
                      image="/assets/media/illustrations/sigma-1/5.png"
                    />
                  )}
                  rowSelection={{
                    type: 'checkbox',
                    renderTitle: (size) => (
                      <>
                        已选中<span className="mx-2">{size}</span>个活动
                      </>
                    ),
                    toolbar: tableToolbar,
                  }}
                  columns={[
                    {
                      key: 'name',
                      title: '名称',
                      sorter: true,
                      sortOrder: sorter.field == 'name' ? sorter.order : undefined,
                      render(name, record) {
                        return (
                          <div className="ps-2">
                            <Link
                              className="text-gray-700"
                              to={`/website/landing/pages/${record.id}`}
                            >
                              {name}
                            </Link>
                          </div>
                        );
                      },
                    },
                    {
                      key: 'stores',
                      title: '门店',
                      render: (stores) => (
                        <div className="d-flex tw-truncate overflow-hidden pe-2">
                          <span className="tw-text-ellipsis tw-truncate overflow-hidden">
                            {stores.map((store: LandingStore) => store.name).join(',')}
                          </span>
                          <span>共 {stores.length} 家门店</span>
                        </div>
                      ),
                    },
                    {
                      key: 'poster',
                      title: '海报',
                      width: 80,
                      render(poster) {
                        return poster?.background ? (
                          <div className="d-flex w-30px justify-content-center">
                            <img
                              src={process.env.STORAGE_URL + `/preview/${poster.background.id}`}
                              className="h-30px w-20px"
                            />
                          </div>
                        ) : (
                          <Icon className="svg-icon-2qx text-muted" name="Bootstrap/file-image" />
                        );
                      },
                    },
                    // {
                    //   key: 'status',
                    //   title: '状态',
                    //   className: 'w-100px',
                    //   render(value) {
                    //     const status = allStatus.find((it) => it.value == value);
                    //     return <Badge color={status?.color as any}>{status?.label}</Badge>;
                    //   },
                    // },
                    // {
                    //   key: 'createdAt',
                    //   title: '创建时间',
                    //   width: 150,
                    //   sorter: true,
                    //   sortOrder: sorter.field == 'createdAt' ? sorter.order : undefined,
                    // },
                    {
                      key: 'actions',
                      title: '操作',
                      width: 100,
                      render: (_, record) => {
                        return (
                          <Actions
                            onDelete={handleDelete}
                            onShowQRCode={handleOpenQRCode}
                            history={props.history}
                            data={record as any}
                          />
                        );
                      },
                    },
                  ]}
                  dataSource={websites}
                />
              </Card.Body>
            </Card>
          )}
          <Modal
            title="预览二维码"
            dialogClassName="w-250px"
            onCancel={handleCloseQRCode}
            visible={!!qrCode}
          >
            <div className="d-inline-block">
              {!!qrCode && <QRCodeCanvas size={200} value={qrCode} />}
            </div>
            <span>使用手机扫码二维码预览</span>
          </Modal>
        </>
      )}
    </ContentWrapper>
  );
}

export default WebsiteList;
