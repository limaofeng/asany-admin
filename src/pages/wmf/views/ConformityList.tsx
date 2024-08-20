import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Icon from '@asany/icons';
import moment from 'moment';

import useDelete from '@/hooks/useDelete';
import useImportExcel from '@/hooks/useImportExcel';
import useListPage from '@/hooks/useListPage';
import { ContentWrapper } from '@/layouts/components';
import {
  Badge,
  BlockUI,
  Button,
  Card,
  Dropdown,
  Empty,
  Input,
  Menu,
  Modal,
  Table,
  Toast,
} from '@/metronic';
import {
  useArticlesQuery,
  useDeleteManyArticlesMutation,
} from '@/pages/cms/hooks';
import { Article, ArticleStatus, DocumentContent } from '@/types';
import { sleep } from '@/utils';

function ArticleActions({
  data,
  refetch,
}: {
  data: Article;
  refetch: () => void;
}) {
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  const [deleteManyArticles] = useDeleteManyArticlesMutation();

  const [handleDelete] = useDelete<{ name: string; id: string }>(
    {
      title: '你确定要删除吗？',
      content: (data) => (
        <>
          您即将删除“<strong>{data.name}</strong>
          ”。删除操作不可逆转，请谨慎操作，您确定删除吗？
        </>
      ),
    },
    async (data) => {
      await deleteManyArticles({
        variables: {
          where: {
            id_in: [data?.id],
          },
        },
      });
      refetch();
    },
  );

  const handleClick = useCallback(({ key }: any) => {
    if (key === 'edit') {
      navigate(`/pim/articles/${data.id}`);
    } else if (key === 'delete') {
      handleDelete({ name: data.name!, id: data.id });
    }
  }, []);

  return (
    <Dropdown
      overlay={
        <Menu
          onClick={handleClick}
          className="menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-2"
        >
          <Menu.Item key="edit" className="px-3">
            编辑
          </Menu.Item>
          <Menu.Item key="delete" className="actions-delete px-3">
            删除
          </Menu.Item>
        </Menu>
      }
      placement="bottomRight"
      onVisibleChange={setVisible}
      visible={visible}
    >
      <Button variant="clean" activeColor="light-primary">
        操 作
        <Icon className="ms-2 svg-icon-5 m-0" name="Duotune/arr072" />
      </Button>
    </Dropdown>
  );
}

