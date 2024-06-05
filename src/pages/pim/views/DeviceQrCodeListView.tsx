import { useCallback, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { QRCodeCanvas } from 'qrcode.react';
import qs from 'query-string';

import { Controls } from '@/components';
import useQuery from '@/hooks/useQuery';
import { ContentWrapper } from '@/layouts/components';
import {
  BlockUI,
  Button,
  Card,
  Empty,
  Form,
  Input,
  Modal,
  Table,
  Toast,
} from '@/metronic';
import { Sorter } from '@/metronic/typings';
import { ShortLink } from '@/types';

import {
  DeviceQrCodesDocument,
  useDeleteManyShortLinksMutation,
  useDeviceQrCodesQuery,
  useGenerateShortLinksMutation,
} from '../hooks';
import { generateQRCodeLabel } from '../utils/labelPrinter';

function generateNumber(ruleStr: string, sequence: number) {
  // 获取当前日期
  const now = new Date();
  const year = now.getFullYear().toString();
  const month = (now.getMonth() + 1).toString().padStart(2, '0'); // 月份从0开始，所以+1
  const day = now.getDate().toString().padStart(2, '0');

  // 替换规则字符串中的日期部分
  let number = ruleStr
    .replace('{YYYY}', year)
    .replace('{MM}', month)
    .replace('{DD}', day);

  // 查找序列号规则，并替换之
  const seqMatch = ruleStr.match(/{SEQ:(\d+)}/);
  if (seqMatch) {
    const seqLength = parseInt(seqMatch[1], 10);
    const formattedSeq = sequence.toString().padStart(seqLength, '0');
    number = number.replace(seqMatch[0], formattedSeq);
  }

  return number;
}

function DeviceQrCodeListView() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = useQuery();

  const [visible, setVisible] = useState(false);
  const form = Form.useForm();

  const variables = useMemo(() => {
    if (query.q) {
      query.filter = { name_contains: query.q };
      delete query.q;
    }
    return query;
  }, [query]);

  const [deleteManyShortLinks] = useDeleteManyShortLinksMutation({
    refetchQueries: [DeviceQrCodesDocument],
  });
  const { data, loading, previousData } = useDeviceQrCodesQuery({
    fetchPolicy: 'cache-and-network',
    variables,
  });
  const [generateShortLinks, { loading: submitting }] =
    useGenerateShortLinksMutation({
      refetchQueries: [DeviceQrCodesDocument],
    });

  const handleNewQrCode = useCallback(() => {
    setVisible(true);
  }, []);

  const handleGenerateEmptyShortLinks = useCallback(async () => {
    const values = await form.validateFields();
    const { data } = await generateShortLinks({
      variables: {
        links: Array.from({ length: values.count }).map((_, index) => ({
          category: 'wxb',
          metadata: {
            no: generateNumber(values.numberRule, index + 1),
          },
        })),
      },
    });
    const links =
      data?.result.map((item) => ({
        ...item,
        qrcode: process.env.SHORT_DOMAIN_NAME + '/s/' + item.code,
      })) || [];
    generateQRCodeLabel(links);
    Toast.success(`二维码批量删除成功`, 2000, {
      placement: 'bottom-left',
      progressBar: true,
    });
    setVisible(false);
  }, []);

  const sorter = useMemo<Sorter>(() => {
    if (!variables.orderBy) {
      return {
        order: 'descend',
        field: 'createdAt',
      };
    }
    const [field, order] = variables.orderBy.split('_');
    return {
      order: order === 'desc' ? 'descend' : 'ascend',
      field,
    };
  }, [variables.orderBy]);

  const total = useMemo(() => {
    if (loading) {
      return previousData?.deviceQrCodes.pageInfo.total || 0;
    }
    return data?.deviceQrCodes.pageInfo.total || 0;
  }, [
    data?.deviceQrCodes.pageInfo.total,
    loading,
    previousData?.deviceQrCodes.pageInfo.total,
  ]);
  const pagination = useMemo(() => {
    if (loading) {
      return previousData?.deviceQrCodes.pageInfo || { total: 0, current: 1 };
    }
    return data?.deviceQrCodes.pageInfo || { total: 0, current: 1 };
  }, [data?.deviceQrCodes, loading, previousData?.deviceQrCodes]);
  const stores = useMemo(() => {
    if (loading) {
      return (previousData?.deviceQrCodes?.edges || []).map(
        (item) => item.node,
      );
    }
    return (data?.deviceQrCodes?.edges || []).map((item) => item.node);
  }, [data?.deviceQrCodes, loading, previousData?.deviceQrCodes]);

  const handleSearch = useCallback(
    (text: string) => {
      navigate(location.pathname + '?' + qs.stringify({ q: text }), {
        replace: true,
      });
    },
    [navigate, location.pathname],
  );

  const handleChange = useCallback(
    (_pagination: any, _filters: any, _sorter: any) => {
      const _query: any = {};
      if (variables.filter?.name_contains) {
        _query.q = variables.filter?.name_contains;
      }
      if (!!_sorter) {
        _query.orderBy =
          _sorter.field + '_' + (_sorter.order === 'ascend' ? 'asc' : 'desc');
      }
      _query.page = _pagination.current;
      navigate(location.pathname + '?' + qs.stringify(_query), {
        replace: true,
      });
    },
    [history, location.pathname, variables.filter?.name_contains],
  );

  const handleDelete = useCallback(
    async (...ids: string[]) => {
      const { data: dresult } = await deleteManyShortLinks({
        variables: {
          where: {
            id_in: ids,
          },
        },
      });
      return dresult?.result.count || 0;
    },
    [deleteManyShortLinks],
  );

  const handleDeleteInBatch = useCallback(
    (selectedRowKeys: string[]) => async () => {
      const message = `确定删除选中的, 共 ${selectedRowKeys.length} 个二维码吗？`;
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
      Toast.success(`二维码批量删除成功`, 2000, {
        placement: 'bottom-left',
        progressBar: true,
      });
    },
    [handleDelete],
  );

  const handlePrintInBatch = useCallback(
    (_selectedRowKeys: string[], selectedRows: ShortLink[]) => async () => {
      generateQRCodeLabel(
        selectedRows.map((item) => ({
          ...item,
          qrcode: process.env.SHORT_DOMAIN_NAME + '/s/' + item.code,
        })),
      );
    },
    [],
  );

  const tableToolbar = useMemo(() => {
    return (selectedRowKeys: string[], selectedRows: ShortLink[]) => {
      return (
        <div>
          <Button
            color="success"
            onClick={handleDeleteInBatch(selectedRowKeys)}
            variant={false}
          >
            批量删除
          </Button>
          <Button
            color="success"
            onClick={handlePrintInBatch(selectedRowKeys, selectedRows)}
            variant={false}
          >
            打印二维码
          </Button>
        </div>
      );
    };
  }, [handleDeleteInBatch]);

  const [qrCode, setQrCode] = useState<string>();

  const handleOpenQRCode = useCallback((url: string) => {
    setQrCode(url);
  }, []);

  const handleCloseQRCode = useCallback(() => {
    setQrCode(undefined);
  }, []);

  return (
    <ContentWrapper
      header={{
        title: '设备二维码',
      }}
    >
      <Modal
        width={640}
        centered
        onOk={handleGenerateEmptyShortLinks}
        confirmLoading={submitting}
        okText="保存"
        visible={visible}
        onCancel={() => setVisible(false)}
      >
        <Modal.Header closable className="ms-5 border-0">
          <h1 className="modal-title pt-6 pb-4">生成设备二维码</h1>
        </Modal.Header>
        <Modal.Body>
          <Form
            form={form}
            initialValues={{
              numberRule: 'NV-{YYYY}{MM}{DD}-{SEQ:3}',
              count: 1,
            }}
          >
            <Form.Item
              className="d-flex flex-column mb-7"
              name="numberRule"
              label="设备编号规则"
              help="编号规则支持变量：{YYYY} {MM} {DD} {SEQ:3}"
              rules={[{ required: true, message: '请输入编号规则' }]}
            >
              <Input solid placeholder="INV-{YYYY}{MM}{DD}-{SEQ:3}" />
            </Form.Item>
            <Form.Item
              className="d-flex flex-column mb-7"
              name="count"
              label="生成数量"
            >
              <Input solid />
            </Form.Item>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal
        title="预览二维码"
        dialogClassName="w-250px"
        onCancel={handleCloseQRCode}
        visible={!!qrCode}
        centered
        okButtonProps={{
          style: { display: 'none' },
        }}
      >
        <div className="d-inline-block">
          {!!qrCode && <QRCodeCanvas size={200} value={qrCode} />}
        </div>
        <span>使用手机扫码二维码预览</span>
      </Modal>
      <div className="d-flex flex-wrap flex-stack pb-7">
        <div className="d-flex flex-wrap align-items-center">
          <h3 className="fw-bolder me-5">设备二维码</h3>
          <Input.Search
            onSearch={handleSearch}
            defaultValue={variables.filter?.name_contains}
            placeholder="搜索"
            className="border-body bg-body w-250px"
          />
        </div>
        <Controls>
          <div className="d-flex my-0">
            <Button onClick={handleNewQrCode}>生成二维码</Button>
          </div>
        </Controls>
      </div>
      {!total && !loading ? (
        <Card className="mb-5 mb-xl-10">
          <Empty
            title="还没有设备二维码"
            description="马上添加设备二维码"
            image="/assets/media/illustrations/sigma-1/4.png"
          >
            <Button variant="primary">生成二维码</Button>
          </Empty>
        </Card>
      ) : (
        <>
          <Card className="mb-5 mb-xl-10">
            <Card.Body>
              <BlockUI
                overlayClassName="bg-white bg-opacity-25"
                loading={loading}
              >
                <Table
                  hover
                  rowKey="id"
                  rowSelection={{
                    type: 'checkbox',
                    renderTitle: (size) => (
                      <>
                        已选中<span className="mx-2">{size}</span>个二维码
                      </>
                    ),
                    toolbar: tableToolbar,
                  }}
                  noRowsRenderer={() => (
                    <Empty
                      description="列表数据为空"
                      image="/assets/media/illustrations/sigma-1/5.png"
                    />
                  )}
                  columns={[
                    {
                      key: 'code',
                      title: '编号',
                      sorter: true,
                      sortOrder:
                        sorter.field === 'code' ? sorter.order : undefined,
                      width: 80,
                    },
                    {
                      key: 'url',
                      title: '二维码链接',
                      sorter: true,
                      sortOrder:
                        sorter.field === 'url' ? sorter.order : undefined,
                      render(url, data) {
                        // console.log('metadata', data.metadata, url);
                        if (!url) {
                          return (
                            <span className="text-gray-700">未绑定设备</span>
                          );
                        }
                        return (
                          <a className="text-gray-700" href={url} target="_">
                            {data.metadata?.no}
                          </a>
                        );
                      },
                    },
                    {
                      key: 'createdAt',
                      title: '创建时间',
                      width: 200,
                    },
                    {
                      key: 'accessCount',
                      title: '访问次数',
                      width: 120,
                    },
                    {
                      key: 'qrCode',
                      title: '二维码',
                      width: 180,
                      render(_, record) {
                        const qrcode =
                          process.env.SHORT_DOMAIN_NAME + '/s/' + record.code;
                        return (
                          <QRCodeCanvas
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              handleOpenQRCode(
                                process.env.SHORT_DOMAIN_NAME +
                                  '/s/' +
                                  record.code,
                              );
                            }}
                            size={30}
                            value={qrcode}
                          />
                        );
                      },
                    },
                    // {
                    //   key: 'address.street',
                    //   dataIndex: 'address.fullAddress',
                    //   title: '门店地址',
                    //   width: 120,
                    //   sorter: true,
                    //   sortOrder: sorter.field === 'location.street' ? sorter.order : undefined,
                    // },
                    // {
                    //   key: 'createdAt',
                    //   title: '创建时间',
                    //   width: 150,
                    //   sorter: true,
                    //   sortOrder: sorter.field === 'createdAt' ? sorter.order : undefined,
                    // },
                    // {
                    //   key: 'actions',
                    //   title: '操作',
                    //   width: 100,
                    //   render: (_, record) => {
                    //     return (
                    //       <Actions
                    //         baseUrl={baseUrl}
                    //         onDelete={handleDelete}
                    //         navigate={navigate}
                    //         data={record}
                    //       />
                    //     );
                    //   },
                    // },
                  ]}
                  pagination={pagination}
                  onChange={handleChange}
                  dataSource={stores}
                />
              </BlockUI>
            </Card.Body>
          </Card>
        </>
      )}
    </ContentWrapper>
  );
}

export default DeviceQrCodeListView;