function ConformityList() {
  // const { data: user } = useCurrentuser();
  const [searchParams] = useSearchParams();

  const [where, setWhere] = useState<{
    name_contains?: string;
    customer?: string;
    customerStore?: string;
    createdBy?: string;
  }>({});

  useEffect(() => {
    setWhere((where) => {
      if (searchParams.get('name_contains')) {
        where.name_contains = searchParams.get('name_contains')!;
      }
      if (searchParams.get('customer')) {
        where.customer = searchParams.get('customer')!;
      }
      if (searchParams.get('customerStore')) {
        where.customerStore = searchParams.get('customerStore')!;
      }
      if (searchParams.get('createdBy')) {
        where.createdBy = searchParams.get('createdBy')!;
      }
      return where;
    });
  }, [searchParams]);

  const [deleteManyArticles] = useDeleteManyArticlesMutation();

  const [articles, { loading, pageInfo, sorter, refetch, onChange }] =
    useListPage<Article>(useArticlesQuery as any, {
      toQuery: (variables, pagination, where, sorter) => {
        const _query: any = {};
        if (where?.name_contains) {
          _query.q = where?.name_contains;
        }
        if (where?.customer) {
          _query.customer = where.customer;
        }
        if (where?.customerStore) {
          _query.customerStore = where.customerStore;
        }
        if (where?.createdBy) {
          _query.createdBy = where.createdBy;
        }
        if (!!sorter) {
          _query.orderBy =
            sorter.field + '_' + (sorter.order === 'ascend' ? 'asc' : 'desc');
        }
        _query.page = pagination.current;
        return _query;
      },
      toVariables: (query) => {
        query.where = {};
        if (query.q) {
          query.where['name_contains'] = query.q;
          delete query.q;
        }
        if (query.customer) {
          query.where['customer'] = query.customer;
          delete query.customer;
        }
        if (query.customerStore) {
          query.where['customerStore'] = query.customerStore;
          delete query.customerStore;
        }
        if (query.createdBy) {
          query.where['createdBy'] = query.createdBy;
          delete query.createdBy;
        }
        return query;
      },
    });

  // const setWhereCreatedBy = useCallback((value: string) => {
  //   setWhere((where) => ({
  //     ...where,
  //     createdBy: !value ? undefined : value,
  //   }));
  // }, []);

  const handleSearch = useCallback(
    (value: string) => {
      setWhere((where) => ({
        ...where,
        name_contains: value,
      }));
    },
    [onChange, sorter],
  );

  useEffect(() => {
    onChange(
      { current: searchParams.get('page') || 1, pageSize: 10 },
      where,
      sorter,
    );
  }, [where, onChange, sorter, searchParams.get('page')]);

  const importData = useCallback(async (data: any[]) => {
    console.log('importData', data);

    const statistics: {
      totalRecords: number;
      successCount: number;
      failureCount: number;
      failedRecords: { record: any; error: any }[];
      startTime: Date | null;
      endTime: Date | null;
    } = {
      totalRecords: 0, // 总记录数
      successCount: 0, // 成功数量
      failureCount: 0, // 失败数量
      failedRecords: [], // 记录失败的详细信息
      startTime: null, // 开始时间
      endTime: null, // 结束时间
    };

    statistics.totalRecords = data.length;

    const toast = Toast.loading('xxxxx', {
      placement: 'top-center',
    });

    statistics.startTime = new Date();

    for (const record of data) {
      try {
        // 假设 importRecord 是一个导入记录的函数
        await sleep(1000);
        toast.update('asadads-', {});
        statistics.successCount++;
      } catch (error) {
        statistics.failureCount++;
        statistics.failedRecords.push({ record, error });
      }
    }

    statistics.endTime = new Date();
    console.log('Import Summary:', statistics);

    toast.close();

    Modal.success({
      title: '操作成功',
      content: (
        <div>
          <p>总记录数: {statistics.totalRecords}</p>
          <p>成功数量: {statistics.successCount}</p>
          <p>失败数量: {statistics.failureCount}</p>
          <p>
            开始时间:{' '}
            {moment(statistics.startTime).format('YYYY-MM-DD HH:mm:ss')}
          </p>
          <p>
            结束时间: {moment(statistics.endTime).format('YYYY-MM-DD HH:mm:ss')}
          </p>
        </div>
      ),
      allowOutsideClick: false,
    });
  }, []);

  const [excelFileInput, handleImportExcel, handleDownloadTmplate] =
    useImportExcel(importData, {
      header: 1,
      fields: {
        slug: {
          index: 0,
          name: 'CMMF CODE',
          example: 'W22L1',
          formatter: (value) => String(value).trim(),
        },
        tags: {
          index: 1,
          name: 'WMF CODE',
          example: 'YS22ED',
          formatter: (value) => String(value).trim(),
        },
        scheduledAt: {
          index: 2,
          name: '发布时间',
          example: '2024/8/22 0:00',
          formatter: (value) =>
            String(value).trim() && moment(value).format('YYYY-MM-DD HH:mm'),
        },
        expirationAt: {
          index: 3,
          name: '结束时间',
          example: '2024/8/31 0:00',
          formatter: (value) =>
            String(value).trim() && moment(value).format('YYYY-MM-DD HH:mm'),
        },
        file: {
          index: 4,
          name: '文件位置',
          example: '3201000159 1873596030 炒锅铲.pdf.pdf',
          formatter: (value) => String(value).trim(),
        },
        remark: {
          index: 5,
          name: '备注',
          example: '',
          formatter: (value) => String(value).trim(),
        },
      },
      template: {
        filename: '符合性规范批量上传.xlsx',
        cols: [
          { wch: 20 },
          { wch: 20 },
          { wch: 20 },
          { wch: 20 },
          { wch: 50 },
          { wch: 30 },
        ],
      },
    });

  const handleDeleteInBatch = useCallback(
    (selectedRowKeys: string[]) => async () => {
      const message = `确定删除选中的, 共 ${selectedRowKeys.length} 个文件吗？`;
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
      await deleteManyArticles({
        variables: {
          where: {
            id_in: selectedRowKeys,
          },
        },
      });
      Toast.success(`文件批量删除成功`, 2000, {
        placement: 'bottom-left',
        progressBar: true,
      });
    },
    [],
  );

  return (
    <ContentWrapper
      header={{
        title: '符合性申明管理',
      }}
    >
      <Card className="mb-5 mb-xl-10">
        <Card.Header className="pt-8">
          <Card.Title className="flex-column">
            <Input.Search
              solid
              value={where?.name_contains}
              className="w-250px"
              placeholder="关键词搜索"
              onSearch={handleSearch}
            />
          </Card.Title>
          <Card.Toolbar>
            {/* <div className="me-4 my-1">
              <Select2
                solid
                size="sm"
                className="w-150px"
                onChange={(value) => setWhereCreatedBy(value as string)}
                matcher={(params, data) => {
                  if (!params.term || params.term === '') {
                    return data;
                  }
                  if (data.text.includes(params.term)) {
                    return data;
                  }
                  return null;
                }}
                placeholder="创建人"
                value={where?.createdBy}
                options={users.map((user) => ({
                  label: user.name!,
                  value: user.id!,
                }))}
              />
            </div> */}
            <div>
              <Button className="me-4 my-1">新建</Button>
              {excelFileInput}
              <Button className="me-4 my-1" onClick={handleImportExcel}>
                模板数据导入
              </Button>
              <Button
                variant="light"
                className="me-4 my-1"
                onClick={handleDownloadTmplate}
              >
                符合性声明模板下载
              </Button>
            </div>
          </Card.Toolbar>
        </Card.Header>
        <Card.Body>
          <BlockUI overlayClassName="bg-white bg-opacity-25" loading={loading}>
            <Table
              hover
              rowKey="id"
              rowSelection={{
                type: 'checkbox',
                renderTitle: (size) => (
                  <>
                    已选中<span className="mx-2">{size}</span>个
                  </>
                ),
                toolbar: (selectedRowKeys: string[]) => {
                  return (
                    <div>
                      <Button
                        color="danger"
                        onClick={handleDeleteInBatch(selectedRowKeys)}
                        variant={false}
                      >
                        批量删除
                      </Button>
                    </div>
                  );
                },
              }}
              noRowsRenderer={() => (
                <Empty
                  description="列表数据为空"
                  image="/assets/media/illustrations/sigma-1/5.png"
                />
              )}
              columns={[
                {
                  key: 'slug',
                  title: 'CMMF CODE',
                  width: 130,
                  sorter: true,
                  sortOrder: sorter.field === 'slug' ? sorter.order : undefined,
                },
                {
                  key: 'title',
                  title: 'WMF CODE',
                  width: 130,
                  sorter: true,
                  sortOrder:
                    sorter.field === 'title' ? sorter.order : undefined,
                },
                {
                  key: 'file',
                  title: '规范文件',
                  render(name, record) {
                    const document = record.content as DocumentContent;
                    console.log(document, record);
                    const reg = new RegExp('^storage://[^/]+/');
                    return (
                      <div>
                        {(document as any)?.rawUrl?.replace(reg, '')}
                        {document?.url?.startsWith('storage://') && (
                          <Badge color="dark">未上传</Badge>
                        )}
                      </div>
                    );
                  },
                },
                {
                  key: 'status',
                  title: '状态',
                  width: 180,
                  sorter: true,
                  sortOrder:
                    sorter.field === 'status' ? sorter.order : undefined,
                  render(value, record) {
                    switch (value) {
                      case ArticleStatus.Draft:
                        return (
                          <Badge light color="secondary">
                            草稿
                          </Badge>
                        );
                      case ArticleStatus.Published:
                        return (
                          <Badge light color="primary">
                            已发布
                          </Badge>
                        );
                      case ArticleStatus.Scheduled:
                        return (
                          <>
                            <Badge light color="info">
                              将于{' '}
                              {moment(record.scheduledAt).format(
                                'YYYY-MM-DD HH:mm',
                              )}{' '}
                              发布
                            </Badge>
                          </>
                        );
                      case ArticleStatus.Expired:
                        return <Badge color="dark">已过期</Badge>;
                      default:
                        return (
                          <span className="badge badge-light-dark">未知</span>
                        );
                    }
                  },
                },
                {
                  key: 'expirationAt',
                  title: '结束时间',
                  sorter: true,
                  sortOrder:
                    sorter.field === 'status' ? sorter.order : undefined,
                  width: 160,
                  render(value) {
                    return (
                      <div className="text-gray-700">
                        {value && moment(value).format('YYYY-MM-DD HH:mm')}
                      </div>
                    );
                  },
                },
                {
                  title: '操作',
                  key: 'action',
                  width: 120,
                  render: (_, record: any) => {
                    return <ArticleActions data={record} refetch={refetch} />;
                  },
                },
              ]}
              pagination={pageInfo}
              onChange={onChange}
              dataSource={articles}
            />
          </BlockUI>
        </Card.Body>
      </Card>
    </ContentWrapper>
  );
}

export default ConformityList;
